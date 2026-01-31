import { Product, ProductCategory } from "@/src/types/product";

export const corrosionProducts: Product[] = [
    {
        id: "vci-packaging-films",
        name: "VCI Anti-Corrosion Packaging",
        slug: "vci-packaging-films",
        description: "Volatile Corrosion Inhibitor films and bags for long-term storage of metal parts.",
        image: "/products/corrosion/vci-film.jpg",
        features: [
            "Provides multi-metal protection",
            "Easy to use - no oils or greases needed",
            "Recyclable and non-toxic",
            "Transparent for easy part identification",
            "Protects for up to 2 years in storage"
        ],
        specifications: {
            "Material": "Polyethylene infused with VCI",
            "Film Thickness": "50 to 150 microns",
            "Available Forms": "Rolls, Flat Bags, Gusset Bags",
            "Metals Protected": "Iron, Steel, Copper, Brass"
        },
        applications: [
            "Export shipping and logistics",
            "Spare parts storage",
            "Automotive components",
            "Machinery mothballing"
        ],
        category: "Corrosion & Rust Prevention"
    },
    {
        id: "protective-coatings",
        name: "Industrial Anti-Rust Coatings",
        slug: "protective-coatings",
        description: "High-performance epoxy and polyurethane coatings for industrial assets.",
        image: "/products/corrosion/coatings.jpg",
        features: [
            "Superior salt spray resistance",
            "High chemical and UV resistance",
            "Self-priming options available",
            "Gloss and matte finish choices",
            "Long-term durability in harsh environments"
        ],
        specifications: {
            "Type": "Epoxy, PU, Zinc Rich Primer",
            "DFT Range": "50 to 200 microns per coat",
            "Coverage": "4-8 m²/liter",
            "Salt Spray Test": "Up to 3000 hours"
        },
        applications: [
            "Steel structures and bridges",
            "Storage tanks and vessels",
            "Offshore platforms",
            "Industrial piping systems"
        ],
        category: "Corrosion & Rust Prevention"
    }
];

export const corrosionCategory: ProductCategory = {
    id: "corrosion",
    name: "Corrosion & Rust Prevention",
    slug: "corrosion",
    description: "Advanced solutions for protecting industrial assets including VCI packaging, protective coatings, and rust converters designed to extend the life of your metal components.",
    icon: "🧪",
    products: corrosionProducts
};
