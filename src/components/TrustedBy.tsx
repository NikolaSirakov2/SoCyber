import { motion } from "framer-motion";

export function TrustedBy() {
  return (
    <section className="w-full bg-[#001f35] pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-4 pb-4"
        >
          Trusted By :
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="/trustedBy.png"
            alt="Our trusted partners"
            className="w-full max-w-5xl object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
