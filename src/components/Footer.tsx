
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-fmt-dark text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">FMT</h3>
            <p className="text-gray-300 max-w-xs">
              Transformando negócios através de soluções digitais inovadoras e estratégias de marketing eficientes.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-fmt-blue transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-fmt-blue transition-colors">Gestão de Tráfego</a></li>
              <li><a href="#" className="hover:text-fmt-blue transition-colors">Edição de Vídeos</a></li>
              <li><a href="#" className="hover:text-fmt-blue transition-colors">Automações com IA</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-fmt-blue transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-fmt-blue transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-fmt-blue transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-fmt-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>contato@fmtdigital.com.br</li>
              <li>(00) 12345-6789</li>
              <li>Av. Paulista, 1000 - São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <div>&copy; {currentYear} FMT Digital Hub. Todos os direitos reservados.</div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-fmt-blue transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-fmt-blue transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
