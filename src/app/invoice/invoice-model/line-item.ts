import { Product } from 'src/app/product/product-model/product';

export interface LineItem {
    product: Product;
	quantity: number;
	price: number;
	vat: number;
	value: number;
}
