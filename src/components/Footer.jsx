import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

import logo from "../assets/acore-logo.png";

const socialIcons = [
  { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/acore-it-hub-pvt-ltd/" },
  { icon: FaInstagram, link: "https://www.instagram.com/acore_it_hub_pvt_ltd/" },
  { icon: FaFacebook, link: "https://www.facebook.com/acoreithub" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-24 pb-10 overflow-hidden">

      {/* ===== SOFT BLUE ACCENT ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.15),transparent_45%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ===== TOP GRID ===== */}
        <div className="grid gap-14 md:grid-cols-4">

          {/* COMPANY INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={logo}
              alt="Acore IT Hub Logo"
              className="w-36 mb-5"
            />

            <p className="text-white/70 text-sm leading-relaxed">
              Acore IT Hub builds modern, scalable and secure digital
              solutions for startups and enterprises worldwide.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              {socialIcons.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={i}
                    href={item.link}
                    target="_blank"
                    whileHover={{
                      y: -6,
                      rotateX: 12,
                      rotateY: -12,
                      scale: 1.15,
                    }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="
                      w-10 h-10 rounded-xl
                      flex items-center justify-center
                      bg-white/5 backdrop-blur-xl
                      border border-white/10
                      shadow-[0_0_25px_rgba(14,165,233,0.4)]
                      hover:border-cyan-400/50
                    "
                  >
                    <Icon className="text-cyan-400 text-lg" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer">Home</li>
              <li className="hover:text-cyan-400 cursor-pointer">Services</li>
              <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
              <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI / UX Design</li>
              <li>Cloud Solutions</li>
              <li>Custom Software</li>
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>Email: contact@acoreithub.com</li>
              <li>Phone: +91 98931 21385</li>
              <li>Location: India</li>
            </ul>
          </motion.div>

        </div>

        {/* ===== DIVIDER ===== */}
        <div className="my-14 h-px bg-white/10"></div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white/60 text-sm">

          <p>
            © {new Date().getFullYear()} Acore IT Hub. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-cyan-400 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-cyan-400 cursor-pointer">
              Terms & Conditions
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
