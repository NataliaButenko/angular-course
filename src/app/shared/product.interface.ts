export interface Product {
  productID: number;
  categories: string;
  name: string;
  price: number;
  discount: number;
  sku: string;
  isActive: boolean;
  countryCode: string;
  itemUrl: string;
  tags: string[];
  image: string;
}

export interface StoreProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  brand: string;
  inStock: boolean;
}
