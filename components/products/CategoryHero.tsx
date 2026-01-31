"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CategoryHeroProps {
    name: string;
    description: string;
    icon: string;
}

export function CategoryHero({ name, description, icon }: CategoryHeroProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-industrial-blue/5 pt-16 pb-12 sm:pt-24 sm:pb-20">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-industrial-blue/10 text-4xl shadow-inner">
                        {icon}
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        {name}
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </motion.div>
            </div>

            <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
        </section>
    );
}
