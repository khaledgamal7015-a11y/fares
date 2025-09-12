export interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  image: string;
  description: string;
  descriptionEn: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Service {
  id: number;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  features: string[];
  featuresEn: string[];
}

export interface Language {
  code: 'ar' | 'en';
  name: string;
  direction: 'rtl' | 'ltr';
}