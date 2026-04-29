const fs = require('fs');

const files = [
    'src/pages/GraphicDesigning.jsx',
    'src/pages/JewelleryDesigning.jsx',
    'src/pages/TextileDesigning.jsx',
    'src/pages/BeautyAndMakeup.jsx',
    'src/pages/AnimationAndVFX.jsx',
    'src/pages/Photography.jsx',
    'src/pages/UIUXDesigning.jsx'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // The regex captures the span classes to preserve them
    const regex = /\{\s*items\.map\(\(item,\s*i\)\s*=>\s*\(\s*<motion\.div\s+key=\{i\}\s+initial=\{\{\s*opacity:\s*0,\s*x:\s*-10\s*\}\}\s+animate=\{\{\s*opacity:\s*1,\s*x:\s*0\s*\}\}\s+transition=\{\{\s*delay:\s*i\s*\*\s*0\.05\s*\}\}\s+className="flex items-start gap-4 group\/item"\s*>\s*<div\s+className="mt-1\.5\s+w-1\.5\s+h-1\.5\s+rounded-full\s+bg-primary\/30\s+group-hover\/item:bg-primary\s+group-hover\/item:scale-150\s+transition-all\s+shrink-0"\s*\/>\s*<span\s+className="([^"]+)"\s*>\s*\{item\}\s*<\/span>\s*<\/motion\.div>\s*\)\)\s*\}/;
    
    const match = content.match(regex);
    
    if (match) {
        const spanClass = match[1];
        
        const replaceStr = `{Array.isArray(items) ? (
                                                        items.map((item, i) => (
                                                            <motion.div 
                                                                key={i}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: i * 0.05 }}
                                                                className="flex items-start gap-4 group/item"
                                                            >
                                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary group-hover/item:scale-150 transition-all shrink-0" />
                                                                <span className="${spanClass}">
                                                                    {item}
                                                                </span>
                                                            </motion.div>
                                                        ))
                                                    ) : (
                                                        Object.entries(items).map(([subSemName, subItems], subIdx) => (
                                                            <div key={subIdx} className="mb-6 last:mb-0">
                                                                <h4 className="text-primary font-black uppercase text-sm tracking-widest mb-4">{subSemName}</h4>
                                                                <div className="space-y-3">
                                                                    {subItems.map((item, i) => (
                                                                        <motion.div 
                                                                            key={i}
                                                                            initial={{ opacity: 0, x: -10 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ delay: i * 0.05 }}
                                                                            className="flex items-start gap-4 group/item"
                                                                        >
                                                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary group-hover/item:scale-150 transition-all shrink-0" />
                                                                            <span className="${spanClass}">
                                                                                {item}
                                                                            </span>
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))
                                                    )}`;
                                                    
        content = content.replace(regex, replaceStr);
        fs.writeFileSync(file, content);
        console.log('Updated', file);
    } else {
        console.log('Target not found in', file);
    }
});
