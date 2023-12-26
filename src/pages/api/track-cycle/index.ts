import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/custom-script/prisma";

const handleGetMethod = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const trackData = await prisma.trackCycle.findMany();
    res.status(200).json(trackData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Cannot Get Data Tracking" });
  }
};

const handlePostMethod = async (req: NextApiRequest, res: NextApiResponse) => {
  const trackCycleData = req.body;
  try {
    const checkDataIsExist = await prisma.trackCycle.findFirst({
      where: {
        periodMenst: trackCycleData.periodMenst,
        cycleMenst: trackCycleData.cycleMenst,
        name: trackCycleData.name,
        nextFirstDayPriodMenst: trackCycleData.nextFirstDayPriodMenst,
      },
    });

    if (checkDataIsExist)
      return res.status(500).json({ message: "this tracking already saved" });

    await prisma.trackCycle.create({
      data: {
        periodMenst: trackCycleData.periodMenst,
        cycleMenst: trackCycleData.cycleMenst,
        name: trackCycleData.name,
        nextFirstDayPriodMenst: trackCycleData.nextFirstDayPriodMenst,
        id_user: trackCycleData.id_user,
        beforeFirstDayPriodMenst: trackCycleData.beforeFirstDayPriodMenst,
      },
    });
    res.status(200).json({ message: "Save Tracking Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Cannot Post Data Tracking" });
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
}
