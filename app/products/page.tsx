import type { Metadata } from "next";
import { products } from "@/src/data/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Products & Solutions",
    description: "Comprehensive industrial solutions including material handling, safety systems, MRO supplies, and more.",
};

export default function ProductsPage() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-br from-industrial-blue/10 to-background py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
                            Products &amp; Solutions
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive industrial products and systems tailored to your operational needs
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 sm:py-20 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {products.map((category, index) => (
                            <div
                                key={category.id}
                                id={category.id}
                                className={index % 2 === 0 ? "bg-background" : "bg-muted/20 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-lg"}
                            >
                                <Card className="border-2 border-industrial-blue/20 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all">
                                    <CardHeader>
                                        <div className="flex items-center gap-4">
                                            <div className="text-4xl">{category.icon}</div>
                                            <CardTitle className="text-2xl text-industrial-blue">
                                                {category.title}
                                            </CardTitle>
                                        </div>
                                        <p className="text-muted-foreground mt-2">
                                            {category.description}
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                            {category.products.map((product) => (
                                                <li
                                                    key={product}
                                                    className="flex items-start gap-2 text-muted-foreground"
                                                >
                                                    <span className="text-industrial-blue mt-1">✓</span>
                                                    <span>{product}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
