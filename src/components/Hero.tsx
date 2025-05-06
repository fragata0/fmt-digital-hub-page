import React from 'react';
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <h1 className="leading-tight">
              Transforme seu Negócio com <span className="gradient-text">Marketing Digital</span> Inovador
            </h1>
            <p className="text-lg text-fmt-dark/80 md:text-xl max-w-lg">A FMT conecta sua empresa ao futuro com soluções digitais de WordPress, Tráfego Pago, Edição de Vídeos e Automações com IA.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-fmt-blue to-fmt-purple hover:opacity-90 transition-opacity text-lg py-6">
                Fale Conosco
              </Button>
              <Button variant="outline" className="border-fmt-purple text-fmt-purple hover:bg-fmt-purple/10 text-lg py-6">
                Ver Serviços
              </Button>
            </div>
          </div>
          <div className="relative lg:h-[500px] flex items-center justify-center animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fmt-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-fmt-blue/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 shadow-xl rounded-2xl overflow-hidden border-8 border-white">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Digital Marketing" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-fmt-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-24 w-64 h-64 bg-fmt-purple/10 rounded-full blur-3xl"></div>
    </section>;
};
export default Hero;