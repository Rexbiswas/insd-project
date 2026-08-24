import fs from 'fs';

const filePath = 'src/components/Navbar.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace all <Link ... to= with <Link ... href=
const beforeCount = (content.match(/<Link\b([^>]*?)to=/g) || []).length;
console.log(`Found ${beforeCount} <Link to= in ${filePath}`);

content = content.replace(/<Link\b([^>]*?)to=/g, '<Link $1href=');

const afterCount = (content.match(/<Link\b([^>]*?)to=/g) || []).length;
console.log(`Remaining <Link to= in ${filePath}: ${afterCount}`);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated Navbar.jsx");
