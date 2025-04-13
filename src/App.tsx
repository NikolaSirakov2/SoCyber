import "./App.css";
import { Navbar } from "@/components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
            <h1 className="text-4xl font-bold">{t("home.welcome")}</h1>
            <div className="flex gap-4"></div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
