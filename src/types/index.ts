export interface Plant {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice?: number;
  stock: number;
  images: string[];
  category: string;
  subcategory: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  image: string;
  plants: Plant[];
}

export interface CartItem {
  plant: Plant;
  quantity: number;
}

export interface WishlistItem {
  plant: Plant;
}

export interface CustomerQuery {
  id: string;
  name: string;
  email: string;
  message: string;
  imageUrl?: string;
  date: Date;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  image: string;
  expiryDate: Date;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}
