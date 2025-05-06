
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Categorias de blog
const categories = ["Todos", "Marketing Digital", "SEO", "Web Design", "Redes Sociais", "E-commerce", "Automação"];

// Posts do blog
const blogPosts = [
  {
    id: 1,
    title: "Como a IA está transformando o Marketing Digital em 2025",
    excerpt: "Descubra as principais tendências e ferramentas de IA que estão revolucionando o marketing digital este ano.",
    category: "Marketing Digital",
    date: "03 Mai, 2025",
    author: "Rafael Silva",
    image: "https://images.unsplash.com/photo-1677442135076-1c09383398ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "5 Estratégias de SEO que realmente funcionam",
    excerpt: "Um guia prático com técnicas comprovadas para melhorar o rankeamento do seu site nos mecanismos de busca.",
    category: "SEO",
    date: "28 Abr, 2025",
    author: "Mariana Costa",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Por que seu site precisa ser otimizado para dispositivos móveis",
    excerpt: "Entenda a importância da experiência mobile e como isso impacta diretamente nas suas conversões.",
    category: "Web Design",
    date: "15 Abr, 2025",
    author: "Lucas Mendes",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Como criar uma estratégia eficiente para redes sociais",
    excerpt: "Aprenda a desenvolver um plano de conteúdo estratégico que engaja seu público e gera resultados.",
    category: "Redes Sociais",
    date: "10 Abr, 2025",
    author: "Amanda Oliveira",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Automação de marketing: por onde começar?",
    excerpt: "Descubra como implementar processos automatizados que economizam tempo e melhoram seus resultados.",
    category: "Automação",
    date: "03 Abr, 2025",
    author: "Felipe Torres",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Dicas para melhorar a taxa de conversão do seu e-commerce",
    excerpt: "Estratégias práticas para otimizar seu funil de vendas e aumentar o número de compras finalizadas.",
    category: "E-commerce",
    date: "29 Mar, 2025",
    author: "Gabriela Santos",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filtra os posts com base na categoria selecionada e termo de busca
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero do Blog */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-4">Blog da <span className="gradient-text">FMT</span></h1>
              <p className="text-lg text-fmt-dark/80 mb-8">
                Dicas, estratégias e insights sobre marketing digital para impulsionar o seu negócio.
              </p>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <input 
                    type="text"
                    placeholder="Buscar artigos..."
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fmt-purple/50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Conteúdo do Blog */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Categorias */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category 
                      ? 'bg-gradient-to-r from-fmt-blue to-fmt-purple text-white' 
                      : 'border border-gray-300 hover:border-fmt-purple'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Lista de Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <Card key={post.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center text-sm mb-2">
                        <span className="text-fmt-purple">{post.category}</span>
                        <span className="text-gray-500">{post.date}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3 mb-3">{post.excerpt}</CardDescription>
                      <p className="text-sm text-gray-500">Por {post.author}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Ler Artigo <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-gray-600">Nenhum artigo encontrado para esta categoria ou termo de busca.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {setSelectedCategory("Todos"); setSearchTerm("");}}
                  >
                    Ver todos os artigos
                  </Button>
                </div>
              )}
            </div>
            
            {/* Paginação */}
            {filteredPosts.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>Anterior</Button>
                  <Button variant="outline" size="sm" className="bg-fmt-purple text-white">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Próximo</Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
