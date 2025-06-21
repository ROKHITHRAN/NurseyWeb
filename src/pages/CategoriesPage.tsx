import React, { useEffect, useState } from "react";
// import { categories } from "../data/plants";
import CategoryCard from "../components/common/CategoryCard";
import { getCategories } from "../service/services";
import { Category } from "../types";
import { useAppContext } from "../context/AppContext";
import plus from "../data/add.png";
import AddCategoryCard from "../components/common/AddCategoryCard";
const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
      console.log("Fetched categories:", data);
    };
    fetchCategories();
  }, []);

  const user = useAppContext();
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">Plant Categories</h1>
          <p className="mt-2 text-lg text-gray-600">
            Browse our wide selection of plants by category
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
          {user.user.role === "admin" && (
            <div
              onClick={() => setIsPopUpVisible(!isPopUpVisible)}
              className="cursor-pointer bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-3">
                <img src={plus} alt="add" className="w-8 h-8" />
              </div>
              <h3 className="text-base font-semibold text-gray-800 text-center">
                Add Category
              </h3>
            </div>
          )}

          {isPopUpVisible && (
            <AddCategoryCard
              isPopUpVisible={isPopUpVisible}
              setIsPopUpVisible={setIsPopUpVisible}
              category="main"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
