import React, { useState } from "react";
import { categories } from "../data/plants";
import CategoryCard from "../components/common/CategoryCard";
import plus from "../data/add.png";
import AddCategoryCard from "../components/common/AddCategoryCard";
import { Category } from "../types";

const AdminPage: React.FC = () => {
  const [isCategoryAdd, setIsCategoryAdd] = useState<boolean>(false);
  const [category, setCategory] = useState<Category>({
    id: "",
    name: "Dummy Category",
    image: "https://via.placeholder.com/150",
    subcategories: [],
  });
  //   const addCategoryWithId = async (category: Category) => {
  //     try {
  //       await setDoc(doc(db, "data", category.id), category);
  //       console.log("Category with ID added!");
  //       setIsCategoryAdd(!isCategoryAdd);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">
            Add Plant Categories
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            onClick={() => setIsCategoryAdd(!isCategoryAdd)}
          >
            <div className="h-[80%] overflow-hidden flex justify-center">
              <img src={plus} alt="add" className="w-[60%] h-[90%]" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center text-gray-800">
                ADD
              </h3>
            </div>
          </div>
        </div>
      </div>
      {isCategoryAdd && (
        <AddCategoryCard
          isCategoryAdd={isCategoryAdd}
          setIsCategoryAdd={setIsCategoryAdd}
          setCategory={setCategory}
        />
      )}
    </div>
  );
};

export default AdminPage;
