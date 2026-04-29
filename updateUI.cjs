const fs = require('fs');

const targetStr = `                                                    {items.map((item, i) => (
                                                        <motion.div 
                                                            key={i}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: i * 0.05 }}
                                                            className="flex items-start gap-4 group/item"
                                                        >
                                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary group-hover/item:scale-150 transition-all shrink-0" />
                                                            <span className="text-slate-600 font-bold text-sm uppercase tracking-tight group-hover/item:text-slate-900 transition-colors">
                                                                {item}
                                                            </span>
                                                        </motion.div>
                                                    ))}`;

const replaceStr = `                                                    {Array.isArray(items) ? (
                                                        items.map((item, i) => (
                                                            <motion.div 
                                                                key={i}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: i * 0.05 }}
                                                                className="flex items-start gap-4 group/item"
                                                            >
                                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary group-hover/item:scale-150 transition-all shrink-0" />
                                                                <span className="text-slate-600 font-bold text-sm uppercase tracking-tight group-hover/item:text-slate-900 transition-colors">
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
                                                                            <span className="text-slate-600 font-bold text-sm uppercase tracking-tight group-hover/item:text-slate-900 transition-colors">
                                                                                {item}
                                                                            </span>
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))
                                                    )}`;

const files = [
    'src/pages/FashionDesigning.jsx',
    'src/pages/InteriorDesigning.jsx',
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
    if (content.includes(targetStr)) {
        content = content.replace(targetStr, replaceStr);
        fs.writeFileSync(file, content);
        console.log('Updated', file);
    } else {
        console.log('Target not found in', file);
    }
});
