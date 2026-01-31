"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { whyChooseUs } from "@/src/data/site";

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        },
    }),
};

export function WhyChooseUs() {
    return (
        <section className="py-16 sm:py-24 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Why Choose SMK Industrial Solutions
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        We deliver excellence through our commitment to quality, reliability, and customer success
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {whyChooseUs.map((item, index) => (
                        <motion.div
                            key={item.title}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={itemVariants}
                        >
                            <Card className="h-full border-l-4 border-l-industrial-blue bg-background/60 backdrop-blur-sm hover:bg-background/80 hover:shadow-xl transition-all">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold mb-2 text-industrial-blue">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {item.description}
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
