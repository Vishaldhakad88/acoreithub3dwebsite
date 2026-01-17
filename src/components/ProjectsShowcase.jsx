import { motion } from "framer-motion";
import { useState } from "react";

import heroBg from "../assets/hero/hero-bg.png";
import heroShape from "../assets/hero/hero-shape.png";

import webIcon from "../assets/web.png";
import appIcon from "../assets/app.png";

const projects = [
  { name: "Yes Courier Services", url: "https://www.yescourierservices.com/", web: true },
  { name: "Tickvia", url: "https://www.tickvia.com", web: true, app: true },
  { name: "NearProp", url: "https://nearprop.com", web: true, app: true },
  { name: "Rudra Ashwi Technology", url: "https://www.rudraashwitechnology.com", web: true },
  { name: "Moyo International", url: "https://moyointernational.com/", web: true, app: true },
  { name: "The Go Vibe", url: "https://thegovibe.com/", web: true, app: true },
  { name: "MediScript", url: "https://mediscript.in", web: true },
  { name: "Call4Help", url: "https://call4help.in/", web: true, app: true },
  { name: "Hazaribagh Market", url: "https://hazaribaghmarket.com/", web: true, app: true },
  { name: "HRTC Tours", url: "https://hrtctours.com/", web: true, app: true },
  { name: "Draze India", url: "https://www.drazeindia.com", web: true, app: true },
  { name: "Dhanvi Drivers", url: "https://dhanvidrivers.com/", web: true, app: true },
  { name: "Tryde", url: "https://tryde.com/", web: true, app: true },
  { name: "Eduvado", url: "https://eduvado.com/", web: true, app: true },
];

const ITEMS_PER_PAGE = 6;

export default function ProjectsShowcase() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const visible = projects.slice(start, start + ITEMS_PER_PAGE);

  return (
    <section className="relative bg-black text-white py-28 overflow-hidden group">

      {/* ===== BG IMAGE ===== */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1.05, 1.12, 1.05], x: ["0%", "-4%", "0%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
      />

      {/* hover grow */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"></div>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* floating shape */}
      <motion.img
        src={heroShape}
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-15%] top-[10%] w-[520px] opacity-20 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ===== HEADING ===== */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold">Our Projects</h2>
          <p className="mt-4 text-white/70 max-w-3xl mx-auto">
            Live products we have delivered across web & mobile platforms.
          </p>
        </div>

        {/* ===== PROJECT GRID ===== */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <motion.a
              key={i}
              href={p.url}
              target="_blank"
              whileHover={{ y: -14, rotateX: 6, rotateY: -6, scale: 1.04 }}
              style={{ transformStyle: "preserve-3d" }}
              className="
                relative p-8 rounded-3xl overflow-hidden
                bg-white/5 backdrop-blur-2xl
                border border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.7)]
                hover:border-cyan-400/50
                transition
              "
            >
              {/* hover glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.25),transparent_55%)] opacity-0 hover:opacity-100 transition" />

              <h3 className="text-xl font-semibold mb-4">{p.name}</h3>

              {/* icons */}
              <div className="flex gap-4 items-center">
                {p.web && (
                  <img src={webIcon} alt="Web" className="w-8 h-8" />
                )}
                {p.app && (
                  <img src={appIcon} alt="App" className="w-8 h-8" />
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* ===== PAGINATION ===== */}
        <div className="flex justify-center gap-4 mt-16">
          {Array.from({ length: totalPages }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setPage(i + 1)}
              whileHover={{ scale: 1.2, rotateX: 10 }}
              whileTap={{ scale: 0.9 }}
              className={`
                px-5 py-2 rounded-xl
                backdrop-blur-xl
                border border-white/10
                transition
                ${
                  page === i + 1
                    ? "bg-cyan-500 text-black shadow-[0_0_30px_rgba(14,165,233,0.8)]"
                    : "bg-white/5 text-white hover:border-cyan-400/50"
                }
              `}
            >
              {i + 1}
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}
