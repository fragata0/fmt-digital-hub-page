
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Bot, Video, Navigation } from "lucide-react";

const serviceData = [
  {
    icon: <Palette className="w-12 h-12 text-fmt-blue" />,
    title: "Web Design",
    description: "Sites modernos com WordPress e IA, otimizados para conversão e experiência do usuário."
  },
  {
    icon: <Navigation className="w-12 h-12 text-fmt-purple" />,
    title: "Gestão de Tráfego",
    description: "Estratégias de tráfego pago que geram leads qualificados e aumentam suas vendas."
  },
  {
    icon: <Video className="w-12 h-12 text-fmt-cyan" />,
    title: "Edição de Vídeos",
    description: "Produções audiovisuais profissionais para redes sociais e campanhas de marketing."
  },
  {
    icon: <Bot className="w-12 h-12 text-fmt-blue" />,
    title: "Automações com IA",
    description: "Soluções inteligentes para automatizar processos e potencializar resultados."
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Nossos <span className="gradient-text">Serviços</span></h2>
          <p className="text-lg text-fmt-dark/80">
            Soluções digitais inovadoras para transformar sua presença online e impulsionar seus resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-fmt-dark/70 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
