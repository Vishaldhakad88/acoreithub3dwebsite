import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", move);
    }

    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (window.innerWidth <= 768) return null;

  return (
    <motion.div
      animate={{ x: pos.x - 120, y: pos.y - 120 }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="
        pointer-events-none fixed top-0 left-0 z-[9999]
        w-[240px] h-[240px] rounded-full
        bg-[radial-gradient(circle,rgba(14,165,233,0.25),transparent_60%)]
        blur-2xl
      "
    />
  );
}
