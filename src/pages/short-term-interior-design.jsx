import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Compass, 
    ArrowRight, 
    Sparkles, 
    Globe, 
    Clock, 
    GraduationCap, 
    BookOpen, 
    ChevronDown, 
    MousePointerClick, 
    Home, 
    Layers, 
    Cpu, 
    Monitor, 
    CheckCircle2 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const ShortTermInteriorDesign = () => {
    const navigate = useNavigate();
    
    // Core short-term courses
    const courses = [
        {
            id: "residential",
            title: "Residential Interior Styling",
            duration: "8 Weeks",
            hours: "80 Hours",
            desc: "Learn to design premium residential spaces with professional furniture coordination, color mapping, material sourcing, and lighting layouts. Perfect for starting a freelance interior styling business.",
            tags: ["Space Layouts", "Color Schemes", "Material Boards", "Lighting Design"],
            tools: ["FloorPlanner", "Moodboards", "Pinterest Business"],
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
            icon: Home,
            syllabus: {
                "Weeks 1-2: Foundations of Residential Space": [
                    "Principles of residential layout & spatial hierarchy",
                    "Ergonomic standards for living, dining, and sleeping zones",
                    "Circulation flow analysis and room zoning blueprints",
                    "Creating scale drawings and technical base plans"
                ],
                "Weeks 3-4: Color Psychology & Materials": [
                    "Developing cohesive color harmonies and palettes",
                    "Material sourcing: Selecting woods, textiles, stone, and metals",
                    "Understanding textures, paint finishes, and wall coverings",
                    "Creating physical and digital material mood boards"
                ],
                "Weeks 5-6: Lighting Design & Soft Furnishings": [
                    "Ambient, task, and accent lighting layouts",
                    "Choosing light fixtures and calculating lumen requirements",
                    "Soft furnishings: Curtains, upholstery, rugs, and cushions",
                    "Aesthetic styling rules for tables, shelves, and walls"
                ],
                "Weeks 7-8: Client Pitching & Freelance Business": [
                    "Budgeting, vendor management, and estimation sheet basics",
                    "Preparing professional design proposals and concept pitches",
                    "Introduction to freelance client onboarding and contract terms",
                    "Final Project: Design and styling pitch for a multi-room residential home"
                ]
            }
        },
        {
            id: "commercial",
            title: "Commercial & Retail Space Styling",
            duration: "8 Weeks",
            hours: "80 Hours",
            desc: "Master the art of creating high-impact visual identities for retail outlets, cafes, and modern co-working hubs. Study customer flow, window displays, and spatial branding.",
            tags: ["Retail Design", "Visual Merchandising", "Cafe Styling", "Spatial Branding"],
            tools: ["SketchUp", "Photoshop", "Brand Books"],
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
            icon: Layers,
            syllabus: {
                "Weeks 1-2: Commercial Spaces & Customer Journey": [
                    "Introduction to commercial zoning and building regulations",
                    "Mapping customer journeys and pedestrian flow in retail",
                    "Zoning strategies for front-of-house vs. back-of-house operations",
                    "Ergonomics of commercial counters, desks, and product shelving"
                ],
                "Weeks 3-4: Visual Merchandising & Window Displays": [
                    "Visual merchandising theories: Focal points and product groupings",
                    "Designing high-impact window displays and storefront entries",
                    "Lighting strategies for product highlights and commercial mood setting",
                    "Props, signage, and seasonal layout rotation planning"
                ],
                "Weeks 5-6: Cafe, Restaurant & Workspace Design": [
                    "Acoustics and seating layout strategies for cafes and restaurants",
                    "Workspace planning: Collaborative zones, quiet booths, and meeting hubs",
                    "Integrating corporate identity and brand colors into physical spaces",
                    "Material specifications for high-traffic commercial environments"
                ],
                "Weeks 7-8: Professional Execution & Portfolio Build": [
                    "Preparing commercial construction sets and detailed specs",
                    "Costing, material quantity estimation, and timeline management",
                    "Collaborating with contractors and project management basics",
                    "Final Project: Conceptual styling and layout design for a boutique retail store or cafe"
                ]
            }
        },
        {
            id: "visualization",
            title: "AutoCAD & 3D Spatial Rendering",
            duration: "10 Weeks",
            hours: "100 Hours",
            desc: "Bridge manual design and digital precision. Learn architectural drafting in AutoCAD, build detailed 3D models in SketchUp, and render photorealistic scenes in V-Ray.",
            tags: ["2D Drafting", "3D Modeling", "V-Ray Rendering", "Post Production"],
            tools: ["AutoCAD", "SketchUp", "V-Ray", "Photoshop"],
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
            icon: Monitor,
            syllabus: {
                "Weeks 1-3: AutoCAD 2D Drafting Masterclass": [
                    "AutoCAD interface setup, coordinate systems, and basic drawing commands",
                    "Layers, line weights, dimensioning, and structural labeling",
                    "Drafting floor plans, electrical layouts, and interior elevations",
                    "Importing/exporting files and preparing technical layout print sheets"
                ],
                "Weeks 4-6: SketchUp 3D Modeling Techniques": [
                    "SketchUp workspace customization and drawing tools",
                    "Working with groups, components, and tags for optimal model organization",
                    "Building walls, importing CAD plans, and modeling custom furniture",
                    "Applying textures, scaling materials, and organizing scenes"
                ],
                "Weeks 7-9: Photorealistic Rendering with V-Ray": [
                    "Introduction to V-Ray settings, camera controls, and exposure",
                    "Lighting principles: Sunlight, dome light, mesh lights, and spotlights",
                    "Creating realistic materials: Glass, metal, wood, concrete, and fabrics",
                    "Render channels, denoising, and setting up high-quality final exports"
                ],
                "Week 10: Photoshop Post-Production": [
                    "Enhancing contrast, color balance, and lighting in Photoshop",
                    "Adding realistic details: Entourage (people, plants, background elements)",
                    "Assembling a professional digital design presentation layout",
                    "Final Project: High-fidelity rendered interior portfolio project"
                ]
            }
        },
        {
            id: "ai-design",
            title: "AI-Driven Spatial Design & Midjourney",
            duration: "4 Weeks",
            hours: "40 Hours",
            desc: "Harness generative artificial intelligence for rapid concept design. Master prompt engineering for spatial layouts, generate hyper-realistic mood boards, and streamline client pitches.",
            tags: ["Generative AI", "Midjourney", "LookX", "Moodboards"],
            tools: ["Midjourney", "LookX", "Stable Diffusion", "Krea AI"],
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
            icon: Cpu,
            syllabus: {
                "Week 1: Introduction to AI in Spatial Design": [
                    "Overview of AI landscape in interior design and architecture",
                    "Basic prompt structures, aspect ratios, and model parameters in Midjourney",
                    "Generating initial style inspiration and color mood boards",
                    "Upscaling and managing generated visual assets"
                ],
                "Week 2: Advanced Prompts & Material Control": [
                    "Structuring complex prompts for specific interior styles (Japandi, Art Deco, etc.)",
                    "Controlling lighting, camera angles, and rendering engines through text",
                    "Using image-to-image prompts to redesign existing room photographs",
                    "Applying materials and textures precisely with style weights"
                ],
                "Week 3: AI Rendering & Floor Plan-to-3D": [
                    "Introduction to LookX and Veras for rendering 2D blueprints directly",
                    "Inpainting and outpainting: Modifying specific objects in a generated scene",
                    "Generating custom furniture and decor assets based on design concepts",
                    "Synthesizing multiple AI outputs for design consistency"
                ],
                "Week 4: Hybrid Workflow & Portfolio Setup": [
                    "Creating a hybrid workflow: Traditional CAD/SketchUp + AI styling",
                    "Enhancing and post-processing AI renders for high-fidelity client presentations",
                    "Setting up a modern digital portfolio using AI-driven assets",
                    "Final Project: A complete concept package (blueprints, renders, style guides) created using AI"
                ]
            }
        },
        {
            id: "vastu",
            title: "Vastu Shastra for Modern Interiors",
            duration: "4 Weeks",
            hours: "40 Hours",
            desc: "Integrate ancient Vedic spatial wisdom with modern design aesthetics. Learn energy-flow calculations, directional planning, and practical solutions for modern apartments.",
            tags: ["Vedic Design", "Energy Mapping", "Remedial Vastu", "Directional planning"],
            tools: ["Vastu Compass", "Grid Overlay", "Remedial Kits"],
            image: "https://images.unsplash.com/photo-1545464693-f1798a373343?auto=format&fit=crop&q=80&w=800",
            icon: Compass,
            syllabus: {
                "Week 1: Core Vastu & the Five Elements": [
                    "History and philosophy of Vastu Shastra and the Vastu Purusha Mandala",
                    "The Pancha Bhootas (Five Elements) and their corresponding directions",
                    "Calculating energies using the Vastu Compass and layout zoning",
                    "Mapping directional alignments on 2D floor plans"
                ],
                "Week 2: Room Orientations & Kitchen Planning": [
                    "Determining ideal locations for master bedrooms, children's rooms, and guest zones",
                    "Kitchen Vastu: Fire element positioning and layout planning",
                    "Living room, dining zone, and entryway rules for optimal energy flow",
                    "Placement of water elements, plants, and mirrors"
                ],
                "Week 3: Colors, Textures & Decor Vastu": [
                    "Selecting colors for different rooms based on directional ruling planets",
                    "Selecting textures and materials (wood, stone, metal) according to Vastu zones",
                    "Art, paintings, and sculpture placement rules",
                    "Lighting principles and window placement according to solar energy paths"
                ],
                "Week 4: Remedial Vastu for Modern Apartments": [
                    "Identifying common Vastu defects in pre-built apartments and offices",
                    "Practical non-demolition remedies (crystals, metal strips, color corrections)",
                    "Commercial Vastu: Positioning director desks, staff zones, and cash counters",
                    "Final Project: Vastu consultation and layout optimization proposal for an existing apartment"
                ]
            }
        }
    ];

    const [selectedCourse, setSelectedCourse] = useState(courses[0]);
    const [expandedSyllabus, setExpandedSyllabus] = useState(0);

    return (
        <div className="bg-slate-50 min-h-screen font-sans selection:bg-[#c5a044] selection:text-white text-slate-800">
            <SEO 
                title="Short Term Interior Design Courses in Delhi - INSD"
                description="Fast-track your design career. Choose from intensive 4 to 10-week specialized modules in Residential Styling, CAD drafting, Vastu Shastra, or AI-Driven Spatial Design."
            />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[85vh] flex flex-col justify-end pt-32 pb-20 px-6 overflow-hidden bg-white">
                <div className="absolute inset-0 pointer-events-none z-0">
                    {/* Warm ambient gold & red glows (subtle light mode) */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#c5a044]/5 to-transparent blur-[120px] rounded-full" />
                    <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-b from-[#db3436]/3 to-transparent blur-[100px] rounded-full" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                    <div className="absolute inset-0 cyber-grid opacity-[0.03]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="flex-1">
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-[#c5a044]/10 border border-[#c5a044]/30 text-[#c5a044] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs mb-8"
                        >
                            <Sparkles size={14} /> Intensive Skill Modules
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-[7.5rem] font-black uppercase tracking-tighter leading-[0.85] text-slate-900"
                        >
                            Spatial <br/>
                            <span className="stroke-text-slate-900">Accelerated.</span>
                        </motion.h1>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-md text-left md:text-right"
                    >
                        <p className="text-slate-600 text-base md:text-lg font-semibold leading-relaxed mb-8 uppercase tracking-wide">
                            Master industry-specific spatial design modules, professional 3D tools, or sacred space planning. 
                            Zero fluff. Pure portfolio-oriented expertise in 4 to 10 weeks.
                        </p>
                        <div className="flex justify-start md:justify-end gap-4">
                            <button
                                disabled
                                className="px-8 py-4 bg-slate-50 border border-slate-200/80 text-slate-500 rounded-full font-black uppercase text-xs tracking-widest flex items-center gap-2 cursor-not-allowed shadow-inner"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a044] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a044]"></span>
                                </span>
                                Coming Soon
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- QUICK FACTS STRIP --- */}
            <section className="border-y border-slate-100 bg-white py-8">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "Duration", value: "4 to 10 Weeks", icon: Clock },
                        { label: "Credentials", value: "INSD Professional Certification", icon: GraduationCap },
                        { label: "Structure", value: "Hybrid / 100% Practical", icon: BookOpen }
                    ].map((fact, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#c5a044]">
                                <fact.icon size={22} />
                            </div>
                            <div>
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-wider">{fact.label}</p>
                                <p className="text-slate-800 text-sm font-black uppercase tracking-tight">{fact.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- COURSE SELECTION & GRID --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
                        Choose Your <span className="text-[#c5a044]">Sprint</span> Module
                    </h2>
                    <p className="text-slate-500 max-w-xl text-sm font-semibold uppercase tracking-wide">
                        Click on any course below to explore its design overview, software toolkit, and weekly syllabus modules.
                    </p>
                </div>

                {/* Horizontal Selection Cards (Light style bento selector) */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
                    {courses.map((c) => {
                        const Icon = c.icon;
                        const isSelected = selectedCourse.id === c.id;
                        return (
                            <button
                                key={c.id}
                                onClick={() => {
                                    setSelectedCourse(c);
                                    setExpandedSyllabus(0);
                                }}
                                className={`p-6 rounded-2xl border text-left flex flex-col justify-between h-48 transition-all relative overflow-hidden group ${
                                    isSelected 
                                    ? 'bg-[#c5a044]/5 border-[#c5a044] shadow-md shadow-slate-200/50' 
                                    : 'bg-white border-slate-150 hover:border-slate-350'
                                }`}
                            >
                                <div className="flex justify-between items-start w-full">
                                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-[#c5a044] text-white' : 'bg-slate-50 text-slate-400 group-hover:text-slate-600'} transition-colors`}>
                                        <Icon size={20} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#c5a044]">
                                        {c.duration}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-black uppercase text-slate-800 tracking-tight leading-snug mb-1">
                                        {c.title}
                                    </h3>
                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                                        {c.hours}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Featured Course Detail Layout */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCourse.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-slate-100 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-slate-100/60"
                    >
                        {/* Detail Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a044]/3 blur-[80px] rounded-full pointer-events-none" />

                        {/* Left: Summary and Information */}
                        <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                        Intensive Module
                                    </span>
                                    <span className="text-[#c5a044] text-[10px] font-black uppercase tracking-widest">
                                        {selectedCourse.duration} • {selectedCourse.hours}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                                    {selectedCourse.title}
                                </h3>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-semibold">
                                    {selectedCourse.desc}
                                </p>

                                <div className="space-y-4 pt-4">
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Key Skills Acquired</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedCourse.tags.map((t, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-slate-50 border border-slate-100 text-slate-600 rounded-sm text-[10px] font-bold uppercase tracking-wider">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Software & Tools</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedCourse.tools.map((tool, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-[#c5a044]/10 border border-[#c5a044]/10 text-[#c5a044] rounded-sm text-[10px] font-bold uppercase tracking-wider">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <button
                                    disabled
                                    className="px-10 py-5 bg-slate-50 border border-slate-200/80 text-slate-500 rounded-full font-black uppercase text-xs tracking-widest flex items-center gap-2 cursor-not-allowed shadow-inner"
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a044] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a044]"></span>
                                    </span>
                                    Coming Soon
                                </button>
                            </div>
                        </div>

                        {/* Right: Interactive Weekly Accordion */}
                        <div className="lg:col-span-6 space-y-4">
                            <h4 className="text-[11px] font-black uppercase tracking-widest text-[#c5a044] mb-4 flex items-center gap-2">
                                <BookOpen size={14} /> Weekly Syllabus Structure
                            </h4>
                            <div className="space-y-3">
                                {Object.entries(selectedCourse.syllabus).map(([weekTitle, items], index) => {
                                    const isExpanded = expandedSyllabus === index;
                                    return (
                                        <div 
                                            key={weekTitle}
                                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                                                isExpanded 
                                                ? 'bg-slate-50 border-slate-200' 
                                                : 'bg-white border-slate-100 hover:border-slate-200'
                                            }`}
                                        >
                                            <button
                                                onClick={() => setExpandedSyllabus(isExpanded ? -1 : index)}
                                                className="w-full flex items-center justify-between p-5 text-left"
                                            >
                                                <span className="text-xs font-black uppercase tracking-tight text-slate-800">
                                                    {weekTitle}
                                                </span>
                                                <ChevronDown 
                                                    size={16} 
                                                    className={`text-[#c5a044] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                                                />
                                            </button>
                                            
                                            <AnimatePresence initial={false}>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-3">
                                                            {items.map((item, i) => (
                                                                <div key={i} className="flex items-start gap-3">
                                                                    <CheckCircle2 size={12} className="text-[#c5a044] mt-0.5 shrink-0" />
                                                                    <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide leading-relaxed">
                                                                        {item}
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* --- WHO IS THIS FOR --- */}
            <section className="py-24 px-6 bg-white border-y border-slate-100 relative">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-[#db3436]/2 to-transparent blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
                            Designed For <span className="text-[#c5a044]">Spatial</span> Innovators
                        </h2>
                        <p className="text-slate-500 max-w-lg mx-auto text-sm font-semibold uppercase tracking-wide">
                            Our fast-track curriculum is engineered to serve diverse career goals and skill backgrounds.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Career Switchers",
                                desc: "Fast-track your transition into the styling industry. Gain ready-to-use spatial design skills and build a portfolio to land contracts immediately.",
                                badge: "Zero to Hero"
                            },
                            {
                                title: "Architecture Students",
                                desc: "Fill the practical software gaps in your academic course. Master complex rendering in V-Ray or leverage modern generative AI for conceptualizing models.",
                                badge: "Toolkit Upgrade"
                            },
                            {
                                title: "Design Hobbyists",
                                desc: "Turn your innate passion for decor into structured layouts. Learn the physics of lighting, Vastu planning, and color mapping like a professional.",
                                badge: "Aesthetic Core"
                            },
                            {
                                title: "Design Entrepreneurs",
                                desc: "Expand your service line. Integrate professional styling, modular layouts, or high-ticket Vastu consultations into your styling business.",
                                badge: "Revenue Catalyst"
                            }
                        ].map((target, idx) => (
                            <div 
                                key={idx}
                                className="p-8 rounded-3xl bg-slate-50/50 border border-slate-100 hover:border-[#c5a044]/30 hover:bg-white transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-slate-100/50"
                            >
                                <div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-[#c5a044] bg-[#c5a044]/10 border border-[#c5a044]/20 px-2.5 py-1 rounded-full mb-6 inline-block">
                                        {target.badge}
                                    </span>
                                    <h3 className="text-lg font-black uppercase text-slate-800 tracking-tight leading-snug mb-4 group-hover:text-[#c5a044] transition-colors">
                                        {target.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs font-semibold leading-relaxed uppercase tracking-wide">
                                        {target.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- DYNAMIC WHY CHOOSE / EXPOSURE SECTION --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                            The INSD <br /> <span className="text-[#c5a044]">Edge</span>
                        </h2>
                        <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed uppercase tracking-wide">
                            Short-term doesn't mean compromising on depth. Our courses are integrated with live portfolio reviews, vendor site visits, and industry standard critiques.
                        </p>
                        
                        <div className="space-y-4 pt-4">
                            {[
                                { title: "100% Practical Studios", desc: "No dry theory. Every week you work on floor plans, digital modeling, or material board setups." },
                                { title: "Industry-Connected Mentors", desc: "Learn directly from practicing spatial stylists, Vastu consultants, and CAD modelers." },
                                { title: "Professional Portfolios", desc: "Graduate with high-quality visual renders and client sheets that demonstrate your job-readiness." }
                            ].map((edge, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="w-0.5 h-12 bg-slate-200 group-hover:bg-[#c5a044] transition-colors" />
                                    <div>
                                        <h4 className="font-black uppercase text-xs tracking-widest text-[#c5a044] mb-1">{edge.title}</h4>
                                        <p className="text-slate-500 text-[10px] md:text-xs font-semibold uppercase tracking-tight max-w-sm">{edge.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                        <div className="rounded-2xl overflow-hidden h-72 border border-slate-100 relative group">
                            <img 
                                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800" 
                                alt="Drafting Studio" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent flex items-end p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-slate-100 shadow-sm">Material Laboratories</span>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden h-72 border border-slate-100 relative group">
                            <img 
                                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800" 
                                alt="Digital Lab" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent flex items-end p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-slate-100 shadow-sm">AI & 3D Modeling Labs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PREMIUM CTA SECTION --- */}
            <section className="bg-gradient-to-br from-[#c5a044]/10 via-[#db3436]/2 to-slate-50 text-slate-900 py-32 px-6 border-t border-slate-100 select-none relative overflow-hidden">
                {/* Floating graphic lines */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.01] cyber-grid" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a044]/5 blur-[150px] rounded-full" />
                
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
                    <MousePointerClick size={48} className="mx-auto text-[#c5a044] animate-bounce" />
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900">
                        Accelerate Your <br /> Spatial Portfolio.
                    </h2>
                    <p className="text-base md:text-lg font-bold uppercase tracking-wider text-slate-600 max-w-lg mx-auto leading-relaxed">
                        Class size is capped at 15 seats per module for personalized technical training. Enrollment is open for 2026.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                        <button 
                            disabled
                            className="bg-slate-50 border border-slate-200/80 text-slate-500 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 cursor-not-allowed shadow-inner w-full sm:w-auto"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a044] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a044]"></span>
                            </span>
                            Coming Soon
                        </button>
                        <button 
                            onClick={() => navigate('/contact-us')}
                            className="border border-slate-200 hover:border-slate-400 text-slate-800 px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all w-full sm:w-auto"
                        >
                            Speak with an Advisor
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ShortTermInteriorDesign;
