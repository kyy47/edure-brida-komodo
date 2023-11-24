import BlogSection from "@/components/community/BlogSection";
import HeroSection from "@/components/community/HeroSection";
import JoinCommunitySection from "@/components/community/JoinCommunitySection";
import JoinDiscussionSection from "@/components/community/JoinDiscussionSection";
import Layout from "@/components/layout/Layout";
import FrequentlyAskedSection from "@/components/trackcycle/FrequentlyAskedSection";
import React from "react";
import JoinConversationSection from "@/components/community/JoinConversationSection";

function Community() {
  return (
    <Layout>
      <HeroSection />
      <BlogSection />
      <JoinCommunitySection />
      <JoinConversationSection />
      <FrequentlyAskedSection />
      <JoinDiscussionSection />
    </Layout>
  );
}

export default Community;
