import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
  return (
    <>
      {/* ===== CALL BUTTON (LEFT) ===== */}
      <motion.a
        href="tel:+918871855460"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.15, rotate: -6 }}
        whileTap={{ scale: 0.9 }}
        className="
          fixed bottom-6 left-6 z-50
          w-14 h-14 rounded-full
          flex items-center justify-center
          bg-gradient-to-br from-cyan-500 to-blue-600
          shadow-[0_0_30px_rgba(14,165,233,0.7)]
          hover:shadow-[0_0_45px_rgba(14,165,233,0.9)]
        "
        aria-label="Call Us"
      >
        <FaPhoneAlt className="text-white text-xl" />
      </motion.a>

      {/* ===== WHATSAPP BUTTON (RIGHT) ===== */}
      <motion.a
        href="https://wa.me/918871855460"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.15, rotate: 6 }}
        whileTap={{ scale: 0.9 }}
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          flex items-center justify-center
          bg-gradient-to-br from-green-500 to-emerald-600
          shadow-[0_0_30px_rgba(34,197,94,0.7)]
          hover:shadow-[0_0_45px_rgba(34,197,94,0.9)]
        "
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </motion.a>
    </>
  );
}
