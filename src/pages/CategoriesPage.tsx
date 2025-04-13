import React from 'react';
import { categories } from '../data/plants';
import CategoryCard from '../components/common/CategoryCard';

const CategoriesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">Plant Categories</h1>
          <p className="mt-2 text-lg text-gray-600">Browse our wide selection of plants by category</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;