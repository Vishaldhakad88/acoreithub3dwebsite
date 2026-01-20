import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

import heroBg from "../assets/hero/hero-bg.png";
import heroShape from "../assets/hero/hero-shape.png";

const testimonials = [
  {
    name: "sumu rathore",
    position: "Frontend Developer",
    company: "Acore IT Hub",
    rating: 5,
    text: "Acore IT Hub is a reliable and professional IT company.Their team is very helpful, skilled, and always ready to support. They deliver projects on time and maintain good quality in their work. Whether it's website development, app solutions, or digital services, they handle everything with care. I'm really happy with their services and would definitely recommend them to others.",
  },
  {
    name: "shubham bhoyar",
    position: "",
    company: "",
    rating: 5,
    text: "Working with Acore IT Hub has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to providing top-notch service and support.",
  },
  {
    name: "Sandhya Rehpade",
    position: "",
    company: "",
    rating: 5,
    text: "No dought every IT company is good but with Acore my experience is best as director & the staff is so cooperative & easy going. They all r having good experienced so they give good suggestions as well. Grt grt grt !!!",
  },
  {
    name: "Sadaram Rehpade",
    position: "",
    company: "",
    rating: 5,
    text: "I will just say, Score is one of the Best company i mean the staff is  very down to earth & costing of service is very reasionable like we will not get their price in market.\nGrt work guys\nThank u !!!",
  },
  {
    name: "Ayushi Yadav",
    position: "Director, LogiTech Systems",
    company: "LogiTech",
    rating: 5,
    text: "Their professionalism and technical prowess are unmatched. They not only built our application but also provided valuable insights that enhanced our business model. A truly remarkable team!",
  },
];

export default function Testimonials() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  };

  return (
    <section className="relative bg-black text-white py-16 md:py-20 overflow-hidden">
      
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          x: smoothMouseX,
          y: smoothMouseY,
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url(${heroShape})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          x: mousePosition.x * -40,
          y: mousePosition.y * -40,
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
          rotate: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 25, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-cyan-400 text-xs md:text-sm font-bold tracking-widest uppercase
              px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30
              shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Testimonials
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4
            bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent
            leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            What Our Clients Say
          </h2>

          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            Trusted by industry leaders across the globe
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} getInitials={getInitials} />
          </motion.div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={handlePrevious}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 backdrop-blur-xl 
                border border-white/10 hover:border-cyan-400/40 
                flex items-center justify-center transition-all duration-300
                hover:bg-cyan-400/10"
            >
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "w-8 bg-gradient-to-r from-cyan-500 to-blue-500" 
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 backdrop-blur-xl 
                border border-white/10 hover:border-cyan-400/40 
                flex items-center justify-center transition-all duration-300
                hover:bg-cyan-400/10"
            >
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setCurrentIndex(index)}
                className="cursor-pointer"
              >
                <MiniTestimonialCard 
                  testimonial={testimonial} 
                  isActive={index === currentIndex}
                  getInitials={getInitials}
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, getInitials }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-8 sm:p-10 md:p-12 rounded-3xl
        bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent
        backdrop-blur-xl border border-white/10
        shadow-[0_12px_48px_rgba(0,0,0,0.6)]
        hover:shadow-[0_20px_60px_rgba(34,211,238,0.3)]
        hover:border-cyan-400/40
        transition-all duration-500 overflow-hidden"
    >
      
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={isHovered ? {
          background: [
            "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.1), transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(59,130,246,0.1), transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.1), transparent 50%)",
          ]
        } : {}}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="absolute top-6 left-6 opacity-10">
        <svg className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className="flex gap-1 mb-4 relative z-10">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.svg
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>

      <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 relative z-10"
        style={{ fontFamily: "'Inter', sans-serif" }}>
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-4 relative z-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden
            border-2 border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.3)]
            bg-gradient-to-br from-cyan-500 to-blue-600
            flex items-center justify-center"
        >
          <span className="text-white text-xl sm:text-2xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {getInitials(testimonial.name)}
          </span>
        </motion.div>

        <div>
          <h4 className="text-lg sm:text-xl font-bold
            bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {testimonial.name}
          </h4>
          <p className="text-sm text-cyan-400 font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            {testimonial.position}
          </p>
          <p className="text-xs text-white/50"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            {testimonial.company}
          </p>
        </div>
      </div>

    </motion.div>
  );
}

function MiniTestimonialCard({ testimonial, isActive, getInitials }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative p-5 rounded-2xl
        bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent
        backdrop-blur-xl border transition-all duration-300
        ${isActive 
          ? 'border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.3)]' 
          : 'border-white/10 hover:border-cyan-400/30'
        }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all
          bg-gradient-to-br from-cyan-500 to-blue-600
          flex items-center justify-center ${
          isActive ? 'border-cyan-400' : 'border-white/20'
        }`}>
          <span className="text-white text-sm font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {getInitials(testimonial.name)}
          </span>
        </div>
        <div className="flex-1">
          <h5 className="text-sm font-bold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {testimonial.name}
          </h5>
          <p className="text-xs text-white/50"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            {testimonial.company}
          </p>
        </div>
      </div>

      <p className="text-xs text-white/60 line-clamp-3"
        style={{ fontFamily: "'Inter', sans-serif" }}>
        "{testimonial.text}"
      </p>

      <div className="flex gap-0.5 mt-2">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-3 h-3 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </motion.div>
  );
}