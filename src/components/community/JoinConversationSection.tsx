import React from "react";
import SimpleSection from "../micro/SimpleSection";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import ButtonPrimary from "../micro/ButtonPrimary";
import ImageSection from "../micro/ImageSection";

function JoinConversationSection() {
  return (
    <SimpleSection className="mt-10 lg:mt-20 -mb-8 lg:-mb-36">
      <div className="md:flex-[.8] flex flex-col gap-6 py-3 ">
        <Heading className="mt-[40px]">
          Join the Conversation and Stay Informed
        </Heading>
        <Description>
          Discover the latest and most popular topics in our online discussion
          forum. Connect with a community of like-minded individuals, share your
          concern and seek advice on menstrual health and weliness.
        </Description>
        <ButtonPrimary variant="medium-outline" className="w-fit">
          Explore
        </ButtonPrimary>
      </div>
      <ImageSection
        url="/community_image_1.png"
        className="hidden lg:block md:flex-1 sm:h-[500px] sm:w-[500px] md:left-20 md:-top-20"
        variant="object-contain"
      />
    </SimpleSection>
  );
}

export default JoinConversationSection;
