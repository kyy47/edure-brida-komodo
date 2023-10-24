import React from "react";
import Heading from "./Heading";
import Description from "./Description";
import ImageHero from "./ImageHero";

function HeroSection() {
  return (
    <section className="mt-10% flex flex-col gap-2 items-center scroll-m-10%">
      <Heading gravity="center" className="mt-36">
        Edure for Tracking Your Menstrual Cycle
      </Heading>
      <Description gravity="center" className="max-w-3xl">
        Welcome to our comprehensive website for menstrual cycle tracking. Join
        our community and share your concern and get advice from others.
      </Description>
      <ImageHero />
    </section>
  );
}

export default HeroSection;
