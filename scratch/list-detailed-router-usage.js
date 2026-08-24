const fs = require('fs');
const path = require('path');

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
const details = [];

files.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    if (content.includes('react-router-dom')) {
        const lines = content.split('\n');
        const routerImports = lines.filter(l => l.includes('react-router-dom'));
        const hasUseNavigate = content.includes('useNavigate');
        const hasUseLocation = content.includes('useLocation');
        const hasUseParams = content.includes('useParams');
        const hasLink = content.includes('Link');
        const hasNavLink = content.includes('NavLink');
        details.push({
            file: f.replace(/\\/g, '/'),
            routerImports,
            hasUseNavigate,
            hasUseLocation,
            hasUseParams,
            hasLink,
            hasNavLink
        });
    }
});

console.log(JSON.stringify(details, null, 2));
