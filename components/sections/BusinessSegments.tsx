"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { businessSegments } from "@/src/data/site";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        },
    }),
};

export function BusinessSegments() {
    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Our Core Business
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Comprehensive industrial solutions across four key service areas
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {businessSegments.map((segment, index) => (
                        <motion.div
                            key={segment.title}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={cardVariants}
                        >
                            <Card className="h-full transition-all hover:shadow-2xl hover:scale-105 border-border/50 bg-background/60 backdrop-blur-sm hover:bg-background/80">
                                <CardContent className="p-6 text-center">
                                    <div className="text-5xl mb-4">{segment.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 text-industrial-blue">
                                        {segment.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {segment.description}
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
