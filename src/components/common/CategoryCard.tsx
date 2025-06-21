import React from "react";
import { Link } from "react-router-dom";
import { Category } from "../../types";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const size = Object.keys(category.subcategories).length;
  return (
    <Link to={`/categories/${category.name.toLowerCase()}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-center text-gray-800">
            {category.name}
          </h3>
          <p className="text-sm text-center text-gray-600 mt-1">
            {size} subcategories
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
