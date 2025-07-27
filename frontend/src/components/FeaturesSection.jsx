import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'user-tie',
      title: 'Asesoría Técnica',
      description: 'Expertos en diseño y colocación para proyectos residenciales y comerciales'
    },
    {
      icon: 'truck',
      title: 'Envíos Rápidos',
      description: 'Distribución eficiente a nivel nacional con seguimiento de pedidos'
    },
    {
      icon: 'shield-alt',
      title: 'Garantía de Calidad',
      description: 'Productos certificados y respaldados por garantía de fábrica'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">¿Por Qué Elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-lg shadow-md text-center transition duration-300 hover:bg-blue-50"
            >
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`fas fa-${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;