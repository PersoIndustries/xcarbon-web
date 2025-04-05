
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const TermsOfService = () => {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold mb-8">{t("terms.title")}</h1>
          
          <div className="prose max-w-none">
            <p>{t("terms.lastUpdated")} 05-04-2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("terms.introduction.title")}</h2>
            <p>{t("terms.introduction.content")}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("terms.usage.title")}</h2>
            <p>{t("terms.usage.content")}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("terms.account.title")}</h2>
            <p>{t("terms.account.content")}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("terms.intellectual.title")}</h2>
            <p>{t("terms.intellectual.content")}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("terms.liability.title")}</h2>
            <p>{t("terms.liability.content")}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("terms.amendments.title")}</h2>
            <p>{t("terms.amendments.content")}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("terms.contact.title")}</h2>
            <p>{t("terms.contact.content")} <a href="mailto:info@xcarbon.io" className="text-primary">info@xcarbon.io</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
