import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  { name: "Penetration testing", id: 1 },
  { name: "Social engineering", id: 2 },
  { name: "Regulatory compliance", id: 3 },
  { name: "API Penetration Test", id: 4 },
  { name: "Vulnerability Assessment", id: 5 },
  { name: "Secure code audit", id: 6 },
  { name: "Virtual CISO", id: 7 },
  { name: "Social Awareness", id: 8 },
];

const stats = [
  { text: "Over 220 Projects Closed", id: 1 },
  { text: "424 Vulnerabilities found", id: 2 },
  { text: "137 happy partners, and counting", id: 3 },
];

export function Hero() {
  return (
    <div className="w-full min-h-screen bg-[#001f35] flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-6xl font-bold text-white leading-tight">
              Cybersecurity
              <br />
              Compliance
              <br />
              Resilience
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              A team of seasoned cybersecurity experts, helping organizations
              achieve their security objectives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                className="flex items-center gap-2 text-lg"
              >
                <Check className="text-teal-500 h-6 w-6" />
                <span className="text-white">{stat.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Protect your business from cyber threats with our tailored
                cybersecurity solutions.
              </h2>
              <p className="mt-2 text-gray-600">
                Request a personalized quote by filling the form!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service.id} className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-teal-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{service.name}</span>
                </div>
              ))}
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-600 transition-colors"
              >
                Get Quote
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
