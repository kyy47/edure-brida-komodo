import HeroSection from "@/components/trackcycle/HeroSection";
import Layout from "@/components/layout/Layout";
import ContactUsSection from "@/components/trackcycle/ContactUsSection";
import EffortleslyTrackSection from "@/components/trackcycle/EffortleslyTrackSection";
import FrequentlyAskedSection from "@/components/trackcycle/FrequentlyAskedSection";
import React from "react";
import KnowYourCycleSection from "@/components/trackcycle/KnowYourCycleSection";

function TrackCycle() {
  return (
    <Layout>
      <KnowYourCycleSection />
      <HeroSection />
      <EffortleslyTrackSection />
      <ContactUsSection />
      <FrequentlyAskedSection />
    </Layout>
  );
}

export default TrackCycle;
