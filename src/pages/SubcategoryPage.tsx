import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import { plants, categories } from "../data/plants";
import PlantCard from "../components/common/PlantCard";
import { ChevronRight } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import plus from "../data/add.png";
import { Plant } from "../types";
import { getPlants } from "../service/services";
import AddPlantCard from "../components/common/AddPlantCard";

const SubcategoryPage: React.FC = () => {
  const { categoryName, subcategoryName } = useParams<{
    categoryName: string;
    subcategoryName: string;
  }>();
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);
  const [plants, setPlants] = useState<Plant[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getPlants(categoryName!, subcategoryName!);
      setPlants(data);
      console.log("Fetched plants:", data);
    };
    fetchCategories();
  }, [categoryName, subcategoryName]);

  const user = useAppContext();
  console.log(plants);

  if (!categoryName || !subcategoryName) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Subcategory not found
        </h2>
        <p className="mt-2 text-gray-600">
          The subcategory you're looking for doesn't exist.
        </p>
        {user.user.role === "admin" && (
          <div
            onClick={() => setIsPopUpVisible(!isPopUpVisible)}
            className="flex flex-col items-center justify-center cursor-pointer bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md mb-4">
              <img src={plus} alt="add" className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Add Plants</h3>
          </div>
        )}
        {isPopUpVisible && (
          <AddPlantCard
            isPopUpVisible={isPopUpVisible}
            setIsPopUpVisible={setIsPopUpVisible}
            category={categoryName!}
            subcat={subcategoryName!}
          />
        )}
        <Link
          to="/categories"
          className="mt-4 inline-block text-green-600 hover:underline"
        >
          Back to Categories
        </Link>
      </div>
    );
  }

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
          <Link
            to={`/categories/${categoryName}`}
            className="hover:text-green-600"
          >
            {categoryName}
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-800">{subcategoryName}</span>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {subcategoryName}
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                {plants!.length} {plants!.length === 1 ? "plant" : "plants"}{" "}
                available
              </p>
            </div>
            {/* <img
              src={subcategory.image}
              alt={subcategory.name}
              className="mt-4 md:mt-0 w-full md:w-48 h-32 object-cover rounded-lg shadow-md"
            /> */}
          </div>
        </div>

        {plants!.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {plants!.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
            {user.user.role === "admin" && (
              <div
                onClick={() => setIsPopUpVisible(!isPopUpVisible)}
                className="flex flex-col items-center justify-center cursor-pointer bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md mb-4">
                  <img src={plus} alt="add" className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Add Plants
                </h3>
              </div>
            )}
            {isPopUpVisible && (
              <AddPlantCard
                isPopUpVisible={isPopUpVisible}
                setIsPopUpVisible={setIsPopUpVisible}
                category={categoryName!}
                subcat={subcategoryName!}
              />
            )}
            {/* {isPopUpVisible && (
              <AddCategoryCard
                isPopUpVisible={isPopUpVisible}
                setIsPopUpVisible={setIsPopUpVisible}
                category="plant"
              />
            )} */}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-800">
              No plants found
            </h3>
            <p className="mt-2 text-gray-600">
              There are currently no plants available in this subcategory.
            </p>
            <Link
              to={`/categories/${categoryName}`}
              className="mt-4 inline-block text-green-600 hover:underline"
            >
              Back to {categoryName}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubcategoryPage;
