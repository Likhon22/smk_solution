import { materialHandlingCategory } from "./products/material-handling";
import { mroCategory } from "./products/mro";
import { safetyFireCategory } from "./products/safety-fire";
import { securityCategory } from "./products/security";
import { cleaningCategory } from "./products/cleaning";
import { corrosionCategory } from "./products/corrosion";
import { waterproofingCategory } from "./products/waterproofing";

export const allProductCategories = [
    materialHandlingCategory,
    mroCategory,
    safetyFireCategory,
    securityCategory,
    cleaningCategory,
    corrosionCategory,
    waterproofingCategory
];

export const getCategoryBySlug = (slug: string) => {
    return allProductCategories.find(category => category.slug === slug);
};
