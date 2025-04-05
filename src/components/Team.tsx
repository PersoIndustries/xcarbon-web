
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border bg-card overflow-hidden">
            <CardContent className="p-6">
              <div className="aspect-square bg-muted rounded-full w-40 h-40 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" 
                  alt={t("team.members.member1.name")}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-center">{t("team.members.member1.name")}</h3>
              <p className="text-primary text-center mb-4">{t("team.members.member1.position")}</p>
              <p className="text-muted-foreground text-center">{t("team.members.member1.bio")}</p>
            </CardContent>
          </Card>
          
          <Card className="border bg-card overflow-hidden">
            <CardContent className="p-6">
              <div className="aspect-square bg-muted rounded-full w-40 h-40 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" 
                  alt={t("team.members.member2.name")}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-center">{t("team.members.member2.name")}</h3>
              <p className="text-primary text-center mb-4">{t("team.members.member2.position")}</p>
              <p className="text-muted-foreground text-center">{t("team.members.member2.bio")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
