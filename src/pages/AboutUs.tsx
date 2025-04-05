
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import JoinEcosystem from "@/components/JoinEcosystem";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const AboutUs = () => {
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
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
          </div>
          <Mission />
          <Team />
        </div>
        <JoinEcosystem />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AboutUs;
