import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="https://placehold.co/200x60/ffffff/1e40af?text=NIZA+IMPORT" 
              alt="NIZA IMPORT" 
              className="mb-4"
            />
            <p className="text-gray-200">
              Soluciones integrales en cerámicos y revestimientos para proyectos residenciales y comerciales.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-200 hover:text-white transition">Inicio</a></li>
              <li><a href="#productos" className="text-gray-200 hover:text-white transition">Productos</a></li>
              <li><a href="#categorias" className="text-gray-200 hover:text-white transition">Categorías</a></li>
              <li><a href="#contacto" className="text-gray-200 hover:text-white transition">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-white transition">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">Términos y Condiciones</a></li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2023 NIZA IMPORT. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;