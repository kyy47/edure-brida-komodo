import { DataStateType, QuizResponse } from "@/pages/dashboardadmin/managequiz";
import axios from "axios";
import moment from "moment";
import React, { FormEvent, useState } from "react";

type ModalCreateDataProps = {
  setQuiz: React.Dispatch<React.SetStateAction<QuizResponse[]>>;
  setDataState: React.Dispatch<React.SetStateAction<DataStateType>>;
};

function ModalCreateData({ setQuiz, setDataState }: ModalCreateDataProps) {
  const [correctChoice, setCorrectChoice] = useState("A");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const FormElement = e.target as HTMLFormElement;
    const formData = new FormData(FormElement);
    const formDataJson = Object.fromEntries(formData.entries());
    const dataReq = {
      ...formDataJson,
      correctChoice: correctChoice,
    };

    const { data } = await axios.post(
      "https://edure.vercel.app/api/quiz",
      dataReq
    );
    setQuiz((lastQuiz) => [
      ...lastQuiz,
      {
        id: data.id,
        question: data.question,
        choiceA: data.choiceA,
        choiceB: data.choiceB,
        correctChoice: data.correctChoice,
        createdAt: new Date(moment(data.createdAt).toISOString()),
        updatedAt: new Date(moment(data.updatedAt).toISOString()),
      },
    ]);
    setDataState(null);
  };
  return (
    <div className=" backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none ">
      <div className="mt-7 opacity-100 duration-500  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4 ">
          <p className="text-teal-600 text-xl font-semibold text-center">
            Create Question
          </p>
          <form onSubmit={handleSubmit} className="pointer-events-auto">
            <textarea
              id="question"
              name="question"
              className={`py-2 px-2 block  w-[400px] h-[100px] rounded-lg text-sm border 
              border-black focus:border-teal-500  focus:outline-teal-500
           
              `}
              placeholder="question"
            />
            <div className="mt-3">
              <p>Choices</p>
              <textarea
                id="choiceA"
                name="choiceA"
                className={`py-2 px-2 block  w-[400px] h-[70px] rounded-lg text-sm border 
              border-black focus:border-teal-500  focus:outline-teal-500
              `}
                placeholder="Choice A"
              />
              <textarea
                id="choiceB"
                name="choiceB"
                className={`py-2 px-2 block  w-[400px] h-[70px] rounded-lg text-sm border 
              border-black focus:border-teal-500  focus:outline-teal-500 mt-2
              `}
                placeholder="Choice B"
              />
            </div>

            <div className="mt-3">
              <p>Correct Choice</p>
              <ul className="flex flex-col sm:flex-row ">
                <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                  <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                      <input
                        id="A"
                        type="radio"
                        name="correctChoice"
                        className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        defaultChecked={true}
                        onChange={({ target }) => {
                          if (target.value == "on") {
                            setCorrectChoice("A");
                          }
                        }}
                      />
                    </div>
                    <label
                      htmlFor="A"
                      className="ms-3 block w-full text-sm text-gray-600 dark:text-gray-500"
                    >
                      A
                    </label>
                  </div>
                </li>
                <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                  <div className="relative flex items-start w-full">
                    <div className="flex items-center h-5">
                      <input
                        id="B"
                        type="radio"
                        name="correctChoice"
                        onChange={({ target }) => {
                          if (target.value == "on") {
                            setCorrectChoice("B");
                          }
                        }}
                        className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="B"
                      className="ms-3 block w-full text-sm text-gray-600 dark:text-gray-500"
                    >
                      B
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            <button
              type="submit"
              className="bg-teal-600 px-10 py-2 text-white rounded-lg 
              font-semibold text-sm w-fit mt-3 cursor-pointer"
            >
              submit
            </button>
            <button
              type="button"
              className="bg-red-600 px-10 py-2 text-white rounded-lg 
              font-semibold text-sm w-fit mt-3 ml-3 cursor-pointer"
              onClick={() => {
                setDataState(null);
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

export default ModalCreateData;
