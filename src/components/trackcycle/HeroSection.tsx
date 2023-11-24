import React from "react";
import ImageHero from "../micro/ImageHero";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import InputPrimary from "../micro/InputPrimary";
import ButtonPrimary from "../micro/ButtonPrimary";

function HeroSection() {
  return (
    <ImageHero
      className="bg-[url('../../public/hero_image_track.png')] py-8 px-6.25 bg-contain 
 "
      mt="mt-12"
    >
      <Heading className="text-white">Start Tracking Your Cycle Today</Heading>
      <div className="flex flex-col gap-4">
        <Description fontSize="text-base" className="text-white font-light">
          Record and analyze your menstrual cycles with our personalized
          calender and insight.
        </Description>
        <div className="flex gap-4">
          <InputPrimary
            placeholder="Your email address"
            className="w-[320px]"
          />
          <ButtonPrimary variant="medium-solid">Get Started</ButtonPrimary>
        </div>
        <Description className="text-white text-sm">
          By signing up. you agree to our{" "}
          <span className="font-semibold">Term and Conditions</span>
        </Description>
      </div>
    </ImageHero>
  );
}

export default HeroSection;
