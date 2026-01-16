import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaJava,        // ✅ Java yahan se
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPhp,
  SiMongodb,
} from "react-icons/si";


const techs = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "AWS", icon: FaAws },
  { name: "PHP", icon: SiPhp },
  { name: "Java", icon: FaJava },   // ✅ SAFE
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
];

export default function TechStack() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">

      {/* ===== SECTION HEADING ===== */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Technologies We Use
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Modern, scalable and industry-leading technologies powering our solutions.
        </p>
      </div>

      {/* ===== MARQUEE ===== */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10 w-max px-10 py-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...techs, ...techs].map((tech, i) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={i}
                whileHover={{
                  y: -12,
                  rotateX: 12,
                  rotateY: -12,
                  scale: 1.15,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="
                  relative min-w-[120px] h-[120px]
                  flex flex-col items-center justify-center
                  rounded-2xl
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  
                  hover:border-cyan-400/50
                  transition
                "
              >
                {/* Glow */}
                <div className="
                  absolute inset-0 rounded-2xl
                  bg-[radial-gradient(circle,rgba(14,165,233,0.35),transparent_60%)]
                  opacity-0 hover:opacity-100 transition
                "></div>

                {/* Icon */}
                <Icon className="text-5xl text-cyan-400 z-10" />

                {/* Name */}
                <span className="mt-2 text-xs text-white/80 z-10">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
