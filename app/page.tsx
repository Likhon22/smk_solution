import { Hero } from "@/components/sections/Hero";
import { BusinessSegments } from "@/components/sections/BusinessSegments";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessSegments />
      <WhyChooseUs />
      <IndustriesServed />
      <CTASection />
    </>
  );
}
