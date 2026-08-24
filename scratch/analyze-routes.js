import fs from 'fs';
import path from 'path';
import { globby } from 'globby';

async function main() {
  const files = await globby(['src/**/*.{js,jsx,ts,tsx}']);
  const usages = [];
  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8');
    const regex = /import\s+([\s\S]*?)\s+from\s+['"]react-router-dom['"];?/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      usages.push({
        file: f,
        importClause: match[1].replace(/\s+/g, ' ').trim(),
      });
    }
  }
  console.log(`Found ${usages.length} usages across files:`);
  console.log(JSON.stringify(usages, null, 2));
}

main();
