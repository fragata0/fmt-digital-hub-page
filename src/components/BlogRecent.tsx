
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Como a IA está transformando o Marketing Digital em 2025",
    excerpt: "Descubra as principais tendências e ferramentas de IA que estão revolucionando o marketing digital este ano.",
    category: "Marketing Digital",
    date: "03 Mai, 2025",
    image: "https://images.unsplash.com/photo-1677442135076-1c09383398ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "5 Estratégias de SEO que realmente funcionam",
    excerpt: "Um guia prático com técnicas comprovadas para melhorar o rankeamento do seu site nos mecanismos de busca.",
    category: "SEO",
    date: "28 Abr, 2025",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Por que seu site precisa ser otimizado para dispositivos móveis",
    excerpt: "Entenda a importância da experiência mobile e como isso impacta diretamente nas suas conversões.",
    category: "Web Design",
    date: "15 Abr, 2025",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const BlogRecent = () => {
  return (
    <section id="blog" className="section bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Nosso <span className="gradient-text">Blog</span></h2>
          <p className="text-lg text-fmt-dark/80">
            Confira nossos artigos e fique por dentro das últimas tendências em marketing digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
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
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={`/blog`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Ler Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/blog">
            <Button className="bg-gradient-to-r from-fmt-blue to-fmt-purple hover:opacity-90 transition-opacity text-lg py-6 px-8">
              Ver Todos os Artigos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogRecent;
