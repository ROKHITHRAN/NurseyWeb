import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist, addToCart } = useAppContext();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Wishlist</h1>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-medium text-gray-800 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6">Save your favorite plants to your wishlist for later.</p>
          <Link 
            to="/categories" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Browse Plants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Wishlist</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              {wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'}
            </h2>
          </div>
          
          <ul>
            {wishlist.map((item) => {
              const plant = item.plant;
              const price = plant.discountedPrice || plant.price;
              
              return (
                <li key={plant.id} className="border-b border-gray-200 last:border-b-0">
                  <div className="p-6 flex flex-col sm:flex-row">
                    <div className="sm:w-24 sm:h-24 mb-4 sm:mb-0 flex-shrink-0">
                      <img 
                        src={plant.images[0]} 
                        alt={plant.title} 
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1 sm:ml-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <Link to={`/plant/${plant.id}`} className="text-lg font-medium text-gray-800 hover:text-green-600">
                            {plant.title}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">
                            {plant.category.charAt(0).toUpperCase() + plant.category.slice(1)} &gt; {plant.subcategory.charAt(0).toUpperCase() + plant.subcategory.slice(1)}
                          </p>
                        </div>
                        <div className="mt-2 sm:mt-0 text-right">
                          {plant.discountedPrice ? (
                            <>
                              <p className="text-lg font-medium text-gray-800">${plant.discountedPrice.toFixed(2)}</p>
                              <p className="text-sm text-gray-500 line-through">${plant.price.toFixed(2)}</p>
                            </>
                          ) : (
                            <p className="text-lg font-medium text-gray-800">${plant.price.toFixed(2)}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <span className={`text-sm ${plant.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                          {plant.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => removeFromWishlist(plant.id)}
                            className="px-3 py-1 border border-red-500 text-red-500 rounded-md hover:bg-red-50 flex items-center"
                          >
                            <Heart className="h-4 w-4 mr-1 fill-red-500" />
                            <span>Remove</span>
                          </button>
                          <button 
                            onClick={() => addToCart(plant, 1)}
                            disabled={plant.stock === 0}
                            className={`px-3 py-1 rounded-md flex items-center ${
                              plant.stock === 0 
                                ? 'bg-gray-300 cursor-not-allowed text-gray-500' 
                                : 'bg-green-600 hover:bg-green-700 text-white'
                            }`}
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className="mt-6">
          <Link to="/categories" className="inline-flex items-center text-green-600 hover:text-green-800">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;