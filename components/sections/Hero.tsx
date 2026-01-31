"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/src/data/pages";

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-industrial-blue/5 pt-20 pb-16 sm:pt-32 sm:pb-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="text-center"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        <span className="block text-foreground">
                            {homeContent.hero.title}
                        </span>
                        <span className="mt-2 block bg-gradient-to-r from-industrial-blue to-industrial-grey bg-clip-text text-transparent">
                            {homeContent.hero.highlightWords.join(" • ")}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
                    >
                        {homeContent.hero.subtitle}
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-industrial-blue text-white hover:bg-industrial-blue/90 shadow-lg hover:shadow-xl transition-all"
                        >
                            <Link href={homeContent.hero.cta.primary.href}>
                                {homeContent.hero.cta.primary.text}
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-industrial-blue text-industrial-blue hover:bg-industrial-blue/10"
                        >
                            <Link href={homeContent.hero.cta.secondary.href}>
                                {homeContent.hero.cta.secondary.text}
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Decorative Elements with glassmorphism */}
                <div className="absolute -top-4 right-0 h-72 w-72 rounded-full bg-industrial-blue/20 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-4 left-0 h-72 w-72 rounded-full bg-industrial-grey/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
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
