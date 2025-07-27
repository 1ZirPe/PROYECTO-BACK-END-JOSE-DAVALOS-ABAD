import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import ProductsSection from '../components/ProductsSection';
import FeaturesSection from '../components/FeaturesSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
      <FeaturesSection />
    </div>
  );
};

export default Home;