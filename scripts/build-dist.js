import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const NEXT_APP_DIR = path.resolve('.next/server/app');
const NEXT_STATIC_DIR = path.resolve('.next/static');
const PUBLIC_DIR = path.resolve('public');

function cleanDir(dir) {
    if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
    }
    fs.mkdirSync(dir, { recursive: true });
}

function copyDirRecursive(src, dest) {
    if (!fs.existsSync(src)) return;
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDirRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

function collectHtmlFiles(dir, baseDir = dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results = results.concat(collectHtmlFiles(fullPath, baseDir));
        } else if (entry.name.endsWith('.html')) {
            const relPath = path.relative(baseDir, fullPath);
            results.push({ fullPath, relPath });
        }
    }
    return results;
}

console.log('🚀 Packaging production build into dist/ for cPanel / Hosting...');

// 1. Clean dist directory
cleanDir(DIST_DIR);

// 2. Copy public directory assets
if (fs.existsSync(PUBLIC_DIR)) {
    console.log('📦 Copying public/ assets to dist/...');
    copyDirRecursive(PUBLIC_DIR, DIST_DIR);
}

// 3. Copy .next/static to dist/_next/static
if (fs.existsSync(NEXT_STATIC_DIR)) {
    console.log('📦 Copying Next.js static assets to dist/_next/static/...');
    const destNextStatic = path.join(DIST_DIR, '_next', 'static');
    copyDirRecursive(NEXT_STATIC_DIR, destNextStatic);
}

// 4. Copy all HTML pages from .next/server/app
const htmlFiles = collectHtmlFiles(NEXT_APP_DIR);
console.log(`📄 Found ${htmlFiles.length} prerendered HTML pages.`);

htmlFiles.forEach(({ fullPath, relPath }) => {
    // Normalise name (e.g., 'aviation.html' or 'courses/fashion-designing.html')
    const destHtmlPath = path.join(DIST_DIR, relPath);
    const destDir = path.dirname(destHtmlPath);
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(fullPath, destHtmlPath);

    // Also create folder/index.html version for servers without .html extension rewrite
    const baseName = path.basename(relPath, '.html');
    if (baseName !== 'index' && baseName !== '_not-found' && baseName !== '_global-error') {
        const folderDir = path.join(destDir, baseName);
        fs.mkdirSync(folderDir, { recursive: true });
        fs.copyFileSync(fullPath, path.join(folderDir, 'index.html'));
    }
});

// If _not-found.html exists, copy to 404.html
const notFoundSrc = path.join(DIST_DIR, '_not-found.html');
if (fs.existsSync(notFoundSrc)) {
    fs.copyFileSync(notFoundSrc, path.join(DIST_DIR, '404.html'));
}

// 5. Generate production .htaccess for cPanel Apache
const htaccessContent = `# ==============================================================================
# INSD Production Apache Configuration (cPanel / Apache)
# ==============================================================================

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # 1. Force HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # 2. Redirect root/subfolder index.html to clean URL
  RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\\ /.*index\\.html\\ HTTP/
  RewriteRule ^(.*)index\\.html$ /$1 [R=301,L]

  # 3. Proxy API requests to Node.js backend (if running on port 5001)
  # Uncomment the lines below if running Node.js via cPanel setup on port 5001:
  # RewriteRule ^api/(.*)$ http://127.0.0.1:5001/api/$1 [P,L]

  # 4. Clean URLs: Match filename without .html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]

  # 5. Clean URLs: Match folder/index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^(.*)$ $1/index.html [L]

  # 6. Fallback to index.html for dynamic client routing
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /index.html [L]
</IfModule>

# Custom 404 error page
ErrorDocument 404 /404.html

# Caching for Next.js static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/x-javascript "access plus 1 month"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
</IfModule>
`;

fs.writeFileSync(path.join(DIST_DIR, '.htaccess'), htaccessContent, 'utf8');

// 6. Copy backend files to dist/backend for Node app deployment
const backendDest = path.join(DIST_DIR, 'backend');
cleanDir(backendDest);
copyDirRecursive(path.resolve('api'), backendDest);

// Copy .env to backend if present
if (fs.existsSync(path.resolve('.env'))) {
    fs.copyFileSync(path.resolve('.env'), path.join(backendDest, '.env'));
}

console.log('✅ dist/ folder is now fully packaged and ready to upload to cPanel / hosting!');
