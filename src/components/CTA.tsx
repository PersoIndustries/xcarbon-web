
import React from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const CTA = () => {
  return (
    <section className="section bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Forma parte de la revolución del compostaje</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Estamos buscando plantas de compostaje en España para nuestro programa piloto. Sé de los primeros en optimizar tus procesos y explorar el potencial de los créditos de carbono con xCarbon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Send size={16} />
              Unirse al programa piloto
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
              Contactar con el equipo
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold">Piloto</p>
              <p className="text-sm text-primary-foreground/80">Personalizado</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">Implementación</p>
              <p className="text-sm text-primary-foreground/80">En desarrollo</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">Soporte</p>
              <p className="text-sm text-primary-foreground/80">Dedicado</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">ROI</p>
              <p className="text-sm text-primary-foreground/80">Estimado 3-6 meses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
