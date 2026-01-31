import type { Metadata } from "next";
import { aboutContent } from "@/src/data/pages";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about SMK Industrial Solutions - Your trusted partner for industrial products and systems in Bangladesh.",
};

export default function AboutPage() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-br from-industrial-blue/10 to-background py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
                            {aboutContent.hero.title}
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            {aboutContent.hero.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-16 sm:py-20 bg-background">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-6 text-industrial-blue">
                        {aboutContent.overview.title}
                    </h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
                        {aboutContent.overview.content}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-16 sm:py-20 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2">
                        <Card>
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-industrial-blue">
                                    {aboutContent.vision.title}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {aboutContent.vision.content}
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-industrial-blue">
                                    {aboutContent.mission.title}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {aboutContent.mission.content}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 sm:py-20 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                        Our Core Values
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {aboutContent.values.map((value) => (
                            <Card key={value.title} className="border-l-4 border-l-industrial-blue">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold mb-2 text-industrial-blue">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {value.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nature of Business */}
            <section className="py-16 sm:py-20 bg-muted/30">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-6 text-industrial-blue">
                        {aboutContent.natureOfBusiness.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {aboutContent.natureOfBusiness.content}
                    </p>
                </div>
            </section>
        </div>
    );
}
