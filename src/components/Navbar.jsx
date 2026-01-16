import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/acore-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = ["Home", "Services", "Projects", "About", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="backdrop-blur-2xl bg-white/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img src={logo} className="h-10" />
           
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10">
            {menu.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/80 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <button className="hidden md:block px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
            Get Quote
          </button>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {menu.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="text-white text-2xl"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
