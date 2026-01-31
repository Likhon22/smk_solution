import Link from "next/link";
import { siteConfig } from "@/src/data/site";

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="text-2xl font-bold">
                            <span className="text-industrial-blue">SMK</span>
                            <span className="text-industrial-grey ml-1">IS</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {siteConfig.tagline}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {siteConfig.description.substring(0, 120)}...
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-industrial-blue transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-muted-foreground hover:text-industrial-blue transition-colors">
                                    Products & Solutions
                                </Link>
                            </li>
                            <li>
                                <Link href="/industries" className="text-muted-foreground hover:text-industrial-blue transition-colors">
                                    Industries We Serve
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-muted-foreground hover:text-industrial-blue transition-colors">
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact - Registered Office */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">{siteConfig.contact.registeredAddress.title}</h3>
                        <p className="text-sm text-muted-foreground">
                            {siteConfig.contact.registeredAddress.address}
                        </p>
                    </div>

                    {/* Contact - Operational Office */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">{siteConfig.contact.operationalAddress.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            {siteConfig.contact.operationalAddress.address}
                        </p>
                        <div className="space-y-2">
                            <p className="text-sm">
                                <a href={`tel:${siteConfig.contact.phone}`} className="text-muted-foreground hover:text-industrial-blue transition-colors">
                                    {siteConfig.contact.phone}
                                </a>
                            </p>
                            <p className="text-sm">
                                <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-industrial-blue transition-colors">
                                    {siteConfig.contact.email}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
                        Website:{" "}
                        <a href="https://smkisbd.com" className="hover:text-industrial-blue transition-colors">
                            smkisbd.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
