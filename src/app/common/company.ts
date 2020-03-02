import { BankAccount } from './bankaccount';
import { Address } from './address';

export interface Company {
    id: number;
	
    name: string;
	
	account: BankAccount;
	
	address: Address;
	
	fiscalCode: string;
	
	email: string;
	
	phone: number;
}
