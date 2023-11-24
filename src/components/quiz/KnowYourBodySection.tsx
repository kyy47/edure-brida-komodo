import React from "react";
import SimpleSection from "../micro/SimpleSection";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import ButtonPrimary from "../micro/ButtonPrimary";

function KnowYourBodySection() {
  return (
    <SimpleSection className="items-center mt-15% justify-between ">
      <Heading className="text-black">Know Your Body</Heading>
      <div className="flex flex-col gap-3">
        <Description className="max-w-xl" fontSize="text-base">
          Take our Reproductive Health Quiz to gain valuable insight into your
          mensutrual cycle and reproductive health. Understanding your body is
          the first step towards better self-care.
        </Description>
        <div className="flex gap-3">
          <ButtonPrimary variant="medium-solid">Start</ButtonPrimary>
          <ButtonPrimary variant="medium-outline">Learn More</ButtonPrimary>
        </div>
      </div>
    </SimpleSection>
  );
}

export default KnowYourBodySection;
