
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const portfolioItems = {
  webdesign: [
    {
      id: 1,
      title: "E-commerce de Moda",
      client: "Bella Fashion",
      description: "Site responsivo com catálogo detalhado e sistema de pagamento integrado.",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Blog Corporativo",
      client: "Tech Solutions",
      description: "Portal de conteúdo otimizado para SEO e alta performance.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Website Institucional",
      client: "Construtura Horizonte",
      description: "Site institucional com portfolio interativo e formulários de contato.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  trafego: [
    {
      id: 1,
      title: "Campanha de Lançamento",
      client: "Curso Online Masterclass",
      description: "Estratégia multicanal que gerou 3.500+ leads qualificados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Tráfego Local",
      client: "Rede de Restaurantes",
      description: "Campanhas geolocalizada com 380% de ROI.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Remarketing Avançado",
      client: "Loja de Suplementos",
      description: "Recuperação de carrinho abandonados com 42% de conversão.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  videos: [
    {
      id: 1,
      title: "Vídeos para Instagram",
      client: "Marca de Cosméticos",
      description: "Série de 12 vídeos curtos com mais de 2M de visualizações.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Comercial para TV",
      client: "Concessionária Premium",
      description: "Filmagem e edição de comercial com CGI para lançamento regional.",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Conteúdo para YouTube",
      client: "Canal Educativo",
      description: "Produção semanal de vídeos com média de 50K+ visualizações.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  automacoes: [
    {
      id: 1,
      title: "Chatbot com IA",
      client: "Empresa de Seguros",
      description: "Automação de atendimento que reduziu custos operacionais em 35%.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Email Marketing Automatizado",
      client: "E-commerce Multinichos",
      description: "Sequências personalizadas com aumento de 28% nas vendas.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "CRM Integrado",
      client: "Imobiliária de Luxo",
      description: "Sistema centralizado com automação de follow-up e qualificação de leads.",
      image: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Nosso <span className="gradient-text">Portfólio</span></h2>
          <p className="text-lg text-fmt-dark/80">
            Conheça alguns dos nossos projetos e resultados alcançados para nossos clientes.
          </p>
        </div>
        
        <Tabs defaultValue="webdesign" className="w-full animate-fade-in">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="webdesign">Web Design</TabsTrigger>
            <TabsTrigger value="trafego">Gestão de Tráfego</TabsTrigger>
            <TabsTrigger value="videos">Edição de Vídeos</TabsTrigger>
            <TabsTrigger value="automacoes">Automações com IA</TabsTrigger>
          </TabsList>
          
          {Object.entries(portfolioItems).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>Cliente: {item.client}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-fmt-blue to-fmt-purple hover:opacity-90 transition-opacity text-lg py-6 px-8">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
