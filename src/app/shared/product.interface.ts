export interface Product {
	imgUrl: string;
	name: string;
	sku: string;
	price: number;
	discountPersent?: number;
	country: string;
	tags: string[];
}