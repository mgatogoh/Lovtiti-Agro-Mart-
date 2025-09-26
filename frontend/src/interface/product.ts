export interface Product {
    id?: string | number;
    name: string;
    image?: string;
    priceHBAR?: number;
    unit?: string;
    farmerName?: string;
    location?: string;
    verified?: boolean;
    shortDesc?: string;
}

export interface CardProps {
    product: Product;
    onBuy?: (product: Product) => void;
    onView?: (product: Product) => void;
    heading: string;
    text: string;
}