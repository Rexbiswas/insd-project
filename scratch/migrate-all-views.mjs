import fs from 'fs';
import path from 'path';

const viewsDir = 'src/views';
const files = fs.readdirSync(viewsDir).filter(f => /\.(jsx?|tsx?)$/.test(f));

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(viewsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    if (!content.includes('react-router-dom')) {
        return;
    }

    console.log(`Processing: ${file}`);

    // Check what was imported from react-router-dom
    const rrdImportMatch = content.match(/import\s*\{([^}]+)\}\s*from\s*['"]react-router-dom['"];?/);
    if (!rrdImportMatch) {
        console.log(`  No named import match for ${file}`);
        return;
    }

    const importedNames = rrdImportMatch[1].split(',').map(s => s.trim());
    const hasNavigate = importedNames.includes('useNavigate');
    const hasLink = importedNames.includes('Link');
    const hasParams = importedNames.includes('useParams');
    const hasLocation = importedNames.includes('useLocation');

    // Build new next imports
    const nextNavImports = [];
    if (hasNavigate) nextNavImports.push('useRouter');
    if (hasParams) nextNavImports.push('useParams');
    if (hasLocation) {
        nextNavImports.push('usePathname');
        nextNavImports.push('useSearchParams');
    }

    let replacementImports = '';
    if (hasLink) {
        replacementImports += `import Link from 'next/link';\n`;
    }
    if (nextNavImports.length > 0) {
        replacementImports += `import { ${nextNavImports.join(', ')} } from 'next/navigation';\n`;
    }

    // Replace the import statement
    content = content.replace(/import\s*\{[^}]+\}\s*from\s*['"]react-router-dom['"];?\n?/, replacementImports);

    // Replace navigate calls and hooks if navigate was used
    if (hasNavigate) {
        content = content.replace(/const\s+navigate\s*=\s*useNavigate\(\);?/g, 'const router = useRouter();');
        content = content.replace(/navigate\(-1\)/g, 'router.back()');
        content = content.replace(/navigate\(([^)]+)\)/g, 'router.push($1)');
    }

    // Replace Link props if Link was used
    if (hasLink) {
        content = content.replace(/<Link\s+([^>]*?)to=/g, '<Link $1href=');
    }

    // Replace location if location was used
    if (hasLocation) {
        content = content.replace(/const\s+location\s*=\s*useLocation\(\);?/g, 'const pathname = usePathname();\n    const searchParams = useSearchParams();');
        content = content.replace(/location\.pathname/g, 'pathname');
    }

    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`  Successfully updated ${file}`);
});

console.log(`\nCompleted migration for ${updatedCount} view files.`);
