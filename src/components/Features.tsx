
import React from "react";
import { BadgeCheck, LineChart, BarChart, Recycle, Clock, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t("features.items.monitoring.title"),
      description: t("features.items.monitoring.description"),
      icon: Clock,
    },
    {
      title: t("features.items.analytics.title"),
      description: t("features.items.analytics.description"),
      icon: BarChart,
    },
    {
      title: t("features.items.resources.title"),
      description: t("features.items.resources.description"),
      icon: Database,
    },
    {
      title: t("features.items.traceability.title"),
      description: t("features.items.traceability.description"),
      icon: Recycle,
    },
    {
      title: t("features.items.compliance.title"),
      description: t("features.items.compliance.description"),
      icon: BadgeCheck,
    },
    {
      title: t("features.items.reports.title"),
      description: t("features.items.reports.description"),
      icon: LineChart,
    },
  ];

  return (
    <section id="features" className="section bg-muted">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">{t("features.title")}</h2>
          <p className="text-muted-foreground text-lg">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border hover:border-primary/40 transition-colors duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
