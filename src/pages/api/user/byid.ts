import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/custom-script/prisma";

const handleGetMethod = async (req: NextApiRequest, res: NextApiResponse) => {
  const user_id_login = req.query.id;

  if (!user_id_login)
    return res.status(500).json({ message: "Cannot get data user" });

  try {
    const userData = await prisma.user.findUnique({
      where: {
        id: user_id_login as string,
      },
    });
    if (!userData) return res.status(500).json({ message: "error token" });
    res.status(200).json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Cannot Get Data Tracking" });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    handleGetMethod(req, res);
  }
}
