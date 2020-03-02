import { LineItem } from './line-item';
import { Driver } from 'src/app/drivers/model/driver';
import { Seller } from 'src/app/seller/seller-model/seller';
import { Client } from 'src/app/client/client-model/client';

export interface Invoice {
    invoiceNumber: string;
	date: Date;
	status: string;
	client: Client;
	driver: Driver;
	seller: Seller;
	items: LineItem[];
}
