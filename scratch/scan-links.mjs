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
const issues = [];

files.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    // Find all <Link occurrences
    const linkRegex = /<Link\b([^>]*?)>/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
        const props = match[1];
        if (!props.includes('href=')) {
            issues.push({ file: f, linkTag: match[0], reason: 'Missing href attribute' });
        } else if (props.includes('href={undefined}') || props.includes('href={null}')) {
            issues.push({ file: f, linkTag: match[0], reason: 'Explicit undefined/null href' });
        } else if (props.includes('to=')) {
            issues.push({ file: f, linkTag: match[0], reason: 'Still has to= instead of href=' });
        }
    }
});

console.log(`Found ${issues.length} potential Link issues:`);
console.log(JSON.stringify(issues, null, 2));
