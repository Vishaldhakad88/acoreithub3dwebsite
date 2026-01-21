import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    desc: "A scalable e-commerce solution with secure payments and admin dashboard.",
    tech: ["React", "Node", "MongoDB"],
  },
  {
    title: "Real Estate Portal",
    category: "Web Platform",
    desc: "Property listing platform with advanced filters and lead management.",
    tech: ["Next.js", "Tailwind", "Firebase"],
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Application",
    desc: "Secure mobile banking app with real-time transactions.",
    tech: ["React Native", "Node", "PostgreSQL"],
  },
  {
    title: "EdTech Learning System",
    category: "SaaS Platform",
    desc: "Online learning platform with video courses and analytics.",
    tech: ["React", "Express", "AWS"],
  },
  {
    title: "Healthcare Management",
    category: "Enterprise Software",
    desc: "Hospital management system with patient and staff modules.",
    tech: ["Angular", "Spring Boot"],
  },
  {
    title: "Digital Marketing Dashboard",
    category: "Analytics Tool",
    desc: "Campaign tracking dashboard with performance insights.",
    tech: ["Vue", "Node", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section  className="relative bg-black text-white py-28 overflow-hidden">

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
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6
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
      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 relative z-10">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -14, 
              rotateX: 6, 
              rotateY: -6,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="
              group relative p-8 rounded-3xl
              bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent
              backdrop-blur-2xl
              border border-white/10
              shadow-[0_20px_60px_rgba(0,0,0,0.7)]
              hover:shadow-[0_30px_80px_rgba(34,211,238,0.2)]
              hover:border-cyan-400/40
              transition-all duration-500
              overflow-hidden
            "
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
              bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent" />

            {/* Top Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Category */}
            <span className="relative inline-block mb-4 text-xs tracking-wide uppercase
              text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full
              border border-cyan-400/20 font-semibold
              group-hover:bg-cyan-400/20 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              {project.category}
            </span>

            {/* Title */}
            <h3 className="relative text-xl font-bold mb-3
              bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent
              group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {project.title}
            </h3>

            {/* Description */}
            <p className="relative text-white/70 text-sm leading-relaxed mb-6
              group-hover:text-white/80 transition-colors duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="relative flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 + idx * 0.05 }}
                  viewport={{ once: true }}
                  className="text-xs px-3 py-1.5 rounded-full
                    bg-white/5 border border-white/10 text-white/70
                    hover:bg-white/10 hover:border-cyan-400/30 hover:text-white
                    transition-all duration-300 font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t} 
                </motion.span>
              ))}
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}