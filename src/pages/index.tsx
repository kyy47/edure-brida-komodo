import ButtonPrimary from "@/components/micro/ButtonPrimary";
import Description from "@/components/micro/Description";
import Heading from "@/components/micro/Heading";
import HeroSection from "@/components/home/HeroSection";
import ImageSection from "@/components/micro/ImageSection";
import SimpleSection from "@/components/micro/SimpleSection";
import Layout from "@/components/layout/Layout";
import ContactUsSection from "@/components/trackcycle/ContactUsSection";
import TrackMentrualSection from "@/components/home/TrackMentrualSection";
import JoinDiscussionSection from "@/components/home/JoinDiscussionSection";
import TestReproductiveSection from "@/components/home/TestReproductiveSection";
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <TrackMentrualSection />
      <JoinDiscussionSection />
      <ImageSection url="/image_home.png" className="w-full h-[20vh]" />
      <TestReproductiveSection />
      <ContactUsSection />
    </Layout>
  );
}
