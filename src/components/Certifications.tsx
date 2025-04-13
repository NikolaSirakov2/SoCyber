import { motion } from "framer-motion";

export function Certifications() {
  return (
    <section className="w-full bg-[#001f35] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-white text-lg">
              SoCyber experts are dedicated to protecting your digital and
              physical infrastructure, bringing a considerable experience in
              safeguarding enterprise networks, fintech platforms, and critical
              infrastructure.
            </p>

            <img
              src="/all-certificates.png"
              alt="SoCyber Certifications"
              className="w-full object-contain"
            />

            <p className="text-white text-lg">
              Certified to cover cybersecurity and regulatory frameworks and
              assist your organization in all levels of security risks.
            </p>
          </motion.div>

          {/* Right Column - CEO Quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black rounded-3xl p-12 relative overflow-hidden"
          >
            {/* Placeholder Image */}
            <div className="absolute top-12 right-8 w-[250px] h-72">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23666666'/%3E%3C/svg%3E"
                alt="CEO"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <div className="max-w-[45%] space-y-6 mr-8">
              <h2 className="text-3xl text-white font-semibold leading-[1.4] tracking-tight">
                "We help
                <br />
                organizations
                <br />
                solve their most
                <br />
                complex security
                <br />
                challenges!"
              </h2>

              <div className="text-white">
                <p className="text-xl">Krasimir Kotsev,</p>
                <p className="text-lg text-gray-400">CEO, SoCyber</p>
              </div>
            </div>

            <div className="w-full mt-12">
              <h3 className="text-2xl text-white mb-4">
                Need assistance in identifying your organization's{" "}
                <span className="text-orange-500">security</span> priorities?
              </h3>

              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Get in touch
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
