import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const services = [
  {
    title: "External & Internal Network Penetration Testing",
    description: [
      "The test will reveal attack vectors for unauthorized access, data leaks, corporate wifi, and reveal risks associated with publicly accessible systems.",
      "Identify and exploit vulnerabilities in network devices hosts, and online assets. The test simulate real world activities of malicious actors in live environment.",
    ],
  },
  {
    title: "SCADA/ICS Penetration Testing",
    description: [
      "Enhance the security posture of critical infrastructure by simulating real world attacks on control systems to discover weaknesses that can be abused by malicious third-parties.",
      "Guarantee the safety and security of your assets using well-established and proven frameworks for SCADA pentesting by MITRE ATT&CK®.",
    ],
  },
  {
    title: "Vulnerability Assessment",
    description: [
      "The assessment consists of scanning, identification, and classification of security vulnerabilities in an asset, network, or communications infrastructure.",
      "The assessment proposes countermeasures and evaluation techniques to measure and monitor effective remediation.",
    ],
  },
  {
    title: "Security Audit of Physical devices",
    description: [
      "A comprehensive and formal review of system security and a broad, thorough review of physical attributes (networks, firewalls, hardware, etc.).",
      "SoCyber provides a systematic and measurable technical assessment of a group of assets or particular asset, based on the applied security policies in the organization.",
    ],
  },
  {
    title: "Mobile Application Penetration Test",
    description: [
      "Evaluate the strength of client-side, backend, file system, and network security using established methodologies.",
      "Analyze data protection, authentication and commumication infrastructure of mobile applications of any size.",
    ],
  },
  {
    title: "Web Application Penetration Test",
    description: [
      "Identifies any vulnerabilities, security flaws, or threats in web applications via manual or automated intrusion methods.",
      "Provides actionable insights to help prioritize vulnerabilities and threats, and suggest appropriate remediation strategies.",
    ],
  },
  {
    title: "WiFi audit / Wireless Penetration Testing",
    description: [
      "Keep your WiFi in check with a thorough investigation of wireless network's security. Identify active access points and pinpoint weaknesses in configuration settings via extensive testing.",
    ],
  },
  {
    title: "API Penetration Testing",
    description: [
      "Comprehensive assessment of in-house or third-party API services. Ensure data integrity and security via in-depth analysis of inbound data flows.",
    ],
  },
  {
    title: "Virtual CISO",
    description: [
      "Enlist the aid of a seasoned cybersecurity professional to provide strategic leadership and guidance on a flexible, part-time basis.",
      "Get access to high-level expertise when you need it most, without the associated overhead costs.",
    ],
  },
  {
    title: "Vulnerability Management",
    description: [
      "Stay ahead of security threats with a comprehensive vulnerability management service, tailored to your specific needs.",
      "By continuously identifying, assessing, prioritizing, and remediating vulnerabilities, organizations can significantly reduce their risk of suffering a data breach or other security incident.",
    ],
  },
  {
    title: "Security Awareness Training",
    description: [
      "Security awareness educates employees about computer security and the potential threats inside and outside of their professional environment.",
      "Our program teaches employees the best practices to protect themselves and tech infrastructure from malicious third-parties.",
    ],
  },
  {
    title: "Social Engineering Testing",
    description: [
      "A pre-planned process of attempting scams or deception on a company's employees, testing implementation and practice of security policies.",
      "The test gives a clear overview of current practices and areas of improvement in staff awareness and secure handling of information.",
    ],
  },
];

export function Services() {
  return (
    <section className="w-full bg-[#001f35] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black bg-opacity-50 rounded-xl p-6 space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <button className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="space-y-2">
                {service.description.map((desc, i) => (
                  <p key={i} className="text-gray-300 text-sm">
                    {desc}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
