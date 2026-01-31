// Site-wide configuration and contact information
export const siteConfig = {
    name: "SMK Industrial Solutions",
    tagline: "Precision • Strength • Reliability",
    description: "A partnership firm engaged in the import, supply, contracting, and indenting of industrial products and systems, serving diverse industrial and commercial sectors across Bangladesh.",

    contact: {
        registeredAddress: {
            title: "Registered Office",
            address: "Hazi Ashraf Shopping Complex and Tower, Holding # 47, Ward # 06, Jadur Char, Hemayetpur, Savar- 1340, Dhaka, Bangladesh.",
        },
        operationalAddress: {
            title: "Operational Office",
            address: "14/21, Babar Road, Mohammadpur, Dhaka–1207, Bangladesh.",
        },
        phone: "+8801326004848",
        email: "info@smkisbd.com",
    },

    social: {
        facebook: "#",
        linkedin: "#",
    },
};

// Main navigation structure
export const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Products & Solutions",
        href: "/products",
        dropdown: [
            { name: "Material Handling & Storage Solutions", href: "/products#material-handling" },
            { name: "Industrial MRO Consumables", href: "/products#mro" },
            { name: "Industrial Safety & Fire Protection", href: "/products#safety-fire" },
            { name: "Security & Access Control", href: "/products#security" },
            { name: "Industrial Cleaning & Waste Management", href: "/products#cleaning" },
            { name: "Corrosion & Rust Prevention", href: "/products#corrosion" },
            { name: "Leak Detection & Waterproofing", href: "/products#waterproofing" },
        ]
    },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

// Business segments for homepage
export const businessSegments = [
    {
        icon: "🏭",
        title: "Import",
        description: "Direct import of quality industrial products from trusted global manufacturers.",
    },
    {
        icon: "📦",
        title: "Supply",
        description: "Reliable supply chain management ensuring timely delivery of materials and equipment.",
    },
    {
        icon: "🔧",
        title: "Contracting",
        description: "End-to-end contracting services for industrial installation and maintenance projects.",
    },
    {
        icon: "🤝",
        title: "Indenting",
        description: "Professional indenting services connecting clients with leading international suppliers.",
    },
];

// Why Choose Us points
export const whyChooseUs = [
    {
        title: "Reliable Sourcing",
        description: "We partner with verified global suppliers to ensure authentic, quality products.",
    },
    {
        title: "Quality-Driven",
        description: "Strict quality control measures at every stage of the supply chain.",
    },
    {
        title: "Technical Support",
        description: "Expert technical guidance and after-sales support for all our products.",
    },
    {
        title: "Timely Delivery",
        description: "Efficient logistics and inventory management for on-time project completion.",
    },
    {
        title: "Competitive Pricing",
        description: "Direct sourcing and optimized operations deliver the best value to our clients.",
    },
    {
        title: "Industry Expertise",
        description: "Years of experience serving diverse industrial sectors across Bangladesh.",
    },
];
