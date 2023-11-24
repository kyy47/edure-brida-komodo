import BlogSection from "@/components/community/BlogSection";
import HeroSection from "@/components/community/HeroSection";
import JoinCommunitySection from "@/components/community/JoinCommunitySection";
import JoinDiscussionSection from "@/components/community/JoinDiscussionSection";
import ImageSection from "@/components/micro/ImageSection";
import SimpleSection from "@/components/micro/SimpleSection";
import Layout from "@/components/layout/Layout";
import ButtonPrimary from "@/components/micro/ButtonPrimary";
import Description from "@/components/micro/Description";
import Heading from "@/components/micro/Heading";
import FrequentlyAskedSection from "@/components/trackcycle/FrequentlyAskedSection";

import React from "react";

function Community() {
  return (
    <Layout>
      <HeroSection />
      <BlogSection />
      <JoinCommunitySection />
      <SimpleSection className="mt-20 -mb-36">
        <div className="md:flex-[.8] flex flex-col gap-6 py-3 ">
          <Heading className="mt-[40px]">
            Join the Conversation and Stay Informed
          </Heading>
          <Description>
            Discover the latest and most popular topics in our online discussion
            forum. Connect with a community of like-minded individuals, share
            your concern and seek advice on menstrual health and weliness.
          </Description>
          <ButtonPrimary variant="medium-outline" className="w-fit">
            Explore
          </ButtonPrimary>
        </div>
        <ImageSection
          url="/community_image_1.png"
          className="hidden sm:block md:flex-1 sm:h-[500px] sm:w-[500px] left-20 -top-20"
          variant="object-contain"
        />
      </SimpleSection>
      <FrequentlyAskedSection />
      <JoinDiscussionSection />
    </Layout>
  );
}

export default Community;
