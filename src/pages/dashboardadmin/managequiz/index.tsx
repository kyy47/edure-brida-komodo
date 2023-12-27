import IconClipboardEdit from "@/components/icon/IconClipboardEdit";
import IconDeleteBack2Fill from "@/components/icon/IconDeleteBack2Fill";
import LayoutAdmin from "@/components/layout/LayoutAdmin";
import Heading from "@/components/micro/Heading";
import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import ModalCreateData from "@/components/micro/ModalCreateData";
import ModalUpdateData from "@/components/micro/ModalUpdateData";
export type QuizResponse = {
  id: number;
  question: string;
  createdAt: Date;
  updatedAt: Date;
  choiceA: string;
  choiceB: string;
  correctChoice: string;
};
export type DataStateType = null | "insert" | "update" | "delete";

function ManageQuiz() {
  const [quiz, setQuiz] = useState<QuizResponse[]>([]);
  const [datastate, setDataState] = useState<DataStateType>(null);
  const [updateIndex, setUpdateIndex] = useState<number>(0);

  const getData = async () => {
    const { data } = await axios.get("https://edure.vercel.app/api/quiz");
    console.log(data);
    setQuiz(
      data.map((item: QuizResponse) => ({
        id: item.id,
        question: item.question,
        choiceA: item.choiceA,
        choiceB: item.choiceB,
        correctChoice: item.correctChoice,
        createdAt: new Date(moment(item.createdAt).toISOString()),
        updatedAt: new Date(moment(item.updatedAt).toISOString()),
      }))
    );
  };

  const handleDeleteQuestion = async (id: number) => {
    const { data: responseData } = await axios.delete(
      `https://edure.vercel.app/api/quiz?id=${id}`
    );
    setQuiz([...quiz.filter((item) => item.id !== responseData.id)]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <LayoutAdmin>
        <Heading className="text-center mt-15%">Manage Quiz</Heading>
        <div className="flex flex-col mt-10">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden px-3 md:px-6.25 ">
                <button
                  type="button"
                  className="bg-teal-600 px-4 py-2 text-white rounded-lg 
              font-semibold text-sm w-fit mt-3 cursor-pointer mb-3"
                  onClick={() => {
                    setDataState("insert");
                  }}
                >
                  Add
                </button>
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        NO
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Question
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Choice A
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Choice B
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Correct Choice
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                      >
                        Action
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                      >
                        CREATED AT
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {quiz?.map((item, index) => (
                      <tr className="hover:bg-gray-100 " key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium w-[20px] text-gray-800 ">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4  text-sm text-gray-800 w-[400px]">
                          <p>{item.question}</p>
                        </td>
                        <td className="px-6 py-4  text-sm text-gray-800 w-[400px]">
                          <p>{item.choiceA}</p>
                        </td>
                        <td className="px-6 py-4  text-sm text-gray-800 w-[400px]">
                          <p>{item.choiceB}</p>
                        </td>
                        <td className="px-6 py-4  text-sm text-gray-800 w-[30px]">
                          <p>{item.correctChoice}</p>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium flex gap-2 items-center justify-end">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-teal-600 hover:text-teal-800 disabled:opacity-50 disabled:pointer-events-none "
                          >
                            <IconClipboardEdit />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteQuestion(item.id)}
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-pink-600 hover:text-pink-800 disabled:opacity-50 disabled:pointer-events-none "
                          >
                            <IconDeleteBack2Fill />
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          {item.createdAt.toLocaleDateString()}{" "}
                          {item.createdAt.toLocaleTimeString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
      {datastate == "insert" && (
        <ModalCreateData setQuiz={setQuiz} setDataState={setDataState} />
      )}
      {/* <ModalUpdateData
        quiz={quiz}
        updateIndex={1}
        setDataState={setDataState}
        setQuiz={setQuiz}
      /> */}
    </>
  );
}

export default ManageQuiz;
