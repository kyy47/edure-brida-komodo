import Layout from "@/components/layout/Layout";
import Heading from "@/components/micro/Heading";

import React, { useEffect, useState } from "react";
import { QuizResponse } from "@/pages/dashboardadmin/managequiz";
import axios from "axios";
import MyModal from "@/components/micro/MyModal";
import MyModalQuiz from "@/components/micro/MyModalQuiz";

function StartQuiz() {
  const [quiz, setQuiz] = useState<QuizResponse[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const getDataQuiz = async () => {
    const { data } = await axios.get(
      "https://edure-6o5drmeqn-codings-projects-094a695f.vercel.app/api/quiz"
    );
    setQuiz(data);
  };

  useEffect(() => {
    getDataQuiz();
  }, []);
  return (
    <Layout>
      <div className="min-h-[60vh]">
        <Heading className="text-center mt-15%">Your Quiz Results</Heading>
      </div>
      {quiz.map(
        (item, index) =>
          index === counter && (
            <MyModalQuiz
              key={item.id}
              onClickNext={() => setCounter((counter) => counter + 1)}
              question={item.question}
              type="choice"
              quiz={quiz}
              choiceA={item.choiceA}
              choiceB={item.choiceB}
              correctChoice={item.correctChoice}
            />
          )
      )}
    </Layout>
  );
}

export default StartQuiz;
