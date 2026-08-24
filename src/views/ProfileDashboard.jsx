'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { LogOut, User, BookOpen, Calendar, MapPin, Award, Settings, Bell, ChevronRight, Camera } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ProfileDashboard = () => {
    const { user, logout } = useAuth();
    const router = useRouter();

    // Redirect to home if not logged in
    useEffect(() => {
        if (!user) {
            router.push('/');
        }
    }, [user, router]);

    if (!user) return null; // Avoid rendering until redirect

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-[#f3f3f3] text-slate-900 pt-32 pb-20 selection:bg-primary selection:text-white">
            <SEO 
                title={`${user?.firstName || 'Student'} Profile | Student Portal | INSD`}
                description="Access your academic records, course schedule, and study materials via the INSD Student Portal."
                robots="noindex, nofollow"
            />
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
                            Welcome, <span className="text-primary">{user?.firstName || user?.name}</span>
                        </h1>
                        <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Official INSD Student Portal &bull; ID: {user?._id ? user._id.slice(-8).toUpperCase() : 'AUTH-VERIFIED'}
                        </p>
                    </div>

                    <button 
                        onClick={handleLogout}
                        className="px-6 py-3 bg-white hover:bg-red-50 text-slate-700 hover:text-red-600 border border-slate-200 hover:border-red-200 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-sm flex items-center gap-2"
                    >
                        <LogOut size={16} /> Sign Out
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Left Column: Identity Card */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[2rem] p-8 shadow-md shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-28 h-28 rounded-full bg-slate-100 border-4 border-white shadow-xl flex items-center justify-center text-slate-400 mb-6 relative group overflow-hidden">
                                    <User size={54} />
                                    <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-white">
                                        <Camera size={20} />
                                    </div>
                                </div>

                                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-1">
                                    {user?.name}
                                </h2>
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                                    {user?.role || 'Verified Student'}
                                </span>

                                <div className="w-full border-t border-slate-100 pt-6 space-y-4 text-left">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Registered Email</span>
                                        <span className="text-xs font-bold text-slate-800 break-all">{user?.email}</span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Contact Phone</span>
                                        <span className="text-xs font-bold text-slate-800">{user?.phone}</span>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Home City</span>
                                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                                            <MapPin size={12} className="text-slate-400" />
                                            {user?.city || 'Not specified'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Actions */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-[2rem] p-6 shadow-md shadow-slate-200/50 border border-slate-100 flex flex-col gap-2"
                        >
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 pl-2">Settings</h3>
                            <button className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <User size={18} />
                                    </div>
                                    <span className="font-bold text-sm text-slate-700">Account Details</span>
                                </div>
                                <ChevronRight size={16} className="text-slate-400" />
                            </button>
                            <button className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Bell size={18} />
                                    </div>
                                    <span className="font-bold text-sm text-slate-700">Notifications</span>
                                </div>
                                <ChevronRight size={16} className="text-slate-400" />
                            </button>
                            <button className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Settings size={18} />
                                    </div>
                                    <span className="font-bold text-sm text-slate-700">Preferences</span>
                                </div>
                                <ChevronRight size={16} className="text-slate-400" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Academic Data & Courses */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        
                        {/* Current Course Banner */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-end min-h-[300px] shadow-2xl"
                        >
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 mix-blend-overlay pointer-events-none">
                                <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" className="w-full h-full object-cover" alt="Course Texture" />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent pointer-events-none" />
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-6 text-primary">
                                    <Award size={20} />
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">Enrolled Degree</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
                                    {user?.courseName || 'Design Program'}
                                </h2>
                                <p className="text-slate-400 max-w-xl text-sm md:text-base font-light">
                                    Your academic journey at INSD began in the {user?.admissionYear || new Date().getFullYear()} session. You are currently active and cleared for all campus facilities.
                                </p>
                            </div>
                        </motion.div>

                        {/* Study Tools / Overview Grid */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {/* Schedule Card */}
                            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                                <div className="w-14 h-14 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all group-hover:scale-110">
                                    <Calendar size={24} />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tighter mb-2 text-slate-900 border-b border-slate-100 pb-2">Academic Schedule</h3>
                                <p className="text-slate-400 text-sm font-medium h-12">View your upcoming lectures, workshops, and critiques.</p>
                                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-black text-primary mt-4">
                                    View Timetable <ChevronRight size={14} />
                                </span>
                            </div>

                            {/* Resources Card */}
                            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                                <div className="w-14 h-14 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-secondary group-hover:text-white transition-all group-hover:scale-110">
                                    <BookOpen size={24} />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tighter mb-2 text-slate-900 border-b border-slate-100 pb-2">Study Materials</h3>
                                <p className="text-slate-400 text-sm font-medium h-12">Access digital libraries, references, and project briefs.</p>
                                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-black text-secondary mt-4">
                                    Open Library <ChevronRight size={14} />
                                </span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default ProfileDashboard;
