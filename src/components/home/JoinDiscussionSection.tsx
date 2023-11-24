import React from "react";
import SimpleSection from "../micro/SimpleSection";
import Description from "../micro/Description";
import ButtonPrimary from "../micro/ButtonPrimary";
import Heading from "../micro/Heading";

function JoinDiscussionSection() {
  return (
    <SimpleSection className="mt-12 justify-between">
      <Heading className="md:max-w-md">
        Join Our Online Discussion Forum Today
      </Heading>
      <div className=" flex flex-col gap-4">
        <Description className=" md:max-w-md text-rightl">
          Engage with our vibrant community of users, where you can share your
          concerns, seek advice and find support. Our online discussion forum
          provides a safe space to connect with others who understand your
          experience.
        </Description>
        <ButtonPrimary variant="medium-outline">Learn More</ButtonPrimary>
      </div>
    </SimpleSection>
  );
}

export default JoinDiscussionSection;
