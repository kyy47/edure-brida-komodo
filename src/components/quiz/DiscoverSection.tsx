import React from "react";
import ImageHero from "../micro/ImageHero";
import Description from "../micro/Description";
import InputPrimary from "../micro/InputPrimary";
import ButtonPrimary from "../micro/ButtonPrimary";
import Heading from "../micro/Heading";

function DiscoverSection() {
  return (
    <ImageHero
      className="bg-[url('../../public/quiz_image_3.png')] py-8 px-6.25 bg-contain
 "
      mt="0"
    >
      <Heading className="text-white">
        Discover Your Reproductive Health Knowledge
      </Heading>
      <div className="flex flex-col gap-4">
        <Description fontSize="text-base" className="text-white font-light">
          Take our brief quiz and assess your understanding of reproductive
          health
        </Description>
        <div className="flex gap-4">
          <InputPrimary
            placeholder="Your email address"
            className="w-[320px]"
          />
          <ButtonPrimary variant="small-solid">Get Started</ButtonPrimary>
        </div>
        <Description className="text-white text-sm">
          By signing up. you agree to our{" "}
          <span className="font-semibold">Term and Conditions</span>
        </Description>
      </div>
    </ImageHero>
  );
}

export default DiscoverSection;
