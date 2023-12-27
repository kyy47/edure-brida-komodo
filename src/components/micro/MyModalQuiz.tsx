import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import { QuizResponse } from "@/pages/dashboardadmin/managequiz";

type MyModalQuizProp = {
  onClickNext: () => void;
  type: "choice";
  question: string;
  choiceA: string;
  choiceB: string;
  correctChoice: string;
  onResultAnswers: (choice: "A" | "B", correctChoice: string) => void;
  index: number;
};
function MyModalQuiz({
  onClickNext,
  type,
  question,
  choiceA,
  choiceB,
  correctChoice,
  onResultAnswers,
  index,
}: MyModalQuizProp) {
  if (type === "choice") {
    return (
      <div className=" backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none ">
        <div className="mt-7 opacity-100 duration-500  ease-out transition-all sm:max-w-2xl sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4 ">
            <p className="text-cranberry-600 text-xl font-semibold text-center">
              {question}
            </p>
            <div className="flex flex-col gap-3 md:flex-row md:gap-4">
              <ButtonPrimary
                variant="medium-outline"
                onClick={() => {
                  onClickNext();
                  onResultAnswers("A", correctChoice);
                }}
                className="pointer-events-auto cursor-pointer flex gap-3 items-center flex-1 w-full md:w-fit"
              >
                <span className=" bg-black p-2 rounded-md text-white">A</span>{" "}
                {choiceA}
              </ButtonPrimary>
              <ButtonPrimary
                variant="medium-outline"
                onClick={() => {
                  onClickNext();
                  onResultAnswers("B", correctChoice);
                }}
                className="flex-1 pointer-events-auto cursor-pointer flex gap-3 items-center w-full md:w-fit"
              >
                <span className="bg-black p-2 rounded-md text-white">B</span>{" "}
                {choiceB}
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyModalQuiz;
