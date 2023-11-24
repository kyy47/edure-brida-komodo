import React from "react";
import SimpleSection from "../micro/SimpleSection";
import ImageSection from "../micro/ImageSection";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import ButtonPrimary from "../micro/ButtonPrimary";

function TestReproductiveSection() {
  return (
    <SimpleSection className="justify-between items-center">
      <ImageSection
        url="/home_image_2.png"
        variant="object-contain"
        className=" md:w-[400px] md:h-[400px]  "
      />
      <div className="] flex flex-col gap-6 py-3 max-w-md">
        <Heading>Test Your Reproductive Health Knowledge Today</Heading>
        <Description>
          Take our Reproductive Health Quiz to acces your knowledge and learn
          more about your body. Start tracking your menstrual cycle and gain
          insight with our personalized calender.
        </Description>
        <ButtonPrimary variant="small-outline" className="w-fit">
          Learn More
        </ButtonPrimary>
      </div>
    </SimpleSection>
  );
}

export default TestReproductiveSection;
