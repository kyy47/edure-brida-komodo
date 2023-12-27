import Layout from "@/components/layout/Layout";
import Heading from "@/components/micro/Heading";

import React, { useEffect, useState } from "react";
import { QuizResponse } from "@/pages/dashboardadmin/managequiz";
import axios from "axios";
import MyModal from "@/components/micro/MyModal";
import MyModalQuiz from "@/components/micro/MyModalQuiz";
import useSnackbar from "@/hooks/useSnackbar";
import Description from "@/components/micro/Description";
import ButtonPrimary from "@/components/micro/ButtonPrimary";
import ModalResultQuiz from "@/components/micro/ModalResultQuiz";
import ReviewQuizModal from "@/components/micro/ReviewQuizModal";

function StartQuiz() {
  const [quiz, setQuiz] = useState<QuizResponse[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [resultAnswers, setResultAnswers] = useState<boolean[]>([]);
  const [answersUser, setAnswersUser] = useState<("A" | "B")[]>([]);
  const { Snackbar, showSnackbar } = useSnackbar();
  const [isReview, setIsReview] = useState(false);
  const [indexReview, setIndexReview] = useState(0);
  const [isQuizEmpty, setIsQuizEmpty] = useState(false);

  const handleCheckAnswers = (choice: "A" | "B", correctChoice: string) => {
    setAnswersUser((answersUser) => [...answersUser, choice]);
    if (choice === correctChoice) {
      setResultAnswers((resultAnswers) => [...resultAnswers, true]);
    } else {
      setResultAnswers((resultAnswers) => [...resultAnswers, false]);
    }
  };

  const getDataQuiz = async () => {
    try {
      showSnackbar(true, "Loading...", "loading");
      const { data } = await axios.get("https://edure.vercel.app/api/quiz");
      showSnackbar(false, null, null);
      if (!data.length) setIsQuizEmpty(true);
      setQuiz(data);
    } catch (error: any) {
      showSnackbar(true, error.response.data.message, "warning");
      setTimeout(() => {
        showSnackbar(false, null, null);
      }, 2000);
    }
  };

  useEffect(() => {
    getDataQuiz();
  }, []);

  if (!isReview)
    return (
      <>
        <Snackbar />
        {isQuizEmpty ? (
          <Heading className="text-center mt-40 mb-80 text-cranberry-600 min-h-[500px]">
            Tidak Ada Quiz Hari ini
          </Heading>
        ) : null}
        {quiz.length && counter === quiz.length ? (
          <ModalResultQuiz
            resultAnswers={resultAnswers}
            onClickReview={() => setIsReview(true)}
          />
        ) : null}
        {quiz.map(
          (item, index) =>
            index === counter && (
              <MyModalQuiz
                index={index}
                key={item.id}
                onClickNext={() => setCounter((counter) => counter + 1)}
                question={item.question}
                type="choice"
                onResultAnswers={handleCheckAnswers}
                choiceA={item.choiceA}
                choiceB={item.choiceB}
                correctChoice={item.correctChoice}
              />
            )
        )}
        <div className="h-[60vh]"></div>
      </>
    );
  return (
    <div>
      {quiz.map(
        (item, index) =>
          index == indexReview && (
            <ReviewQuizModal
              key={item.id}
              onBack={() => setIsReview(false)}
              number={index + 1}
              quiz={item}
              answersUser={answersUser[index]}
              onNextClick={() => {
                if (index != quiz.length - 1) {
                  setIndexReview((item) => item + 1);
                }
              }}
              onPrevClick={() => {
                if (index != 0) {
                  setIndexReview((item) => item - 1);
                }
              }}
            />
          )
      )}
    </div>
  );
}

export default StartQuiz;
