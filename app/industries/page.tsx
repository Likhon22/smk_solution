import type { Metadata } from "next";
import { industriesContent } from "@/src/data/pages";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Industries We Serve",
    description: "SMK Industrial Solutions serves Manufacturing, Garments, Pharmaceuticals, Warehousing, Food & Beverage, and Construction sectors.",
};

export default function IndustriesPage() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-br from-industrial-blue/10 to-background py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
                            {industriesContent.hero.title}
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            {industriesContent.hero.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-16 sm:py-20 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {industriesContent.industries.map((industry) => (
                            <Card key={industry.name} className="group hover:border-industrial-blue hover:shadow-lg transition-all">
                                <CardContent className="p-8">
                                    <div className="text-5xl mb-4">{industry.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-industrial-blue transition-colors">
                                        {industry.name}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {industry.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
