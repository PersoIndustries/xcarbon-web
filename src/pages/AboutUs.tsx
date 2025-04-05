
import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Sparkles, Leaf } from "lucide-react";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">
        {/* Mission Section (moved from home page) */}
        <section id="about-mission" className="section">
          <div className="container mx-auto container-padding py-16">
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
                  <Card className="border border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-4 text-center">
                      <h3 className="text-2xl font-bold text-primary mb-1">+50</h3>
                      <p className="text-sm text-muted-foreground">{t("mission.stats.plants")}</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-4 text-center">
                      <h3 className="text-2xl font-bold text-primary mb-1">25k</h3>
                      <p className="text-sm text-muted-foreground">{t("mission.stats.tons")}</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-4 text-center">
                      <h3 className="text-2xl font-bold text-primary mb-1">3.2k</h3>
                      <p className="text-sm text-muted-foreground">{t("mission.stats.credits")}</p>
                    </CardContent>
                  </Card>
                  <Card className="border border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-4 text-center">
                      <h3 className="text-2xl font-bold text-primary mb-1">15+</h3>
                      <p className="text-sm text-muted-foreground">{t("mission.stats.tons")}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="bg-muted rounded-xl p-6 lg:p-8">
                <h3 className="text-xl font-semibold mb-4">{t("mission.values.title")}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <Leaf className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <h4 className="font-medium">{t("mission.values.sustainability.title")}</h4>
                      <p className="text-muted-foreground">{t("mission.values.sustainability.description")}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <h4 className="font-medium">{t("mission.values.innovation.title")}</h4>
                      <p className="text-muted-foreground">{t("mission.values.innovation.description")}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <h4 className="font-medium">{t("mission.values.transparency.title")}</h4>
                      <p className="text-muted-foreground">{t("mission.values.transparency.description")}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <Target className="h-4 w-4 text-primary" />
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

        {/* Team Section */}
        <section id="team" className="section bg-muted/50">
          <div className="container mx-auto container-padding py-16">
            <div className="text-center mb-10">
              <h2 className="mb-4">{t("team.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("team.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-muted"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{t("team.members.member1.name")}</h3>
                  <p className="text-primary font-medium mb-3">{t("team.members.member1.position")}</p>
                  <p className="text-muted-foreground">{t("team.members.member1.bio")}</p>
                </CardContent>
              </Card>

              {/* Team Member 2 */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-muted"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{t("team.members.member2.name")}</h3>
                  <p className="text-primary font-medium mb-3">{t("team.members.member2.position")}</p>
                  <p className="text-muted-foreground">{t("team.members.member2.bio")}</p>
                </CardContent>
              </Card>

              {/* Team Member 3 */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-muted"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{t("team.members.member3.name")}</h3>
                  <p className="text-primary font-medium mb-3">{t("team.members.member3.position")}</p>
                  <p className="text-muted-foreground">{t("team.members.member3.bio")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
