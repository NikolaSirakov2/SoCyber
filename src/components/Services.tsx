import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "External & Internal Network Penetration Testing",
    description: [
      "The test will reveal attack vectors for unauthorized access, data leaks, corporate wifi, and reveal risks associated with publicly accessible systems.",
      "Identify and exploit vulnerabilities in network devices hosts, and online assets. The test simulate real world activities of malicious actors in live environment.",
    ],
    scope: [
      "Information gathering",
      "Ports scanning",
      "Vulnerability scanning",
      "Password cracking",
      "Layer 2 Attacks",
      "Layer 3 Attacks",
      "Network / OS Layer Attacks",
      "DHCP and DNS Weaknesses",
      "Various OS Weaknesses",
      "Advanced Attacks",
      "Protocol Fuzzing",
      "Cryptographic Weaknesses",
    ],
  },
  {
    title: "SCADA/ICS Penetration Testing",
    description: [
      "Enhance the security posture of critical infrastructure by simulating real world attacks on control systems to discover weaknesses that can be abused by malicious third-parties.",
      "Guarantee the safety and security of your assets using well-established and proven frameworks for SCADA pentesting by MITRE ATT&CK®.",
    ],
    scope: [
      "Information Gathering / Lab Crafting",
      "Deploying Management Testing",
      "Identity Management Testing",
      "Password Authentication Testing",
      "Session Management Testing",
      "Error Handling",
      "Business Logic Testing",
      "TCP XMAS Scan",
      "TCP ACK Scan",
      "UDP ICMP Port Scan",
    ],
  },
  {
    title: "Vulnerability Assessment",
    description: [
      "The assessment consists of scanning, identification, and classification of security vulnerabilities in an asset, network, or communications infrastructure.",
      "The assessment proposes countermeasures and evaluation techniques to measure and monitor effective remediation.",
    ],
    scope: [
      "Asset identification and categorization",
      "Manual classification review",
      "Identify potential threats",
      "Prioritize vulnerabilities",
      "Propose mitigation strategies",
    ],
  },
  {
    title: "Security Audit of Physical devices",
    description: [
      "A comprehensive and formal review of system security and a broad, thorough review of physical attributes (networks, firewalls, hardware, etc.).",
      "SoCyber provides a systematic and measurable technical assessment of a group of assets or particular asset, based on the applied security policies in the organization.",
    ],
    scope: [
      "Authentication and access",
      "Status of access control rules",
      "Check for availability of logs",
      "Verification of logs monitoring",
      "Systems security settings",
      "Systems update checks",
      "Review of Recovery Plan",
      "Verification of encryption mechanisms",
      "Inventory check of physical devices",
      "Identify and remove unnecessary software",
    ],
  },
  {
    title: "Mobile Application Penetration Test",
    description: [
      "Evaluate the strength of client-side, hardware, file system, and network security using established methodologies.",
      "Analyze data protection, authentication and commumication infrastructure of mobile applications of any size.",
    ],
    scope: [
      "Architecture, Design, and Threat Modelling",
      "Data Storage and Privacy",
      "Cryptography Verification",
      "Authentication and Session Management",
      "Network Communication",
      "Environmental Interaction",
      "Code Quality and Build Settings",
      "Resiliency Against Reverse Engineering",
      "Authentication on sensitive functions",
      "Attempt to access prohibited information",
      "SQL Injection",
      "Attempt to bypass the SSL mechanisms",
    ],
  },
  {
    title: "Web Application Penetration Test",
    description: [
      "Identifies any vulnerabilities, security flaws, or threats in web applications via manual or automated intrusion methods.",
      "Provides actionable insights to help prioritize vulnerabilities and threats, and suggest appropriate remediation strategies.",
    ],
    scope: [
      "Information Gathering",
      "Configuration and Deployment Management",
      "Identity Management Testing",
      "Authentication Testing",
      "Authorization Testing",
      "Business Logic Testing",
      "Session Management Testing",
      "Input Validation Testing",
      "Testing for Error Handling",
      "Verification of encryption mechanisms",
      "Testing for weak Cryptography",
      "Client-Side Testing",
    ],
  },
  {
    title: "WiFi audit / Wireless Penetration Testing",
    description: [
      "Keep your WiFi in check with a thorough investigation of wireless network's security. Identify active access points and pinpoint weaknesses in configuration settings via extensive testing.",
    ],
    scope: [
      "Wireless Penetration Testing",
      "WiFi Sniffing",
      "AP Analysis",
      "Bypassing Authentication",
      "Sidejacking Attacks",
      "WiFi Timing Attacks",
      "Client Isolation Attacks",
      "WiFi Network Injection",
      "WEP Exploitation",
      "WiFi Fuzzing",
      "MS-CHAP2 Cracking",
      "WPA2 Key Derivation Analysis",
    ],
  },
  {
    title: "API Penetration Testing",
    description: [
      "Comprehensive assessment of in-house or third-party API services. Ensure data integrity and security via in-depth analysis of inbound data flows.",
    ],
    scope: [
      "Fuzz Testing",
      "Command Injection",
      "Authentication and Session Management",
      "Test Unhandled HTTP Methods",
      "(Un) Authorized Endpoints and Methods",
      "Parameter Tampering",
    ],
  },
  {
    title: "Virtual CISO",
    description: [
      "Enlist the aid of a seasoned cybersecurity professional to provide strategic leadership and guidance on a flexible, part-time basis.",
      "Get access to high-level expertise when you need it most, without the associated overhead costs.",
    ],
    scope: [
      "Implementing Policies and Procedures",
      "Risk Management",
      "Vulnerability Management",
      "Vulnerability Scanning",
      "Asset Management",
      "Incident response reactions",
      "Encryption",
      "Visitor control",
      "Physical access",
      "Individual accountability",
    ],
  },
  {
    title: "Vulnerability Management",
    description: [
      "Stay ahead of security threats with a comprehensive vulnerability management service, tailored to your specific needs.",
      "By continuously identifying, assessing, prioritizing, and remediating vulnerabilities, organizations can significantly reduce their risk of suffering a data breach or other security incident.",
    ],
    scope: [
      "Password Security",
      "Security policies",
      "Data backup and storage",
      "Social engineering",
      "Secure web usage",
      "Incident response reactions",
      "Encryption",
      "Visitor control",
      "Physical access",
      "Individual accountability",
    ],
  },
  {
    title: "Security Awareness Training",
    description: [
      "Security awareness educates employees about computer security and the potential threats inside and outside of their professional environment.",
      "Our program teaches employees the best practices to protect themselves and tech infrastructure from malicious third-parties.",
    ],
    scope: [
      "Password Security",
      "Security policies",
      "Data backup and storage",
      "Social engineering",
      "Secure web usage",
      "Incident response reactions",
      "Encryption",
      "Visitor control",
      "Physical access",
      "Individual accountability",
    ],
  },
  {
    title: "Social Engineering Testing",
    description: [
      "A pre-planned process of attempting scams or deception on a company's employees, testing implementation and practice of security policies.",
      "The test gives a clear overview of current practices and areas of improvement in staff awareness and secure handling of information.",
    ],
    scope: [
      "By Phishing",
      "Using E-Mail",
      "By Traditional Mail",
      "Social Engineering in Person",
      "Dumpster Diving",
      "Using an Insider Accomplice",
      "Using Web Sites",
      "Attempt to Obtain Employee's Details",
      "Identity Theft and Phishing Attacks",
    ],
  },
];

export function Services() {
  const [expandedScopes, setExpandedScopes] = useState<Set<string>>(new Set());

  const toggleScope = (title: string) => {
    setExpandedScopes((prev) => {
      const newScopes = new Set(prev);
      if (newScopes.has(title)) {
        newScopes.delete(title);
      } else {
        newScopes.add(title);
      }
      return newScopes;
    });
  };

  return (
    <section className="w-full bg-[#001f35] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const isExpanded = expandedScopes.has(service.title);

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black bg-opacity-50 rounded-xl p-6"
                style={{ height: "fit-content" }}
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    {service.description.map((desc, i) => (
                      <p key={i} className="text-gray-300 text-sm">
                        {desc}
                      </p>
                    ))}
                  </div>

                  {isExpanded && service.scope && service.scope.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-2 gap-x-8 gap-y-2 mb-4"
                    >
                      {service.scope.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-teal-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  <button
                    onClick={() => toggleScope(service.title)}
                    className="text-white bg-transparent text-sm mt-auto self-start"
                  >
                    {isExpanded ? "− Scope" : "+ Scope"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
