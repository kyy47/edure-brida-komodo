import ButtonPrimary from "@/components/micro/ButtonPrimary";
import ContactSection from "@/components/home/ContactSection";
import Description from "@/components/micro/Description";
import Heading from "@/components/micro/Heading";
import HeroSection from "@/components/home/HeroSection";
import ImageSection from "@/components/home/ImageSection";
import SimpleSection from "@/components/home/SimpleSection";
import Layout from "@/components/layout/Layout";
import ContactUsSection from "@/components/trackcycle/ContactUsSection";
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <SimpleSection>
        <div className="md:flex-[.8] flex flex-col gap-6 py-3 ">
          <Heading className="mt-[40px]">
            Track Your Menstrual Cycle with Ease
          </Heading>
          <Description>
            Welcome to our comprehensive website for menstrual cycle tracking.
            Additionality our menstrual ycle tracking features allows you to
            record and analyze your menstrual cycles, complete with a
            personalized calender.
          </Description>
          <ButtonPrimary variant="medium-outline" className="w-fit">
            Learn More
          </ButtonPrimary>
        </div>
        <ImageSection
          url="/home_image_1.png"
          className="hidden sm:block md:flex-1 sm:h-[400px]"
          variant="object-contain"
        />
      </SimpleSection>
      <SimpleSection className="mt-20">
        <Heading className="md:flex-[.8]">
          Join Our Online Discussion Forum Today
        </Heading>
        <div className="md:flex-1 flex flex-col gap-6">
          <Description className="pr-6.25">
            Engage with our vibrant community of users, where you can share your
            concerns, seek advice and find support. Our online discussion forum
            provides a safe space to connect with others who understand your
            experience.
          </Description>
          <ButtonPrimary variant="medium-outline">Learn More</ButtonPrimary>
        </div>
      </SimpleSection>
      <ImageSection url="/image_home.png" className="w-full h-[20vh]" />
      <SimpleSection variant="left-0">
        <ImageSection
          url="/home_image_2.png"
          className="hidden sm:block md:flex-1 sm:h-[400px] "
        />
        <div className="md:flex-[.8] flex flex-col gap-6 py-3 ">
          <Heading className="mt-[40px]">
            Test Your Reproductive Health Knowledge Today
          </Heading>
          <Description>
            Take our Reproductive Health Quiz to acces your knowledge and learn
            more about your body. Start tracking your menstrual cycle and gain
            insight with our personalized calender.
          </Description>
          <ButtonPrimary variant="medium-outline" className="w-fit">
            Learn More
          </ButtonPrimary>
        </div>
      </SimpleSection>
      <ContactUsSection />
    </Layout>
  );
}
