import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Cpu,
  Lightbulb,
} from "lucide-react";

import heroBg from "../assets/hero/hero-bg.png";

const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable and high-performance websites built with latest technologies.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    desc: "Android & iOS applications with smooth UI and robust backend systems.",
    icon: Smartphone,
  },
  {
    title: "UI / UX Design",
    desc: "User-centric, clean and conversion-focused digital experiences.",
    icon: Palette,
  },
  {
    title: "Cloud Solutions",
    desc: "Secure, scalable cloud infrastructure for modern businesses.",
    icon: Cloud,
  },
  {
    title: "Custom Software",
    desc: "Tailor-made software solutions for unique business requirements.",
    icon: Cpu,
  },
  {
    title: "IT Consulting",
    desc: "Expert technical guidance to help you choose the right strategy and stack.",
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">

      {/* ===== SUBTLE MOVING TEXTURE ===== */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1.05, 1.5, 1.05],
          x: ["0%", "-5%", "0%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }}
      />

      {/* ===== MAIN BLACK OVERLAY ===== */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* ===== SOFT BLUE ACCENT (LUXURY TOUCH) ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.18),transparent_45%)]"></div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Advanced IT solutions powered by modern technologies and global expertise.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -16, rotateX: 8, rotateY: -8 }}
                style={{ transformStyle: "preserve-3d" }}
                className="
                  relative p-8 rounded-3xl
                  bg-white/10 backdrop-blur-2xl
                  border border-white/20
                  shadow-[0_20px_60px_rgba(0,0,0,0.7)]
                  hover:border-cyan-400/50
                  transition
                "
              >
                {/* Animated Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  whileHover={{ scale: 1.2, rotateZ: 10 }}
                  className="
                    w-14 h-14 rounded-xl mb-6
                    flex items-center justify-center
                    bg-gradient-to-br from-gray-90 to-gray-800
                    shadow-[0_0_35px_rgba(14,165,233,0.6)]
                  "
                >
                  <Icon size={28} className="text-gray-300" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-white/80 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
