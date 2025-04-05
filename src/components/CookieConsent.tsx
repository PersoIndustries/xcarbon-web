
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieAccepted = localStorage.getItem("cookieConsent");
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              {t("cookieConsent.message")} 
              <Link to="/cookies" className="text-primary hover:underline ml-1">
                {t("cookieConsent.learnMore")}
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsVisible(false)}
            >
              {t("cookieConsent.decline")}
            </Button>
            <Button 
              size="sm" 
              onClick={acceptCookies}
            >
              {t("cookieConsent.accept")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
