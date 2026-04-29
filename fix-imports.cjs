const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
    let fixedCount = 0;

    files.forEach(file => {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        const importRegex = /import\s+\{([\s\S]*?)\}\s+from\s+['"]lucide-react['"]/g;
        
        let changed = false;
        content = content.replace(importRegex, (match, p1) => {
            const imports = p1.split(',').map(s => s.trim()).filter(s => s);
            const uniqueImports = [...new Set(imports)];
            if (imports.length !== uniqueImports.length) {
                changed = true;
            }
            return `import {\n    ${uniqueImports.join(',\n    ')}\n} from 'lucide-react'`;
        });

        if (changed) {
            fs.writeFileSync(filePath, content);
            fixedCount++;
            console.log(`Fixed ${file}`);
        }
    });

    console.log(`Fixed imports in ${fixedCount} files`);
} else {
    console.log('Directory not found: ' + dir);
}
