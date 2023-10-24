import React from "react";
import ImageSection from "./ImageSection";
import Heading from "./Heading";
import Description from "./Description";
import ButtonPrimary from "./ButtonPrimary";

function QuizSection() {
  return (
    <section
      className="px-6.25 my-24 py-6 flex gap-12  items-center scroll-m-10% "
      id="quiz"
    >
      <ImageSection
        url="/quiz_image.png"
        className=" max-w-[531px] min-h-[318px]"
      />
      <div className=" flex flex-col gap-6">
        <Heading>Test Your Reproductive Health Knowledge</Heading>
        <Description>
          Take our brief quiz to assess your knowledge of reproductive health
          and learn more about your body. Start tracking your menstrual cycle
          today.
        </Description>
        <ButtonPrimary variant="medium-outline" className="w-fit">
          Learn More
        </ButtonPrimary>
      </div>
    </section>
  );
}

export default QuizSection;
