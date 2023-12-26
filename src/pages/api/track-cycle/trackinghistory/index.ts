import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/custom-script/prisma";

const handleGetMethod = async (req: NextApiRequest, res: NextApiResponse) => {
  const id_user = req.query.id_user;
  console.log(id_user);
  if (!id_user)
    return res
      .status(500)
      .json({ message: "cannot find your id for find tracking" });
  try {
    const trackData = await prisma.trackCycle.findMany({
      where: {
        id_user: id_user as string,
      },
    });
    res.status(200).json(trackData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Cannot get your history tracking" });
  }
};

const handleDeleteMethod = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const id_tracking = req.query.id;
  console.log(id_tracking);
  if (!id_tracking)
    return res
      .status(500)
      .json({ message: "cannot find your id tracking to delete" });
  try {
    const result = await prisma.trackCycle.delete({
      where: {
        id: parseInt(id_tracking as string),
      },
    });
    res.status(200).json({ result: result, message: "delete data Success" });
  } catch (error) {
    res.status(500).json({ message: "Cannot delete data traking" });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    handleGetMethod(req, res);
  }

  if (req.method === "DELETE") {
    handleDeleteMethod(req, res);
  }
}
