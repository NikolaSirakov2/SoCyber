import { Link } from "react-router-dom";
import { Facebook, Linkedin, MapPin, Phone, Mail, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#001524] text-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Logo */}
          <div className="flex items-center justify-start h-full">
            <Link to="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <div className="flex flex-col">
                <span className="font-['Orbitron'] text-lg font-bold tracking-wider text-blue-400">
                  SoCyber
                </span>
                <span className="text-xs -mt-1 text-gray-300">
                  makes you feel secure
                </span>
              </div>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <div className="flex flex-col">
                <span>zh.k. Hipodruma</span>
                <span>Building 107A, Ap. 1</span>
                <span>1612 Sofia</span>
              </div>
            </div>
          </div>

          {/* Phone & Email */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <a
                href="tel:+359876761555"
                className="hover:text-blue-400 transition-colors"
              >
                + 359 876 761 555
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <a
                href="mailto:office@so-cyber.com"
                className="hover:text-blue-400 transition-colors"
              >
                office@so-cyber.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-2">
            <Link
              to="/data-privacy"
              className="hover:text-blue-400 transition-colors"
            >
              {t("footer.links.dataPrivacy")}
            </Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">
              {t("footer.links.termsOfUse")}
            </Link>
            <Link to="/faq" className="hover:text-blue-400 transition-colors">
              {t("footer.links.faq")}
            </Link>
          </div>

          {/* Social & Certification */}
          <div className="flex items-center justify-end gap-6">
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/socyber"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/socyber"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div>
              <img
                src="/certification.png"
                alt="SoCyber Certification"
                className="h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
