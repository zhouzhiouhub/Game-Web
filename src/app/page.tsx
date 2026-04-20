import { HeroSection } from "@/components/home/hero-section";
import { LogoCloud } from "@/components/home/logo-cloud";
import { BentoFeatures } from "@/components/home/bento-features";
import { DeviceShowcase } from "@/components/home/device-showcase";
import { SocialProof } from "@/components/home/social-proof";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <BentoFeatures />
      <DeviceShowcase />
      <SocialProof />
      <CTASection />
    </>
  );
}
