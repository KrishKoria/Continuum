"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform } from "motion/react";
import LandingNav from "@/components/landing/landing-nav";
import HeroSection from "@/components/landing/hero-section";
import LogosSection from "@/components/landing/logos-section";
import FeaturesSection from "@/components/landing/features-section";
import AiSection from "@/components/landing/ai-section";
import SecuritySection from "@/components/landing/security-section";
import PricingSection from "@/components/landing/pricing-section";
import CtaSection from "@/components/landing/cta-section";
import LandingFooter from "@/components/landing/landing-footer";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative min-h-screen bg-background font-body overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 size-150 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 size-125 rounded-full bg-primary/8 blur-[100px]" />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navigation */}
      <LandingNav
        mobileMenuOpen={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen((open) => !open)}
        onClose={() => setMobileMenuOpen(false)}
      />

      <HeroSection heroRef={heroRef} heroY={heroY} heroOpacity={heroOpacity} />
      <LogosSection />
      <FeaturesSection />
      <AiSection />
      <SecuritySection />
      <PricingSection />
      <CtaSection />
      <LandingFooter />
    </div>
  );
}
