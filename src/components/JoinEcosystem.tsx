
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Link } from "react-router-dom";

const JoinEcosystem = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("roadmap.partners.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("roadmap.partners.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("roadmap.partners.composting")}</h3>
                    <p className="text-muted-foreground mb-4">{t("roadmap.partners.compostingDesc")}</p>
                    <Link to="/contact">
                      <Button variant="outline" size="sm">{t("contact.form.submit")}</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t("roadmap.partners.investors")}</h3>
                    <p className="text-muted-foreground mb-4">{t("roadmap.partners.investorsDesc")}</p>
                    <Link to="/contact">
                      <Button variant="outline" size="sm">{t("contact.form.submit")}</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 bg-card p-6 rounded-lg shadow-sm border">
            <div className="text-center">
              <p className="text-lg font-medium mb-4">{t("roadmap.partners.quote")}</p>
              <Link to="/contact">
                <Button>{t("cta.contact")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinEcosystem;
