"use client";
import { ImmigrationClient } from "@/types/client";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Attorney from "@/components/sections/Attorney";
import PracticeAreas from "@/components/sections/PracticeAreas";
import WhyUs from "@/components/sections/WhyUs";
import { Testimonials, Process, CtaBand } from "@/components/sections/shared";
import RevealObserver from "@/components/ui/RevealObserver";

export default function HomePageClient({ client }: { client: ImmigrationClient }) {
  // ClientLayout owns the popup state and exposes it via a custom event
  const openPopup = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-popup"));
  };

  return (
    <>
      <RevealObserver />
      <Hero client={client} onOpenPopup={openPopup} />
      <TrustBar client={client} />
      <div className="flag-stripe" />
      <Attorney client={client} onOpenPopup={openPopup} />
      <div className="flag-stripe" />
      <PracticeAreas client={client} onOpenPopup={openPopup} />
      <div className="flag-stripe" />
      <WhyUs client={client} onOpenPopup={openPopup} />
      <Testimonials client={client} />
      <Process />
      <div className="flag-stripe" />
      <CtaBand client={client} onOpenPopup={openPopup} />
    </>
  );
}
