import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/custom-script/prisma";

const handleGetMethod = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const quiz = await prisma.quiz.findMany();
    res.status(200).json(quiz);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Cannot Get Data Quiz" });
  }
};

const handlePostMethod = async (req: NextApiRequest, res: NextApiResponse) => {
  const quiz = req.body;
  try {
    const result = await prisma.quiz.create({
      data: {
        question: quiz.question,
        choiceA: quiz.choiceA,
        choiceB: quiz.choiceB,
        correctChoice: quiz.correctChoice,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Cannot Create Data Quiz" });
  }
};

const handleDeleteMethod = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const id = parseInt(req.query.id as string);
  try {
    const result = await prisma.quiz.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Cannot Delete Data Quiz" });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    handleGetMethod(req, res);
  }
  if (req.method === "POST") {
    handlePostMethod(req, res);
  }
  if (req.method === "DELETE") {
    handleDeleteMethod(req, res);
  }
}
