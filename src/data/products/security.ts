import { Product, ProductCategory } from "@/src/types/product";

export const securityProducts: Product[] = [
    {
        id: "access-control-systems",
        name: "Biometric Access Control Systems",
        slug: "access-control-systems",
        description: "Advanced biometric and RFID access control solutions for high-security areas.",
        image: "/products/security/access-control.jpg",
        features: [
            "Fingerprint and facial recognition",
            "RFID card and mobile access options",
            "Network-based central management",
            "Time and attendance integration",
            "Anti-passback and interlock features"
        ],
        specifications: {
            "Verification Method": "Fingerprint, Face, Card, PIN",
            "User Capacity": "Up to 10,000 users",
            "Log Capacity": "Up to 1,000,000 events",
            "Communication": "TCP/IP, Wiegand, RS485",
            "Protection": "IP65 weatherproof options"
        },
        applications: [
            "Corporate offices",
            "Data centers",
            "R&D facilities",
            "Government buildings"
        ],
        category: "Security & Access Control"
    },
    {
        id: "cctv-surveillance",
        name: "IP-Based CCTV Surveillance",
        slug: "cctv-surveillance",
        description: "High-definition IP cameras and NVR systems for 24/7 industrial monitoring.",
        image: "/products/security/cctv.jpg",
        features: [
            "4K Ultra HD resolution",
            "AI-powered motion detection",
            "Infrared night vision up to 50m",
            "Remote viewing via mobile app",
            "PoE support for easy installation"
        ],
        specifications: {
            "Resolution": "2MP to 12MP (4K)",
            "Storage": "8TB to 128TB NVR support",
            "Compression": "H.265+ technology",
            "Lens Option": "Fixed or Varifocal",
            "Weather Rating": "IP67 and IK10 vandal-proof"
        },
        applications: [
            "Industrial perimeters",
            "Warehouse monitoring",
            "Production floor tracking",
            "Parking area security"
        ],
        category: "Security & Access Control"
    },
    {
        id: "turnstile-gates",
        name: "Tripod & Flap Turnstiles",
        slug: "turnstile-gates",
        description: "Robust pedestrian entrance control systems for high-traffic environments.",
        image: "/products/security/turnstiles.jpg",
        features: [
            "Bidirectional traffic control",
            "Anti-tailgating sensors",
            "Emergency fail-safe modes",
            "Integration with access control",
            "Durable stainless steel construction"
        ],
        specifications: {
            "Material": "SUS304 Stainless Steel",
            "Pass Rate": "35 persons per minute",
            "Arm Length": "500mm to 1100mm",
            "MCBF": "5 million operations",
            "Power": "110-240V AC"
        },
        applications: [
            "Factory worker entrances",
            "Transit hubs",
            "Sports stadiums",
            "Commercial lobbies"
        ],
        category: "Security & Access Control"
    }
];

export const securityCategory: ProductCategory = {
    id: "security",
    name: "Security & Access Control",
    slug: "security",
    description: "State-of-the-art security solutions including biometric access control, IP surveillance systems, and pedestrian entrance management tailored for industrial and commercial safety.",
    icon: "🔐",
    products: securityProducts
};
