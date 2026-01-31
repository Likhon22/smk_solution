import { Product, ProductCategory } from "@/src/types/product";

export const cleaningProducts: Product[] = [
    {
        id: "industrial-scrubber-driers",
        name: "Industrial Floor Scrubber Driers",
        slug: "industrial-scrubber-driers",
        description: "Walk-behind and ride-on machines for deep cleaning of large industrial floors.",
        image: "/products/cleaning/scrubber.jpg",
        features: [
            "Large tank capacity for extended cleaning",
            "Battery and corded power options",
            "High brush pressure for tough stains",
            "Easy maintenance brush systems",
            "Quiet operation for commercial areas"
        ],
        specifications: {
            "Cleaning Width": "500mm to 1000mm",
            "Theoretical Productivity": "2000 - 6400 m²/h",
            "Solution Tank": "40L to 150L",
            "Recovery Tank": "45L to 160L",
            "Battery Run Time": "3-5 hours"
        },
        applications: [
            "Factory workshops",
            "Shopping malls",
            "Warehouses",
            "Airport terminals"
        ],
        category: "Industrial Cleaning & Waste Management"
    },
    {
        id: "high-pressure-washers",
        name: "Heavy-Duty High Pressure Washers",
        slug: "high-pressure-washers",
        description: "Professional cold and hot water pressure washers for heavy equipment cleaning.",
        image: "/products/cleaning/pressure-washer.jpg",
        features: [
            "Adjustable pressure up to 500 bar",
            "Electric, diesel, and petrol options",
            "Chemical dosing systems",
            "Stainless steel nozzle kits",
            "Robust trolley design for mobility"
        ],
        specifications: {
            "Pressure Range": "100 to 500 bar",
            "Water Flow": "10 to 30 L/min",
            "Max Temperature": "Cold or Hot (up to 90°C)",
            "Motor Type": "3-Phase Electric or Engine"
        },
        applications: [
            "Construction equipment",
            "Industrial machinery",
            "Surface preparation",
            "Fleet vehicle washing"
        ],
        category: "Industrial Cleaning & Waste Management"
    }
];

export const cleaningCategory: ProductCategory = {
    id: "cleaning",
    name: "Industrial Cleaning & Waste Management",
    slug: "cleaning",
    description: "Professional cleaning equipment and waste management systems including floor scrubbers, high-pressure washers, and industrial vacuum solutions for maintaining hygienic work environments.",
    icon: "🧹",
    products: cleaningProducts
};
