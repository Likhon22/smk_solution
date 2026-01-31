"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation, siteConfig } from "@/src/data/site";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
                                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-industrial-blue"
                                >
                                    {item.name}
                                </Link>

                                {/* Dropdown Menu - Desktop with glassmorphism */}
                                {item.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl"
                                            >
                                                <div className="p-2">
                                                    {item.dropdown.map((dropdownItem) => (
                                                        <Link
                                                            key={dropdownItem.name}
                                                            href={dropdownItem.href}
                                                            className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent/50 hover:text-industrial-blue"
                                                        >
                                                            {dropdownItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
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
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
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
                                                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-industrial-blue"
                                            >
                                                <span>{item.name}</span>
                                                <svg
                                                    className={`h-4 w-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""
                                                        }`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </button>
                                            <AnimatePresence>
                                                {mobileDropdownOpen && (
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
                                                                    setMobileDropdownOpen(false);
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
        </nav>
    );
}
