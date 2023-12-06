import React, { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";
import { Calendar } from "../ui/calendar";

type MyModalProps = {
  onClickNext: () => any;
  question: string;
  type: "choice" | "with-input-number" | "with-input-calendar";
  state?: Date;
  setMyState: React.Dispatch<React.SetStateAction<any>>;
};
function MyModal({
  onClickNext,
  question,
  type,
  setMyState,
  state,
}: MyModalProps) {
  if (type === "choice") {
    return (
      <div className=" backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none ">
        <div className="mt-7 opacity-100 duration-500  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4 ">
            <p className="text-cranberry-600 text-xl font-semibold">
              {question}
            </p>
            <div className="flex gap-2">
              <ButtonPrimary
                variant="medium-solid"
                onClick={() => {
                  onClickNext();
                  setMyState(true);
                }}
                className="pointer-events-auto cursor-pointer"
              >
                Yes
              </ButtonPrimary>
              <ButtonPrimary
                variant="medium-outline"
                onClick={() => {
                  onClickNext();
                  setMyState(false);
                }}
                className="pointer-events-auto cursor-pointer"
              >
                No
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "with-input-number") {
    const [inputValue, setInputValue] = useState("");
    return (
      <div className=" backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none ">
        <div className="mt-7 opacity-100 duration-500  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4 ">
            <p className="text-cranberry-600 text-xl font-semibold">
              {question}
            </p>
            <div className="flex gap-2 w-full px-3 justify-center">
              <input
                type="number"
                className={`py-2 px-3 block rounded-lg text-lg text-center border-2 border-cranberry-500
                 focus:border-cranberry-300  focus:outline-cranberry-300 pointer-events-auto
                 cursor-pointer max-w-[100px] `}
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
              />
              <ButtonPrimary
                variant="medium-solid"
                onClick={() => {
                  onClickNext();
                  setMyState(parseInt(inputValue));
                }}
                className="pointer-events-auto cursor-pointer"
              >
                Next
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "with-input-calendar") {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <div className=" backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none ">
        <div className="mt-7 opacity-100 duration-500  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4 ">
            <p className="text-cranberry-600 text-xl font-semibold text-center">
              {question}
            </p>
            <div className="flex flex-col gap-2 w-full px-3 justify-center items-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(e) => setDate(e)}
                className="rounded-md border pointer-events-auto cursor-pointer"
              />
              <ButtonPrimary
                variant="medium-solid"
                onClick={() => {
                  onClickNext();
                }}
                className="pointer-events-auto cursor-pointer h-fit"
              >
                Next
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyModal;
