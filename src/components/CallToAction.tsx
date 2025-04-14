import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="relative w-full bg-[#020B2D] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-[url('/pattern.png')] bg-repeat opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-blue-600/10" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Solve your security challenges today!
          </h2>

          <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto">
            We are ready to guide you through the hardest cybersecurity risks.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-lg font-semibold text-white border-2 border-white/20 rounded-lg
                     bg-transparent backdrop-blur-sm
                     hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-cyan-500/30
                     transition-all duration-300 ease-out"
          >
            GET IN TOUCH
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"
      />
    </section>
  );
}
