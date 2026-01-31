import { Product, ProductCategory } from "@/src/types/product";

export const safetyFireProducts: Product[] = [
    {
        id: "fire-extinguishers",
        name: "Fire Extinguishers",
        slug: "fire-extinguishers",
        description: "CE certified portable fire extinguishers for all fire classes with maintenance support.",
        image: "/products/safety-fire/fire-extinguisher.jpg",
        features: [
            "ABC dry chemical powder type",
            "CO2 and foam variants available",
            "Pressure gauge indicator",
            "Wall mounting bracket included",
            "Annual maintenance service available"
        ],
        specifications: {
            "Capacity": "1kg to 12kg",
            "Fire Classes": "A, B, C, D, K",
            "Types": "Dry Powder, CO2, Foam, Water",
            "Certification": "CE, ISO 9001",
            "Discharge Time": "8-15 seconds"
        },
        applications: [
            "Office buildings",
            "Manufacturing plants",
            "Warehouses",
            "Residential complexes"
        ],
        category: "Industrial Safety & Fire Protection"
    },
    {
        id: "safety-helmets",
        name: "Industrial Safety Helmets",
        slug: "safety-helmets",
        description: "Impact-resistant hard hats compliant with international safety standards.",
        image: "/products/safety-fire/helmet.jpg",
        features: [
            "High-density polyethylene shell",
            "Adjustable suspension system",
            "Ventilation slots for comfort",
            "Chin strap attachment points",
            "UV resistant material"
        ],
        specifications: {
            "Material": "HDPE / ABS",
            "Standards": "EN 397, ANSI Z89.1",
            "Weight": "300-400g",
            "Temperature Range": "-30°C to +50°C",
            "Colors": "White, Yellow, Red, Blue, Orange"
        },
        applications: [
            "Construction sites",
            "Manufacturing facilities",
            "Mining operations",
            "Electrical work"
        ],
        category: "Industrial Safety & Fire Protection"
    },
    {
        id: "safety-gloves",
        name: "Industrial Safety Gloves",
        slug: "safety-gloves",
        description: "Cut-resistant, chemical-resistant, and heat-resistant gloves for various hazards.",
        image: "/products/safety-fire/gloves.jpg",
        features: [
            "Multiple protection levels available",
            "Ergonomic fit and dexterity",
            "Touchscreen compatible options",
            "Washable and reusable",
            "Latex-free varieties"
        ],
        specifications: {
            "Materials": "Nitrile, Leather, Kevlar, Neoprene",
            "Standards": "EN 388, EN 374, ANSI/ISEA 105",
            "Cut Resistance": "Level A1 to A9",
            "Sizes": "S, M, L, XL, XXL"
        },
        applications: [
            "Material handling",
            "Chemical handling",
            "Welding and hot work",
            "Assembly operations"
        ],
        category: "Industrial Safety & Fire Protection"
    },
    {
        id: "fire-alarm-systems",
        name: "Fire Alarm & Detection Systems",
        slug: "fire-alarm-systems",
        description: "Advanced fire detection and alarm systems with central monitoring capabilities.",
        image: "/products/safety-fire/fire-alarm.jpg",
        features: [
            "Smoke and heat detection",
            "Addressable and conventional types",
            "Manual call points",
            "Audiovisual alarms",
            "Integration with sprinkler systems"
        ],
        specifications: {
            "Zones": "2 to 32 zones",
            "Detector Types": "Smoke, Heat, Beam, Aspirating",
            "Communication": "RS485, TCP/IP",
            "Power": "24VDC with battery backup",
            "Certification": "UL, FM, CE"
        },
        applications: [
            "Commercial buildings",
            "Industrial facilities",
            "Hospitals and schools",
            "Hotels and shopping malls"
        ],
        category: "Industrial Safety & Fire Protection"
    },
    {
        id: "safety-shoes",
        name: "Industrial Safety Footwear",
        slug: "safety-shoes",
        description: "Steel-toe and composite-toe safety boots with slip and puncture resistance.",
        image: "/products/safety-fire/safety-shoes.jpg",
        features: [
            "Steel toe or composite toe cap",
            "Puncture-resistant midsole",
            "Slip-resistant outsole",
            "Electrical hazard protection",
            "Breathable and comfortable"
        ],
        specifications: {
            "Standards": "EN ISO 20345, ASTM F2413",
            "Protection": "S1, S2, S3, S5",
            "Sole Material": "PU/Rubber",
            "Sizes": "UK 5 to 13",
            "Weight": "800-1200g per pair"
        },
        applications: [
            "Construction and heavy industry",
            "Warehouse operations",
            "Oil and gas facilities",
            "Manufacturing plants"
        ],
        category: "Industrial Safety & Fire Protection"
    }
];

export const safetyFireCategory: ProductCategory = {
    id: "safety-fire",
    name: "Industrial Safety & Fire Protection",
    slug: "safety-fire",
    description: "Comprehensive safety equipment and fire protection systems including PPE, fire extinguishers, alarm systems, and safety gear to protect your workforce and assets.",
    icon: "🛡️",
    products: safetyFireProducts
};
