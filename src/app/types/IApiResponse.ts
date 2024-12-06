import { IProduct } from "./IProducts";

export interface ApiResponse {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}