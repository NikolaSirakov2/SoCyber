import "./App.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
        <Navbar />
        <main className="flex-1 w-full mb-[280px]">
          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <h1 className="text-4xl font-bold">{t("home.welcome")}</h1>
            <div className="flex gap-4"></div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
