
import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Team = () => {
  const { t } = useLanguage();
  
  const teamMembers = [
    {
      name: "Carlos Peralta Sorolla",
      position: "CEO, Co-founder y Desarrollador",
      bio: "Trayectoria en el mundo de la tecnología del videojuego, web3 y otros sectores TIC. Director de estudio de videojuegos, product manager y emprendedor tecnológico.",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Pablo Peralta Sorolla",
      position: "Co-founder",
      bio: "Ingeniero superior agrónomo, gestor medioambiental y empresario con amplia experiencia en sostenibilidad y gestión de recursos.",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
    }
  ];
  
  const partners = [
    {
      name: "Liett Iberica",
      logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
      description: t("partners.liett")
    },
    {
      name: "Jardiper",
      logo: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=100&q=80",
      description: t("partners.jardiper")
    }
  ];
  
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
          {teamMembers.map((member, index) => (
            <Card key={index} className="border bg-card overflow-hidden">
              <CardContent className="p-6">
                <div className="aspect-square bg-muted rounded-full w-40 h-40 mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
                <p className="text-primary text-center mb-4">{member.position}</p>
                <p className="text-muted-foreground text-center">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("partners.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("partners.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} className="border bg-card overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="h-16 mb-4 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">{partner.name}</h3>
                  <p className="text-muted-foreground text-center mt-2">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
