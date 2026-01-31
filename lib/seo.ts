import { siteConfig } from "@/src/data/site";

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteConfig.name,
        "alternateName": "SMK IS",
        "url": "https://smkisbd.com",
        "logo": "https://smkisbd.com/logo.png",
        "description": siteConfig.description,
        "email": siteConfig.contact.email,
        "telephone": siteConfig.contact.phone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.contact.registeredAddress.address,
            "addressCountry": "BD"
        },
        "sameAs": [
            siteConfig.social.facebook,
            siteConfig.social.linkedin,
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": siteConfig.contact.phone,
            "contactType": "Customer Service",
            "email": siteConfig.contact.email,
            "areaServed": "BD",
            "availableLanguage": ["English", "Bengali"]
        },
        "areaServed": {
            "@type": "Country",
            "name": "Bangladesh"
        }
    };
}

export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteConfig.name,
        "image": "https://smkisbd.com/logo.png",
        "@id": "https://smkisbd.com",
        "url": "https://smkisbd.com",
        "telephone": siteConfig.contact.phone,
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.contact.operationalAddress.address,
            "addressCountry": "BD"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 23.8103,
            "longitude": 90.4125
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        }
    };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
}

export function generateProductSchema(product: {
    name: string;
    description: string;
    category: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": siteConfig.name
        },
        "category": product.category,
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "BDT",
            "seller": {
                "@type": "Organization",
                "name": siteConfig.name
            }
        }
    };
}
