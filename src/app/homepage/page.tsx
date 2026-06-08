import { HeroContentSection } from "@/components/hero-content";
import { HeroSection } from "@/components/hero-title";
import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HeroContentSection />
    </div>
  );
}
