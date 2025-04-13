import React from 'react';
import { MapPin } from 'lucide-react';
import FAQItem from '../components/common/FAQItem';
import { faqs } from '../data/plants';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">About GreenThumb Nursery</h1>
          <p className="mt-2 text-lg text-gray-600">Your trusted partner in gardening since 2010</p>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                GreenThumb Nursery was founded in 2010 with a simple mission: to provide high-quality plants and exceptional gardening advice to our community. What started as a small family business has grown into a trusted name in the gardening industry.
              </p>
              <p className="text-gray-600 mb-4">
                Our team consists of passionate gardeners, horticulturists, and plant enthusiasts who are dedicated to helping you create beautiful and sustainable gardens. We carefully select each plant in our nursery to ensure it meets our high standards of quality.
              </p>
              <p className="text-gray-600">
                At GreenThumb, we believe that gardening is not just a hobby—it's a way to connect with nature, reduce stress, and create beautiful spaces that bring joy for years to come. We're committed to sustainable practices and supporting local growers whenever possible.
              </p>
            </div>
            <div className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="GreenThumb Nursery" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our plants. Each one is carefully grown, selected, and cared for to ensure it thrives in your garden.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally friendly practices, from our growing methods to our packaging and delivery options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in building a community of gardeners who share knowledge, experiences, and a love for plants and nature.
              </p>
            </div>
          </div>
        </div>

        {/* Visit Us */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Nursery</h2>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-green-600 mt-1 mr-2" />
                <div>
                  <p className="text-gray-800 font-medium">GreenThumb Nursery</p>
                  <p className="text-gray-600">123 Garden Street</p>
                  <p className="text-gray-600">Green City, GC 12345</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-800 font-medium">Hours:</p>
                <p className="text-gray-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
              </div>
              <p className="text-gray-600">
                We invite you to visit our nursery and explore our wide selection of plants. Our knowledgeable staff is always ready to help you find the perfect plants for your space and provide expert advice on plant care.
              </p>
            </div>
            <div className="h-full">
              {/* This would be a map in a real application */}
              <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                <p className="text-gray-600 text-center p-8">
                  [Map Placeholder]<br />
                  In a real application, this would be an embedded Google Map showing the nursery location.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              {faqs.map(faq => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;