import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-bg text-white pt-24 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Soluciones en Cerámicos y Revestimientos
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Calidad premium para sus espacios comerciales y residenciales
        </p>
        <button 
          className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition transform hover:scale-105 inline-block"
        >
          Ver Catálogo
        </button>
      </div>
    </section>
  );
};

export default HeroSection;