import React from 'react';
import { Link } from 'react-router-dom';
import { Subcategory } from '../../types';

interface SubcategoryCardProps {
  subcategory: Subcategory;
  categoryName: string;
}

const SubcategoryCard: React.FC<SubcategoryCardProps> = ({ subcategory, categoryName }) => {
  return (
    <Link to={`/categories/${categoryName.toLowerCase()}/${subcategory.name.toLowerCase()}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="h-40 overflow-hidden">
          <img 
            src={subcategory.image} 
            alt={subcategory.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3">
          <h3 className="text-lg font-semibold text-center text-gray-800">{subcategory.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default SubcategoryCard;