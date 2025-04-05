
import React from "react";
import { Brain, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const AISection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="ai-innovation" className="section">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <Card className="border border-primary/20">
                <CardContent className="pt-6 p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 shrink-0">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{t("ai.algorithms.title")}</h3>
                      <p className="text-muted-foreground">
                        {t("ai.algorithms.description")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-primary/20">
                <CardContent className="pt-6 p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 shrink-0">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{t("ai.optimization.title")}</h3>
                      <p className="text-muted-foreground">
                        {t("ai.optimization.description")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-primary/20">
                <CardContent className="pt-6 p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 shrink-0">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{t("ai.automation.title")}</h3>
                      <p className="text-muted-foreground">
                        {t("ai.automation.description")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h2 className="mb-6">{t("ai.title")}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("ai.description")}
              </p>
              <p className="text-lg mb-6">
                <span className="font-semibold text-primary">{t("ai.roadmap")}</span> {t("ai.roadmap_description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
