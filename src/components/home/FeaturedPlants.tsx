import React from 'react';
import PlantCard from '../common/PlantCard';
import { plants } from '../../data/plants';

const FeaturedPlants: React.FC = () => {
  const featuredPlants = plants.filter(plant => plant.featured);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Featured Plants</h2>
          <p className="mt-2 text-lg text-gray-600">Our selection of premium plants for your garden</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredPlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href="/categories" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            View All Plants
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlants;