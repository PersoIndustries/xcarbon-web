
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  return (
    <section id="mission" className="section">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Nuestra Misión</h2>
            <p className="text-lg text-muted-foreground mb-6">
              En xCarbon estamos comprometidos con transformar la gestión de residuos orgánicos en España mediante tecnología de vanguardia, contribuyendo activamente a la economía circular y la lucha contra el cambio climático.
            </p>
            <p className="text-lg mb-6">
              Nuestra visión es convertir cada planta de compostaje en un centro de innovación sostenible que no solo reduce residuos, sino que genera valor económico y ambiental a través de la producción de compost de alta calidad y créditos de carbono verificables.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="border border-primary/20">
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">+50</h3>
                  <p className="text-sm text-muted-foreground">Plantas gestionadas</p>
                </CardContent>
              </Card>
              <Card className="border border-primary/20">
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">25k</h3>
                  <p className="text-sm text-muted-foreground">Toneladas procesadas</p>
                </CardContent>
              </Card>
              <Card className="border border-primary/20">
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">3.2k</h3>
                  <p className="text-sm text-muted-foreground">Créditos generados</p>
                </CardContent>
              </Card>
              <Card className="border border-primary/20">
                <CardContent className="p-4 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">15+</h3>
                  <p className="text-sm text-muted-foreground">Provincias</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-muted rounded-xl p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-4">Valores fundamentales</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3 mt-1">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <div>
                  <h4 className="font-medium">Sostenibilidad</h4>
                  <p className="text-muted-foreground">Compromiso con prácticas que favorecen el medio ambiente y reducen la huella de carbono.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3 mt-1">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <div>
                  <h4 className="font-medium">Innovación tecnológica</h4>
                  <p className="text-muted-foreground">Desarrollo constante de soluciones que aprovechan la tecnología para resolver problemas ambientales.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3 mt-1">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <div>
                  <h4 className="font-medium">Transparencia</h4>
                  <p className="text-muted-foreground">Datos verificables y trazables en todos nuestros procesos y en la generación de créditos de carbono.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3 mt-1">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <div>
                  <h4 className="font-medium">Impacto social</h4>
                  <p className="text-muted-foreground">Creación de valor para las comunidades donde operan las plantas que utilizan nuestra tecnología.</p>
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
