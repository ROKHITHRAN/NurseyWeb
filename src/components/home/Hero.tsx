import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Bring Nature to Your Home
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Discover our wide selection of high-quality plants, gardening supplies, and expert advice for your garden.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/categories"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
          >
            Shop Plants
          </Link>
          <Link
            to="/about"
            className="bg-white hover:bg-gray-100 text-green-700 font-bold py-3 px-6 rounded-md transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;