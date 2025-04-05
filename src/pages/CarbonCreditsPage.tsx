
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Leaf, TrendingUp, Recycle, LineChart, BadgeDollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import JoinEcosystem from "@/components/JoinEcosystem";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const CarbonCreditsPage = () => {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: Leaf,
      title: "Reducción directa de emisiones",
      description: "Las plantas de compostaje reducen directamente las emisiones de metano que se producirían si los residuos orgánicos fueran a vertederos."
    },
    {
      icon: BadgeDollarSign,
      title: "Nueva fuente de ingresos",
      description: "La monetización de créditos de carbono proporciona una fuente adicional de ingresos para las plantas de compostaje."
    },
    {
      icon: LineChart,
      title: "Mayor rentabilidad",
      description: "Mejora del rendimiento financiero a través de la optimización de procesos y la generación de activos de carbono."
    },
    {
      icon: TrendingUp,
      title: "Valor añadido",
      description: "Aumento del valor empresarial al convertirse en líder en sostenibilidad con soluciones innovadoras."
    },
    {
      icon: Recycle,
      title: "Economía circular",
      description: "Contribución activa a la economía circular mediante la transformación de residuos en recursos valiosos."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Créditos de Carbono para Plantas de Compostaje</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transformando la gestión de residuos orgánicos en oportunidades económicas y ambientales
              </p>
              <Link to="/contact">
                <Button size="lg" className="mt-4">Contactar para más información</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What are Carbon Credits */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">¿Qué son los créditos de carbono?</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Los créditos de carbono son certificados comercializables que representan la reducción o eliminación 
                  de una tonelada métrica de dióxido de carbono (CO₂) o gases de efecto invernadero equivalentes de la atmósfera.
                </p>
                <p className="text-lg text-muted-foreground">
                  Estos créditos permiten a las empresas compensar sus emisiones inevitables financiando 
                  proyectos que reducen las emisiones en otros lugares, como las plantas de compostaje.
                </p>
              </div>
              <div className="bg-muted p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">El proceso en 4 pasos</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-2 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">1. Medición</h4>
                      <p className="text-sm text-muted-foreground">Cuantificación precisa de la reducción de emisiones en el proceso de compostaje</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-2 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">2. Verificación</h4>
                      <p className="text-sm text-muted-foreground">Validación por terceros según estándares internacionales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-2 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">3. Certificación</h4>
                      <p className="text-sm text-muted-foreground">Emisión de créditos certificados y tokenizados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-2 mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">4. Comercialización</h4>
                      <p className="text-sm text-muted-foreground">Venta en mercados de carbono o directamente a empresas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Composting Plants */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Beneficios para Plantas de Compostaje</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Las plantas de compostaje pueden obtener múltiples beneficios al participar en el mercado de créditos de carbono
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 rounded-full p-3 inline-flex mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How xCarbon Helps */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">¿Cómo ayuda xCarbon?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Nuestra plataforma integra todas las herramientas necesarias para automatizar y optimizar 
                  la generación de créditos de carbono en plantas de compostaje
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Monitorización Automatizada</h3>
                      <p className="text-muted-foreground">
                        Seguimiento constante de los parámetros clave del proceso de compostaje para 
                        cuantificar con precisión la reducción de emisiones.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Cálculos Verificables</h3>
                      <p className="text-muted-foreground">
                        Aplicación de metodologías aprobadas internacionalmente para calcular y documentar 
                        la reducción de emisiones de manera transparente y auditable.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Gestión de Documentación</h3>
                      <p className="text-muted-foreground">
                        Generación automática de toda la documentación necesaria para la certificación 
                        y verificación por terceros de los créditos de carbono.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full mt-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Acceso al Mercado</h3>
                      <p className="text-muted-foreground">
                        Facilitamos el acceso a mercados de carbono y compradores potenciales a través 
                        de nuestra red de contactos y marketplace integrado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Comienza tu viaje hacia los créditos de carbono</h2>
              <p className="text-lg text-muted-foreground mb-8">
                ¿Tienes una planta de compostaje y te interesa explorar las oportunidades 
                de los créditos de carbono? Contáctanos hoy mismo para una consulta gratuita.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg">Solicitar información</Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg">Conocer más sobre xCarbon</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <JoinEcosystem />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default CarbonCreditsPage;
