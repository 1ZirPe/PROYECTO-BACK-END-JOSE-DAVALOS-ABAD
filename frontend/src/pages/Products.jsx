import React from 'react';
import ProductsSection from '../components/ProductsSection';

const Products = () => {
  return (
    <div className="pt-24">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestros Productos</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Descubre nuestra amplia gama de cerámicos y revestimientos de alta calidad
          </p>
        </div>
      </div>
      <ProductsSection />
    </div>
  );
};

export default Products;