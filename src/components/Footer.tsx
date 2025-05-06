
import React from 'react';
import { Link } from 'react-router-dom';

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
              <li><Link to="/#services" className="hover:text-fmt-blue transition-colors">Web Design</Link></li>
              <li><Link to="/#services" className="hover:text-fmt-blue transition-colors">Gestão de Tráfego</Link></li>
              <li><Link to="/#services" className="hover:text-fmt-blue transition-colors">Edição de Vídeos</Link></li>
              <li><Link to="/#services" className="hover:text-fmt-blue transition-colors">Automações com IA</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/#about" className="hover:text-fmt-blue transition-colors">Sobre Nós</Link></li>
              <li><Link to="/#contact" className="hover:text-fmt-blue transition-colors">Contato</Link></li>
              <li><Link to="/blog" className="hover:text-fmt-blue transition-colors">Blog</Link></li>
              <li><Link to="/#portfolio" className="hover:text-fmt-blue transition-colors">Portfólio</Link></li>
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
              <li><Link to="#" className="hover:text-fmt-blue transition-colors">Termos de Uso</Link></li>
              <li><Link to="#" className="hover:text-fmt-blue transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
