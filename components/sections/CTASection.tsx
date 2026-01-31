"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
    return (
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-industrial-blue to-industrial-grey overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
            >
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to Transform Your Industrial Operations?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                    Get in touch with our team to discuss your project requirements and receive a customized solution
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button
                        asChild
                        size="lg"
                        variant="secondary"
                        className="bg-white text-industrial-blue hover:bg-white/90 shadow-lg"
                    >
                        <Link href="/contact">Request a Quote</Link>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-industrial-blue transition-all"
                    >
                        <Link href="/products">View Solutions</Link>
                    </Button>
                </div>
            </motion.div>

            <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
        </section>
    );
}
