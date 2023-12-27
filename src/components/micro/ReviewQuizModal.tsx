import React from "react";
import Heading from "./Heading";
import ButtonPrimary from "./ButtonPrimary";
import { QuizResponse } from "@/pages/dashboardadmin/managequiz";

type ReviewQuizModalProps = {
  onNextClick: () => void;
  onPrevClick: () => void;
  quiz: QuizResponse;
  number: number;
  answersUser: "A" | "B";
  onBack: () => void;
};
function ReviewQuizModal({
  onNextClick,
  onPrevClick,
  quiz,
  number,
  answersUser,
  onBack,
}: ReviewQuizModalProps) {
  return (
    <div className=" backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none ">
      <div className="mt-7 opacity-100 duration-500  ease-out transition-all sm:max-w-2xl sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4 ">
          <Heading>Review Quiz</Heading>
          <p className="text-black text-xl font-semibold text-center">
            Pertanyaan {number}/10
          </p>
          <p className="text-cranberry-600 text-lg font-semibold text-center">
            {quiz.question}
          </p>
          <div className="flex items-center flex-wrap gap-2 justify-center">
            {answersUser === "A" && answersUser === quiz.correctChoice ? (
              <div className="flex gap-2.5 p-4 text-sm items-center rounded-md font-medium md:text-base lg:text-lg  flex-wrap border w-fit border-green-500 bg-green-50 ">
                <span className=" bg-black px-3 py-1 rounded-md text-white">
                  A
                </span>{" "}
                <p className="text-black text-lg font-normal text-center">
                  {quiz.choiceA}
                </p>
              </div>
            ) : answersUser === "A" && answersUser !== quiz.correctChoice ? (
              <div className="flex w-fit gap-2.5  items-center p-4 text-sm font-medium md:text-base rounded-md lg:text-lg  border border-red-500 bg-red-50 ">
                <span className=" bg-black px-3 py-1 rounded-md text-white">
                  A
                </span>{" "}
                <p className="text-black text-lg font-normal text-center">
                  {quiz.choiceA}
                </p>
              </div>
            ) : (
              <div className="flex w-fit gap-2.5  items-center p-4 text-sm font-medium md:text-base rounded-md lg:text-lg  border border-black bg-white ">
                <span className=" bg-black px-3 py-1 rounded-md text-white">
                  A
                </span>{" "}
                <p className="text-black text-lg font-normal text-center">
                  {quiz.choiceA}
                </p>
              </div>
            )}
            {answersUser === "B" && answersUser === quiz.correctChoice ? (
              <div className="flex gap-2.5 p-4 text-sm items-center rounded-md font-medium md:text-base lg:text-lg  flex-wrap border w-fit border-green-500 bg-green-50 ">
                <span className=" bg-black px-3 py-1 rounded-md text-white">
                  B
                </span>{" "}
                <p className="text-black text-lg font-normal text-center">
                  {quiz.choiceB}
                </p>
              </div>
            ) : answersUser === "B" && answersUser !== quiz.correctChoice ? (
              <div className="flex w-fit gap-2.5  items-center p-4 text-sm font-medium md:text-base rounded-md lg:text-lg  border border-red-500 bg-red-50 ">
                <span className=" bg-black px-3 py-1 rounded-md text-white">
                  B
                </span>{" "}
                <p className="text-black text-lg font-normal text-center">
                  {quiz.choiceB}
                </p>
              </div>
            ) : (
              <div className="flex w-fit gap-2.5  items-center p-4 text-sm font-medium md:text-base rounded-md lg:text-lg  border border-black bg-white ">
                <span className=" bg-black px-3 py-1 rounded-md text-white">
                  B
                </span>{" "}
                <p className="text-black text-lg font-normal text-center">
                  {quiz.choiceB}
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center lg:justify-between gap-2 w-full mt-4 md:px-8 flex-wrap">
            <ButtonPrimary
              variant="medium-solid"
              className="pointer-events-auto"
              onClick={onPrevClick}
            >
              Sebelumnya
            </ButtonPrimary>
            <ButtonPrimary
              variant="medium-outline"
              className="pointer-events-auto"
              onClick={onBack}
            >
              Kembali
            </ButtonPrimary>
            <ButtonPrimary
              variant="medium-solid"
              className="pointer-events-auto "
              onClick={onNextClick}
            >
              Selanjutnya
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewQuizModal;
