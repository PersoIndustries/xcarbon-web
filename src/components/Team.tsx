
import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("team.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("team.description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border bg-card overflow-hidden">
            <CardContent className="p-6">
              <div className="aspect-square bg-muted rounded-full w-32 h-32 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-center">{t("team.members.member1.name")}</h3>
              <p className="text-primary text-center mb-4">{t("team.members.member1.position")}</p>
              <p className="text-muted-foreground text-center">{t("team.members.member1.bio")}</p>
            </CardContent>
          </Card>
          
          <Card className="border bg-card overflow-hidden">
            <CardContent className="p-6">
              <div className="aspect-square bg-muted rounded-full w-32 h-32 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-center">{t("team.members.member2.name")}</h3>
              <p className="text-primary text-center mb-4">{t("team.members.member2.position")}</p>
              <p className="text-muted-foreground text-center">{t("team.members.member2.bio")}</p>
            </CardContent>
          </Card>
          
          <Card className="border bg-card overflow-hidden">
            <CardContent className="p-6">
              <div className="aspect-square bg-muted rounded-full w-32 h-32 mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-center">{t("team.members.member3.name")}</h3>
              <p className="text-primary text-center mb-4">{t("team.members.member3.position")}</p>
              <p className="text-muted-foreground text-center">{t("team.members.member3.bio")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
