import { useState } from "react";
import { useTranslation } from "react-i18next";

interface FormData {
  firstName: string;
  lastName: string;
  businessEmail: string;
  businessPhone: string;
  message: string;
  consent: boolean;
}

export function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    businessEmail: "",
    businessPhone: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#274255] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-medium mb-2">CONTACT US</h2>
              <h1 className="text-5xl font-bold mb-4">
                Your First Step Towards
                <br />
                Safe & Trustworthy AI
              </h1>
              <p className="text-gray-400 text-lg">
                Reach out and we will be in touch shortly. If you prefer
                <br />
                sending us an email, you can do that at{" "}
                <a href="mailto:info@socyber.ai" className="text-[#4FD1C5]">
                  info@socyber.ai
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#4FD1C5] mb-4">
                Building, deploying, or scaling AI systems? SoCyber is your
                partner in security, compliance, and trust.
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#4FD1C5] mr-2">
                    ✓
                  </div>
                  <p>
                    Get a detailed demo of the SoCyber Platform and see how we
                    automate and scale AI red teaming to uncover and remediate
                    vulnerabilities more efficiently.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#4FD1C5] mr-2">
                    ✓
                  </div>
                  <p>
                    Stay audit-ready with streamlined compliance support to
                    align with evolving AI policies and established AI security
                    best practices.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#4FD1C5] mr-2">
                    ✓
                  </div>
                  <p>
                    Get tailored AI risk assessments for your AI applications,
                    agents, and custom workflows to identify real threats before
                    adversaries can exploit them.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#0A2540] rounded border border-gray-700 focus:border-[#4FD1C5] focus:ring-1 focus:ring-[#4FD1C5]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#0A2540] rounded border border-gray-700 focus:border-[#4FD1C5] focus:ring-1 focus:ring-[#4FD1C5]"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="businessEmail" className="block text-sm mb-2">
                  Business Email*
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#0A2540] rounded border border-gray-700 focus:border-[#4FD1C5] focus:ring-1 focus:ring-[#4FD1C5]"
                  required
                />
              </div>

              <div>
                <label htmlFor="businessPhone" className="block text-sm mb-2">
                  Business Phone
                </label>
                <input
                  type="tel"
                  id="businessPhone"
                  name="businessPhone"
                  value={formData.businessPhone}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#0A2540] rounded border border-gray-700 focus:border-[#4FD1C5] focus:ring-1 focus:ring-[#4FD1C5]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#0A2540] rounded border border-gray-700 focus:border-[#4FD1C5] focus:ring-1 focus:ring-[#4FD1C5]"
                  required
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-[#4FD1C5]">🔒</span>
                <p>
                  We will always store your information safely and securely. See
                  our{" "}
                  <a href="/privacy-policy" className="text-[#4FD1C5]">
                    privacy policy
                  </a>{" "}
                  for more details.
                </p>
              </div>

              <button
                type="submit"
                className="w-32 py-3 px-6 bg-[#4FD1C5] text-white rounded hover:bg-[#45B8AE] transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
