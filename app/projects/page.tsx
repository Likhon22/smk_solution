import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Projects",
    description: "View SMK Industrial Solutions' completed projects and client portfolio.",
};

export default function ProjectsPage() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-br from-industrial-blue/10 to-background py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
                            Our Projects
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Delivering excellence across Bangladesh's industrial landscape
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Content */}
            <section className="py-16 sm:py-20 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Card className="border-2 border-industrial-blue/20">
                        <CardContent className="p-12 text-center">
                            <div className="text-6xl mb-4">🏗️</div>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">
                                Project Portfolio Coming Soon
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                We're currently updating our project showcase with detailed case studies and client success stories.
                                Please contact us directly to learn more about our completed projects and ongoing works.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
