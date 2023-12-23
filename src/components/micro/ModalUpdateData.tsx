import { DataStateType, QuizResponse } from "@/pages/dashboardadmin/managequiz";
import React from "react";

type ModalUpdateDataProps = {
  setQuiz: React.Dispatch<React.SetStateAction<QuizResponse[]>>;
  quiz: QuizResponse[];
  setDataState: React.Dispatch<React.SetStateAction<DataStateType>>;
  updateIndex: number;
};
function ModalUpdateData({
  setQuiz,
  quiz,
  setDataState,
  updateIndex,
}: ModalUpdateDataProps) {
  return (
    <div className=" backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none ">
      <div className="mt-7 opacity-100 duration-500  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4 ">
          <p className="text-blue-600 text-xl font-semibold text-center">
            Update Question
          </p>
          <form
            // onSubmit={ }
            className="pointer-events-auto"
          >
            <textarea
              id="question"
              name="question"
              className={`py-2 px-2 block  w-[400px] h-[100px] rounded-lg text-sm border 
          border-black focus:border-teal-500  focus:outline-teal-50
          `}
              defaultValue={quiz[updateIndex]?.question}
              placeholder="question"
            />
            <button
              type="submit"
              className="bg-blue-600 px-10 py-2 text-white rounded-lg 
          font-semibold text-sm w-fit mt-3 cursor-pointer"
            >
              update
            </button>
            <button
              type="button"
              className="bg-red-600 px-10 py-2 text-white rounded-lg 
          font-semibold text-sm w-fit mt-3 ml-3 cursor-pointer"
              onClick={() => {
                // setDataState(null);
              }}
            >
              cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalUpdateData;
