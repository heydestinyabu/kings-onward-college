import Hero from "@/components/Hero";
import PrincipalMessage from "@/components/PrincipalMessage";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <>
      <Hero />
      <PrincipalMessage />
      <ProgramsSection />
      <WhyChooseUs />
      <GallerySection />
      <Testimonials />
    </>
  );
}
