import { Product, ProductCategory } from "@/src/types/product";

export const materialHandlingProducts: Product[] = [
    {
        id: "pallet-racking",
        name: "Industrial Pallet Racking Systems",
        slug: "pallet-racking",
        description: "Heavy-duty storage solutions for warehouse optimization with adjustable configurations.",
        image: "/products/material-handling/pallet-racking.jpg",
        features: [
            "Load capacity up to 3000kg per level",
            "Adjustable beam heights for flexibility",
            "Corrosion-resistant powder coating",
            "Seismic-certified safe design",
            "Easy installation and reconfiguration"
        ],
        specifications: {
            "Material": "High-grade Q235B steel",
            "Finish": "Electrostatic powder coating",
            "Load Capacity": "Up to 3000kg per level",
            "Certification": "ISO 9001, CE certified",
            "Beam Height Adjustment": "75mm pitch"
        },
        applications: [
            "Warehouses and distribution centers",
            "Manufacturing facilities",
            "Retail backrooms",
            "3PL logistics centers"
        ],
        category: "Material Handling & Storage Solutions"
    },
    {
        id: "conveyor-systems",
        name: "Conveyor Belt Systems",
        slug: "conveyor-systems",
        description: "Efficient material transport solutions for production lines and warehouses.",
        image: "/products/material-handling/conveyor-systems.jpg",
        features: [
            "Variable speed control",
            "Modular design for easy expansion",
            "Low maintenance requirements",
            "Energy-efficient motors",
            "Safety interlocks and emergency stops"
        ],
        specifications: {
            "Belt Width": "400mm to 1200mm",
            "Speed Range": "0.1 to 2.0 m/s",
            "Motor Power": "0.75kW to 5.5kW",
            "Load Capacity": "Up to 500kg/m",
        },
        applications: [
            "Production and assembly lines",
            "Packaging operations",
            "Airport baggage handling",
            "Food processing plants"
        ],
        category: "Material Handling & Storage Solutions"
    },
    {
        id: "forklift-parts",
        name: "Forklift Parts & Accessories",
        slug: "forklift-parts",
        description: "Comprehensive range of OEM and aftermarket forklift components.",
        image: "/products/material-handling/forklift-parts.jpg",
        features: [
            "OEM quality standards",
            "Wide compatibility range",
            "Extended warranty coverage",
            "Fast delivery availability",
            "Technical support included"
        ],
        applications: [
            "Forklift maintenance",
            "Fleet management",
            "Warehouse operations"
        ],
        category: "Material Handling & Storage Solutions"
    },
    {
        id: "warehouse-shelving",
        name: "Warehouse Shelving Units",
        slug: "warehouse-shelving",
        description: "Versatile shelving systems for organized storage and easy access.",
        image: "/products/material-handling/shelving.jpg",
        features: [
            "Adjustable shelf levels",
            "Bolt-free assembly",
            "Rust-resistant finish",
            "High load capacity per shelf",
            "Modular and expandable"
        ],
        specifications: {
            "Shelf Load": "Up to 200kg per level",
            "Material": "Cold-rolled steel",
            "Height Range": "1.8m to 3.0m",
            "Depth": "300mm to 600mm"
        },
        applications: [
            "Small parts storage",
            "Archive and document storage",
            "Tool rooms",
            "Retail stockrooms"
        ],
        category: "Material Handling & Storage Solutions"
    },
    {
        id: "hand-pallet-trucks",
        name: "Manual Pallet Trucks",
        slug: "hand-pallet-trucks",
        description: "Reliable manual pallet jacks for efficient material movement.",
        image: "/products/material-handling/pallet-truck.jpg",
        features: [
            "Smooth hydraulic pump operation",
            "Polyurethane load wheels",
            "Overload safety valve",
            "Ergonomic handle design",
            "Compact and maneuverable"
        ],
        specifications: {
            "Load Capacity": "2000kg to 3000kg",
            "Fork Length": "1150mm to 1220mm",
            "Fork Width": "160mm to 180mm",
            "Lift Height": "85mm to 200mm"
        },
        applications: [
            "Warehouse loading/unloading",
            "Retail store  operations",
            "Shipping and receiving",
            "Light manufacturing"
        ],
        category: "Material Handling & Storage Solutions"
    }
];

export const materialHandlingCategory: ProductCategory = {
    id: "material-handling",
    name: "Material Handling & Storage Solutions",
    slug: "material-handling",
    description: "Comprehensive warehouse and logistics equipment including pallet racking, conveyor systems, forklifts, and storage solutions designed to optimize your material flow and maximize space utilization.",
    icon: "📦",
    products: materialHandlingProducts
};
