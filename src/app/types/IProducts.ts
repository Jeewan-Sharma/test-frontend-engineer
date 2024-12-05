export interface Rating {
    rate: string;
    count: string;
}

export interface IProduct {
    id: number;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}