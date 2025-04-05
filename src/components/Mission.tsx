
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Mission = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="section">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">{t("mission.title")}</h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t("mission.paragraph1")}
            </p>
            <p className="text-lg mb-6">
              {t("mission.paragraph2")}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="border border-primary/20">
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">+50</h3>
                  <p className="text-sm text-muted-foreground">{t("mission.stats.plants")}</p>
                </CardContent>
              </Card>
              <Card className="border border-primary/20">
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">25k</h3>
                  <p className="text-sm text-muted-foreground">{t("mission.stats.tons")}</p>
                </CardContent>
              </Card>
              <Card className="border border-primary/20">
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">3.2k</h3>
                  <p className="text-sm text-muted-foreground">{t("mission.stats.credits")}</p>
                </CardContent>
              </Card>
              <Card className="border border-primary/20">
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">15+</h3>
                  <p className="text-sm text-muted-foreground">{t("mission.stats.provinces")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-muted rounded-xl p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-4">{t("mission.values.title")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3 mt-1">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <div>
                  <h4 className="font-medium">{t("mission.values.sustainability.title")}</h4>
                  <p className="text-muted-foreground">{t("mission.values.sustainability.description")}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3 mt-1">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <div>
                  <h4 className="font-medium">{t("mission.values.innovation.title")}</h4>
                  <p className="text-muted-foreground">{t("mission.values.innovation.description")}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3 mt-1">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <div>
                  <h4 className="font-medium">{t("mission.values.transparency.title")}</h4>
                  <p className="text-muted-foreground">{t("mission.values.transparency.description")}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3 mt-1">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <div>
                  <h4 className="font-medium">{t("mission.values.impact.title")}</h4>
                  <p className="text-muted-foreground">{t("mission.values.impact.description")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
