import HeroSection from "@/components/trackcycle/HeroSection";
import Layout from "@/components/layout/Layout";
import ContactUsSection from "@/components/trackcycle/ContactUsSection";
import EffortleslyTrackSection from "@/components/trackcycle/EffortleslyTrackSection";
import FrequentlyAskedSection from "@/components/trackcycle/FrequentlyAskedSection";
import React from "react";

function TrackCycle() {
  return (
    <Layout>
      <HeroSection />
      <EffortleslyTrackSection />
      <ContactUsSection />
      <FrequentlyAskedSection />
    </Layout>
  );
}

export default TrackCycle;
