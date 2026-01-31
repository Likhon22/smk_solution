import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "About Us",
    description: "SMK Industrial Solutions - Your trusted partner for industrial Import, Supply, Contracting & Indenting services across Bangladesh. Learn about our vision, mission, and commitment to excellence.",
    keywords: [
        "About SMK Industrial",
        "Industrial Solutions Bangladesh",
        "Import Export Company",
        "Industrial Supplier Bangladesh",
        "Contracting Services",
        "Company Profile",
    ],
    openGraph: {
        title: "About Us | SMK Industrial Solutions",
        description: "Learn about SMK Industrial Solutions - Bangladesh's trusted industrial partner.",
        url: "https://smkisbd.com/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://smkisbd.com" },
        { name: "About Us", url: "https://smkisbd.com/about" },
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
