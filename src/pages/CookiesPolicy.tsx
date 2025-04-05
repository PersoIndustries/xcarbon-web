
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const CookiesPolicy = () => {
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
          <h1 className="text-3xl font-bold mb-8">{t("cookies.title")}</h1>
          
          <div className="prose max-w-none">
            <p>{t("cookies.lastUpdated")} 05-04-2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("cookies.introduction.title")}</h2>
            <p>{t("cookies.introduction.content")}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("cookies.what.title")}</h2>
            <p>{t("cookies.what.content")}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("cookies.types.title")}</h2>
            <p>{t("cookies.types.content")}</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>{t("cookies.types.items.essential.title")}</strong>: {t("cookies.types.items.essential.content")}</li>
              <li><strong>{t("cookies.types.items.preferences.title")}</strong>: {t("cookies.types.items.preferences.content")}</li>
              <li><strong>{t("cookies.types.items.statistics.title")}</strong>: {t("cookies.types.items.statistics.content")}</li>
              <li><strong>{t("cookies.types.items.marketing.title")}</strong>: {t("cookies.types.items.marketing.content")}</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("cookies.manage.title")}</h2>
            <p>{t("cookies.manage.content")}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("cookies.contact.title")}</h2>
            <p>{t("cookies.contact.content")} <a href="mailto:info@xcarbon.io" className="text-primary">info@xcarbon.io</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
