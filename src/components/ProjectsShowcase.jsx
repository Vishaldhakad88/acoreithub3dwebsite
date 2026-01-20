import { motion } from "framer-motion";
import { useState } from "react";
import yescourier from "../assets/projects/yescourier.png";
import tickvia from "../assets/projects/tickvia.png";  
import gharzo from "../assets/projects/gharzo.png";  
import rudraashwitechnology from "../assets/projects/rudraashwitechnology.png";  
import moyo from "../assets/projects/moyo.png";  
import thegovibe from "../assets/projects/thegovibe.png";  
import mediscript from "../assets/projects/mediscript.png";  
import call4help from "../assets/projects/call4help.png";  
import yatraBuddy from "../assets/projects/yatraBuddy.png";  
import draze from "../assets/projects/draze.png";  
import dhanvi from "../assets/projects/dhanvi.png";  
import eduvado from "../assets/projects/eduvado.png";  
import deenify from "../assets/projects/deenify.png";  
import crispynest from "../assets/projects/crispynest.png";  
import shreesandipani from "../assets/projects/shreesandipani.png";  
import desimilks from "../assets/projects/desimilks.png";  
import acoreithub from "../assets/projects/acoreithub.png";  
import channelsbazaar from "../assets/projects/channelsbazaar.png";  
import nearprop from "../assets/projects/nearprop.png";  

const projects = [
  { 
    name: "Yes Courier Services", 
    url: "https://www.yescourierservices.com/", 
    web: true,
    image: yescourier,
    category: "Logistics",
    desc: "Smart courier tracking with real-time updates"
  },
  { 
    name: "Tickvia", 
    url: "https://www.tickvia.com", 
    web: true, 
    app: true,
    image: tickvia,
    category: "Event Management",
    desc: "Seamless event ticketing and QR verification"
  },
  { 
    name: "Gharzo", 
    url: "https://nearprop.com", 
    web: true, 
    app: true,
    image: gharzo,
    category: "Real Estate",
    desc: "Property marketplace with virtual tours"
  },
  { 
    name: "Rudra Ashwi Technology", 
    url: "https://www.rudraashwitechnology.com", 
    web: true,
    image: rudraashwitechnology,
    category: "Tech Solutions",
    desc: "Enterprise software and digital transformation"
  },
  { 
    name: "Moyo International", 
    url: "https://moyointernational.com/", 
    web: true, 
    app: true,
    image: moyo,
    category: "Fitness",
    desc: "Personal fitness tracking and nutrition planning"
  },
  { 
    name: "The Go Vibe", 
    url: "https://thegovibe.com/", 
    web: true, 
    app: true,
    image: thegovibe,
    category: "Social Platform",
    desc: "Community engagement and collaboration hub"
  },
  { 
    name: "MediScript", 
    url: "https://mediscript.in", 
    web: true,
    image: mediscript,
    category: "Healthcare",
    desc: "Digital prescription management system"
  },
  { 
    name: "Call4Help", 
    url: "https://call4help.in/", 
    web: true, 
    app: true,
    image: call4help,
    category: "Emergency Services",
    desc: "Real-time emergency response platform"
  },
  { 
    name: "Hazari Bagh Market", 
    url: "https://Hazaribaghmarket.com/", 
    web: true, 
    app: true,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    category: "E-Commerce",
    desc: "Local marketplace connecting vendors and customers"
  },
  { 
    name: "Yatra Buddy (HRTC Tours)", 
    url: "https://hrtctours.com/", 
    web: true, 
    app: true,
    image: yatraBuddy,
    category: "Travel Tech",
    desc: "AI-powered travel planning companion"
  },
  { 
    name: "Draze India", 
    url: "https://www.drazeindia.com", 
    web: true, 
    app: true,
    image: draze,
    category: "E-Commerce",
    desc: "Fashion marketplace with AI recommendations"
  },
  { 
    name: "NearProp", 
    url: "https://nearprop.com/", 
    web: true, 
    app: true,
    image: nearprop,
    category: "E-Commerce",
    desc: "Fashion marketplace with AI recommendations"
  },
  { 
    name: "Dhanvi Drivers", 
    url: "https://dhanvidrivers.com/", 
    web: true, 
    app: true,
    image: dhanvi,
    category: "Finance",
    desc: "Financial management and investment tracking"
  },
  { 
    name: "Tryde", 
    url: "https://Tryde.com/", 
    web: true, 
    app: true,
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80",
    category: "Marketplace",
    desc: "Buy, sell, and trade platform for various products"
  },
  { 
    name: "Eduvado", 
    url: "https://eduvado.com/", 
    web: true, 
    app: true,
    image: eduvado,
    category: "EdTech",
    desc: "Interactive learning with live classes"
  },
  { 
    name: "Naina Purpanchayat", 
    url: "https://nainapurpanchayat.com", 
    web: true,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    category: "Government",
    desc: "Digital governance and civic services platform"
  },
  { 
    name: "The Go Cab", 
    url: "https://thegocab.com", 
    web: true, 
    app: true,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    category: "Transportation",
    desc: "Ride-hailing service with real-time tracking"
  },
  { 
    name: "Deenify", 
    url: "https://deenify.com", 
    web: true, 
    app: true,
    image: deenify,
    category: "Religious Services",
    desc: "Islamic learning and prayer time platform"
  },
  { 
    name: "Crispy Nest", 
    url: "https://crispynest.com/", 
    web: true, 
    app: true,
    image: crispynest,
    category: "Food Delivery",
    desc: "Food ordering and delivery management system"
  },
  { 
    name: "Shree Sandipani", 
    url: "https://shreesandipani.com/", 
    web: true, 
    app: true,
    image: shreesandipani,
    category: "Education",
    desc: "School management and learning platform"
  },
  { 
    name: "Desimilks", 
    url: "https://desimilks.com/", 
    web: true,
    image: desimilks,
    category: "Dairy Products",
    desc: "Fresh dairy products delivery service"
  },
  { 
    name: "Acore IT Hub", 
    url: "https://acoreithub.com/", 
    web: true,
    image: acoreithub,
    category: "IT Services",
    desc: "Comprehensive IT solutions and services"
  },
  { 
    name: "MG Auto Software", 
    url: "https://mgautosoftware.com/", 
    web: true,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    category: "Automotive",
    desc: "Automobile management and billing software"
  },
  { 
    name: "Channels Bazaar", 
    url: "https://channelsbazaar.com/", 
    web: true,
    image: channelsbazaar,
    category: "E-Commerce",
    desc: "Multi-vendor marketplace platform"
  },
  { 
    name: "Sharda Solutions", 
    url: "https://www.shardasolutions.com/", 
    web: true,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    category: "Business Solutions",
    desc: "Enterprise resource planning and solutions"
  },
  { 
    name: "Amigo Traders", 
    url: "https://www.amigotraders.com", 
    web: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Trading",
    desc: "Import-export and trading platform"
  },
];

const ITEMS_PER_PAGE = 8;

export default function Projects() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = projects.slice(start, start + ITEMS_PER_PAGE);

  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">

      {/* Gradient Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

      {/* ===== SECTION TITLE ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 max-w-4xl mx-auto px-6 relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="text-cyan-400 text-xs md:text-sm font-bold tracking-widest uppercase
            px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30
            shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            Portfolio
          </span>
        </motion.div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6
          bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent
          leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Transforming Ideas Into
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Digital Reality
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}>
          We've partnered with ambitious brands and startups to craft cutting-edge digital solutions that drive growth and innovation across industries.
        </p>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 w-24 mx-auto mt-8 rounded-full
            bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
        />
      </motion.div>

      {/* ===== PROJECT CARDS ===== */}
      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 relative z-10 mb-16">
        {visible.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        {/* Page Numbers */}
        <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
          {/* Previous Button */}
          <motion.button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            whileHover={page !== 1 ? { scale: 1.05, x: -2 } : {}}
            whileTap={page !== 1 ? { scale: 0.95 } : {}}
            className={`
              px-4 py-2.5 rounded-xl font-semibold text-sm
              backdrop-blur-xl border transition-all duration-300
              flex items-center gap-2
              ${page === 1 
                ? "bg-white/5 text-white/30 border-white/5 cursor-not-allowed" 
                : "bg-white/5 text-white/80 border-white/10 hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-400"
              }
            `}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Previous</span>
          </motion.button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setPage(i + 1)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`
                min-w-[44px] h-11 px-4 rounded-xl font-bold text-sm
                backdrop-blur-xl border transition-all duration-300
                relative overflow-hidden
                ${page === i + 1
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.6)]"
                  : "bg-white/5 text-white/80 border-white/10 hover:border-cyan-400/40 hover:bg-white/10"
                }
              `}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {page === i + 1 && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-cyan-400/20"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              )}
              <span className="relative z-10">{i + 1}</span>
            </motion.button>
          ))}

          {/* Next Button */}
          <motion.button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            whileHover={page !== totalPages ? { scale: 1.05, x: 2 } : {}}
            whileTap={page !== totalPages ? { scale: 0.95 } : {}}
            className={`
              px-4 py-2.5 rounded-xl font-semibold text-sm
              backdrop-blur-xl border transition-all duration-300
              flex items-center gap-2
              ${page === totalPages 
                ? "bg-white/5 text-white/30 border-white/5 cursor-not-allowed" 
                : "bg-white/5 text-white/80 border-white/10 hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-400"
              }
            `}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="hidden sm:inline">Next</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Page Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/50 text-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Page <span className="text-cyan-400 font-bold">{page}</span> of <span className="text-cyan-400 font-bold">{totalPages}</span>
          <span className="mx-2">•</span>
          Showing <span className="text-cyan-400 font-bold">{start + 1}</span>-<span className="text-cyan-400 font-bold">{Math.min(start + ITEMS_PER_PAGE, projects.length)}</span> of <span className="text-cyan-400 font-bold">{projects.length}</span> projects
        </motion.div>
      </motion.div>

    </section>
  );
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="block relative p-6 rounded-2xl h-full
          bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent
          backdrop-blur-2xl border border-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.7)]
          hover:shadow-[0_30px_80px_rgba(34,211,238,0.3)]
          hover:border-cyan-400/40
          transition-all duration-500 overflow-hidden
          flex flex-col"
      >
        {/* Hover Glow Effect */}
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

        {/* Top Corner Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Project Image */}
        <div className="relative w-full h-36 mb-4 rounded-xl overflow-hidden
          bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 ">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full  object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          
          {/* Platform Badges */}
          <div className="absolute top-2 right-2 flex gap-1.5">
            {project.web && (
              <span className="px-2 py-1 text-[10px] font-bold bg-cyan-500/90 text-white rounded-md backdrop-blur-sm">
                WEB
              </span>
            )}
            {project.app && (
              <span className="px-2 py-1 text-[10px] font-bold bg-blue-500/90 text-white rounded-md backdrop-blur-sm">
                APP
              </span>
            )}
          </div>
        </div>

        {/* Category */}
        

        {/* Title */}
        <h3 className="relative text-lg font-bold mb-2 flex-grow
          bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent
          group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {project.name}
        </h3>

        {/* Description */}
     

        {/* View Link */}
        <motion.div
          whileHover={{ x: 3 }}
          className="relative flex items-center gap-1.5 text-cyan-400 font-semibold text-xs
            group-hover:text-cyan-300 transition-colors mt-auto"
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

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.a>
    </motion.div>
  );
}