import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";

import bgImage from "../assets/hero/hero-bg.png";
import saleshImage from "../assets/Team/salesh.png";
import bhushan from "../assets/Team/bhushan.png";
import aniket from "../assets/Team/aniket.png";
import vishal from "../assets/Team/vishal.png";

const team = [
  {
    name: "Selesh Sarathe",
    role: "UI/UX Designer",
    image: saleshImage,
    tech: ["React", "Node", "MongoDB"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Vishal Dhakad",
    role: "Frontend Developer",
    image: vishal,
    tech: ["React", "Tailwind", "UI/UX"],
    linkedin: "https://www.linkedin.com/in/vishal-dhakad-3a6a8730a/",
    github: "https://github.com/Vishaldhakad88",
  },
  {
    name: "Suman Rathore",
    role: "Frontend Developer",
    image: null,
    tech: ["React", "Tailwind", "UI/UX"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Bhushan Pandagre",
    role: "Mern Stack Developer",
    image: bhushan,
    tech: ["React js", "Node js", "MongoDB"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Aniket",
    role: "Mern Stack Developer",
    image: aniket,
    tech: ["React js", "Node js", "MongoDB"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Ghanashyam Kushwah",
    role: "Full Stack Developer",
    image: null,
    tech: ["Php", "Node js", "React js"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Yash Rathore",
    role: "Flutter Developer",
    image: null,
    tech: ["Flutter", "iOS"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Moiz",
    role: "Flutter Developer",
    image: null,
    tech: ["Flutter", "iOS"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Abhishek Khachawa",
    role: "Flutter Developer",
    image: null,
    tech: ["Flutter", "iOS"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Aayush Panchal",
    role: "Project Manager",
    image: null,
    tech: ["MERN Stack", "Java", "Python"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Karan Panchal",
    role: "Full Stack Developer",
    image: null,
    tech: ["react js", "Javascript", "node js"],
    linkedin: "#",
    github: "#",
  },
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(4);
      else if (window.innerWidth >= 640) setCardsPerView(2);
      else setCardsPerView(1);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < cardsPerView; i++) {
      cards.push(team[(currentIndex + i) % team.length]);
    }
    return cards;
  };

  const getInitials = (name) => name.charAt(0).toUpperCase();

  return (
    <section className="relative bg-black text-white py-16 md:py-28 overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1.05, 1.1, 1.05] }}
        transition={{ duration: 45, repeat: Infinity }}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
      />

      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="mt-4 text-white/70">
            Passionate professionals building modern digital products.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            >
              {getVisibleCards().map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="rounded-2xl bg-white/10 border border-white/20 p-6 text-center"
                >
                  <div className="mx-auto w-24 h-24 mb-4">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover border-4 border-white/30"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-3xl font-bold">
                        {getInitials(member.name)}
                      </div>
                    )}
                  </div>

                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-cyan-400 text-sm mb-4">{member.role}</p>

                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* ✅ FIXED LINKS */}
                  <div className="flex justify-center gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:scale-110 transition"
                    >
                      <FaLinkedinIn className="text-cyan-400" />
                    </a>

                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:scale-110 transition"
                    >
                      <FaGithub className="text-purple-400" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute -left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
