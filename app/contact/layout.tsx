import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with SMK Industrial Solutions. Request a quote, discuss your project requirements, or visit our offices in Dhaka, Bangladesh. We're here to help with all your industrial needs.",
    keywords: [
        "Contact SMK Industrial",
        "Request Quote",
        "Industrial Solutions Contact",
        "Dhaka Office",
        "Bangladesh Industrial Supplier Contact",
    ],
    openGraph: {
        title: "Contact Us | SMK Industrial Solutions",
        description: "Request a quote or get in touch with our team for industrial solutions.",
        url: "https://smkisbd.com/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
