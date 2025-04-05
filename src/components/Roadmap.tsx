
import React from "react";
import { CalendarClock, Check, Sparkles, FileCheck, Building, Leaf, Users, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "@/components/ui/image";

const Roadmap = () => {
  const { t } = useLanguage();
  
  const milestones = [
    {
      year: "2023",
      title: t("roadmap.milestones.start"),
      description: t("roadmap.descriptions.start"),
      extendedDescription: t("roadmap.extendedDescriptions.start"),
      icon: Sparkles,
      completed: true,
    },
    {
      year: "2024",
      title: t("roadmap.milestones.poc"),
      description: t("roadmap.descriptions.poc"),
      extendedDescription: t("roadmap.extendedDescriptions.poc"),
      icon: Building,
      completed: true,
      current: true,
    },
    {
      year: "Q1 2025",
      title: t("roadmap.milestones.app05"),
      description: t("roadmap.descriptions.app05"),
      extendedDescription: t("roadmap.extendedDescriptions.app05"),
      icon: CalendarClock,
      completed: true,
    },
    {
      year: "Q3 2025",
      title: t("roadmap.milestones.app1"),
      description: t("roadmap.descriptions.app1"),
      extendedDescription: t("roadmap.extendedDescriptions.app1"),
      icon: Building,
      completed: false,
    },
    {
      year: "2026",
      title: t("roadmap.milestones.gov"),
      description: t("roadmap.descriptions.gov"),
      extendedDescription: t("roadmap.extendedDescriptions.gov"),
      icon: FileCheck,
      completed: false,
    },
    {
      year: "2026+",
      title: t("roadmap.milestones.carbon"),
      description: t("roadmap.descriptions.carbon"),
      extendedDescription: t("roadmap.extendedDescriptions.carbon"),
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg"
                alt="xCarbon App Mockup"
                className="w-full h-auto"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">{t("roadmap.appPreview")}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">{t("roadmap.mockupTitle")}</h3>
            <p className="text-muted-foreground mb-4">
              {t("roadmap.mockupDescription")}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>{t("roadmap.mockupFeature1")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>{t("roadmap.mockupFeature2")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>{t("roadmap.mockupFeature3")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className={`transition-all duration-300 ${
                      milestone.current ? 'border-primary shadow-lg' : 
                      milestone.completed ? 'border-green-500 shadow-md' : 'hover:border-primary/40'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`rounded-full p-2 ${
                            milestone.completed ? 'bg-green-500/20 text-green-500' : 
                            milestone.current ? 'bg-primary/20 text-primary animate-pulse' : 
                            'bg-accent text-accent-foreground'
                          }`}>
                            {milestone.completed ? <Check className="h-5 w-5" /> : <milestone.icon className="h-5 w-5" />}
                          </div>
                          <h3 className="text-xl font-semibold">{milestone.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-3">{milestone.description}</p>
                        <p className="text-sm">{milestone.extendedDescription}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center w-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                      milestone.current ? 'bg-primary text-primary-foreground animate-pulse' : 
                      milestone.completed ? 'bg-green-500 text-white' : 
                      'bg-card border border-primary/20 text-primary'
                    }`}>
                      <span className="text-sm font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
                
                {/* Mobile year indicator */}
                <div className="md:hidden absolute -left-2 top-6 bg-muted px-3 py-1 rounded-full text-sm font-semibold border border-border">
                  {milestone.year}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t("roadmap.partners.title")}</h3>
                <p className="text-muted-foreground mb-6">
                  {t("roadmap.partners.description")}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t("roadmap.partners.composting")}</h4>
                      <p className="text-sm text-muted-foreground">{t("roadmap.partners.compostingDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Rocket className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{t("roadmap.partners.investors")}</h4>
                      <p className="text-sm text-muted-foreground">{t("roadmap.partners.investorsDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h4 className="font-semibold mb-4">{t("roadmap.partners.contact")}</h4>
                <div className="space-y-2">
                  <p className="text-sm">{t("roadmap.partners.email")}: <span className="text-primary">partners@xcarbon.es</span></p>
                  <p className="text-sm">{t("roadmap.partners.phone")}: <span className="text-primary">+34 900 000 000</span></p>
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-md text-sm">
                  <p className="italic">"{t("roadmap.partners.quote")}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg font-medium text-primary">{t("roadmap.current")}</p>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            {t("roadmap.looking")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
