import React from "react";
import Heading from "../micro/Heading";
import Description from "../micro/Description";
import ButtonPrimary from "../micro/ButtonPrimary";

function EffortleslyTrackSection() {
  return (
    <section className="flex flex-col gap-6 mt-16 items-center px-4 lg:px-6.25">
      <Heading className="text-center max-w-3xl">
        Effortlessly Track Your Menstrual Cycle with Our Tracker
      </Heading>
      <Description className="max-w-4xl text-center" fontSize="text-base">
        Our menstrual tracker simplifies the process of recording and analyzing
        your menstrual cycle. Input your data and let our tracker provide
        valuable insights and personalized calender
      </Description>
      <div className="grid md:grid-cols-3 w-full gap-3">
        <div className="flex flex-col gap-4 items-center">
          <svg
            width="30"
            height="40"
            viewBox="0 0 40 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4285 37.4998H30.7142V41.0713H16.4285V37.4998ZM9.28564 37.4998H12.8571V41.0713H9.28564V37.4998ZM16.4285 28.5713H30.7142V32.1427H16.4285V28.5713ZM9.28564 28.5713H12.8571V32.1427H9.28564V28.5713ZM16.4285 19.6427H30.7142V23.2141H16.4285V19.6427ZM9.28564 19.6427H12.8571V23.2141H9.28564V19.6427Z"
              fill="black"
            />
            <path
              d="M36.0712 5.35714H30.7141V3.57143C30.7141 2.62423 30.3378 1.71582 29.668 1.04605C28.9983 0.376274 28.0898 0 27.1426 0H12.8569C11.9097 0 11.0013 0.376274 10.3316 1.04605C9.66178 1.71582 9.2855 2.62423 9.2855 3.57143V5.35714H3.92836C2.98116 5.35714 2.07275 5.73342 1.40298 6.40319C0.733208 7.07296 0.356934 7.98137 0.356934 8.92857V46.4286C0.356934 47.3758 0.733208 48.2842 1.40298 48.954C2.07275 49.6237 2.98116 50 3.92836 50H36.0712C37.0184 50 37.9268 49.6237 38.5966 48.954C39.2664 48.2842 39.6426 47.3758 39.6426 46.4286V8.92857C39.6426 7.98137 39.2664 7.07296 38.5966 6.40319C37.9268 5.73342 37.0184 5.35714 36.0712 5.35714ZM12.8569 3.57143H27.1426V10.7143H12.8569V3.57143ZM36.0712 46.4286H3.92836V8.92857H9.2855V14.2857H30.7141V8.92857H36.0712V46.4286Z"
              fill="black"
            />
          </svg>
          <h3 className="font-bold text-base text-black text-center">
            Input Data, Analyze Results, Gain Insight
          </h3>
          <Description className="text-sm text-center">
            Easily inout your menstrual cycle data and track your progress.
          </Description>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <svg
            width="37"
            height="40"
            viewBox="0 0 46 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.75 47H43.25"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.75 22.25C2.75 20.1282 2.75 19.0685 3.40925 18.4093C4.0685 17.75 5.12825 17.75 7.25 17.75C9.37175 17.75 10.4315 17.75 11.0907 18.4093C11.75 19.0685 11.75 20.1282 11.75 22.25V35.75C11.75 37.8718 11.75 38.9315 11.0907 39.5908C10.4315 40.25 9.37175 40.25 7.25 40.25C5.12825 40.25 4.0685 40.25 3.40925 39.5908C2.75 38.9315 2.75 37.8718 2.75 35.75V22.25ZM18.5 13.25C18.5 11.1282 18.5 10.0685 19.1593 9.40925C19.8185 8.75 20.8782 8.75 23 8.75C25.1218 8.75 26.1815 8.75 26.8407 9.40925C27.5 10.0685 27.5 11.1282 27.5 13.25V35.75C27.5 37.8718 27.5 38.9315 26.8407 39.5908C26.1815 40.25 25.1218 40.25 23 40.25C20.8782 40.25 19.8185 40.25 19.1593 39.5908C18.5 38.9315 18.5 37.8718 18.5 35.75V13.25ZM34.25 6.5C34.25 4.37825 34.25 3.3185 34.9092 2.65925C35.5685 2 36.6282 2 38.75 2C40.8718 2 41.9315 2 42.5908 2.65925C43.25 3.3185 43.25 4.37825 43.25 6.5V35.75C43.25 37.8718 43.25 38.9315 42.5908 39.5908C41.9315 40.25 40.8718 40.25 38.75 40.25C36.6282 40.25 35.5685 40.25 34.9092 39.5908C34.25 38.9315 34.25 37.8718 34.25 35.75V6.5Z"
              stroke="black"
              strokeWidth="4"
            />
          </svg>

          <h3 className="font-bold text-base text-black text-center">
            Analyze Your Menstrual Cycle Data Effectively
          </h3>
          <Description className="text-sm text-center">
            Our tracker provides clear visualizations and insights based on your
            recorded menstrual cycle data.
          </Description>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <svg
            width="41"
            height="41"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.5 5H37.5V2.5C37.5 1.83696 37.2366 1.20107 36.7678 0.732233C36.2989 0.263392 35.663 0 35 0C34.337 0 33.7011 0.263392 33.2322 0.732233C32.7634 1.20107 32.5 1.83696 32.5 2.5V5H17.5V2.5C17.5 1.83696 17.2366 1.20107 16.7678 0.732233C16.2989 0.263392 15.663 0 15 0C14.337 0 13.7011 0.263392 13.2322 0.732233C12.7634 1.20107 12.5 1.83696 12.5 2.5V5H7.5C5.51088 5 3.60322 5.79018 2.1967 7.1967C0.790177 8.60322 0 10.5109 0 12.5V42.5C0 44.4891 0.790177 46.3968 2.1967 47.8033C3.60322 49.2098 5.51088 50 7.5 50H42.5C44.4891 50 46.3968 49.2098 47.8033 47.8033C49.2098 46.3968 50 44.4891 50 42.5V12.5C50 10.5109 49.2098 8.60322 47.8033 7.1967C46.3968 5.79018 44.4891 5 42.5 5ZM45 42.5C45 43.163 44.7366 43.7989 44.2678 44.2678C43.7989 44.7366 43.163 45 42.5 45H7.5C6.83696 45 6.20107 44.7366 5.73223 44.2678C5.26339 43.7989 5 43.163 5 42.5V25H45V42.5ZM45 20H5V12.5C5 11.837 5.26339 11.2011 5.73223 10.7322C6.20107 10.2634 6.83696 10 7.5 10H12.5V12.5C12.5 13.163 12.7634 13.7989 13.2322 14.2678C13.7011 14.7366 14.337 15 15 15C15.663 15 16.2989 14.7366 16.7678 14.2678C17.2366 13.7989 17.5 13.163 17.5 12.5V10H32.5V12.5C32.5 13.163 32.7634 13.7989 33.2322 14.2678C33.7011 14.7366 34.337 15 35 15C35.663 15 36.2989 14.7366 36.7678 14.2678C37.2366 13.7989 37.5 13.163 37.5 12.5V10H42.5C43.163 10 43.7989 10.2634 44.2678 10.7322C44.7366 11.2011 45 11.837 45 12.5V20Z"
              fill="black"
            />
          </svg>

          <h3 className="font-bold text-base text-black text-center">
            Analyze Your Menstrual Cycle Data Effectively
          </h3>
          <Description className="text-sm text-center">
            Our tracker provides clear visualizations and insights based on your
            recorded menstrual cycle data.
          </Description>
        </div>
      </div>
      <div className="flex justify-center gap-4 ">
        <ButtonPrimary variant="medium-solid">Get Started</ButtonPrimary>
        <ButtonPrimary variant="medium-outline">Learn More</ButtonPrimary>
      </div>
    </section>
  );
}

export default EffortleslyTrackSection;
