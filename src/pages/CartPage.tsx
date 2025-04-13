import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateCartItemQuantity, clearCart } = useAppContext();

  const subtotal = cart.reduce((total, item) => {
    const price = item.plant.discountedPrice || item.plant.price;
    return total + price * item.quantity;
  }, 0);

  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-medium text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any plants to your cart yet.</p>
          <Link 
            to="/categories" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
                  </h2>
                  <button 
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              
              <ul>
                {cart.map((item) => {
                  const plant = item.plant;
                  const price = plant.discountedPrice || plant.price;
                  const itemTotal = price * item.quantity;
                  
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
                              <p className="text-lg font-medium text-gray-800">${itemTotal.toFixed(2)}</p>
                              <p className="text-sm text-gray-600">${price.toFixed(2)} each</p>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center border rounded-md overflow-hidden">
                              <button 
                                onClick={() => updateCartItemQuantity(plant.id, item.quantity - 1)}
                                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700"
                              >
                                -
                              </button>
                              <span className="px-4 py-1 bg-white">{item.quantity}</span>
                              <button 
                                onClick={() => updateCartItemQuantity(plant.id, item.quantity + 1)}
                                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700"
                                disabled={item.quantity >= plant.stock}
                              >
                                +
                              </button>
                            </div>
                            <button 
                              onClick={() => removeFromCart(plant.id)}
                              className="text-red-600 hover:text-red-800 flex items-center"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              <span>Remove</span>
                            </button>
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
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800 font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-800 font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-800">Total</span>
                    <span className="text-lg font-semibold text-gray-800">${total.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {shipping === 0 
                      ? 'Free shipping applied' 
                      : `Free shipping on orders over $ 50.00`}
                  </p>
                </div>
              </div>
              
              <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors">
                Proceed to Checkout
              </button>
              
              <div className="mt-6 text-sm text-gray-600">
                <p className="mb-2">We accept:</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 border border-gray-300 rounded">Visa</span>
                  <span className="px-2 py-1 border border-gray-300 rounded">Mastercard</span>
                  <span className="px-2 py-1 border border-gray-300 rounded">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;