
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a backend service
    console.log("Form submitted");
    // Here you could add a toast notification
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Vamos <span className="gradient-text">Conversar</span></h2>
          <p className="text-lg text-fmt-dark/80">
            Estamos prontos para impulsionar seu negócio. Entre em contato e descubra como podemos ajudar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-fmt-blue to-fmt-purple p-8 rounded-2xl text-white space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold">Entre em contato</h3>
            <p>
              Estamos disponíveis para responder todas as suas dúvidas e discutir como podemos ajudar a alcançar seus objetivos de marketing digital.
            </p>
            
            <div className="space-y-4">
              <div>
                <div className="font-semibold">Email</div>
                <div>contato@fmtdigital.com.br</div>
              </div>
              <div>
                <div className="font-semibold">Telefone</div>
                <div>(00) 12345-6789</div>
              </div>
              <div>
                <div className="font-semibold">Endereço</div>
                <div>Av. Paulista, 1000 - São Paulo, SP</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome completo" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Seu email" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Serviço de interesse</Label>
                <select 
                  id="service" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Selecione um serviço</option>
                  <option value="web-design">Web Design</option>
                  <option value="traffic">Gestão de Tráfego</option>
                  <option value="video">Edição de Vídeos</option>
                  <option value="automation">Automações com IA</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" placeholder="Como podemos ajudar?" rows={4} required />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-fmt-blue to-fmt-purple hover:opacity-90 transition-opacity">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
