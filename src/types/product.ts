// Product type definitions
export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string; // Path to image in public/products/
    features: string[];
    specifications?: {
        [key: string]: string;
    };
    applications?: string[];
    category: string;
}

export interface ProductCategory {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string;
    heroImage?: string;
    products: Product[];
}
