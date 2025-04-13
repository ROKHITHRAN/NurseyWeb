import { Plant, Category, Offer, FAQ, Service } from '../types';

export const plants: Plant[] = [
  {
    id: '1',
    title: 'Red Rose Plant',
    description: 'Beautiful red rose plant perfect for gardens and gifts.',
    price: 29.99,
    discountedPrice: 24.99,
    stock: 50,
    images: [
      'https://images.unsplash.com/photo-1589828994379-41d5a325c0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'flowers',
    subcategory: 'roses',
    featured: true
  },
  {
    id: '2',
    title: 'Hibiscus Plant',
    description: 'Vibrant hibiscus plant with large colorful flowers.',
    price: 19.99,
    stock: 30,
    images: [
      'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'flowers',
    subcategory: 'hibiscus'
  },
  {
    id: '3',
    title: 'Ixora Plant',
    description: 'Cluster-flowering Ixora plant with bright orange blooms.',
    price: 15.99,
    discountedPrice: 12.99,
    stock: 25,
    images: [
      'https://images.unsplash.com/photo-1596439543102-73a7767248bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596439543102-73a7767248bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'flowers',
    subcategory: 'ixora',
    featured: true
  },
  {
    id: '4',
    title: 'Mango Tree',
    description: 'Fruit-bearing mango tree perfect for home gardens.',
    price: 49.99,
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'fruits',
    subcategory: 'tropical',
    featured: true
  },
  {
    id: '5',
    title: 'Apple Tree',
    description: 'Hardy apple tree that produces delicious fruits.',
    price: 39.99,
    discountedPrice: 34.99,
    stock: 20,
    images: [
      'https://images.unsplash.com/photo-1589217157232-464b505b197d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589217157232-464b505b197d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'fruits',
    subcategory: 'temperate'
  },
  {
    id: '6',
    title: 'Tomato Plant',
    description: 'High-yielding tomato plant variety for home gardeners.',
    price: 8.99,
    stock: 100,
    images: [
      'https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'vegetables',
    subcategory: 'fruiting'
  },
  {
    id: '7',
    title: 'Spinach Plant',
    description: 'Nutritious leafy green vegetable plant.',
    price: 5.99,
    discountedPrice: 4.99,
    stock: 80,
    images: [
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'vegetables',
    subcategory: 'leafy'
  },
  {
    id: '8',
    title: 'Boston Fern',
    description: 'Elegant Boston fern with feathery fronds.',
    price: 18.99,
    stock: 40,
    images: [
      'https://images.unsplash.com/photo-1598880513596-a3c5c0ffa500?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598880513596-a3c5c0ffa500?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'ferns',
    subcategory: 'indoor',
    featured: true
  },
  {
    id: '9',
    title: 'Maidenhair Fern',
    description: 'Delicate maidenhair fern with fan-shaped fronds.',
    price: 22.99,
    stock: 25,
    images: [
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'ferns',
    subcategory: 'indoor'
  },
  {
    id: '10',
    title: 'Teak Tree Sapling',
    description: 'Young teak tree sapling for timber production.',
    price: 59.99,
    discountedPrice: 49.99,
    stock: 10,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'timber',
    subcategory: 'teak',
    featured: true
  },
  {
    id: '11',
    title: 'Sandalwood Tree',
    description: 'Aromatic sandalwood tree sapling for long-term investment.',
    price: 79.99,
    stock: 5,
    images: [
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'timber',
    subcategory: 'sandal'
  },
  {
    id: '12',
    title: 'Silver Oak',
    description: 'Fast-growing silver oak tree for timber and shade.',
    price: 45.99,
    discountedPrice: 39.99,
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    category: 'timber',
    subcategory: 'silver oak'
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Flowers',
    image: 'https://images.unsplash.com/photo-1589828994379-41d5a325c0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subcategories: [
      {
        id: '1-1',
        name: 'Roses',
        image: 'https://images.unsplash.com/photo-1589828994379-41d5a325c0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '1-2',
        name: 'Hibiscus',
        image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '1-3',
        name: 'Ixora',
        image: 'https://images.unsplash.com/photo-1596439543102-73a7767248bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '1-4',
        name: 'Others',
        image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: '2',
    name: 'Fruits',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subcategories: [
      {
        id: '2-1',
        name: 'Tropical',
        image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '2-2',
        name: 'Temperate',
        image: 'https://images.unsplash.com/photo-1589217157232-464b505b197d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '2-3',
        name: 'Berries',
        image: 'https://images.unsplash.com/photo-1596591868231-05e882b6f9ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '2-4',
        name: 'Others',
        image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: '3',
    name: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subcategories: [
      {
        id: '3-1',
        name: 'Leafy',
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '3-2',
        name: 'Fruiting',
        image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '3-3',
        name: 'Root',
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '3-4',
        name: 'Others',
        image: 'https://images.unsplash.com/photo-1566842600175-97dca3c5ad8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: '4',
    name: 'Ferns',
    image: 'https://images.unsplash.com/photo-1598880513596-a3c5c0ffa500?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subcategories: [
      {
        id: '4-1',
        name: 'Indoor',
        image: 'https://images.unsplash.com/photo-1598880513596-a3c5c0ffa500?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '4-2',
        name: 'Outdoor',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '4-3',
        name: 'Hanging',
        image: 'https://images.unsplash.com/photo-1598880513596-a3c5c0ffa500?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '4-4',
        name: 'Others',
        image: 'https://images.unsplash.com/photo-1598880513596-a3c5c0ffa500?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: '5',
    name: 'Timber',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subcategories: [
      {
        id: '5-1',
        name: 'Sandal',
        image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '5-2',
        name: 'Teak',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '5-3',
        name: 'Silver Oak',
        image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '5-4',
        name: 'Others',
        image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Summer Sale',
    description: 'Get 20% off on all flowering plants this summer!',
    discount: '20%',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    expiryDate: new Date('2025-08-31')
  },
  {
    id: '2',
    title: 'Fruit Tree Special',
    description: 'Buy 2 fruit trees and get 1 free!',
    discount: 'Buy 2 Get 1 Free',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    expiryDate: new Date('2025-07-15')
  },
  {
    id: '3',
    title: 'Monsoon Offer',
    description: 'Perfect time to plant! 15% off on all plants.',
    discount: '15%',
    image: 'https://images.unsplash.com/photo-1598880513596-a3c5c0ffa500?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    expiryDate: new Date('2025-09-30')
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How often should I water my plants?',
    answer: 'It depends on the plant type, season, and your local climate. Generally, most plants need watering when the top inch of soil feels dry to the touch. Always check the specific care instructions for your plant.'
  },
  {
    id: '2',
    question: 'Do you offer plant delivery?',
    answer: 'Yes, we offer delivery services within a 50-mile radius of our nursery. Delivery fees vary based on distance and order size.'
  },
  {
    id: '3',
    question: 'What is your return policy?',
    answer: 'We accept returns within 14 days of purchase if the plant is in its original condition. Please bring your receipt and the plant to our nursery for inspection.'
  },
  {
    id: '4',
    question: 'How do I care for indoor plants?',
    answer: 'Indoor plants generally need indirect light, regular watering (when the top soil is dry), occasional fertilizing, and proper drainage. Specific care varies by plant type.'
  },
  {
    id: '5',
    question: 'Do you offer landscaping services?',
    answer: 'Yes, we provide professional landscaping services including design, installation, and maintenance. Contact us for a free consultation.'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Garden Design',
    description: 'Professional garden design services to transform your outdoor space.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Plant Maintenance',
    description: 'Regular maintenance services to keep your plants healthy and thriving.',
    image: 'https://images.unsplash.com/photo-1599629954294-14df9f8291bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Landscaping',
    description: 'Complete landscaping services for residential and commercial properties.',
    image: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Plant Consultation',
    description: 'Expert advice on plant selection and care for your specific needs.',
    image: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];