import { allProductCategories, getCategoryBySlug } from "@/src/data/product-index";
import { CategoryHero } from "@/components/products/CategoryHero";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CTASection } from "@/components/sections/CTASection";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return allProductCategories.map((category) => ({
        category: category.slug,
    }));
}

interface PageProps {
    params: Promise<{ category: string }>;
}

export default async function ProductCategoryPage({ params }: PageProps) {
    const { category: categorySlug } = await params;
    const category = getCategoryBySlug(categorySlug);

    if (!category) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            <CategoryHero
                name={category.name}
                description={category.description}
                icon={category.icon}
            />

            <ProductGrid products={category.products} />

            <div className="bg-muted/30">
                <CTASection />
            </div>
        </div>
    );
}
