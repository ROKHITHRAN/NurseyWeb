import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/plants';
import SubcategoryCard from '../components/common/SubcategoryCard';
import { ChevronRight } from 'lucide-react';

const CategoryDetailPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  const category = categories.find(
    cat => cat.name.toLowerCase() === categoryName?.toLowerCase()
  );

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Category not found</h2>
        <p className="mt-2 text-gray-600">The category you're looking for doesn't exist.</p>
        <Link to="/categories" className="mt-4 inline-block text-green-600 hover:underline">
          Back to Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link to="/categories" className="hover:text-green-600">Categories</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-800">{category.name}</span>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{category.name}</h1>
              <p className="mt-2 text-lg text-gray-600">Browse {category.name.toLowerCase()} by subcategory</p>
            </div>
            <img 
              src={category.image} 
              alt={category.name} 
              className="mt-4 md:mt-0 w-full md:w-48 h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {category.subcategories.map(subcategory => (
            <SubcategoryCard 
              key={subcategory.id} 
              subcategory={subcategory} 
              categoryName={category.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;