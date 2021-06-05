import { Product } from './';

export interface CustomerHistory {
    customerId: string;
    products: Product[];
}

export interface ShopHistory extends Array<CustomerHistory> { }