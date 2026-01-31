"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/src/data/site";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission - you can connect this to an API or email service
        console.log("Form submitted:", formData);
        alert("Thank you for your inquiry! We will get back to you soon.");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    };

    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-br from-industrial-blue/10 to-background py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
                            Contact Us
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Get in touch with our team for inquiries and project discussions
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 sm:py-20 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-industrial-blue">
                                    Contact Information
                                </h2>

                                <Card className="mb-6">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-industrial-blue">
                                            {siteConfig.contact.registeredAddress.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            {siteConfig.contact.registeredAddress.address}
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg text-industrial-blue">
                                            {siteConfig.contact.operationalAddress.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <p className="text-muted-foreground">
                                            {siteConfig.contact.operationalAddress.address}
                                        </p>
                                        <div className="space-y-2 pt-3 border-t">
                                            <p className="text-sm">
                                                <span className="font-semibold text-foreground">Phone:</span>{" "}
                                                <a href={`tel:${siteConfig.contact.phone}`} className="text-industrial-blue hover:underline">
                                                    {siteConfig.contact.phone}
                                                </a>
                                            </p>
                                            <p className="text-sm">
                                                <span className="font-semibold text-foreground">Email:</span>{" "}
                                                <a href={`mailto:${siteConfig.contact.email}`} className="text-industrial-blue hover:underline">
                                                    {siteConfig.contact.email}
                                                </a>
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl text-industrial-blue">
                                        Request a Quote / Send Inquiry
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                Full Name *
                                            </label>
                                            <Input
                                                id="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Your Name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                Email Address *
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="you@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                                Phone Number *
                                            </label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="+880..."
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium mb-2">
                                                Company Name
                                            </label>
                                            <Input
                                                id="company"
                                                type="text"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                placeholder="Your Company"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                                Message / RFQ Details *
                                            </label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Please describe your requirements..."
                                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-industrial-blue hover:bg-industrial-blue/90"
                                            size="lg"
                                        >
                                            Submit Inquiry
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
