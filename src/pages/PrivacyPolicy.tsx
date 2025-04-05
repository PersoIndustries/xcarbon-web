
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl font-bold mb-8">{t("privacy.title")}</h1>
          
          <div className="prose max-w-none">
            <p>{t("privacy.lastUpdated")} 05-04-2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("privacy.introduction.title")}</h2>
            <p>{t("privacy.introduction.content")}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("privacy.dataCollection.title")}</h2>
            <p>{t("privacy.dataCollection.content")}</p>
            <ul className="list-disc pl-6 mb-4">
              <li>{t("privacy.dataCollection.items.personal")}</li>
              <li>{t("privacy.dataCollection.items.usage")}</li>
              <li>{t("privacy.dataCollection.items.technical")}</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("privacy.dataUse.title")}</h2>
            <p>{t("privacy.dataUse.content")}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("privacy.dataSharing.title")}</h2>
            <p>{t("privacy.dataSharing.content")}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("privacy.rights.title")}</h2>
            <p>{t("privacy.rights.content")}</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{t("privacy.contact.title")}</h2>
            <p>{t("privacy.contact.content")} <a href="mailto:info@xcarbon.io" className="text-primary">info@xcarbon.io</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
