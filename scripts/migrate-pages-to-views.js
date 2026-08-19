import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const pagesDir = path.join(rootDir, 'src', 'pages');
const viewsDir = path.join(rootDir, 'src', 'views');

// 1. Move/Rename src/pages to src/views
if (fs.existsSync(pagesDir)) {
  if (!fs.existsSync(viewsDir)) {
    fs.mkdirSync(viewsDir, { recursive: true });
  }
  const files = fs.readdirSync(pagesDir);
  for (const file of files) {
    const oldPath = path.join(pagesDir, file);
    const newPath = path.join(viewsDir, file);
    fs.renameSync(oldPath, newPath);
  }
  fs.rmdirSync(pagesDir);
  console.log('✅ Moved src/pages to src/views');
}

// 2. Update src/app/**/page.jsx and not-found.jsx
const updateAppFiles = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      updateAppFiles(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('@/pages/')) {
        content = content.replaceAll('@/pages/', '@/views/');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`[Updated import]: ${path.relative(rootDir, fullPath)}`);
      }
    }
  }
};

const appDir = path.join(rootDir, 'src', 'app');
if (fs.existsSync(appDir)) {
  updateAppFiles(appDir);
}

// 3. Update routeOptimization.js if it exists
const routeOptPath = path.join(rootDir, 'src', 'utils', 'routeOptimization.js');
if (fs.existsSync(routeOptPath)) {
  let content = fs.readFileSync(routeOptPath, 'utf8');
  content = content.replaceAll('../pages/', '../views/');
  fs.writeFileSync(routeOptPath, content, 'utf8');
  console.log(`[Updated routeOptimization]: ${path.relative(rootDir, routeOptPath)}`);
}

console.log('✅ Migration to src/views completed!');
