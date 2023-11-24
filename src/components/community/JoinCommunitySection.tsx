import React from "react";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import InputPrimary from "../micro/InputPrimary";
import ButtonPrimary from "../micro/ButtonPrimary";

function JoinCommunitySection() {
  return (
    <section className="px-6.25 mt-20 flex flex-col gap-4 items-center">
      <Heading className="text-center">Join Our Community for Support </Heading>
      <Description fontSize="text-sm" className="text-center">
        Connect with others, share experiences and get expert advice
      </Description>
      <div className="flex gap-4">
        <InputPrimary
          placeholder="Your email address"
          className="w-[340px] "
          variant="outline"
        />

        <ButtonPrimary variant="medium-solid">Get Started</ButtonPrimary>
      </div>
      <Description fontSize="text-sm">
        By signing up. you agree to our
        <span className="font-semibold text-black "> Term and Conditions</span>
      </Description>
    </section>
  );
}

export default JoinCommunitySection;
