
import React from "react";
import { Coins, Shield, Globe, Landmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CarbonCredits = () => {
  return (
    <section id="carbon-credits" className="section bg-gradient-to-b from-accent/50 to-background">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">Generación y Tokenización de Créditos de Carbono</h2>
          <p className="text-muted-foreground text-lg">
            Convertimos la gestión eficiente de residuos orgánicos en activos digitales verificables y comercializables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col space-y-6">
            <Card className="flex-1 border border-primary/20">
              <CardContent className="pt-6 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Verificación automatizada</h3>
                </div>
                <p className="text-muted-foreground">
                  Nuestra plataforma realiza cálculos precisos de la reducción de emisiones de CO2 basados en datos reales de los procesos de compostaje y estándares internacionales.
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1 border border-primary/20">
              <CardContent className="pt-6 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Tokenización</h3>
                </div>
                <p className="text-muted-foreground">
                  Convertimos los créditos de carbono verificados en tokens digitales respaldados por reducción real de emisiones, creando un activo sostenible y transparente.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col space-y-6">
            <Card className="flex-1 border border-primary/20">
              <CardContent className="pt-6 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Landmark className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Marketplace propio</h3>
                </div>
                <p className="text-muted-foreground">
                  Ofrecemos un mercado integrado donde empresas y organizaciones pueden adquirir créditos de carbono verificados, apoyando directamente proyectos de compostaje sostenible.
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1 border border-primary/20">
              <CardContent className="pt-6 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Impacto ambiental</h3>
                </div>
                <p className="text-muted-foreground">
                  Cada token representa una contribución real a la lucha contra el cambio climático, transformando residuos en recursos y reduciendo la huella de carbono global.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-card border rounded-lg p-6 mt-12 max-w-4xl mx-auto">
          <h3 className="text-center mb-4 text-xl font-semibold">Proceso de generación de créditos de carbono</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="relative">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary/30 -translate-y-1/2"></div>
              </div>
              <p className="text-sm font-medium">Medición de procesos</p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary/30 -translate-y-1/2"></div>
              </div>
              <p className="text-sm font-medium">Cálculo de reducciones</p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary/30 -translate-y-1/2"></div>
              </div>
              <p className="text-sm font-medium">Verificación y tokenización</p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-primary">4</span>
                </div>
              </div>
              <p className="text-sm font-medium">Comercialización</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonCredits;
