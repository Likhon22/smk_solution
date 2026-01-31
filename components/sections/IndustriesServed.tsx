"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { industriesContent } from "@/src/data/pages";

const industryVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.4,
        },
    }),
};

export function IndustriesServed() {
    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Industries We Serve
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Delivering specialized solutions across diverse sectors in Bangladesh
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {industriesContent.industries.map((industry, index) => (
                        <motion.div
                            key={industry.name}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={industryVariants}
                        >
                            <Card className="h-full group hover:border-industrial-blue transition-all hover:shadow-lg">
                                <CardContent className="p-6">
                                    <div className="text-4xl mb-3">{industry.icon}</div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-industrial-blue transition-colors">
                                        {industry.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {industry.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
