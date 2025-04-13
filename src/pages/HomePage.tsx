import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedPlants from '../components/home/FeaturedPlants';
import CurrentOffers from '../components/home/CurrentOffers';
import NurseryFeatures from '../components/home/NurseryFeatures';
import Testimonials from '../components/home/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <NurseryFeatures />
      <CurrentOffers />
      <FeaturedPlants />
      <Testimonials />
    </div>
  );
};

export default HomePage;