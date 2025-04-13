import React from 'react';
import { Leaf, Truck, Award, Clock } from 'lucide-react';

const NurseryFeatures: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      title: 'Quality Plants',
      description: 'All our plants are carefully selected and nurtured to ensure they thrive in your garden.'
    },
    {
      icon: <Truck className="h-10 w-10 text-green-600" />,
      title: 'Fast Delivery',
      description: 'We offer quick and reliable delivery services to get your plants to you in perfect condition.'
    },
    {
      icon: <Award className="h-10 w-10 text-green-600" />,
      title: 'Expert Advice',
      description: 'Our team of gardening experts is always ready to help you with personalized advice.'
    },
    {
      icon: <Clock className="h-10 w-10 text-green-600" />,
      title: 'Support',
      description: '24/7 customer support to answer all your questions and address any concerns.'
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Our Nursery</h2>
          <p className="mt-2 text-lg text-gray-600">We take pride in providing the best gardening experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Nursery landscape" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Plant collection" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NurseryFeatures;