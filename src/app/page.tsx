import Hero from "@/components/Hero";
import PrincipalMessage from "@/components/PrincipalMessage";
import ProgramsSection from "@/components/ProgramsSection";
import StatsCounter from "@/components/StatsCounter";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <PrincipalMessage />
      <ProgramsSection />
      <WhyChooseUs />
      <GallerySection />
      <Testimonials />
    </>
  );
}
