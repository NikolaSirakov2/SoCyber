import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

interface NavItem {
  label: keyof typeof translations.navigation;
  href: string;
}

const translations = {
  navigation: {
    home: "navigation.home",
    company: "navigation.company",
    services: "navigation.services",
    customers: "navigation.customers",
    blog: "navigation.blog",
  },
} as const;

const navItems: NavItem[] = [
  { label: "home", href: "/" },
  { label: "company", href: "/company" },
  { label: "services", href: "/services" },
  { label: "customers", href: "/customers" },
  { label: "blog", href: "/blog" },
];

export function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "bg" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full bg-[#001524] text-white z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
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

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm hover:text-blue-400 transition-colors"
              >
                {t(translations.navigation[item.label])}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-blue-400 hover:text-blue-300 rounded-full px-4 font-medium"
            >
              {i18n.language === "en" ? "BG" : "EN"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-transparent hover:from-blue-600 hover:to-blue-700 rounded-full px-6 font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
            >
              <Link to="/contact">
                <Phone className="h-4 w-4" />
                <span>{t("navigation.bookCall")}</span>
              </Link>
            </Button>
          </div>

          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white rounded-full"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
