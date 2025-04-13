import React from 'react';
import { Offer } from '../../types';

interface OfferCardProps {
  offer: Offer;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  const daysRemaining = Math.ceil((offer.expiryDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={offer.image} 
          alt={offer.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-xl font-bold text-white">{offer.title}</h3>
          <p className="text-white text-sm">{offer.description}</p>
        </div>
        <div className="absolute top-2 right-2 bg-red-500 text-white font-bold px-3 py-1 rounded-full">
          {offer.discount}
        </div>
      </div>
      <div className="p-4 bg-green-50">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">
            {daysRemaining > 0 
              ? `Expires in ${daysRemaining} day${daysRemaining > 1 ? 's' : ''}` 
              : 'Offer expired'}
          </span>
          <button className="px-4 py-1 bg-green-600 text-white rounded-full text-sm hover:bg-green-700">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;