import { IProduct } from "./IProducts";

export interface ICartItem {
    id: string;
    item: IProduct;
    color: string;
    size: string;
    quantity: number;
}