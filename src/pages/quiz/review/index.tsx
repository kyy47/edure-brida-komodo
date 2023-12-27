import ButtonPrimary from "@/components/micro/ButtonPrimary";
import Heading from "@/components/micro/Heading";
import React from "react";

function Review() {
  return (
    <div className=" backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none ">
      <div className="mt-7 opacity-100 duration-500  ease-out transition-all sm:max-w-2xl sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4 ">
          <Heading>Review Quiz</Heading>
          <p className="text-black text-xl font-semibold text-center">
            Pertanyaan 1/10
          </p>
          <p className="text-cranberry-600 text-lg font-semibold text-center">
            Mengapa penting untuk mengonsumsi makanan tinggi zat besi selama
            menstruasi?
          </p>
          <div className="flex items-center flex-wrap gap-2 justify-center">
            <div className="flex gap-2.5 p-4 text-sm items-center rounded-md font-medium md:text-base lg:text-lg  flex-wrap border w-fit border-green-500 bg-green-50 ">
              <span className=" bg-black px-3 py-1 rounded-md text-white">
                A
              </span>{" "}
              <p className="text-black text-lg font-normal text-center">
                Mencegah anemia karena kurang darah
              </p>
            </div>
            <div className="flex w-fit gap-2.5  items-center p-4 text-sm font-medium md:text-base rounded-md lg:text-lg  border border-error bg-red-50 ">
              <span className=" bg-black px-3 py-1 rounded-md text-white">
                B
              </span>{" "}
              <p className="text-black text-lg font-normal text-center">
                Mencegah anemia karena kurang darah
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-2 w-full mt-4 md:px-8 ">
            <ButtonPrimary
              variant="medium-solid"
              className="pointer-events-auto"
            >
              Sebelumnya
            </ButtonPrimary>
            <ButtonPrimary
              variant="medium-solid"
              className="pointer-events-auto"
            >
              Selanjutnya
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
