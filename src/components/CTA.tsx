
import React from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const CTA = () => {
  const { t } = useLanguage();
  
  return (
    <section className="section bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">{t("cta.title")}</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Send size={16} />
              {t("cta.join")}
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
              {t("cta.contact")}
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold">{t("cta.stats.pilot")}</p>
              <p className="text-sm text-primary-foreground/80">{t("cta.subStats.pilot")}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{t("cta.stats.implementation")}</p>
              <p className="text-sm text-primary-foreground/80">{t("cta.subStats.implementation")}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{t("cta.stats.support")}</p>
              <p className="text-sm text-primary-foreground/80">{t("cta.subStats.support")}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{t("cta.stats.roi")}</p>
              <p className="text-sm text-primary-foreground/80">{t("cta.subStats.roi")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
