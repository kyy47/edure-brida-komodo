import React from "react";
import Heading from "./Heading";
import Description from "./Description";
import ButtonPrimary from "./ButtonPrimary";

function CommunitySection() {
  return (
    <section
      className="px-6.25 my-24 py-6 flex flex-col gap-8 flex-wrap items-center scroll-m-10%"
      id="community"
    >
      <Heading gravity="center">
        Join Our Online Discussion Forum and Connect With A Supportive Community
      </Heading>
      <Description gravity="center">
        Engage in meaningful conversation, share your concerns and seek advice
        from others. Discover a safe space where you can openly discuss
        menstrual health topics. Find answer, guidance and solidarity within our
        vibrant community.
      </Description>
      <ButtonPrimary variant="medium-outline" className="w-fit">
        Learn More
      </ButtonPrimary>
    </section>
  );
}

export default CommunitySection;
