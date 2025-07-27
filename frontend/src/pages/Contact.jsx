import React from 'react';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="pt-24">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Estamos aquí para ayudarte con cualquier consulta
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Contact;