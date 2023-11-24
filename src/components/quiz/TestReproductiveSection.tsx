import React from "react";
import SimpleSection from "../micro/SimpleSection";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import ButtonPrimary from "../micro/ButtonPrimary";
import ImageSection from "../micro/ImageSection";

function TestReproductiveSection() {
  return (
    <SimpleSection className="mt-10 lg:mt-15%  justify-between">
      <div className="flex flex-col gap-4 max-w-lg">
        <Heading>Take Your Reproductive Health Knowledge</Heading>
        <Description fontSize="text-base">
          Take our quiz to assess you rknowledge of reproductive health. Answer
          a series of questions to test your undestanding and learn more about
          your body
        </Description>
        <div className="flex gap-3">
          <div>
            <h3 className="font-semibold text-lg">Quiz Format</h3>
            <Description fontSize="text-sm">
              Answer questions to test your reproductive health knowledge and
              learn more.
            </Description>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Questions Types</h3>
            <Description fontSize="text-sm">
              Multiple-choice questions covering various aspects of reproductive
              health.
            </Description>
          </div>
        </div>
        <ButtonPrimary variant="medium-solid">Get started</ButtonPrimary>
      </div>
      <ImageSection
        url="/quiz_image_1.png"
        variant="object-contain"
        className="hidden sm:block md:flex-1 sm:w-[350px] sm:h-[350px]  -top-10"
      />
    </SimpleSection>
  );
}

export default TestReproductiveSection;
