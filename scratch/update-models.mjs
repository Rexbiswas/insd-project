import fs from 'fs';
import path from 'path';

const modelsDir = 'api/_models';
const files = fs.readdirSync(modelsDir);

files.forEach(f => {
    if (f.endsWith('.js')) {
        const fullPath = path.join(modelsDir, f);
        let content = fs.readFileSync(fullPath, 'utf8');
        const match = content.match(/export default mongoose\.model\('([^']+)',\s*([a-zA-Z0-9_]+)\);/);
        if (match) {
            const [fullMatch, modelName, schemaName] = match;
            const replacement = `export default mongoose.models.${modelName} || mongoose.model('${modelName}', ${schemaName});`;
            content = content.replace(fullMatch, replacement);
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`Updated model cache for ${f}: ${modelName}`);
        }
    }
});
