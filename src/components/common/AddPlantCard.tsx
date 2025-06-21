import { X } from "lucide-react";
import React, { useState } from "react";
import { Category, Plant, Subcategory } from "../../types";
import { addPlants } from "../../service/services";

interface AddPlantCardProps {
  isPopUpVisible: boolean;
  setIsPopUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory?: React.Dispatch<React.SetStateAction<Category>>;
  setSubCategory?: React.Dispatch<React.SetStateAction<Subcategory>>;
  category: string;
  subcat: string;
}

const AddPlantCard: React.FC<AddPlantCardProps> = ({
  isPopUpVisible,
  setIsPopUpVisible,
  category,
  subcat,
}) => {
  const [image, setImage] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);
  const [plant, setPlant] = useState<Plant>({
    id: "",
    title: "",
    description: "",
    price: 0,
    discountedPrice: 0, // Optional, but can be included
    stock: 0,
    images: [],
    category: "",
    subcategory: "",
    featured: false, // Optional, safe to initialize
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        console.log(base64String);
        setImage(base64String);
        setPreview(base64String); // optional preview
      };
      reader.readAsDataURL(file); // starts reading (async)
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    plant.images.push(image);
    setPlant({ ...plant, category: category, subcategory: subcat });
    addPlants(category, subcat, plant);
    setIsPopUpVisible(!isPopUpVisible);
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 space-y-4 max-h-[90vh] overflow-y-auto" // 👈 Added max-height and scroll
      >
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-green-700">Add Plants</h2>
          <X
            className="cursor-pointer text-gray-500 hover:text-black"
            onClick={() => setIsPopUpVisible(false)}
          />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col items-center">
          <label className="w-28 h-28 flex items-center justify-center bg-green-100 rounded-full cursor-pointer overflow-hidden border-2 border-green-300 hover:border-green-500 transition">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-green-400 text-3xl">+</span>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          <span className="text-sm text-gray-500 mt-1">Upload Image</span>
        </div>

        {/* Input Fields */}
        <div className="space-y-3">
          {[
            { key: "title", label: "Title", type: "text" },
            { key: "description", label: "Description", type: "text" },
            { key: "price", label: "Price", type: "number" },
            {
              key: "discountedPrice",
              label: "Discounted Price",
              type: "number",
            },
            { key: "stock", label: "Stock", type: "number" },
          ].map(({ key, label, type }) => (
            <div key={key}>
              <label className="block text-green-700 font-semibold mb-1">
                {label}
              </label>
              <input
                type={type}
                value={(plant as any)[key]}
                onChange={(e) =>
                  setPlant((prev) => ({
                    ...prev,
                    [key]:
                      type === "text" ? e.target.value : Number(e.target.value),
                  }))
                }
                className="w-full px-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
          ))}
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddPlantCard;
