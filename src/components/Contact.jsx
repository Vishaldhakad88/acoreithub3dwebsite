import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">

      {/* ===== SOFT BLUE ACCENT (SUBTLE) ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.18),transparent_45%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
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

        {/* Content */}
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

            <ul className="space-y-4 text-white/75">
              <li>✔ Free project consultation</li>
              <li>✔ Clear cost & timeline estimation</li>
              <li>✔ Modern & scalable technology stack</li>
              <li>✔ Dedicated technical support</li>
            </ul>

            <p className="mt-8 text-white/60">
              We usually respond within <span className="text-cyan-400">24 hours</span>.
            </p>
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
