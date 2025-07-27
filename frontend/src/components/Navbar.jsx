import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://placehold.co/150x50/1e40af/ffffff?text=NIZA+IMPORT" 
            alt="NIZA IMPORT" 
            className="h-12"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-primary font-medium hover:text-secondary transition">Inicio</Link>
          <Link to="/productos" className="text-primary font-medium hover:text-secondary transition">Productos</Link>
          <Link to="/categorias" className="text-primary font-medium hover:text-secondary transition">Categorías</Link>
          <Link to="/contacto" className="text-primary font-medium hover:text-secondary transition">Contacto</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-primary font-medium py-2 hover:text-secondary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/productos" 
              className="text-primary font-medium py-2 hover:text-secondary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link 
              to="/contacto" 
              className="text-primary font-medium py-2 hover:text-secondary transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;