import React from "react";
import SimpleSection from "../micro/SimpleSection";
import Description from "../micro/Description";
import ButtonPrimary from "../micro/ButtonPrimary";
import ImageSection from "../micro/ImageSection";
import Heading from "../micro/Heading";

function TrackMentrualSection() {
  return (
    <SimpleSection className="justify-between">
      <div className=" flex flex-col gap-6 py-3 max-w-md ">
        <Heading className="md:mt-[40px]">
          Track Your Menstrual Cycle with Ease
        </Heading>
        <Description className="max-w-lg">
          Welcome to our comprehensive website for menstrual cycle tracking.
          Additionality our menstrual ycle tracking features allows you to
          record and analyze your menstrual cycles, complete with a personalized
          calender.
        </Description>
        <ButtonPrimary variant="medium-outline" className="w-fit">
          Learn More
        </ButtonPrimary>
      </div>
      <ImageSection
        url="/home_image_1.png"
        className=" sm:h-[400px] sm:w-[400px] "
        variant="object-contain"
      />
    </SimpleSection>
  );
}

export default TrackMentrualSection;
