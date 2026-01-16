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
    <section className="relative bg-black text-white py-28 overflow-hidden">

      {/* ===== SECTION TITLE ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 max-w-3xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Projects
        </h2>
        <p className="mt-4 text-white/70">
          A glimpse of the innovative solutions we’ve built for clients across industries.
        </p>
      </motion.div>

      {/* ===== PROJECT CARDS ===== */}
      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -14, rotateX: 6, rotateY: -6 }}
            style={{ transformStyle: "preserve-3d" }}
            className="
              relative p-8 rounded-3xl
              bg-white/5 backdrop-blur-2xl
              border border-white/10
              shadow-[0_20px_60px_rgba(0,0,0,0.7)]
              hover:border-cyan-400/40
              transition
            "
          >
            {/* Category */}
            <span className="inline-block mb-4 text-xs tracking-wide uppercase
              text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
              {project.category}
            </span>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full
                    bg-white/10 border border-white/10 text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
