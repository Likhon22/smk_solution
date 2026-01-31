import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Products & Solutions",
    description: "Comprehensive industrial solutions including Material Handling, MRO Consumables, Safety Equipment, Security Systems, Cleaning Solutions, Corrosion Prevention, and Waterproofing. Trusted supplier across Bangladesh.",
    keywords: [
        "Material Handling Equipment Bangladesh",
        "Industrial Storage Solutions",
        "MRO Consumables",
        "Industrial Safety Equipment",
        "Fire Protection Systems",
        "Security Access Control",
        "Industrial Cleaning Services",
        "Waste Management Solutions",
        "Corrosion Prevention",
        "Rust Prevention Bangladesh",
        "Leak Detection Services",
        "Waterproofing Solutions",
    ],
    openGraph: {
        title: "Products & Solutions | SMK Industrial Solutions",
        description: "Explore our comprehensive range of industrial products and solutions for Bangladesh industries.",
        url: "https://smkisbd.com/products",
    },
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://smkisbd.com" },
        { name: "Products & Solutions", url: "https://smkisbd.com/products" },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            {children}
        </>
    );
}
