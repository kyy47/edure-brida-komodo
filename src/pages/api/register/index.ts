import type { NextApiRequest, NextApiResponse } from "next";
import argon from "argon2";
import prisma from "@/custom-script/prisma";
type RegisterDataType = {
  email: string;
  password: string;
  username: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const registerData = req.body as RegisterDataType;

    try {
      const passwordHash = await argon.hash(registerData.password);
      const result = await prisma.user.create({
        data: {
          email: registerData.email,
          password: passwordHash,
          username: registerData.username,
        },
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }
}
