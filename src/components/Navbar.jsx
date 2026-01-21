import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/acore-logo.png";

export default function Navbar({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href, name) => {
    setOpen(false);
    
    if (name === "About") {
      setCurrentPage("about");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    setCurrentPage("home");
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="backdrop-blur-2xl bg-white/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("#hero", "Home")}
          >
            <img src={logo} className="h-10" alt="Acore IT Hub" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10">
            {menu.map((item) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.href, item.name)}
                className="text-white/80 hover:text-white transition cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button 
            onClick={() => scrollToSection("#contact", "Contact")}
            className="hidden md:block px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:scale-105 transition"
          >
            Get Quote
          </button>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl">
            {open ? "✕" : "☰"}
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
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.name)}
                className="text-white text-2xl hover:text-cyan-400 transition"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection("#contact", "Contact")}
              className="mt-4 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
            >
              Get Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}