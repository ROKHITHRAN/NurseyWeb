import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "../data/plants";
import SubcategoryCard from "../components/common/SubcategoryCard";
import { ChevronRight } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import plus from "../data/add.png";
import AddCategoryCard from "../components/common/AddCategoryCard";
import { getSubCategories } from "../service/services";
import { Subcategory } from "../types";

const CategoryDetailPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  const [subcategories, setSubCategories] = useState<Subcategory[]>([]);
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);
  const user = useAppContext();
  const category = categories.find(
    (cat) => cat.name.toLowerCase() === categoryName?.toLowerCase()
  );

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getSubCategories(categoryName!);
      setSubCategories(data);
      console.log("Fetched categories:", subcategories);
      // optionally: setState(data);
    };
    fetchCategories();
  }, [categoryName]);

  if (!subcategories) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Category not found</h2>
        <p className="mt-2 text-gray-600">
          The category you're looking for doesn't exist.
        </p>
        <Link
          to="/categories"
          className="mt-4 inline-block text-green-600 hover:underline"
        >
          Back to Categories
        </Link>
        {user.user.role === "admin" && (
          <div
            onClick={() => setIsPopUpVisible(!isPopUpVisible)}
            className="flex flex-col items-center justify-center cursor-pointer bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md mb-4">
              <img src={plus} alt="add" className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              Add Subcategory
            </h3>
          </div>
        )}
        {isPopUpVisible && (
          <AddCategoryCard
            isPopUpVisible={isPopUpVisible}
            setIsPopUpVisible={setIsPopUpVisible}
            category="sub"
            subcat={categoryName}
          />
        )}
      </div>
    );
  }
  console.log(subcategories);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link to="/categories" className="hover:text-green-600">
            Categories
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-800">{categoryName}</span>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {categoryName}
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Browse {categoryName} by subcategory
              </p>
            </div>
            {/* <img
              src={category.image}
              alt={category.name}
              className="mt-4 md:mt-0 w-full md:w-48 h-32 object-cover rounded-lg shadow-md"
            /> */}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subcategories.map((subcategory) => (
            <SubcategoryCard
              key={subcategory.id}
              subcategory={subcategory}
              categoryName={categoryName!}
            />
          ))}
          {/* {subcategories.map((subcategory) => (
            <SubcategoryCard
              key={subcategory.id}
              subcategory={subcategory}
              categoryName={categoryName!}
            />
          ))} */}
          {user.user.role === "admin" && (
            <div
              onClick={() => setIsPopUpVisible(!isPopUpVisible)}
              className="flex flex-col items-center justify-center cursor-pointer bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md mb-4">
                <img src={plus} alt="add" className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                Add Subcategory
              </h3>
            </div>
          )}
          {isPopUpVisible && (
            <AddCategoryCard
              isPopUpVisible={isPopUpVisible}
              setIsPopUpVisible={setIsPopUpVisible}
              category="sub"
              subcat={categoryName}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;
