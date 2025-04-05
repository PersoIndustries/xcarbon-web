
import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin } from "lucide-react";
import { useEffect } from "react";
import JoinEcosystem from "@/components/JoinEcosystem";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "composting_plant"
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://primary-production-265b.up.railway.app/webhook-test/c700adbf-5ff2-4883-89e9-b2a64ae81559', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: t("contact.success.title"),
          description: t("contact.success.message"),
        });
        setFormData({ name: "", email: "", subject: "", message: "", category: "composting_plant" });
      } else {
        throw new Error('Server responded with an error');
      }
    } catch (error) {
      toast({
        title: t("contact.error.title"),
        description: t("contact.error.message"),
        variant: "destructive",
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    { value: "composting_plant", label: "Planta de Compostaje" },
    { value: "investor", label: "Inversor" },
    { value: "partner", label: "Partner" },
    { value: "collaborator", label: "Posible Colaborador" },
    { value: "service_provider", label: "Ofrecer un Servicio" },
    { value: "other", label: "Otro" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">
        <section className="section">
          <div className="container mx-auto container-padding py-16">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">{t("contact.title")}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("contact.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t("contact.form.name")}</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">{t("contact.form.email")}</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Categoría</Label>
                        <RadioGroup
                          value={formData.category}
                          onValueChange={handleCategoryChange}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2"
                        >
                          {categories.map((category) => (
                            <div key={category.value} className="flex items-center space-x-2">
                              <RadioGroupItem value={category.value} id={category.value} />
                              <Label htmlFor={category.value} className="cursor-pointer">
                                {category.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          value={formData.subject}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">{t("contact.form.message")}</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          rows={6} 
                          value={formData.message}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">{t("contact.info.title")}</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">{t("contact.info.email")}</h4>
                          <p className="text-muted-foreground">info@xcarbon.io</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">{t("contact.info.location")}</h4>
                          <p className="text-muted-foreground">Madrid, España</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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

export default Contact;
