"use client";

import { motion } from "framer-motion";
import { Product } from "@/src/types/product";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="h-full overflow-hidden border border-border/50 bg-background/60 backdrop-blur-sm hover:shadow-2xl transition-all group">
                <div className="aspect-[4/3] overflow-hidden bg-muted/20 relative">
                    <img
                        src="/pallet_racking_industrial_1769875075287.png"
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Badge className="bg-industrial-blue text-white border-none shadow-lg font-bold px-3 py-1">
                            Premium Selection
                        </Badge>
                    </div>
                </div>

                <CardHeader className="p-6">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-industrial-blue transition-colors">
                        {product.name}
                    </CardTitle>
                    <p className="mt-2 text-sm text-foreground/70 line-clamp-2">
                        {product.description}
                    </p>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Key Features</h4>
                            <ul className="grid grid-cols-1 gap-1.5">
                                {product.features.slice(0, 3).map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                        <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-industrial-blue" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {product.specifications && (
                            <div className="pt-4 border-t border-border/50">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Top Specs</h4>
                                <div className="flex flex-wrap gap-2">
                                    {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
                                        <div key={key} className="text-[11px] bg-muted/40 px-2 py-0.5 rounded border border-border/30">
                                            <span className="font-semibold">{key}:</span> {value}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
