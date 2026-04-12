import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { 
    Search, Clock, User, ArrowUpRight, 
    Share2, Heart, BookOpen, ChevronRight,
    MessageSquare, X, Plus, Edit3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedPost, setSelectedPost] = useState(null);
    const [isWriting, setIsWriting] = useState(false);
    const [newPost, setNewPost] = useState({ title: '', excerpt: '', category: 'Fashion', content: '', image: 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' });

    const categories = ['All', 'Fashion', 'Interior', 'Graphic', 'Luxury', 'Career'];

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "Sustainable Couture: The Future of Fashion in 2026",
            excerpt: "How ethical material sourcing and zero-waste patterns are redefining the global runway standards.",
            category: "Fashion",
            author: "Dr. Elena Rossi",
            date: "Mar 15, 2026",
            readTime: "6 min",
            image: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            title: "Smart Spaces: Psychology of Color in Living Environments",
            excerpt: "Exploring how interior shades influence mental well-being and productivity in modern urban homes.",
            category: "Interior",
            author: "Ar. Rahul Mehta",
            date: "Mar 12, 2026",
            readTime: "8 min",
            image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            title: "Typography & AI: Generative Design in Branding",
            excerpt: "The intersection of algorithmic creativity and traditional type design in the age of neural networks.",
            category: "Graphic",
            author: "Liam Wright",
            date: "Mar 10, 2026",
            readTime: "4 min",
            image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            title: "Quiet Luxury: Branding Strategies for the New Era",
            excerpt: "Why subtle elegance and heritage story-telling are winning over loud branding in the luxury market.",
            category: "Luxury",
            author: "Sophia Laurent",
            date: "Mar 05, 2026",
            readTime: "7 min",
            image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 5,
            title: "Designing Your Portfolio for Global Studios",
            excerpt: "A comprehensive guide on what international creative directors look for in a junior design portfolio.",
            category: "Career",
            author: "Sanjay Malhotra",
            date: "Feb 28, 2026",
            readTime: "12 min",
            image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 6,
            title: "The Return of Hand-Drawn Illustration in Media",
            excerpt: "Analyzing the resurgence of organic, hand-crafted textures in a predominantly digital advertising space.",
            category: "Graphic",
            author: "Elena Rossi",
            date: "Feb 20, 2026",
            readTime: "5 min",
            image: "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get('/api/blogs');
                if (res.data.success && res.data.blogs.length > 0) {
                    // Combine DB posts with hardcoded aesthetics for now
                    const dbPosts = res.data.blogs.map(b => ({
                        ...b,
                        id: b._id
                    }));
                    setPosts(prev => {
                        const existingIds = new Set(prev.map(p => p.id));
                        const newPosts = dbPosts.filter(p => !existingIds.has(p.id));
                        return [...newPosts, ...prev];
                    });
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, []);

    const filteredPosts = activeCategory === 'All' 
        ? posts 
        : posts.filter(post => post.category === activeCategory);

    const handleCreatePost = async (e) => {
        e.preventDefault();
        if (!newPost.title || !newPost.excerpt || !newPost.content) return;
        
        try {
            const postObj = {
                ...newPost,
                author: "User Student",
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                readTime: Math.max(1, Math.ceil(newPost.content.length / 500)) + " min"
            };

            const res = await axios.post('/api/blogs', postObj);
            
            if (res.data.success) {
                const finalPost = { ...res.data.blog, id: res.data.blog._id };
                setPosts([finalPost, ...posts]);
                setIsWriting(false);
                setNewPost({ title: '', excerpt: '', category: 'Fashion', content: '', image: 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' });
            }
        } catch (error) {
            console.error("Error creating blog:", error);
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-slate-900 selection:text-white">
            <SEO 
                title="Design Perspectives - The INSD Official Blog"
                description="Explore the latest insights in fashion, interior design, and creative industries. Professional trends and academic perspectives from INSD."
            />

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://ik.imagekit.io/fmldynl4j4/IMG_3440.JPG" 
                        alt="INSD Campus Life" 
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px]" />
                </div>

                <div className="max-w-7xl mx-auto space-y-12 text-center relative z-10">
                    <div className="space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em] block">The Official Journal</span>
                        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                            INSD <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-white/50 to-secondary">BLOGS.</span>
                        </h1>
                    </div>

                </div>
            </section>

            {/* --- BLOG GRID --- */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {filteredPosts.map((post, idx) => (
                        <article 
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                            className="group flex flex-col h-full bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer"
                        >
                            {/* Image Wrapper */}
                            <div className="relative aspect-16/10 overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900 shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-10 flex flex-col flex-1 justify-between gap-8">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        <div className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</div>
                                        <div className="w-1 h-1 bg-slate-200 rounded-full" />
                                        <div>{post.date}</div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] uppercase text-slate-500">
                                            {post.author[0]}
                                        </div>
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{post.author}</span>
                                    </div>
                                    <button className="text-primary hover:translate-x-1 transition-transform">
                                        <ArrowUpRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-24 flex items-center justify-center">
                    <button 
                        onClick={() => setIsWriting(true)}
                        className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all duration-300 shadow-2xl hover:-translate-y-1"
                    >
                        <Edit3 size={14} /> Write Your Blog
                    </button>
                </div>
            </main>



            <Footer />

            {/* --- READ MODAL --- */}
            {selectedPost && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-12">
                    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setSelectedPost(null)} />
                    <motion.div 
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="relative w-full max-w-4xl bg-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                    >
                        <button 
                            onClick={() => setSelectedPost(null)}
                            className="absolute z-10 top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur text-slate-900 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-lg"
                        >
                            <X size={20} className="stroke-[3]" />
                        </button>
                        
                        <div className="w-full h-48 sm:h-64 md:h-80 relative shrink-0">
                            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pr-6">
                                <span className="px-4 py-1.5 bg-primary rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-4 inline-block">
                                    {selectedPost.category}
                                </span>
                                <h2 className="text-2xl md:text-5xl font-black text-white leading-tight mt-2">{selectedPost.title}</h2>
                            </div>
                        </div>

                        <div className="p-6 md:p-10 lg:p-16 overflow-y-auto bg-white flex-1 custom-scrollbar">
                            <div className="flex items-center justify-between pb-8 border-b border-slate-100 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-black text-lg text-slate-500 uppercase">
                                        {selectedPost.author[0]}
                                    </div>
                                    <div>
                                        <div className="font-black text-sm uppercase tracking-widest text-slate-900">{selectedPost.author}</div>
                                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                                            <span>{selectedPost.date}</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                            <span className="flex items-center gap-1"><Clock size={10} /> {selectedPost.readTime} read</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-primary transition-colors"><Heart size={16} /></button>
                                    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-primary transition-colors"><Share2 size={16} /></button>
                                </div>
                            </div>
                            
                            <div className="prose prose-lg prose-slate max-w-none">
                                <p className="text-xl md:text-2xl font-medium text-slate-600 leading-relaxed mb-8">
                                    {selectedPost.excerpt}
                                </p>
                                <div className="text-slate-600 leading-loose space-y-6">
                                    {selectedPost.content ? (
                                        <div dangerouslySetInnerHTML={{ __html: selectedPost.content.replace(/\n /g, '<br />') }} />
                                    ) : (
                                        <>
                                            <p>This is a placeholder for the extended blog content. In a full production environment, this would be fetched from a CMS like Sanity, Strapi, or Contentful.</p>
                                            <p>Design and creativity are at the core of everything we do. Through the exploration of form, function, and aesthetics, we reshape human experiences and interactions.</p>
                                            <h3 className="text-2xl font-black text-slate-900 mt-12 mb-4 uppercase tracking-tighter">The Vision Moving Forward</h3>
                                            <p>As we embrace the future of learning, the barriers between traditional crafts and digital innovations diminish. Our approach focuses on developing holistic and multidisciplinary capabilities.</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            , document.body)}

            {/* --- WRITE MODAL --- */}
            {isWriting && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8">
                    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setIsWriting(false)} />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-full max-w-5xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-[90vh] max-h-[800px]"
                    >
                        {/* Write Form Side */}
                        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col h-full bg-slate-50 overflow-y-auto custom-scrollbar">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Draft Article</h2>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2 hover:text-primary">Publish to INSD Network</p>
                                </div>
                                <button onClick={() => setIsWriting(false)} className="md:hidden p-2 bg-slate-200 rounded-full"><X size={16}/></button>
                            </div>
                            
                            <form onSubmit={handleCreatePost} className="flex-1 flex flex-col space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Title</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={newPost.title}
                                        onChange={e => setNewPost({...newPost, title: e.target.value})}
                                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-base font-bold focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                                        placeholder="Enter an engaging title..."
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Category</label>
                                    <select 
                                        value={newPost.category}
                                        onChange={e => setNewPost({...newPost, category: e.target.value})}
                                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none"
                                    >
                                        {categories.filter(c => c !== 'All').map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Excerpt (Short Description)</label>
                                    <textarea 
                                        required
                                        value={newPost.excerpt}
                                        onChange={e => setNewPost({...newPost, excerpt: e.target.value})}
                                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-medium focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none h-24"
                                        placeholder="A brief summary of your article..."
                                    />
                                </div>

                                <div className="space-y-2 flex-1 flex flex-col">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Full Content</label>
                                    <textarea 
                                        required
                                        value={newPost.content}
                                        onChange={e => setNewPost({...newPost, content: e.target.value})}
                                        className="w-full flex-1 min-h-[200px] bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                                        placeholder="Write your article here... Markdown-like text supported."
                                    />
                                </div>

                                <div className="pt-4 flex items-center justify-between">
                                    <button type="button" onClick={() => setIsWriting(false)} className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900">Cancel</button>
                                    <button type="submit" className="px-10 py-4 bg-primary text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all shadow-xl active:scale-95 flex items-center gap-2">
                                        <Plus size={14} /> Publish Post
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Live Preview Side */}
                        <div className="hidden md:flex flex-col w-1/2 h-full bg-white border-l border-slate-100 relative overflow-y-auto custom-scrollbar">
                            <button onClick={() => setIsWriting(false)} className="absolute top-6 right-6 z-10 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-colors"><X size={16} /></button>
                            
                            <div className="sticky top-0 bg-white/90 backdrop-blur z-0 p-6 border-b border-slate-50">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Live Preview</span>
                            </div>

                            <div className="p-10">
                                <span className="px-3 py-1 bg-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500 mb-6 inline-block">
                                    {newPost.category}
                                </span>
                                <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-6">
                                    {newPost.title || "Your Engaging Title Will Appear Here"}
                                </h1>
                                
                                <div className="flex items-center gap-3 mb-10 pb-8 border-b border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-xs uppercase">U</div>
                                    <div>
                                        <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest">User Student</div>
                                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Just now</div>
                                    </div>
                                </div>

                                <div className="prose prose-slate">
                                    <p className="text-xl font-medium text-slate-600 leading-relaxed mb-8">
                                        {newPost.excerpt || "Your thoughtful excerpt summarizing the main idea."}
                                    </p>
                                    <div className="text-slate-600 whitespace-pre-wrap">
                                        {newPost.content || "The full body of your article will be rendered beautifully right here, supporting paragraphs and structure."}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            , document.body)}
        </div>
    );
};

export default Blog;
