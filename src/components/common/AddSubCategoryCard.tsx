import { X } from "lucide-react";
import React, { useState } from "react";
import { Category } from "../../types";
import { addCategory } from "../../service/services";

interface AddSubCategoryCardProps {
  isCategoryAdd: boolean;
  setIsCategoryAdd: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
}

const AddSubCategoryCard: React.FC<AddSubCategoryCardProps> = ({
  isCategoryAdd,
  setIsCategoryAdd,
  setCategory,
}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);

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
    e.preventDefault();
    setCategory((prev) => ({
      ...prev,
      id: name,
      name: name,
      image: image,
    }));
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6"
      >
        <X
          className="text-black flex justify-self-end"
          onClick={() => setIsCategoryAdd(!isCategoryAdd)}
        />
        <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
          Add Category
        </h2>
        <div className="flex flex-col items-center">
          <label className="w-32 h-32 flex items-center justify-center bg-green-100 rounded-full cursor-pointer overflow-hidden border-2 border-green-300 hover:border-green-500 transition">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-green-400 text-4xl">+</span>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          <span className="text-sm text-gray-500 mt-2">
            Click to upload image
          </span>
        </div>
        <div>
          <label className="block text-green-700 font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          onClick={() => {
            addCategory({
              id: name,
              name: name,
              image: image,
              subcategories: [],
            });
            setIsCategoryAdd(!isCategoryAdd);
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddSubCategoryCard;
