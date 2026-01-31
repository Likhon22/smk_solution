"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navigation, siteConfig } from "@/src/data/site";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

    // Keyboard navigation: Close menus on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setMobileMenuOpen(false);
                setMobileDropdownOpen(null);
                setActiveDropdown(null);
            }
        };

        if (mobileMenuOpen || activeDropdown) {
            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }
    }, [mobileMenuOpen, activeDropdown]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            setActiveDropdown(null);
            setMobileDropdownOpen(null);
        };
    }, []);

    return (
        <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="text-2xl font-bold">
                            <span className="text-industrial-blue">SMK</span>
                            <span className="text-industrial-grey ml-1">IS</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:gap-8">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-industrial-blue py-6 inline-block",
                                        activeDropdown === item.name ? "text-industrial-blue" : "text-foreground/80"
                                    )}
                                >
                                    {item.name}
                                </Link>

                                {/* Mega Menu - Desktop */}
                                {item.name === "Products & Solutions" && item.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="fixed inset-x-0 top-16 mx-auto max-w-7xl px-8 py-8 lg:block"
                                            >
                                                <div className="rounded-2xl border border-border/50 bg-background/95 backdrop-blur-2xl shadow-2xl overflow-hidden grid grid-cols-12">
                                                    <div className="col-span-8 p-8 grid grid-cols-2 gap-x-8 gap-y-6">
                                                        <div className="col-span-2">
                                                            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground pb-4 border-b border-border/50 mb-4">
                                                                Industrial Capabilities
                                                            </h3>
                                                        </div>
                                                        {item.dropdown.map((dropdownItem) => (
                                                            <Link
                                                                key={dropdownItem.name}
                                                                href={dropdownItem.href}
                                                                className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-accent/50"
                                                                onClick={() => setActiveDropdown(null)}
                                                            >
                                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-industrial-blue/10 text-xl group-hover:bg-industrial-blue group-hover:text-white transition-colors">
                                                                    {dropdownItem.name.includes("Handling") ? "📦" :
                                                                        dropdownItem.name.includes("MRO") ? "🔧" :
                                                                            dropdownItem.name.includes("Safety") ? "🛡️" :
                                                                                dropdownItem.name.includes("Security") ? "🔐" :
                                                                                    dropdownItem.name.includes("Cleaning") ? "🧹" :
                                                                                        dropdownItem.name.includes("Corrosion") ? "🧪" : "💧"}
                                                                </div>
                                                                <div>
                                                                    <div className="text-sm font-bold text-foreground group-hover:text-industrial-blue transition-colors">
                                                                        {dropdownItem.name}
                                                                    </div>
                                                                    <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                                                                        Premium industrial grade solutions
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>

                                                    <div className="col-span-4 bg-muted/30 p-8 border-l border-border/50">
                                                        <div className="relative h-full rounded-xl overflow-hidden bg-industrial-blue/10 flex flex-col">
                                                            <img
                                                                src="/pallet_racking_industrial_1769875075287.png"
                                                                alt="Industrial Solution"
                                                                className="h-48 w-full object-cover rounded-t-xl"
                                                            />
                                                            <div className="p-6">
                                                                <h4 className="text-lg font-bold text-foreground mb-2">Built for Reliability</h4>
                                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                                    Premium industrial grade solutions designed for the toughest environments.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}

                                {/* Standard Dropdown for other items */}
                                {item.name !== "Products & Solutions" && item.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute left-0 top-full mt-0 w-64 rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl p-2"
                                            >
                                                {item.dropdown.map((dropdownItem) => (
                                                    <Link
                                                        key={dropdownItem.name}
                                                        href={dropdownItem.href}
                                                        className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent/50 hover:text-industrial-blue"
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        {dropdownItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex lg:items-center lg:gap-3">
                        <ThemeToggle />
                        <Button asChild className="bg-industrial-blue hover:bg-industrial-blue/90 shadow-lg">
                            <Link href="/contact">Get a Quote</Link>
                        </Button>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <ThemeToggle />
                        <button
                            className="p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg"
                    >
                        <div className="space-y-1 px-4 pb-3 pt-2">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    {item.dropdown ? (
                                        <>
                                            <button
                                                onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.name ? null : item.name)}
                                                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-industrial-blue"
                                                aria-expanded={mobileDropdownOpen === item.name}
                                            >
                                                <span>{item.name}</span>
                                                <svg
                                                    className={`h-4 w-4 transition-transform ${mobileDropdownOpen === item.name ? "rotate-180" : ""}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <AnimatePresence>
                                                {mobileDropdownOpen === item.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="ml-4 space-y-1 overflow-hidden"
                                                    >
                                                        {item.dropdown.map((dropdownItem) => (
                                                            <Link
                                                                key={dropdownItem.name}
                                                                href={dropdownItem.href}
                                                                className="block rounded-md px-3 py-2 text-sm text-foreground/60 hover:bg-accent hover:text-industrial-blue"
                                                                onClick={() => {
                                                                    setMobileMenuOpen(false);
                                                                    setMobileDropdownOpen(null);
                                                                }}
                                                            >
                                                                {dropdownItem.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-industrial-blue"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Button asChild className="w-full mt-4 bg-industrial-blue hover:bg-industrial-blue/90">
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <style jsx>{`
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
            `}</style>
        </nav>
    );
}
