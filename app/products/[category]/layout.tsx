import { allProductCategories } from "@/src/data/product-index";
import { generateBreadcrumbSchema } from "@/lib/seo";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
    { params }: { params: Promise<{ category: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { category: categorySlug } = await params;
    const category = allProductCategories.find(c => c.slug === categorySlug);

    if (!category) return {};

    return {
        title: category.name,
        description: category.description,
        openGraph: {
            title: `${category.name} | SMK Industrial Solutions`,
            description: category.description,
            url: `https://smkisbd.com/products/${category.slug}`,
        },
    };
}

export default async function CategoryLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ category: string }>;
}) {
    const { category: categorySlug } = await params;
    const category = allProductCategories.find(c => c.slug === categorySlug);

    const breadcrumbSchema = category ? generateBreadcrumbSchema([
        { name: "Home", url: "https://smkisbd.com" },
        { name: "Products", url: "https://smkisbd.com/products" },
        { name: category.name, url: `https://smkisbd.com/products/${category.slug}` },
    ]) : null;

    return (
        <>
            {breadcrumbSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbSchema),
                    }}
                />
            )}
            {children}
        </>
    );
}
