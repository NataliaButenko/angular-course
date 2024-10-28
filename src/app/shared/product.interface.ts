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
