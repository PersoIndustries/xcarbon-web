
import React from "react";
import { CalendarClock, Check, Sparkles, FileCheck, Building, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Roadmap = () => {
  const { t } = useLanguage();
  
  const milestones = [
    {
      year: "2023",
      title: t("roadmap.milestones.start"),
      description: t("roadmap.descriptions.start"),
      icon: Sparkles,
      completed: true,
    },
    {
      year: "2024",
      title: t("roadmap.milestones.poc"),
      description: t("roadmap.descriptions.poc"),
      icon: Building,
      completed: true,
      current: true,
    },
    {
      year: "Q1 2025",
      title: t("roadmap.milestones.app05"),
      description: t("roadmap.descriptions.app05"),
      icon: CalendarClock,
      completed: false,
    },
    {
      year: "Q3 2025",
      title: t("roadmap.milestones.app1"),
      description: t("roadmap.descriptions.app1"),
      icon: Building,
      completed: false,
    },
    {
      year: "2026",
      title: t("roadmap.milestones.gov"),
      description: t("roadmap.descriptions.gov"),
      icon: FileCheck,
      completed: false,
    },
    {
      year: "2026+",
      title: t("roadmap.milestones.carbon"),
      description: t("roadmap.descriptions.carbon"),
      icon: Leaf,
      completed: false,
    },
  ];

  return (
    <section id="roadmap" className="section bg-muted/50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">{t("roadmap.title")}</h2>
          <p className="text-muted-foreground text-lg">
            {t("roadmap.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className={`transition-all duration-300 ${milestone.current ? 'border-primary shadow-lg' : 'hover:border-primary/40'}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`rounded-full p-2 ${milestone.completed ? 'bg-primary/20 text-primary' : 'bg-accent text-accent-foreground'}`}>
                            {milestone.completed ? <Check className="h-5 w-5" /> : <milestone.icon className="h-5 w-5" />}
                          </div>
                          <h3 className="text-xl font-semibold">{milestone.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center w-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${milestone.current ? 'bg-primary text-primary-foreground animate-pulse' : milestone.completed ? 'bg-primary text-primary-foreground' : 'bg-card border border-primary/20 text-primary'}`}>
                      <span className="text-sm font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
                
                {/* Mobile year indicator */}
                <div className="md:hidden absolute -left-2 top-6 bg-muted px-2 py-1 rounded text-sm font-semibold border border-border">
                  {milestone.year}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg font-medium text-primary">{t("roadmap.current")}</p>
          <p className="text-muted-foreground mt-2">
            {t("roadmap.looking")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
