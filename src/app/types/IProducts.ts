export interface IProduct {
    id: number
    title: string
    price: string
    description: string
    images: string[]
    creationAt: string
    updatedAt: string
    category: Category
}

export interface Category {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
}