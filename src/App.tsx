import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DefaultLayout from "./layouts/DefaultLayout";

const Home = lazy(() => import("./pages/Home"));
const Infrastructure = lazy(() => import("./pages/Infrastructure"));
const TechnicalSupport = lazy(() => import("./pages/TechnicalSupport"));
const Cloud = lazy(() => import("./pages/Cloud"));
const Security = lazy(() => import("./pages/Security"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// Páginas do Footer
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

export default function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen text-blue-600 font-medium">
            {t("Carregando...")}
          </div>
        }
      >
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/services/infrastructure"
              element={<Infrastructure />}
            />
            <Route path="/services/support" element={<TechnicalSupport />} />
            <Route path="/services/cloud" element={<Cloud />} />
            <Route path="/services/security" element={<Security />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
