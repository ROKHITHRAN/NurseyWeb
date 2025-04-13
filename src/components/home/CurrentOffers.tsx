import React from 'react';
import OfferCard from '../common/OfferCard';
import { offers } from '../../data/plants';

const CurrentOffers: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Current Offers</h2>
          <p className="mt-2 text-lg text-gray-600">Special deals and discounts on our plants</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map(offer => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentOffers;