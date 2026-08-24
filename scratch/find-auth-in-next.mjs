import fs from 'fs';
import path from 'path';

function searchInDir(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            searchInDir(fullPath);
        } else if (file.endsWith('.js')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('.auth') || content.includes('auth:')) {
                // Find context around auth
                const regex = /.{0,60}auth.{0,60}/g;
                let match;
                const matches = [];
                while ((match = regex.exec(content)) !== null && matches.length < 5) {
                    matches.push(match[0]);
                }
                if (matches.length > 0) {
                    console.log(`\nFile: ${fullPath}`);
                    matches.forEach(m => console.log(`  Snippet: ${m.replace(/\n/g, ' ')}`));
                }
            }
        }
    });
}

if (fs.existsSync('.next/server')) {
    searchInDir('.next/server');
}
