import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

import heroBg from "../assets/hero/hero-bg.png";
import heroShape from "../assets/hero/hero-shape.png";
import webIcon from "../assets/web.png";
import appIcon from "../assets/app.png";

// Project images
import call4helpImg from "../assets/projects/call4help.png";
import dhanviImg from "../assets/projects/dhanvi.png";
import drazeImg from "../assets/projects/draze.png";
import eduvadoImg from "../assets/projects/eduvado.png";
import gharzoImg from "../assets/projects/gharzo.png";
import mediscriptImg from "../assets/projects/mediscript.png";
import moyoImg from "../assets/projects/moyo.png";
import rudrashviImg from "../assets/projects/rudraashwitechnology.png";
import thegovibeImg from "../assets/projects/thegovibe.png";
import tickviaImg from "../assets/projects/tickvia.png";
import yatraBuddyImg from "../assets/projects/yatraBuddy.png";
import yescourierImg from "../assets/projects/yescourier.png";

const projects = [
  { 
    name: "Yes Courier Services", 
    url: "https://www.yescourierservices.com/", 
    web: true,
    image: yescourierImg,
    category: "Logistics",
    desc: "Smart courier tracking with real-time updates"
  },
  { 
    name: "Tickvia", 
    url: "https://www.tickvia.com", 
    web: true, 
    app: true,
    image: tickviaImg,
    category: "Event Management",
    desc: "Seamless event ticketing and QR verification"
  },
  { 
    name: "Gharzo", 
    url: "https://nearprop.com", 
    web: true, 
    app: true,
    image: gharzoImg,
    category: "Real Estate",
    desc: "Property marketplace with virtual tours"
  },
  { 
    name: "Rudra Ashwi Technology", 
    url: "https://www.rudraashwitechnology.com", 
    web: true,
    image: rudrashviImg,
    category: "Tech Solutions",
    desc: "Enterprise software and digital transformation"
  },
  { 
    name: "Moyo International", 
    url: "https://moyointernational.com/", 
    web: true, 
    app: true,
    image: moyoImg,
    category: "Fitness",
    desc: "Personal fitness tracking and nutrition planning"
  },
  { 
    name: "The Go Vibe", 
    url: "https://thegovibe.com/", 
    web: true, 
    app: true,
    image: thegovibeImg,
    category: "Social Platform",
    desc: "Community engagement and collaboration hub"
  },
  { 
    name: "MediScript", 
    url: "https://mediscript.in", 
    web: true,
    image: mediscriptImg,
    category: "Healthcare",
    desc: "Digital prescription management system"
  },
  { 
    name: "Call4Help", 
    url: "https://call4help.in/", 
    web: true, 
    app: true,
    image: call4helpImg,
    category: "Emergency Services",
    desc: "Real-time emergency response platform"
  },
  { 
    name: "Yatra Buddy", 
    url: "https://hrtctours.com/", 
    web: true, 
    app: true,
    image: yatraBuddyImg,
    category: "Travel Tech",
    desc: "AI-powered travel planning companion"
  },
  { 
    name: "Draze India", 
    url: "https://www.drazeindia.com", 
    web: true, 
    app: true,
    image: drazeImg,
    category: "E-Commerce",
    desc: "Fashion marketplace with AI recommendations"
  },
  { 
    name: "Dhanvi Drivers", 
    url: "https://dhanvidrivers.com/", 
    web: true, 
    app: true,
    image: dhanviImg,
    category: "Finance",
    desc: "Financial management and investment tracking"
  },
  { 
    name: "Eduvado", 
    url: "https://eduvado.com/", 
    web: true, 
    app: true,
    image: eduvadoImg,
    category: "EdTech",
    desc: "Interactive learning with live classes"
  },
];

const ITEMS_PER_PAGE = 6;

export default function ProjectsShowcase() {
  const [page, setPage] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = projects.slice(start, start + ITEMS_PER_PAGE);

  return (
    <section id="projects"  className="relative bg-black text-white py-16 md:py-20 overflow-hidden">
      
      {/* Animated Background - Hero BG */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          x: smoothMouseX,
          y: smoothMouseY,
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated Shape - Following Mouse */}
      <motion.div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url(${heroShape})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          x: mousePosition.x * -40,
          y: mousePosition.y * -40,
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
          rotate: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 25, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />

      {/* Gradient Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-cyan-400 text-xs md:text-sm font-bold tracking-widest uppercase
              px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30
              shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Projects
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4
            bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent
            leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Our Projects
          </h2>

          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            Live products we have delivered across web & mobile platforms
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {visible.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 md:gap-3 flex-wrap"
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setPage(i + 1)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-4 py-2 rounded-lg font-semibold text-sm
                backdrop-blur-xl border transition-all duration-300
                ${
                  page === i + 1
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-black border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.6)]"
                    : "bg-white/5 text-white/80 border-white/10 hover:border-cyan-400/40 hover:bg-white/10"
                }
              `}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {i + 1}
            </motion.button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="block relative h-full p-5 sm:p-6 rounded-2xl
          bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent
          backdrop-blur-xl border border-white/10
          shadow-[0_8px_32px_rgba(0,0,0,0.5)]
          hover:shadow-[0_12px_48px_rgba(34,211,238,0.3)]
          hover:border-cyan-400/40
          transition-all duration-500 overflow-hidden
          flex flex-col"
      >
        
        {/* Animated Glow Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={isHovered ? {
            background: [
              "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.12), transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(59,130,246,0.12), transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.12), transparent 50%)",
            ]
          } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          animate={isHovered ? {
            background: [
              "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)",
            ],
            backgroundPosition: ["-200% 0", "200% 0"],
          } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ backgroundSize: "200% 100%" }}
        />

        {/* Project Image */}
        <div className="relative w-full h-40 sm:h-44 mb-4 rounded-xl overflow-hidden
          bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10
          shadow-[inset_0_2px_15px_rgba(0,0,0,0.3)]">
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          
          {/* Platform Icons Overlay */}
          <div className="absolute bottom-2 right-2 flex gap-1.5">
            {project.web && (
              <motion.div
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-6 h-6 rounded-full bg-black/50 backdrop-blur-lg p-1
                  border border-white/20 shadow-md"
              >
                <img src={webIcon} alt="Web" className="w-full h-full" />
              </motion.div>
            )}
            {project.app && (
              <motion.div
                whileHover={{ scale: 1.15, rotate: -360 }}
                transition={{ duration: 0.5 }}
                className="w-6 h-6 rounded-full bg-black/50 backdrop-blur-lg p-1
                  border border-white/20 shadow-md"
              >
                <img src={appIcon} alt="App" className="w-full h-full" />
              </motion.div>
            )}
          </div>
        </div>

        {/* Category Badge */}
        {/* <motion.span
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.08 + 0.15 }}
          className="inline-block mb-2 text-xs tracking-wider uppercase
            text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full
            border border-cyan-400/25 font-semibold w-fit
            shadow-[0_0_15px_rgba(34,211,238,0.15)]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {project.category}
        </motion.span> */}

        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-bold mb-2
          bg-gradient-to-r from-white via-cyan-50 to-blue-100 bg-clip-text text-transparent
          leading-tight group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-500"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 flex-grow"
          style={{ fontFamily: "'Inter', sans-serif" }}>
          {project.desc}
        </p>

        {/* View Project Button */}
        <motion.div
          whileHover={{ x: 3 }}
          className="flex items-center gap-1.5 text-cyan-400 font-semibold text-xs
            group-hover:text-cyan-300 transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span>View Project</span>
          <motion.svg
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </motion.svg>
        </motion.div>

      </motion.a>
    </motion.div>
  );
}