import { Product, ProductCategory } from "@/src/types/product";

export const waterproofingProducts: Product[] = [
    {
        id: "polyurethane-waterproofing",
        name: "Liquid PU Waterproofing Membrane",
        slug: "polyurethane-waterproofing",
        description: "Highly elastic liquid-applied polyurethane membrane for reliable roof waterproofing.",
        image: "/products/waterproofing/pu-membrane.jpg",
        features: [
            "Seamless and jointless application",
            "Excellent UV and weather resistance",
            "Crack-bridging capabilities",
            "High elasticity (up to 500%)",
            "Compatible with various substrates"
        ],
        specifications: {
            "Material": "One-component Polyurethane",
            "Solid Content": "> 90%",
            "Elongation": "> 500%",
            "Tensile Strength": "> 4 MPa",
            "Application": "Roller, Brush, or Airless Spray"
        },
        applications: [
            "Flat roofs and balconies",
            "Kitchen and bathroom floors",
            "Retaining walls",
            "Green roofs"
        ],
        category: "Leak Detection & Waterproofing"
    },
    {
        id: "thermal-imaging-leak-detection",
        name: "Thermal Imaging Leak Detection",
        slug: "thermal-imaging-leak-detection",
        description: "Non-destructive testing service using infrared thermography to locate hidden leaks.",
        image: "/products/waterproofing/thermal-imaging.jpg",
        features: [
            "Non-invasive and non-destructive",
            "Identifies moisture behind walls and floors",
            "Saves time and repair costs",
            "Comprehensive digital reporting",
            "High-precision thermal measurement"
        ],
        specifications: {
            "Equipment": "FLIR High-Resolution Thermal Cameras",
            "Temperature Sensitivity": "< 0.05°C",
            "Output": "Visual and Thermal overlay reports",
            "Accuracy": "±2°C or ±2%"
        },
        applications: [
            "Roof leak investigation",
            "Underfloor pipe leaks",
            "Electrical panel inspection",
            "Building insulation audits"
        ],
        category: "Leak Detection & Waterproofing"
    }
];

export const waterproofingCategory: ProductCategory = {
    id: "waterproofing",
    name: "Leak Detection & Waterproofing",
    slug: "waterproofing",
    description: "Specialized services and products for building integrity including liquid waterproofing membranes and high-tech thermal imaging for leak detection and moisture analysis.",
    icon: "💧",
    products: waterproofingProducts
};
