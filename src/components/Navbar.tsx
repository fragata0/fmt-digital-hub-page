
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold gradient-text">FMT</Link>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/#services" className="text-fmt-dark hover:text-fmt-blue transition-colors">Serviços</Link>
          <Link to="/#portfolio" className="text-fmt-dark hover:text-fmt-blue transition-colors">Portfólio</Link>
          <Link to="/blog" className="text-fmt-dark hover:text-fmt-blue transition-colors">Blog</Link>
          <Link to="/#about" className="text-fmt-dark hover:text-fmt-blue transition-colors">Quem Somos</Link>
          <Link to="/#contact" className="text-fmt-dark hover:text-fmt-blue transition-colors">Contato</Link>
          <Button className="bg-gradient-to-r from-fmt-blue to-fmt-purple hover:opacity-90 transition-opacity">
            Solicitar Orçamento
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg animate-fade-in">
          <nav className="container mx-auto py-4 flex flex-col gap-4">
            <Link 
              to="/#services" 
              className="text-fmt-dark hover:text-fmt-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              to="/#portfolio" 
              className="text-fmt-dark hover:text-fmt-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfólio
            </Link>
            <Link 
              to="/blog" 
              className="text-fmt-dark hover:text-fmt-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/#about" 
              className="text-fmt-dark hover:text-fmt-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <Link 
              to="/#contact" 
              className="text-fmt-dark hover:text-fmt-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Button 
              className="bg-gradient-to-r from-fmt-blue to-fmt-purple hover:opacity-90 transition-opacity w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
