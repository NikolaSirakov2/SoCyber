import "./App.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Certifications } from "@/components/Certifications";
import { Services } from "@/components/Services";
import { Media } from "@/components/Media";
import { CallToAction } from "@/components/CallToAction";
import { ContactPage } from "@/pages/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <TrustedBy />
                  <Certifications />
                  <Services />
                  <Media />
                  <CallToAction />
                </>
              }
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
