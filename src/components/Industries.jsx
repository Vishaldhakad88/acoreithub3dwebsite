import { motion } from "framer-motion";
import heroBg from "../assets/hero/hero-bg.png";
import heroShape from "../assets/hero/hero-shape.png";

const industries = [
  "Healthcare & Medical",
  "Education & E-learning",
  "Retail & E-commerce",
  "Real Estate & Construction",
  "Logistics & Transportation",
  "Travel & Hospitality",
  "Food & Restaurant Industry",
  "Manufacturing & Industrial Solutions",
  "Media & Entertainment",
  "Event Management",
  "NGOs & Non-Profit Organizations",
  "Startups & Entrepreneurs",
  "Small & Medium Businesses (SMEs)",
  "Corporate & Enterprise Solutions",
];

export default function Industries() {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden group">

      {/* bg image */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1.05, 1.12, 1.05], y: ["0%", "3%", "0%"] }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      {/* hover grow */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"></div>

      {/* black overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* floating shape */}
      <motion.img
        src={heroShape}
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-18%] bottom-[10%] w-[560px] opacity-15 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold">
            Industries We Serve
          </h2>
          <p className="mt-4 text-white/70 max-w-3xl mx-auto">
            Tailored digital solutions across diverse business domains.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, rotateX: 6, rotateY: -6, scale: 1.06 }}
              style={{ transformStyle: "preserve-3d" }}
              className="
                p-6 rounded-2xl text-center
                bg-white/5 backdrop-blur-2xl
                border border-white/10
                shadow-[0_15px_40px_rgba(0,0,0,0.6)]
                hover:border-cyan-400/50
                transition
              "
            >
              <span className="text-sm md:text-base font-medium text-white/90">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
