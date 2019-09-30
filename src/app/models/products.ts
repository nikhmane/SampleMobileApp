export interface Products {
    category: number;
    expanded: boolean;
    products: {
        id: number;
        name: string;
        price: number;
        percentOff: number;
        imagePath: string
    }
}
