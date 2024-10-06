export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  inStock: boolean;
  rating: number;
}

export interface IProductTableItem extends IProduct {
  selected: boolean;
}
