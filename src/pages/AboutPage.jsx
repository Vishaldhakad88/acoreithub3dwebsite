import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaAward, FaGlobe } from "react-icons/fa";

const stats = [
  { icon: FaRocket, value: "500+", label: "Projects Delivered" },
  { icon: FaUsers, value: "200+", label: "Happy Clients" },
  { icon: FaAward, value: "50+", label: "Awards Won" },
  { icon: FaGlobe, value: "25+", label: "Countries Served" },
];

export default function AboutPage({ setCurrentPage }) {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden min-h-screen pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => {
            setCurrentPage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="mb-8 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
        >
          <span className="text-xl">←</span> Back to Home
        </motion.button>
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            About <span className="text-cyan-400">Acore IT Hub</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/70 max-w-3xl mx-auto text-lg"
          >
            We are a team of passionate developers, designers, and innovators dedicated to transforming ideas into powerful digital solutions. With years of experience and cutting-edge technology, we help businesses scale and succeed in the digital world.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center group hover:border-cyan-400/50 transition"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(14,165,233,0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition"></div>
                
                <Icon className="text-5xl text-cyan-400 mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission</h3>
            <p className="text-white/70 leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation. We strive to be the trusted partner for companies looking to leverage the power of modern software and cloud technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Vision</h3>
            <p className="text-white/70 leading-relaxed">
              To become a global leader in digital innovation, recognized for delivering exceptional quality, fostering long-term partnerships, and pushing the boundaries of what's possible with technology. We envision a future where every business can harness cutting-edge solutions.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}