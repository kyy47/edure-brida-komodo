import React from "react";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import InputPrimary from "../micro/InputPrimary";
import ButtonPrimary from "../micro/ButtonPrimary";

function JoinDiscussionSection() {
  return (
    <section className="px-6.25 mt-20 flex flex-col gap-4 items-center">
      <Heading className="text-center">Join the Discussion Today </Heading>
      <Description fontSize="text-sm" className="text-center">
        Share your concerns and seek from community.
      </Description>
      <div className="flex gap-4">
        <ButtonPrimary variant="small-solid">Start</ButtonPrimary>
        <ButtonPrimary variant="small-outline">Explore</ButtonPrimary>
      </div>
    </section>
  );
}

export default JoinDiscussionSection;
