import React from "react";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import ImageHero from "./ImageHero";

function HeroSection() {
  return (
    <ImageHero className="bg-[url('../../public/hero_image.png')] items-center h-[50vh]">
      <Heading
        gravity="center"
        className="mt-16 md:mt-28 xl:mt-36 px-4  text-white"
      >
        Edure for Tracking Your Menstrual Cycle
      </Heading>
      <Description
        gravity="center"
        className="max-w-md xmd:max-w-xl text-slate-100 "
      >
        Welcome to our comprehensive website for menstrual cycle tracking. Join
        our community and share your concern and get advice from others.
      </Description>
    </ImageHero>
  );
}

export default HeroSection;
