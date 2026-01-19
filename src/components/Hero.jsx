import { motion } from "framer-motion";
import { useRef } from "react";
import SplitText from "../bits/SplitText";
import HeroCanvas from "../canvas/HeroCanvas";

import heroBg from "../assets/hero/hero-bg.png";
import heroShape from "../assets/hero/hero-shape.png";

export default function Hero() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // ❌ mobile parallax off

    const { innerWidth, innerHeight } = window;
    mouse.current.x = (e.clientX / innerWidth - 0.5) * 2;
    mouse.current.y = (e.clientY / innerHeight - 0.5) * 2;
  };

  return (
    <section id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-24 md:pt-28 bg-black text-white overflow-hidden"
    >
      {/* ===== BACKGROUND IMAGE (DESKTOP ONLY) ===== */}
      <motion.img
        src={heroBg}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.22 }}
        transition={{ duration: 2 }}
        className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black"></div>

      {/* ===== FLOATING SHAPE (DESKTOP ONLY) ===== */}
      <motion.img
        src={heroShape}
        animate={{
          x: mouse.current.x * 30,
          y: mouse.current.y * 30,
        }}
        transition={{ type: "spring", stiffness: 40 }}
        className="hidden md:block absolute right-[-12%] top-[12%]
          w-[520px] opacity-80 blur-[1px] pointer-events-none"
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6
        grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <SplitText text="We Build Future Ready Digital Solutions" />

          <p className="mt-6 text-white/70 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Acore IT Hub delivers scalable, secure, and innovative software
            solutions designed for modern businesses and global growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-5 justify-center md:justify-start">
            <button 
              onClick={() => window.location.href = 'tel:8871855460'}
              className="px-8 py-4 rounded-xl
              bg-gradient-to-r from-blue-500 to-cyan-500
              shadow-[0_0_30px_rgba(14,165,233,0.6)]
              hover:scale-105 transition">
              Get Started
            </button>

            <button 
              onClick={() => window.open('https://acoreithub.com/', '_blank')}
              className="px-8 py-4 rounded-xl
              border border-white/20
              hover:bg-white/10 transition">
              View Portfolio
            </button>
          </div>
        </div>

        {/* RIGHT – 3D GLOBE */}
        <div className="relative w-full h-[300px] sm:h-[360px] md:h-[520px]">
          <HeroCanvas mouse={mouse} />
        </div>
      </div>
    </section>
  );
}