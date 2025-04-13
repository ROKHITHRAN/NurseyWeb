import React from 'react';
import { services } from '../data/plants';
import ServiceCard from '../components/common/ServiceCard';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">Our Services</h1>
          <p className="mt-2 text-lg text-gray-600">Professional gardening and landscaping services</p>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16">
          <img 
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Landscaping services" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center px-4">
              <h2 className="text-3xl font-bold text-white mb-4">Professional Garden Services</h2>
              <p className="text-xl text-white mb-6 max-w-3xl">
                From design to maintenance, our team of experts will help you create and maintain the garden of your dreams.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition-colors">
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Our Service Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultation</h3>
                <p className="text-gray-600">
                  We start with a thorough consultation to understand your needs, preferences, and garden conditions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Design</h3>
                <p className="text-gray-600">
                  Our designers create a customized plan that matches your vision and works with your space.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Implementation</h3>
                <p className="text-gray-600">
                  Our skilled team brings the design to life with careful attention to detail and quality.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Maintenance</h3>
                <p className="text-gray-600">
                  We provide ongoing care to ensure your garden continues to thrive and look beautiful.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4"> <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The garden design service exceeded my expectations. The team was professional, creative, and attentive to my preferences. My backyard is now a beautiful retreat that I enjoy every day."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Michael Chen" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Michael Chen</h3>
                  <p className="text-sm text-gray-600">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "We hired GreenThumb for our office landscaping, and they transformed our outdoor space into a welcoming area that impresses clients and provides a relaxing spot for employees."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Emily Rodriguez" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Emily Rodriguez</h3>
                  <p className="text-sm text-gray-600">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The maintenance service is worth every penny. My garden always looks immaculate, and the team provides helpful advice on seasonal care. Highly recommend!"
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-600 rounded-lg shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Garden?</h2>
            <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
              Contact us today to schedule a consultation with one of our garden experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-green-700 font-bold py-3 px-8 rounded-md transition-colors">
                View Service Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;