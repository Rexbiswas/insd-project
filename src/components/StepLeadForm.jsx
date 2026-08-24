'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, MapPin, ArrowRight, ArrowLeft, Sparkles, MessageSquare, X } from 'lucide-react';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const StepLeadForm = ({ isModal = false, initialChoice = null, title = null, subtitle = null, showClose = true }) => {
    const router = useRouter();
    const { closeAdmissionModal } = useAdmissionModal();
    const sectionRef = useRef(null);
    const [choice, setChoice] = useState(initialChoice);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        state: '',
        city: '',
        marketingConsent: false
    });
    const [submitted, setSubmitted] = useState(false);
    const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const stateCityData = {
        "Andhra Pradesh": ["Vishakhapattnam", "Anantapur", "Guntur", "Kadappa", "Kakinada", "Kurnool", "Nellor", "Rajamundari", "Tirupati", "Vizianagram", "Eluru", "Machhlipattnam", "Nandayal", "Ongole"],
        "Assam": ["Guwahati", "Dibrugarh", "Jorhat", "Nagaon", "Silchar"],
        "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Bihar Sharif", "Arrah", "Begusarai", "Katihar", "Munger", "Chhapra", "Danapur", "Saharsa", "Sasaram", "Hajipur", "Dehri", "Siwan", "Motihari", "Nawada", "Bagaha", "Buxar", "Kishanganj", "Sitamarhi", "Jamalpur", "Jehanabad", "Aurangabad"],
        "Chandigarh": ["Chandigarh"],
        "Chhattisgarh": ["Bhilai", "Raipur", "Bilaspur", "Korba", "Rajnandgaon", "Raigarh", "Jagdalpur", "Ambikapur", "Dhamtari", "Mahasamund"],
        "Delhi": ["Head Campus", "Dwarka"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Gandhidham", "Anand", "Navsari", "Morbi", "Nadiad", "Surendranagar", "Bharuch", "Mehsana", "Bhuj", "Porbandar", "Palanpur", "Valsad", "Vapi", "Gondal", "Veraval", "Godhra", "Patan", "Kalol", "Dahod", "Botad", "Amreli", "Deesa", "Jetpur"],
        "Haryana": ["Hisar", "Faridabad", "Gurgaon", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Karnal", "Sonipat", "Panchkula", "Bhiwani", "Sirsa", "Bahadurgarh", "Jind", "Thanesar", "Kaithal", "Rewari", "Palwal"],
        "Himachal Pradesh": ["Shimla", "Dharamshala", "Solan", "Mandi", "Palampur", "Baddi", "Nahan", "Paonta Sahib", "Sundarnagar", "Chamba"],
        "Jammu and Kashmir": ["Jammu", "Srinagar", "Anantnag"],
        "Jharkhand": ["Dhanbad", "Ranchi", "Jamshedpur", "Bokaro", "Deoghar", "Phusro", "Hazaribagh", "Giridih", "Ramgarh", "Medininagar", "Chirkunda"],
        "Karnataka": ["Bangalore JP Nagar", "Kalaburagi", "Mysore", "Bangalore Whitefield", "Shivamogga", "Davanagere", "Bangalore", "Hubli-Dharwad", "Mangalore", "Belgaum", "Gulbarga", "Bellary", "Bijapur", "Shimoga", "Tumkur", "Bidar", "Hospet", "Hassan", "Gadag", "Udupi", "Robertsonpet", "Bhadravati", "Chitradurga", "Kolar", "Mandya", "Chikmagalur", "Gangavati", "Bagalkot", "Ranebennuru"],
        "Kerala": ["Kochin", "Thrissur", "Trivandrum", "Kozhikode", "Kollam", "Palakkad", "Alappuzha", "Malappuram", "Kannur", "Kottayam", "Kasaragod"],
        "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam", "Rewa", "Murwara", "Singrauli", "Burhanpur", "Khandwa", "Bhind", "Chhindwara", "Guna", "Shivpuri", "Vidisha", "Chhatarpur", "Damoh", "Mandsaur", "Khargone", "Neemuch", "Pithampur", "Hoshangabad", "Itarsi", "Sehore", "Morena", "Betul"],
        "Maharashtra": ["Amravati", "Mumbai Andheri", "Pune Baner", "Mumbai Ghtakopar", "Pune Hadapsar", "Mumbai Kandivali", "Nanded", "Pune PCMC", "Pune Deccan", "Pune Kothrud", "Navi Mumbai Sanpada", "Mumbai Thane", "Navi Mumbai Vasai", "Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Kalyan-Dombivali", "Vasai-Virar", "Aurangabad", "Navi Mumbai", "Solapur", "Mira-Bhayandar", "Bhiwandi", "Kolhapur", "Ulhasnagar", "Sangli-Miraj & Kupwad", "Malegaon", "Jalgaon", "Akola", "Latur", "Dhule", "Ahmednagar", "Chandrapur", "Parbhani", "Ichalkaranji", "Jalna", "Ambarnath", "Bhusawal", "Panvel", "Badlapur", "Beed", "Gondia", "Satara", "Barshi", "Yavatmal", "Achalpur", "Osmanabad", "Nandurbar", "Wardha", "Udgir", "Hinganghat"],
        "Manipur": ["Imphal"],
        "Meghalaya": ["Shillong"],
        "Mizoram": ["Aizawl"],
        "Nagaland": ["Dimapur", "Kohima"],
        "Odisha": ["Bhubaneshvar", "Cuttack", "Rourkela", "Brahmapur", "Sambalpur", "Puri", "Balasore", "Bhadrak", "Baripada", "Jharsuguda"],
        "Puducherry": ["Pondicherry", "Ozhukarai"],
        "Punjab": ["Mohali", "New Amritsar", "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Hoshiarpur", "Batala", "Pathankot", "Moga", "Abohar", "Malerkotla", "Khanna", "Muktsar", "Barnala", "Firozpur", "Kapurthala", "Phagwara"],
        "Rajasthan": ["Jaipur", "Udaipur", "Kota", "Jodhpur", "Bikaner", "Ajmer", "Bhilwara", "Alwar", "Bharatpur", "Sikar", "Pali", "Sri Ganganagar", "Kishangarh", "Baran", "Dhaulpur", "Tonk", "Beawar", "Hanumangarh"],
        "Sikkim": ["Gangtok"],
        "Tamil Nadu": ["Coimbatore", "Salem", "Chennai", "Madurai", "Tiruchirappalli", "Tiruppur", "Erode", "Tirunelveli", "Vellore", "Thoothukkudi", "Dindigul", "Thanjavur", "Ranipet", "Sivakasi", "Karur", "Udhagamandalam", "Hosur", "Nagercoil", "Kanchipuram", "Kumarapalayam", "Karaikkudi", "Neyveli", "Cuddalore", "Kumbakonam", "Tiruvannamalai", "Pollachi", "Rajapalayam", "Gudiyatham", "Pudukkottai"],
        "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Ramagundam", "Mahbubnagar", "Nalgonda", "Adilabad", "Suryapet"],
        "Tripura": ["Agartala"],
        "Uttar Pradesh": ["Bareilly", "Prayagraj", "Lucknow", "Kanpur", "Ghaziabad", "Agra", "Meerut", "Varanasi", "Aligarh", "Moradabad", "Saharanpur", "Gorakhpur", "Noida", "Firozabad", "Jhansi", "Muzaffarnagar", "Mathura", "Budaun", "Rampur", "Shahjahanpur", "Farrukhabad", "Ayodhya", "Mau", "Hapur", "Etawah", "Mirzapur", "Bulandshahr", "Sambhal", "Amroha", "Hardoi", "Fatehpur", "Raebareli", "Orai", "Sitapur", "Bahraich", "Modinagar", "Unnao", "Jaunpur", "Lakhimpur", "Hathras", "Banda", "Pilibhit", "Barabanki", "Khurja", "Gonda", "Mainpuri", "Lalitpur", "Etah", "Deoria", "Ghazipur", "Sultanpur", "Azamgarh", "Bijnor", "Sahaswan", "Basti", "Chandausi", "Akbarpur", "Ballia", "Mubarakpur", "Greater Noida", "Shikohabad"],
        "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur", "Rishikesh"],
        "West Bengal": ["Kolkata", "Siliguri", "Asansol", "Siliguri", "Durgapur", "Bardhaman", "Malda", "Baharampur", "Habra", "Kharagpur", "Shantipur", "Dankuni", "Dhulian", "Ranaghat", "Haldia", "Raiganj", "Krishnanagar", "Nabadwip", "Midnapore", "Jalpaiguri", "Balurghat", "Basirhat", "Bankura", "Chakdaha", "Darjeeling", "Alipurduar", "Purulia", "Jangipur", "Bangaon", "Cooch Behar"]
    };

    const disciplines = [
        { id: 'fashion', title: 'Fashion Design', icon: '👗', desc: 'Couture, styling & apparel trends' },
        { id: 'interior', title: 'Interior Design', icon: '🏛️', desc: 'Spatial concepts & modern architecture' },
        { id: 'graphic', title: 'Graphic & UI/UX', icon: '🎨', desc: 'Brand systems & interactive media' },
        { id: 'animation', title: 'Animation & VFX', icon: '⚡', desc: '3D modeling, CGI & game assets' }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!formData.name || !formData.mobile || !formData.email || !formData.state || !formData.city) {
            setError("All fields marked * are required.");
            return;
        }

        if (formData.mobile.length !== 10) {
            setError("Please enter a valid 10-digit mobile number.");
            return;
        }

        if (!formData.marketingConsent) {
            setError("Please accept the terms to proceed.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/step-leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: `+91${formData.mobile}`,
                    email: formData.email,
                    state: formData.state,
                    city: formData.city,
                    industry: choice?.title || 'General Design Inquiry',
                    marketingConsent: formData.marketingConsent
                }),
            });

            const contentType = response.headers.get("content-type");
            let data = {};
            if (contentType && contentType.includes("application/json")) {
                data = await response.json();
            } else {
                const text = await response.text();
                console.error("Non-JSON response received:", text);
                throw new Error(`Server returned non-JSON response (${response.status})`);
            }

            if (response.ok) {
                setSubmitted(true);
            } else {
                setError(data.message || `Submission failed (${response.status}). Please try again.`);
            }
        } catch (err) {
            console.error('Submission Error:', err);
            if (err.name === 'TypeError' && err.message.includes('fetch')) {
                setError("Connection Error: Server is unreachable. Please check your internet connection.");
            } else {
                setError(err.message || 'Something went wrong. Please check your connection and try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const content = (
        <div className={`relative ${isModal ? 'p-6 md:p-12' : 'py-20 px-6 max-w-7xl mx-auto'}`}>
            <div className="relative z-10 w-full">
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        {!choice && !submitted && (
                            <motion.div
                                key="step-1"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-white p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden"
                            >
                                {isModal && showClose && (
                                    <button
                                        onClick={() => closeAdmissionModal()}
                                        className="absolute top-6 right-6 md:top-10 md:right-10 p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all border border-slate-100 group z-50"
                                    >
                                        <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                                    </button>
                                )}

                                <div className="text-center space-y-4 mb-12">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Admission 2026</span>
                                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-950">
                                        {title || "Select Your Focus"}
                                    </h2>
                                    <p className="text-slate-500 max-w-md mx-auto text-sm md:text-base font-medium">
                                        {subtitle || "Choose your area of interest to get a personalized prospectus & curriculum overview."}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {disciplines.map((d) => (
                                        <button
                                            key={d.id}
                                            onClick={() => setChoice(d)}
                                            className="p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex items-start gap-4 group cursor-pointer"
                                        >
                                            <span className="text-3xl p-3 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">{d.icon}</span>
                                            <div>
                                                <h4 className="font-black text-slate-950 text-base uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">{d.title}</h4>
                                                <p className="text-xs text-slate-500 font-medium leading-relaxed">{d.desc}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {choice && !submitted && (
                            <motion.div
                                key="step-2"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-white p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden"
                            >
                                {isModal && showClose && (
                                    <button
                                        onClick={() => closeAdmissionModal()}
                                        className="absolute top-6 right-6 md:top-10 md:right-10 p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all border border-slate-100 group z-50"
                                    >
                                        <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                                    </button>
                                )}

                                <div className="max-w-xl mx-auto">
                                    <div className="flex items-center gap-4 mb-8">
                                        <button
                                            type="button"
                                            onClick={() => { setChoice(null); }}
                                            className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all"
                                        >
                                            <ArrowLeft size={20} />
                                        </button>
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Selected Stream</span>
                                            <h3 className="text-xl md:text-2xl font-black uppercase text-slate-950">{choice.title}</h3>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="bg-white rounded-3xl relative">
                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                <div className="relative group/field">
                                                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 ml-1 mb-1 block">Full Name *</label>
                                                    <div className="relative flex items-center">
                                                        <User className="absolute left-4 text-slate-400" size={18} />
                                                        <input
                                                            type="text"
                                                            required
                                                            placeholder="Your Full Name"
                                                            value={formData.name}
                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                            className="w-full h-12 md:h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all text-xs md:text-sm"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="relative group/field">
                                                        <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 ml-1 mb-1 block">Mobile Number *</label>
                                                        <div className="relative flex items-center">
                                                            <div className="absolute left-4 flex items-center gap-1 border-r border-slate-300 pr-2">
                                                                <span className="text-slate-500 font-bold text-xs">+91</span>
                                                            </div>
                                                            <input
                                                                type="tel"
                                                                required
                                                                inputMode="numeric"
                                                                placeholder="10-digit number"
                                                                value={formData.mobile}
                                                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                                                                className="w-full h-12 md:h-14 pl-18 pr-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all text-xs md:text-sm"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="relative group/field">
                                                        <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 ml-1 mb-1 block">Email Address *</label>
                                                        <div className="relative flex items-center">
                                                            <Mail className="absolute left-4 text-slate-400" size={18} />
                                                            <input
                                                                type="email"
                                                                required
                                                                placeholder="you@email.com"
                                                                value={formData.email}
                                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                                className="w-full h-12 md:h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all text-xs md:text-sm"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {/* Custom State Dropdown */}
                                                    <div className="relative group/field">
                                                        <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 ml-1 mb-1 block">State *</label>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setIsStateDropdownOpen(!isStateDropdownOpen);
                                                                setIsCityDropdownOpen(false);
                                                            }}
                                                            className="w-full h-12 md:h-14 px-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-800 focus:outline-none focus:border-primary flex items-center justify-between text-xs md:text-sm"
                                                        >
                                                            <span className="truncate">{formData.state || "Select State"}</span>
                                                            <MapPin className="text-slate-400 shrink-0" size={16} />
                                                        </button>

                                                        <AnimatePresence>
                                                            {isStateDropdownOpen && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: -10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: -10 }}
                                                                    className="absolute z-50 left-0 right-0 top-full mt-2 max-h-48 overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl py-2"
                                                                >
                                                                    {Object.keys(stateCityData).map((state) => (
                                                                        <div
                                                                            key={state}
                                                                            onClick={() => {
                                                                                setFormData({ ...formData, state: state, city: '' });
                                                                                setIsStateDropdownOpen(false);
                                                                            }}
                                                                            className="px-6 py-3 hover:bg-primary hover:text-white cursor-pointer transition-colors text-sm font-bold text-slate-600"
                                                                        >
                                                                            {state}
                                                                        </div>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>

                                                    {/* Custom City Dropdown */}
                                                    <div className="relative group/field">
                                                        <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 ml-1 mb-1 block">City *</label>
                                                        <button
                                                            type="button"
                                                            disabled={!formData.state}
                                                            onClick={() => {
                                                                setIsCityDropdownOpen(!isCityDropdownOpen);
                                                                setIsStateDropdownOpen(false);
                                                            }}
                                                            className={`w-full h-12 md:h-14 px-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-800 focus:outline-none focus:border-primary flex items-center justify-between text-xs md:text-sm ${!formData.state ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                        >
                                                            <span className="truncate">{formData.city || "Select City"}</span>
                                                            <MapPin className="text-slate-400 shrink-0" size={16} />
                                                        </button>

                                                        <AnimatePresence>
                                                            {isCityDropdownOpen && formData.state && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: -10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: -10 }}
                                                                    className="absolute z-50 left-0 right-0 top-full mt-2 max-h-48 overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl py-2"
                                                                >
                                                                    {(stateCityData[formData.state] || []).map((city) => (
                                                                        <div
                                                                            key={city}
                                                                            onClick={() => {
                                                                                setFormData({ ...formData, city: city });
                                                                                setIsCityDropdownOpen(false);
                                                                            }}
                                                                            className="px-6 py-3 hover:bg-primary hover:text-white cursor-pointer transition-colors text-sm font-bold text-slate-600"
                                                                        >
                                                                            {city}
                                                                        </div>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </div>

                                                {/* Marketing Consent */}
                                                <div className="pt-2 pb-2">
                                                    <label className="flex items-start gap-4 cursor-pointer group/consent">
                                                        <div className={`mt-1 md:mt-0 w-6 h-6 rounded-md border-2 shrink-0 flex items-center justify-center transition-all ${formData.marketingConsent ? 'bg-primary border-primary shadow-[0_0_15px_rgba(219,52,54,0.4)]' : 'border-slate-200 hover:border-primary/40 bg-slate-50'}`}>
                                                            {formData.marketingConsent && <ArrowRight className="text-white w-4 h-4" />}
                                                        </div>
                                                        <input
                                                            type="checkbox"
                                                            checked={formData.marketingConsent}
                                                            onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                                                            className="hidden"
                                                        />
                                                        <span className="text-slate-500 text-[10px] md:text-xs font-medium select-none group-hover/consent:text-slate-900 transition-colors">
                                                            I agree to give my consent to receive updates through SMS/Email*
                                                        </span>
                                                    </label>
                                                </div>

                                                {error && (
                                                    <div className="p-3 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-600 animate-fade-in">
                                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                                                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{error}</span>
                                                    </div>
                                                )}

                                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                                    <button
                                                        disabled={loading}
                                                        type="submit"
                                                        className="flex-1 h-16 md:h-20 bg-primary text-white rounded-full font-black uppercase tracking-[0.25em] text-sm md:text-base hover:bg-slate-950 transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50 active:scale-95"
                                                    >
                                                        {loading ? "Processing..." : "Submit Request"}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => { setChoice(null); }}
                                                        className="px-6 h-14 bg-slate-50 border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all font-black uppercase tracking-widest text-xs flex items-center justify-center"
                                                    >
                                                        <ArrowLeft className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {submitted && (
                            <motion.div
                                key="success-state"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white p-12 md:p-20 rounded-[4rem] text-center text-slate-950 relative overflow-hidden border border-slate-100 shadow-3xl"
                            >
                                {isModal && showClose && (
                                    <button
                                        onClick={() => closeAdmissionModal()}
                                        className="absolute top-6 right-6 md:top-10 md:right-10 p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all border border-slate-100 group z-50"
                                    >
                                        <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                                    </button>
                                )}

                                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-secondary to-primary" />
                                <div className="p-8 inline-flex bg-primary/10 rounded-3xl mb-8">
                                    <Sparkles className="w-10 h-10 text-primary animate-pulse" />
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Request Sent</h2>
                                <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto font-medium">
                                    Thank you, {formData.name.split(' ')[0]}! Our mentor will connect with you within 24 business hours.
                                </p>
                                <button
                                    onClick={() => { setChoice(null); setSubmitted(false); if (isModal) closeAdmissionModal(); }}
                                    className="px-10 py-4 bg-slate-950 hover:bg-primary text-white rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all"
                                >
                                    Finish
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );

    if (isModal) return content;

    return (
        <section ref={sectionRef} id="step-lead-form">
            {content}
        </section>
    );
};

export default StepLeadForm;
