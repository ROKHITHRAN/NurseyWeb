import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GreenThumb Nursery</h3>
            <p className="text-green-200 mb-4">
              Your one-stop destination for all gardening needs. We provide high-quality plants, 
              gardening supplies, and expert advice.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-200 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/categories" className="text-green-200 hover:text-white">Shop Plants</Link>
              </li>
              <li>
                <Link to="/about" className="text-green-200 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-200 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link to="/customer-care" className="text-green-200 hover:text-white">Customer Care</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/flowers" className="text-green-200 hover:text-white">Flowers</Link>
              </li>
              <li>
                <Link to="/categories/fruits" className="text-green-200 hover:text-white">Fruits</Link>
              </li>
              <li>
                <Link to="/categories/vegetables" className="text-green-200 hover:text-white">Vegetables</Link>
              </li>
              <li>
                <Link to="/categories/ferns" className="text-green-200 hover:text-white">Ferns</Link>
              </li>
              <li>
                <Link to="/categories/timber" className="text-green-200 hover:text-white">Timber</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-green-200">123 Garden Street, Green City, GC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-green-200">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-green-200">info@greenthumb.com</span>
              </li>
              <li className="mt-4">
                <p className="text-green-200">
                  <strong className="text-white">Hours:</strong><br />
                  Mon-Sat: 8:00 AM - 6:00 PM<br />
                  Sunday: 10:00 AM - 4:00 PM
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-300">
          <p>&copy; {new Date().getFullYear()} GreenThumb Nursery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;