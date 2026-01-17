import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";

import bgImage from "../assets/hero/hero-bg.png";

const team = [
  {
    name: "Vishal Dhakad",
    role: "Founder & Full Stack Developer",
    image: "https://i.pravatar.cc/300?img=12",
    tech: ["React", "Node", "MongoDB"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Amit Sharma",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/300?img=32",
    tech: ["React", "Tailwind", "UI/UX"],
    linkedin: "#",
    github: "#",
  },
  // {
  //   name: "Neha Verma",
  //   role: "Backend Developer",
  //   image: "https://i.pravatar.cc/300?img=45",
  //   tech: ["Node", "Express", "AWS"],
  //   linkedin: "#",
  //   github: "#",
  // },
  {
    name: "Rahul Singh",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=56",
    tech: ["Figma", "Design Systems"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Priya Patel",
    role: "DevOps Engineer",
    image: "https://i.pravatar.cc/300?img=47",
    tech: ["Docker", "Kubernetes", "CI/CD"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Arjun Reddy",
    role: "Data Scientist",
    image: "https://i.pravatar.cc/300?img=33",
    tech: ["Python", "ML", "Analytics"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sneha Kapoor",
    role: "Mobile Developer",
    image: "https://i.pravatar.cc/300?img=38",
    tech: ["React Native", "Flutter", "iOS"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Karan Malhotra",
    role: "Cloud Architect",
    image: "https://i.pravatar.cc/300?img=68",
    tech: ["AWS", "Azure", "GCP"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Divya Joshi",
    role: "Product Manager",
    image: "https://i.pravatar.cc/300?img=44",
    tech: ["Strategy", "Agile", "Analytics"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Rohan Gupta",
    role: "Security Engineer",
    image: "https://i.pravatar.cc/300?img=59",
    tech: ["Cybersecurity", "Penetration Testing"],
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

  return (
    <section className="relative bg-black text-white py-16 md:py-28 overflow-hidden">

      {/* ===== SUBTLE MOVING BACKGROUND IMAGE ===== */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1.05, 1.1, 1.05],
          x: ["0%", "-3%", "0%"],
          y: ["0%", "2%", "0%"],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
      />

      {/* ===== STRONG BLACK OVERLAY ===== */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* ===== EXISTING PURPLE ACCENT ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-white bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-sm md:text-base px-4">
            Passionate professionals driving innovation and delivering
            high-quality digital solutions.
          </p>
        </motion.div>

        {/* ===== SLIDER ===== */}
        <div className="relative">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            >
              {getVisibleCards().map((member, i) => (
                <motion.div
                  key={`${member.name}-${i}`}
                  whileHover={{ y: -12, rotateY: 8, rotateX: 4, scale: 1.03 }}
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                  className="relative group"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/20 h-full">
                    <div className="relative p-5 text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="mx-auto w-24 h-24 rounded-full object-cover mb-4"
                      />
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-cyan-400 text-xs mb-3">{member.role}</p>
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {member.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-center gap-3">
                        <FaLinkedinIn className="text-cyan-400" />
                        <FaGithub className="text-purple-400" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* NAV BUTTONS */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
