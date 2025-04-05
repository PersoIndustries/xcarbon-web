
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart2, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/50 to-transparent" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-accent text-primary-foreground mb-6 text-sm font-medium animate-float">
            <Leaf size={16} className="mr-2" />
            <span>{t("hero.badge")}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("hero.title").split("xCarbon")[0]}<span className="text-primary">xCarbon</span>{t("hero.title").split("xCarbon")[1] || ""}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("hero.description")}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2 group">
              {t("hero.join")}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <BarChart2 size={16} />
              {t("hero.roadmap")}
            </Button>
          </div>
        </div>
        
        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 bg-card rounded-xl shadow-lg p-6">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">+30%</p>
            <p className="text-sm text-muted-foreground mt-1">{t("hero.stats.efficiency")}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">-25%</p>
            <p className="text-sm text-muted-foreground mt-1">{t("hero.stats.cost")}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">+45%</p>
            <p className="text-sm text-muted-foreground mt-1">{t("hero.stats.value")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
