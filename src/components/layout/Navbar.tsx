import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Heart, Search } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, wishlist } = useAppContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">GreenThumb Nursery</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
              Home
            </Link>
            <Link to="/categories" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
              Categories
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
              About Us
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
              Contact
            </Link>
            <Link to="/customer-care" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
              Customer Care
            </Link>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex items-center ml-4 md:ml-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search plants..."
                  className="bg-green-600 text-white placeholder-green-200 rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <Search className="absolute right-3 top-1.5 h-4 w-4 text-green-200" />
              </div>
              <Link to="/wishlist" className="ml-4 relative">
                <Heart className="h-6 w-6 text-white" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="ml-4 relative">
                <ShoppingCart className="h-6 w-6 text-white" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden ml-2">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/customer-care"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              Customer Care
            </Link>
            <div className="flex items-center justify-between mt-4">
              <div className="relative flex-1 mr-2">
                <input
                  type="text"
                  placeholder="Search plants..."
                  className="w-full bg-green-600 text-white placeholder-green-200 rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <Search className="absolute right-3 top-1.5 h-4 w-4 text-green-200" />
              </div>
              <Link to="/wishlist" className="relative" onClick={toggleMenu}>
                <Heart className="h-6 w-6 text-white" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="ml-4 relative" onClick={toggleMenu}>
                <ShoppingCart className="h-6 w-6 text-white" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;