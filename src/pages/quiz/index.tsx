import ImageSection from "@/components/home/ImageSection";
import SimpleSection from "@/components/home/SimpleSection";
import Layout from "@/components/layout/Layout";
import ButtonPrimary from "@/components/micro/ButtonPrimary";
import Description from "@/components/micro/Description";
import Heading from "@/components/micro/Heading";
import DiscoverSection from "@/components/quiz/DiscoverSection";
import React from "react";

function Quiz() {
  return (
    <Layout>
      <SimpleSection className="items-center mt-15% justify-between ">
        <Heading className="text-black">Know Your Body</Heading>
        <div className="flex flex-col gap-3">
          <Description className="max-w-xl" fontSize="text-base">
            Take our Reproductive Health Quiz to gain valuable insight into your
            mensutrual cycle and reproductive health. Understanding your body is
            the first step towards better self-care.
          </Description>
          <div className="flex gap-3">
            <ButtonPrimary variant="small-solid">Start</ButtonPrimary>
            <ButtonPrimary variant="small-outline">Learn More</ButtonPrimary>
          </div>
        </div>
      </SimpleSection>
      <SimpleSection className="mt-15%  justify-between">
        <div className="flex flex-col gap-4 max-w-lg">
          <Heading>Take Your Reproductive Health Knowledge</Heading>
          <Description fontSize="text-base">
            Take our quiz to assess you rknowledge of reproductive health.
            Answer a series of questions to test your undestanding and learn
            more about your body
          </Description>
          <div className="flex gap-3">
            <div>
              <h3 className="font-semibold text-lg">Quiz Format</h3>
              <Description fontSize="text-sm">
                Answer questions to test your reproductive health knowledge and
                learn more.
              </Description>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Questions Types</h3>
              <Description fontSize="text-sm">
                Multiple-choice questions covering various aspects of
                reproductive health.
              </Description>
            </div>
          </div>
          <ButtonPrimary variant="small-solid">Get started</ButtonPrimary>
        </div>
        <ImageSection
          url="/quiz_image_1.png"
          variant="object-contain"
          className="hidden sm:block md:flex-1 sm:w-[350px] sm:h-[350px] -right-24 -top-20"
        />
      </SimpleSection>
      <DiscoverSection />
      <SimpleSection className="mt-20 overflow-x-hidden   justify-between">
        <ImageSection
          url="/quiz_image_2.png"
          variant="object-contain"
          className="hidden sm:block sm:w-[360px] sm:h-[360px]  "
        />
        <div className="flex flex-col  max-w-lg min-w-[300px] gap-5">
          <Heading>Test Your Reproductive Health Knowledge</Heading>
          <Description fontSize="text-base">
            Take our quiz to assess your knowledge of reproductive health.
            Answer a series of questions and receive instant feedback
          </Description>
          <div className="flex flex-col gap-5 ">
            <div className="flex gap-5 items-center ">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5919 21.8907L23.0734 12.2566L14.0744 1.53198C13.7334 1.12564 13.245 0.871396 12.7166 0.825166C12.1882 0.778935 11.663 0.94451 11.2567 1.28547L1.29813 9.64171C0.374284 10.4169 -0.486413 12.1821 0.928363 13.8682L9.92739 24.5928C11.3422 26.2789 13.23 25.7378 14.1539 24.9626L25.6446 15.3208L24.359 13.7887L12.8775 23.4228C12.5159 23.7106 11.9769 23.9239 11.4595 23.3072C10.942 22.6906 11.2457 22.1969 11.5919 21.8907ZM5.40137 11.4203L12.2958 5.63522L13.5813 7.16731L6.68695 12.9524L5.40137 11.4203Z"
                  fill="black"
                />
              </svg>

              <Description fontSize="text-sm">
                Educational and Engaging Quiz Experience
              </Description>
            </div>
            <div className="flex gap-5 items-center ">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_886_3475)">
                  <path
                    d="M11 8.89111H13V9.89111H11V8.89111ZM11 4.89111H13V5.89111H11V4.89111ZM11 10.8911H13V11.8911H11V10.8911Z"
                    fill="black"
                  />
                  <path
                    d="M21 12.8911V9.89111C17.9514 9.89048 14.9977 10.9512 12.646 12.8911H11.354C9.00229 10.9512 6.04858 9.89048 3 9.89111V12.8911C2.73478 12.8911 2.48043 12.9965 2.29289 13.184C2.10536 13.3715 2 13.6259 2 13.8911V15.8911C2 16.1563 2.10536 16.4107 2.29289 16.5982C2.48043 16.7858 2.73478 16.8911 3 16.8911V20.8911C6.34206 20.8881 9.55996 22.1573 12 24.4411C14.4426 22.1614 17.6588 20.8928 21 20.8911V16.8911C21.2652 16.8911 21.5196 16.7858 21.7071 16.5982C21.8946 16.4107 22 16.1563 22 15.8911V13.8911C22 13.6259 21.8946 13.3715 21.7071 13.184C21.5196 12.9965 21.2652 12.8911 21 12.8911Z"
                    fill="black"
                  />
                  <path
                    d="M9 5.89111C9.55228 5.89111 10 5.4434 10 4.89111C10 4.33883 9.55228 3.89111 9 3.89111C8.44772 3.89111 8 4.33883 8 4.89111C8 5.4434 8.44772 5.89111 9 5.89111Z"
                    fill="black"
                  />
                  <path
                    d="M15 5.89111C15.5523 5.89111 16 5.4434 16 4.89111C16 4.33883 15.5523 3.89111 15 3.89111C14.4477 3.89111 14 4.33883 14 4.89111C14 5.4434 14.4477 5.89111 15 5.89111Z"
                    fill="black"
                  />
                  <path
                    d="M16 8.89111H8C7.20459 8.89032 6.44199 8.57399 5.87956 8.01156C5.31712 7.44912 5.00079 6.68652 5 5.89111V3.89111C5.00079 3.09571 5.31712 2.33311 5.87956 1.77067C6.44199 1.20823 7.20459 0.891907 8 0.891113H16C16.7954 0.891907 17.558 1.20823 18.1204 1.77067C18.6829 2.33311 18.9992 3.09571 19 3.89111V5.89111C18.9992 6.68652 18.6829 7.44912 18.1204 8.01156C17.558 8.57399 16.7954 8.89032 16 8.89111ZM8 2.89111C7.73486 2.89138 7.48066 2.99682 7.29319 3.1843C7.10571 3.37178 7.00026 3.62598 7 3.89111V5.89111C7.00026 6.15625 7.10571 6.41045 7.29319 6.59793C7.48066 6.78541 7.73486 6.89085 8 6.89111H16C16.2651 6.89085 16.5193 6.78541 16.7068 6.59793C16.8943 6.41045 16.9997 6.15625 17 5.89111V3.89111C16.9997 3.62598 16.8943 3.37178 16.7068 3.1843C16.5193 2.99682 16.2651 2.89138 16 2.89111H8Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_886_3475">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.891113)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <Description fontSize="text-sm">
                Learn About Your Reproductive Health
              </Description>
            </div>
            <div className="flex gap-5 items-center ">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8002 20.0912L2.4002 15.2912C1.65028 14.4694 1.22391 13.4035 1.2002 12.2912C1.22391 11.1789 1.65028 10.113 2.4002 9.29121L22.8002 4.49121V20.0912Z"
                  fill="black"
                />
                <path
                  d="M9.5998 14.0912C9.5998 12.7657 8.52529 11.6912 7.1998 11.6912C5.87432 11.6912 4.7998 12.7657 4.7998 14.0912V18.8912C4.7998 20.2166 5.87432 21.2912 7.1998 21.2912C8.52529 21.2912 9.5998 20.2166 9.5998 18.8912V14.0912Z"
                  fill="black"
                />
              </svg>

              <Description fontSize="text-sm">
                Get Instant Feedback on your Answers
              </Description>
            </div>
          </div>
          <div className="flex gap-3">
            <ButtonPrimary variant="small-solid">Get started</ButtonPrimary>
            <ButtonPrimary variant="small-outline">Learn More</ButtonPrimary>
          </div>
        </div>
      </SimpleSection>
    </Layout>
  );
}

export default Quiz;
