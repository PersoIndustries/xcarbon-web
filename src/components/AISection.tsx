
import React from "react";
import { Brain, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AISection = () => {
  return (
    <section id="ai-innovation" className="section">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <Card className="border border-primary/20">
                <CardContent className="pt-6 p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 shrink-0">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Algoritmos predictivos</h3>
                      <p className="text-muted-foreground">
                        Utilizamos modelos de aprendizaje profundo para predecir las condiciones óptimas de compostaje, tiempo de maduración y calidad del compost.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-primary/20">
                <CardContent className="pt-6 p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 shrink-0">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Optimización de procesos</h3>
                      <p className="text-muted-foreground">
                        Nuestros algoritmos analizan continuamente datos para identificar oportunidades de mejora en el proceso de compostaje y reducir tiempos de procesamiento.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-primary/20">
                <CardContent className="pt-6 p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 shrink-0">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Automatización inteligente</h3>
                      <p className="text-muted-foreground">
                        Sistemas automatizados que ajustan parámetros como aireación, humedad y temperatura en tiempo real basados en datos y modelos predictivos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h2 className="mb-6">IA para la transformación del compostaje</h2>
              <p className="text-lg text-muted-foreground mb-6">
                En xCarbon, la inteligencia artificial no es un añadido, sino el núcleo de nuestra propuesta de valor. Nuestra tecnología aprende constantemente para mejorar la eficiencia, reducir costos y maximizar la producción.
              </p>
              <p className="text-lg mb-6">
                <span className="font-semibold text-primary">Nuestro roadmap de IA</span> incluye algoritmos cada vez más sofisticados para la predicción de resultados, optimización de recursos y generación automática de informes basados en datos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
