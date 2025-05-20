import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Plant } from "../../types";
import { useAppContext } from "../../context/AppContext";
import { Bounce, toast } from "react-toastify";

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist, user } =
    useAppContext();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (user.status === "inactive") {
      toast.info("Please Login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      navigate("/");
    } else {
      addToCart(plant, quantity);
    }
  };

  const handleWishlistToggle = () => {
    if (user.status === "inactive") {
      toast.info("Please Login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      if (isInWishlist(plant.id)) {
        removeFromWishlist(plant.id);
      } else {
        addToWishlist(plant);
      }
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === plant.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isDiscounted = plant.discountedPrice !== undefined;
  const discount = isDiscounted
    ? Math.round(((plant.price - plant.discountedPrice!) / plant.price) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        {/* Plant Image */}
        <div className="h-48 overflow-hidden relative">
          <img
            src={plant.images[currentImageIndex]}
            alt={plant.title}
            className="w-full h-full object-cover cursor-pointer"
            onClick={nextImage}
          />
          {isDiscounted && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {discount}% OFF
            </div>
          )}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <Heart
              className={`h-5 w-5 ${
                isInWishlist(plant.id)
                  ? "fill-red-500 text-red-500"
                  : "text-gray-600"
              }`}
            />
          </button>
        </div>

        {/* Plant Info */}
        <div className="p-4">
          <Link to={`/plant/${plant.id}`}>
            <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 mb-1">
              {plant.title}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 mb-2">
            {plant.category.charAt(0).toUpperCase() + plant.category.slice(1)}{" "}
            &gt;{" "}
            {plant.subcategory.charAt(0).toUpperCase() +
              plant.subcategory.slice(1)}
          </p>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {plant.description}
          </p>

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-baseline">
              {isDiscounted ? (
                <>
                  <span className="text-lg font-bold text-green-700">
                    ${plant.discountedPrice?.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ${plant.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-green-700">
                  ${plant.price.toFixed(2)}
                </span>
              )}
            </div>
            <span
              className={`text-sm ${
                plant.stock > 10
                  ? "text-green-600"
                  : plant.stock > 0
                  ? "text-orange-500"
                  : "text-red-500"
              }`}
            >
              {plant.stock > 10
                ? "In Stock"
                : plant.stock > 0
                ? `Only ${plant.stock} left`
                : "Out of Stock"}
            </span>
          </div>

          <div className="flex items-center">
            <div className="flex items-center border rounded-l-lg overflow-hidden mr-1">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700"
                disabled={plant.stock === 0}
              >
                -
              </button>
              <span className="px-3 py-1 bg-white">{quantity}</span>
              <button
                onClick={() =>
                  setQuantity((prev) => Math.min(plant.stock, prev + 1))
                }
                className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700"
                disabled={plant.stock === 0 || quantity >= plant.stock}
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={plant.stock === 0}
              className={`flex-1 flex items-center justify-center py-2 px-4 rounded-r-lg ${
                plant.stock === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 text-white"
              }`}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
