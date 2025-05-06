
import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import BlogRecent from "@/components/BlogRecent";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <BlogRecent />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
