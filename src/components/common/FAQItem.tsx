import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../../types';

interface FAQItemProps {
  faq: FAQ;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 px-2 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-green-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-green-600" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 px-2 text-gray-600">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;