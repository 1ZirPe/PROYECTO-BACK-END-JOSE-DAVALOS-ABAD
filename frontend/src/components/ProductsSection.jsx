import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-200 animate-pulse h-48 w-full"></div>
                <div className="p-6">
                  <div className="bg-gray-200 animate-pulse h-6 w-3/4"></div>
                  <div className="bg-gray-200 animate-pulse h-4 w-full"></div>
                  <div className="flex justify-between items-center">
                    <div className="bg-gray-200 animate-pulse h-6 w-16"></div>
                    <div className="bg-gray-200 animate-pulse h-10 w-24 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-gray-200 border-2 border-dashed w-full h-48"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">Diseño moderno para interiores</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-secondary">S/ {product.price}</span>
                  <button className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;