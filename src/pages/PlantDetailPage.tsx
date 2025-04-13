import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { plants } from '../data/plants';
import { Heart, ShoppingCart, ChevronRight, Truck, Shield, RotateCcw } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import PlantCard from '../components/common/PlantCard';

const PlantDetailPage: React.FC = () => {
  const { plantId } = useParams<{ plantId: string }>();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useAppContext();
  
  const plant = plants.find(p => p.id === plantId);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!plant) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Plant not found</h2>
        <p className="mt-2 text-gray-600">The plant you're looking for doesn't exist.</p>
        <Link to="/categories" className="mt-4 inline-block text-green-600 hover:underline">
          Browse Plants
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(plant, quantity);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(plant.id)) {
      removeFromWishlist(plant.id);
    } else {
      addToWishlist(plant);
    }
  };

  const similarPlants = plants
    .filter(p => p.category === plant.category && p.id !== plant.id)
    .slice(0, 4);

  const isDiscounted = plant.discountedPrice !== undefined;
  const discount = isDiscounted 
    ? Math.round(((plant.price - plant.discountedPrice!) / plant.price) * 100) 
    : 0;

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link to="/categories" className="hover:text-green-600">Categories</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link to={`/categories/${plant.category}`} className="hover:text-green-600">
            {plant.category.charAt(0).toUpperCase() + plant.category.slice(1)}
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link to={`/categories/${plant.category}/${plant.subcategory}`} className="hover:text-green-600">
            {plant.subcategory.charAt(0).toUpperCase() + plant.subcategory.slice(1)}
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-800">{plant.title}</span>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Image Gallery */}
            <div>
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img 
                  src={plant.images[currentImageIndex]} 
                  alt={plant.title} 
                  className="w-full h-96 object-cover"
                />
                {isDiscounted && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {discount}% OFF
                  </div>
                )}
              </div>
              <div className="flex space-x-2">
                {plant.images.map((image, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-green-500' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${plant.title} thumbnail ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Plant Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{plant.title}</h1>
              <p className="text-sm text-gray-600 mb-4">
                Category: {plant.category.charAt(0).toUpperCase() + plant.category.slice(1)} &gt; {plant.subcategory.charAt(0).toUpperCase() + plant.subcategory.slice(1)}
              </p>
              
              <div className="flex items-baseline mb-6">
                {isDiscounted ? (
                  <>
                    <span className="text-3xl font-bold text-green-700">${plant.discountedPrice?.toFixed(2)}</span>
                    <span className="text-xl text-gray-500 line-through ml-3">${plant.price.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-green-700">${plant.price.toFixed(2)}</span>
                )}
              </div>

              <p className="text-gray-700 mb-6">{plant.description}</p>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="w-24 text-gray-600">Availability:</span>
                  <span className={`${plant.stock > 10 ? 'text-green-600' : plant.stock > 0 ? 'text-orange-500' : 'text-red-500'} font-medium`}>
                    {plant.stock > 10 ? 'In Stock' : plant.stock > 0 ? `Only ${plant.stock} left` : 'Out of Stock'}
                  </span>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex items-center border rounded-l-lg overflow-hidden mr-1">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700"
                    disabled={plant.stock === 0}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 bg-white">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(prev => Math.min(plant.stock, prev + 1))}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700"
                    disabled={plant.stock === 0 || quantity >= plant.stock}
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  disabled={plant.stock === 0}
                  className={`flex-1 flex items-center justify-center py-3 px-6 rounded-r-lg ${
                    plant.stock === 0 
                      ? 'bg-gray-300 cursor-not-allowed' 
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  <span>Add to Cart</span>
                </button>
                <button 
                  onClick={handleWishlistToggle}
                  className="ml-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Heart 
                    className={`h-5 w-5 ${isInWishlist(plant.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                  />
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm text-gray-600">Free shipping over $50</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm text-gray-600">Quality guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <RotateCcw className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm text-gray-600">14-day return policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Plants */}
        {similarPlants.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarPlants.map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantDetailPage;