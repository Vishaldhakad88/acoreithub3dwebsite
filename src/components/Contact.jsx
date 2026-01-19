import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white py-28 overflow-hidden">

      {/* ===== SUBTLE BACKGROUND ACCENT ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.18),transparent_45%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Build Something Great
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Have a project in mind? Get a free consultation and detailed quote
            from our experts.
          </p>
        </motion.div>

        {/* ===== CONTENT ===== */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT – INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Why Contact Acore IT Hub?
            </h3>


            {/* ===== CONTACT DETAILS (3D CARDS) ===== */}
            <div className="mt-10 grid gap-5">

              {/* Phone */}
              <motion.div
                whileHover={{ rotateX: 6, rotateY: -6, y: -4 }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex items-start gap-4 p-5 rounded-2xl
                  bg-white/5 backdrop-blur-2xl
                  border border-white/10
                  shadow-[0_15px_40px_rgba(0,0,0,0.6)]
                "
              >
                <FaPhoneAlt className="text-cyan-400 text-lg mt-1" />
                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <p className="font-medium">+91 88718 55460</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ rotateX: 6, rotateY: 6, y: -4 }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex items-start gap-4 p-5 rounded-2xl
                  bg-white/5 backdrop-blur-2xl
                  border border-white/10
                  shadow-[0_15px_40px_rgba(0,0,0,0.6)]
                "
              >
                <FaEnvelope className="text-cyan-400 text-lg mt-1" />
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="font-medium">info@acoreithub.com</p>
                </div>
              </motion.div>

              {/* Website */}
              <motion.div
                whileHover={{ rotateX: -6, rotateY: 6, y: -4 }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex items-start gap-4 p-5 rounded-2xl
                  bg-white/5 backdrop-blur-2xl
                  border border-white/10
                  shadow-[0_15px_40px_rgba(0,0,0,0.6)]
                "
              >
                <FaGlobe className="text-cyan-400 text-lg mt-1" />
                <div>
                  <p className="text-sm text-white/60">Website</p>
                  <p className="font-medium">www.acoreithub.com</p>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                whileHover={{ rotateX: -6, rotateY: -6, y: -4 }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex items-start gap-4 p-5 rounded-2xl
                  bg-white/5 backdrop-blur-2xl
                  border border-white/10
                  shadow-[0_15px_40px_rgba(0,0,0,0.6)]
                "
              >
                <FaMapMarkerAlt className="text-cyan-400 text-lg mt-1" />
                <div>
                  <p className="text-sm text-white/60">Address</p>
                  <p className="font-medium leading-relaxed">
                    16, “Intalee House”, Ratanlok Colony,<br />
                    Behind Apollo Premier, Vijay Nagar,<br />
                    Indore, India
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-white/5 backdrop-blur-2xl
              border border-white/10
              rounded-3xl p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.7)]
            "
          >
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl
                  bg-black/60 border border-white/10
                  focus:outline-none focus:border-cyan-400
                  text-white placeholder-white/50"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-xl
                  bg-black/60 border border-white/10
                  focus:outline-none focus:border-cyan-400
                  text-white placeholder-white/50"
              />

              <input
                type="text"
                placeholder="Project Type (Website / App / Software)"
                className="w-full px-5 py-4 rounded-xl
                  bg-black/60 border border-white/10
                  focus:outline-none focus:border-cyan-400
                  text-white placeholder-white/50"
              />

              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full px-5 py-4 rounded-xl
                  bg-black/60 border border-white/10
                  focus:outline-none focus:border-cyan-400
                  text-white placeholder-white/50 resize-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  mt-4 w-full py-4 rounded-xl font-semibold
                  bg-gradient-to-r from-cyan-500 to-blue-600
                  shadow-[0_0_40px_rgba(14,165,233,0.6)]
                "
              >
                Get Free Quote
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
