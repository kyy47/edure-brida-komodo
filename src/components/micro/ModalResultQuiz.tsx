import React from "react";
import Heading from "./Heading";
import Description from "./Description";
import ButtonPrimary from "./ButtonPrimary";
import { useRouter } from "next/router";
import { QuizResponse } from "@/pages/dashboardadmin/managequiz";

type ModalResultQuizProps = {
  resultAnswers: boolean[];
  onClickReview: () => void;
};
function ModalResultQuiz({
  resultAnswers,
  onClickReview,
}: ModalResultQuizProps) {
  const point = resultAnswers.filter((item) => item === true).length;
  const router = useRouter();
  let typeResult: "success" | "failed" | "try-again" = "failed";
  if (point >= 8) {
    typeResult = "success";
  } else if (point >= 6) {
    typeResult = "try-again";
  }

  const handleToHome = () => router.push("/");

  return (
    <div className=" backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto ">
      <div className="mt-7 opacity-100 duration-500  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4 ">
          <div className=" flex flex-col items-center">
            <Heading className="text-center">Your Quiz Results</Heading>
            <div className="flex items-center gap-10 mt-8">
              <div className="flex flex-col items-center  ">
                {typeResult === "success" ? (
                  <svg
                    viewBox="0 0 512 512"
                    height="75px"
                    width="75px"
                    className="fill-teal-500"
                  >
                    <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zm-91.9-186.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6c-22.3 25.6-61 53.5-116.1 53.5s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM208.4 208c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm92.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0 5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0z" />
                  </svg>
                ) : typeResult === "failed" ? (
                  <svg
                    viewBox="0 0 512 512"
                    height="75px"
                    width="75px"
                    className="fill-red-500"
                  >
                    <path d="M352 493.4c-29.6 12-62.1 18.6-96 18.6s-66.4-6.6-96-18.6V288c0-8.8-7.2-16-16-16s-16 7.2-16 16v189.8C51.5 433.5 0 350.8 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256c0 94.8-51.5 177.5-128 221.8V288c0-8.8-7.2-16-16-16s-16 7.2-16 16v205.4zM195.2 233.6c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4c-30.4-40.5-91.2-40.5-121.6 0-5.3 7.1-3.9 17.1 3.2 22.4s17.1 3.9 22.4-3.2c17.6-23.5 52.8-23.5 70.4 0zm121.6 0c17.6-23.5 52.8-23.5 70.4 0 5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4c-30.4-40.5-91.2-40.5-121.6 0-5.3 7.1-3.9 17.1 3.2 22.4s17.1 3.9 22.4-3.2zM208 336v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48s-48 21.5-48 48z" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="75px"
                    width="75px"
                    className="fill-orange-400"
                  >
                    <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2M7 9.5C7 8.7 7.7 8 8.5 8s1.5.7 1.5 1.5S9.3 11 8.5 11 7 10.3 7 9.5m5 7.73c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81M15.5 11c-.8 0-1.5-.7-1.5-1.5S14.7 8 15.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
                  </svg>
                )}

                {typeResult === "success" ? (
                  <Description
                    className="text-teal-600 mt-3 font-semibold"
                    fontSize="text-lg"
                  >
                    Kerja Bagus!
                  </Description>
                ) : typeResult === "try-again" ? (
                  <Description
                    className="text-orange-400 mt-3 font-semibold"
                    fontSize="text-lg"
                  >
                    Dikit Lagi!
                  </Description>
                ) : (
                  <Description
                    className="text-red-500 mt-3 font-semibold"
                    fontSize="text-lg"
                  >
                    Coba Lagi!
                  </Description>
                )}
              </div>
              <div className="bg-cranberry-100 flex-col gap-2 p-5 items-center justify-center rounded-xl">
                <h3 className="font-bold text-lg border-b-2 border-black">
                  Point Anda
                </h3>
                {typeResult === "success" ? (
                  <h2 className="text-teal-500 font-bold text-6xl text-center ">
                    {point}
                  </h2>
                ) : typeResult === "try-again" ? (
                  <h2 className="text-orange-400 font-bold text-6xl text-center ">
                    {point}
                  </h2>
                ) : (
                  <h2 className="text-red-500 font-bold text-6xl text-center ">
                    {point}
                  </h2>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <ButtonPrimary
                variant="medium-outline"
                className="mt-8"
                onClick={handleToHome}
              >
                Kembali Ke Home
              </ButtonPrimary>
              <ButtonPrimary
                variant="medium-solid"
                className="mt-8"
                onClick={onClickReview}
              >
                Review Quiz
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalResultQuiz;
