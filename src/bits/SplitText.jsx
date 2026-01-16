import { motion } from "framer-motion";

export default function SplitText({ text }) {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight">
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block mr-3">
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: (i * 4 + j) * 0.03,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="inline-block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}
