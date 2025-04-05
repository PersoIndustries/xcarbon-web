
import React from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const CTA = () => {
  return (
    <section className="section bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Transforme su planta de compostaje hoy</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Únase a las empresas líderes en España que están optimizando sus procesos y generando valor adicional a través de créditos de carbono con xCarbon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Send size={16} />
              Solicitar Demo
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
              Contactar con Ventas
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold">Demostración</p>
              <p className="text-sm text-primary-foreground/80">Personalizada</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">Implementación</p>
              <p className="text-sm text-primary-foreground/80">En 2 semanas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">Soporte</p>
              <p className="text-sm text-primary-foreground/80">24/7</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">ROI</p>
              <p className="text-sm text-primary-foreground/80">En 3-6 meses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
