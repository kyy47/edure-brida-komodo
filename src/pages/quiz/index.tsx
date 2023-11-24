import ImageSection from "@/components/micro/ImageSection";
import SimpleSection from "@/components/micro/SimpleSection";
import Layout from "@/components/layout/Layout";
import ButtonPrimary from "@/components/micro/ButtonPrimary";
import Description from "@/components/micro/Description";
import Heading from "@/components/micro/Heading";
import DiscoverSection from "@/components/quiz/DiscoverSection";
import React from "react";
import KnowYourBodySection from "@/components/quiz/KnowYourBodySection";
import TestReproductiveSection from "@/components/quiz/TestReproductiveSection";
import TestReproductive2Section from "@/components/quiz/TestReproductive2Section";

function Quiz() {
  return (
    <Layout>
      <KnowYourBodySection />
      <TestReproductiveSection />
      <DiscoverSection />
      <TestReproductive2Section />
    </Layout>
  );
}

export default Quiz;
