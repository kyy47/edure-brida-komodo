import React from "react";
import ImageSection from "./ImageSection";
import Heading from "./Heading";
import Description from "./Description";
import ButtonPrimary from "./ButtonPrimary";

function TrackingSection() {
  return (
    <section
      className="px-6.25 my-24 py-6 flex gap-12 flex-wrap scroll-m-10%"
      id="track"
    >
      <div className="flex-1 flex flex-col gap-6 py-3">
        <Heading>Track Your Menstrual Cycle with Ease</Heading>
        <Description>
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
        url="/tracking_image.png"
        className=" max-w-[531px] min-h-[318px] "
      />
    </section>
  );
}

export default TrackingSection;
