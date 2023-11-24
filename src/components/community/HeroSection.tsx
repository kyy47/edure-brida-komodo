import React from "react";
import ImageHero from "../micro/ImageHero";
import Heading from "../micro/Heading";
import Description from "../micro/Description";

function HeroSection() {
  return (
    <ImageHero
      className="bg-[url('../../public/hero_image_community.png')] py-10 px-4 lg:px-6.25 bg-contain
 "
    >
      <Heading className="text-white">Connect & Share</Heading>
      <Description className="text-white max-w-md" fontSize="text-sm">
        Join our online discussion forum to connect with others, seek advice and
        share your experiences.
      </Description>
    </ImageHero>
  );
}

export default HeroSection;
