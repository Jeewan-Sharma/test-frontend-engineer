import { IProduct } from "./IProducts";

export interface ICartItem {
    id: number;
    item: IProduct;
    color: string;
    size: string;
    quantity: number;
}