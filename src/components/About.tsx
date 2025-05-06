
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section bg-blue-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-2xl shadow-xl order-2 lg:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="FMT Digital Hub" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fmt-blue/30 to-transparent"></div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="mb-4">Por que escolher a <span className="gradient-text">FMT</span>?</h2>
            <p className="text-lg text-fmt-dark/80">
              Somos uma agência de marketing digital focada em resultados. Nossa equipe de especialistas combina criatividade com tecnologia de ponta para entregar soluções que realmente funcionam.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl font-bold text-fmt-blue mb-2">5+</div>
                <p className="text-fmt-dark/70">Anos de experiência</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl font-bold text-fmt-purple mb-2">100+</div>
                <p className="text-fmt-dark/70">Projetos entregues</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl font-bold text-fmt-cyan mb-2">50+</div>
                <p className="text-fmt-dark/70">Clientes satisfeitos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-3xl font-bold text-fmt-blue mb-2">24/7</div>
                <p className="text-fmt-dark/70">Suporte ao cliente</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-fmt-blue to-fmt-purple hover:opacity-90 transition-opacity">
              Conheça Nossa Equipe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
