import { Product, ProductCategory } from "@/src/types/product";

export const mroProducts: Product[] = [
    {
        id: "industrial-fasteners",
        name: "Industrial Fasteners & Hardware",
        slug: "industrial-fasteners",
        description: "Comprehensive range of bolts, nuts, washers, and specialty fasteners for all industrial applications.",
        image: "/products/mro/fasteners.jpg",
        features: [
            "Wide range of sizes and grades",
            "Stainless steel and carbon steel options",
            "Metric and imperial standards",
            "Bulk quantity availability",
            "Quality certified materials"
        ],
        specifications: {
            "Material Grades": "Grade 4.8, 8.8, 10.9, 12.9, SS304, SS316",
            "Standards": "DIN, ISO, ANSI, BS",
            "Finish Options": "Zinc plated, Hot-dip galvanized, Plain",
            "Size Range": "M3 to M100"
        },
        applications: [
            "Machinery assembly",
            "Structural connections",
            "Equipment maintenance",
            "Construction projects"
        ],
        category: "Industrial MRO Consumables"
    },
    {
        id: "industrial-lubricants",
        name: "Industrial Lubricants & Oils",
        slug: "industrial-lubricants",
        description: "Premium lubricants, greases, and specialty oils for equipment maintenance and performance.",
        image: "/products/mro/lubricants.jpg",
        features: [
            "Synthetic and mineral oil options",
            "High-temperature formulations",
            "Food-grade varieties available",
            "Extended service intervals",
            "Compatible with all major OEMs"
        ],
        specifications: {
            "Viscosity Grades": "ISO VG 32 to 680",
            "Temperature Range": "-40°C to +200°C",
            "Types": "Hydraulic, Gear, Engine, Compressor",
            "Standards": "ISO 6743, AGMA, DIN 51524"
        },
        applications: [
            "Hydraulic systems",
            "Gearboxes and transmissions",
            "Air compressors",
            "Bearing lubrication"
        ],
        category: "Industrial MRO Consumables"
    },
    {
        id: "abrasives-grinding",
        name: "Abrasives & Grinding Wheels",
        slug: "abrasives-grinding",
        description: "Professional-grade cutting, grinding, and polishing abrasives for metal fabrication.",
        image: "/products/mro/abrasives.jpg",
        features: [
            "Long service life",
            "Consistent performance",
            "Multiple grit options",
            "Safety certified",
            "Various bond types available"
        ],
        specifications: {
            "Wheel Sizes": "100mm to 400mm diameter",
            "Grit Range": "24 to 120 grit",
            "Bond Types": "Resinoid, Vitrified, Rubber",
            "Max RPM": "Up to 80 m/s"
        },
        applications: [
            "Metal cutting and grinding",
            "Surface preparation",
            "Weld cleaning",
            "Deburring operations"
        ],
        category: "Industrial MRO Consumables"
    },
    {
        id: "adhesives-sealants",
        name: "Industrial Adhesives & Sealants",
        slug: "adhesives-sealants",
        description: "High-performance bonding and sealing solutions for manufacturing and maintenance.",
        image: "/products/mro/adhesives.jpg",
        features: [
            "Fast curing formulations",
            "Chemical and temperature resistant",
            "Flexible and rigid options",
            "UV and weather resistant",
            "NSF-certified food-safe variants"
        ],
        specifications: {
            "Types": "Epoxy, Polyurethane, Silicone, Acrylic",
            "Cure Time": "5 minutes to 24 hours",
            "Temperature Resistance": "-50°C to +250°C",
            "Bond Strength": "Up to 25 MPa"
        },
        applications: [
            "Equipment assembly",
            "Pipe and tank sealing",
            "Gasket replacement",
            "Emergency repairs"
        ],
        category: "Industrial MRO Consumables"
    },
    {
        id: "cutting-tools",
        name: "Cutting Tools & Drill Bits",
        slug: "cutting-tools",
        description: "Precision cutting tools, drill bits, taps, and dies for machining operations.",
        image: "/products/mro/cutting-tools.jpg",
        features: [
            "HSS and carbide options",
            "TiN, TiCN, TiAlN coatings",
            "Extended tool life",
            "Precision ground edges",
            "Wide size ranges"
        ],
        specifications: {
            "Materials": "HSS, Cobalt HSS, Solid Carbide",
            "Coatings": "TiN, TiCN, TiAlN, Diamond",
            "Size Range": "0.5mm to 50mm",
            "Standards": "DIN, ANSI, JIS"
        },
        applications: [
            "CNC machining",
            "Manual milling",
            "Drilling operations",
            "Thread cutting"
        ],
        category: "Industrial MRO Consumables"
    }
];

export const mroCategory: ProductCategory = {
    id: "mro",
    name: "Industrial MRO Consumables",
    slug: "mro",
    description: "Essential maintenance, repair, and operations supplies including fasteners, lubricants, adhesives, abrasives, and cutting tools to keep your operations running smoothly.",
    icon: "🔧",
    products: mroProducts
};
