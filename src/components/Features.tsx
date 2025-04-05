
import React from "react";
import { BadgeCheck, LineChart, BarChart, Recycle, Clock, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Monitoreo en tiempo real",
    description: "Control completo de todos los procesos de compostaje en una interfaz unificada e intuitiva.",
    icon: Clock,
  },
  {
    title: "Análisis de datos avanzado",
    description: "Visualización de KPIs y métricas clave para optimizar la operación de las plantas.",
    icon: BarChart,
  },
  {
    title: "Gestión de recursos",
    description: "Planificación eficiente de recursos, personal y maquinaria para maximizar la productividad.",
    icon: Database,
  },
  {
    title: "Trazabilidad completa",
    description: "Seguimiento del ciclo completo desde residuos orgánicos hasta compost final y créditos de carbono.",
    icon: Recycle,
  },
  {
    title: "Cumplimiento normativo",
    description: "Aseguramos el cumplimiento de todas las regulaciones ambientales y requisitos legales españoles.",
    icon: BadgeCheck,
  },
  {
    title: "Reportes personalizados",
    description: "Generación de informes detallados sobre rendimiento, sostenibilidad y huella de carbono.",
    icon: LineChart,
  },
];

const Features = () => {
  return (
    <section id="features" className="section bg-muted">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">Características Principales</h2>
          <p className="text-muted-foreground text-lg">
            Nuestra plataforma integra todas las herramientas necesarias para optimizar la gestión de plantas de compostaje
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border hover:border-primary/40 transition-colors duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
