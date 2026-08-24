import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.next') {
                results = results.concat(walk(fullPath));
            }
        } else if (/\.(jsx?|tsx?)$/.test(file)) {
            results.push(fullPath);
        }
    });
    return results;
}

const files = walk('src');
const summary = [];

files.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    if (content.includes('react-router-dom')) {
        const lines = content.split('\n');
        const routerImports = lines.filter(l => l.includes('react-router-dom'));
        const navMatches = content.match(/navigate\([^)]*\)/g) || [];
        const toMatches = content.match(/<Link[^>]*to=/g) || [];
        summary.push({
            file: f.replace(/\\/g, '/'),
            imports: routerImports,
            navCalls: navMatches,
            toLinks: toMatches.length
        });
    }
});

console.log(`Found ${summary.length} files still importing react-router-dom:`);
summary.forEach(s => {
    console.log(`- ${s.file}`);
    console.log(`  Imports: ${s.imports.join(' | ')}`);
    if (s.navCalls.length) console.log(`  Navigate calls: ${s.navCalls.join(', ')}`);
    if (s.toLinks) console.log(`  Link to= count: ${s.toLinks}`);
});
