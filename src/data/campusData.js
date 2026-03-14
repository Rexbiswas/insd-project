import React, {
    Users, Layers, Maximize, BookOpen, Pipette, Camera, Monitor,
    Coffee, Mic, Library, Cpu, Scissors, MapPin, Building, TreePine,
    TrainFront, Utensils, Music, GraduationCap, ShieldCheck, Gem,
    Globe2, Briefcase, Sun, Building2, Palmtree, Compass, Hexagon,
    Anchor, Fingerprint, Aperture, Palette, Paintbrush, Castle, Crown,
    Navigation, Box, ArrowUpRight
} from 'lucide-react';

export const campusData = {
    "south-delhi": {
        slug: "south-delhi",
        city: "South Delhi",
        fullName: "South Delhi Flagship Campus",
        tagline: "The Flagship Node",
        intro: "Positioned strategically in the heart of the Design and Luxury Hub, our South Delhi campus acts as the premier incubator for creative talent. This massive ecosystem is perfect for students to rigorously learn and study Indian design and luxury on a systemic global level.",
        size: "35,000 sq. ft",
        stats: [
            { label: "Design Labs", value: "12+", icon: <Layers size={20} /> },
            { label: "Incubators", value: "4", icon: <Cpu size={20} /> },
            { label: "Placement", value: "98%", icon: <Users size={20} /> }
        ],
        facilities: [
            { title: "Mini Amphitheater", desc: "State-of-the-art space for presentations and guest lectures.", icon: <Mic size={24} />, img: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { title: "Fashion & Beauty Labs", desc: "Industrial sewing machines and dedicated beauty rooms.", icon: <Scissors size={24} />, img: "https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { title: "Creative Incubator", desc: "Meeting rooms and a specialized creative library.", icon: <Monitor size={24} />, img: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" },
            { title: "Photography Studio", desc: "Professional setups with advanced lighting rigs.", icon: <Camera size={24} />, img: "https://images.pexels.com/photos/3379961/pexels-photo-3379961.jpeg?auto=compress&cs=tinysrgb&w=800" }
        ],
        heroImg: "https://images.pexels.com/photos/2731535/pexels-photo-2731535.jpeg?auto=compress&cs=tinysrgb&w=2000",
        theme: "light"
    },
    "north-delhi": {
        slug: "north-delhi",
        city: "North Delhi",
        fullName: "North Delhi Innovation Hub",
        tagline: "The Epicenter of Avant-Garde",
        intro: "The North Delhi campus is a vibrant and creative hub in the heart of the North Campus area of Delhi University, nestled amongst ruins, cafes, and bars. It's an intoxicating blend of heritage and contemporary fashion atmosphere.",
        size: "10,000 sq. ft",
        facilities: [
            { title: "Couture & Textile Lab", icon: <Palette size={24} />, img: "https://images.pexels.com/photos/3862624/pexels-photo-3862624.jpeg?auto=compress&cs=tinysrgb&w=1000" },
            { title: "Spatial Design Studio", icon: <Building2 size={24} />, img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1000" }
        ],
        heroImg: "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=2000",
        theme: "light"
    },
    "paris": {
        slug: "paris",
        city: "Paris",
        fullName: "Campus De Paris (CDP)",
        tagline: "Global Couture & Scale",
        intro: "Positioned within the iconic Grande Arche structure, our Paris Campus operates at the bleeding edge of the world's fashion capital. We merge historical luxury with hyper-scale infrastructure.",
        size: "2,500 sq. m",
        stats: [
            { label: "Students", value: "750+", icon: <Users size={20} /> },
            { label: "Floors", value: "3", icon: <Layers size={20} /> },
            { label: "Rooms", value: "16", icon: <BookOpen size={20} /> }
        ],
        heroImg: "https://images.pexels.com/photos/1125212/pexels-photo-1125212.jpeg?auto=compress&cs=tinysrgb&w=2000",
        theme: "dark"
    },
    "washington": {
        slug: "washington",
        city: "Washington",
        fullName: "IBSW Washington Campus",
        tagline: "Strategic Design Hub",
        intro: "Located in Herndon, Virginia, centrally in the cultural and political heart of the United States. This state-of-the-art campus hosts vibrant meeting rooms and classrooms.",
        heroImg: "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=2000",
        theme: "light",
        bento: [
            { title: "Global Cuisine", desc: "Over 100 restaurants offering international cuisine.", icon: <Utensils size={32} /> },
            { title: "Connectivity", desc: "Shuttle services to museums and express Metrorail access.", icon: <TrainFront size={32} /> },
            { title: "Parks & Trails", desc: "W&OD Trail running through the heart of downtown.", icon: <TreePine size={32} /> }
        ]
    },
    "dubai": {
        slug: "dubai",
        city: "Dubai",
        fullName: "Dubai International Campus",
        tagline: "Future Aesthetics",
        intro: "Located at Tiffany Tower in the JLT area, a very popular place for Dubai’s ex-pat community. Dubai is known for luxury shopping and ultramodern architecture.",
        heroImg: "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=2000",
        theme: "dark",
        bento: [
            { title: "Luxury & Architecture", icon: <Gem size={32} />, desc: "Shopping, ultramodern architecture, and lively culture." },
            { title: "Unmatched Safety", icon: <ShieldCheck size={32} />, desc: "One of the safest cities in the world with 24-hour security." },
            { title: "Global Community", icon: <Globe2 size={32} />, desc: "Home to over 150 nationalities, 80% ex-pats." }
        ]
    },
    "uk": {
        slug: "uk",
        city: "United Kingdom",
        fullName: "UCA Partnership Campus",
        tagline: "Creative Arts Heritage",
        intro: "Our alliance with UCA offers INSD students an unprecedented bridge to British design heritage. Positioned consistently as one of the UK's top creative universities.",
        heroImg: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=2000",
        theme: "light"
    }
};
