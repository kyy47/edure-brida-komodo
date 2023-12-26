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
    if (!registerData.email.trim())
      return res.status(500).json({ message: "Your Email is empty" });
    if (!registerData.username.trim())
      return res.status(500).json({ message: "Your Username is empty" });
    if (!registerData.password.trim())
      return res.status(500).json({ message: "Your Password is empty" });
    try {
      const passwordHash = await argon.hash(registerData.password);

      const checkUser = await prisma.user.findUnique({
        where: {
          email: registerData.email,
        },
      });
      if (checkUser)
        return res
          .status(500)
          .json({ message: `user with email ${registerData.email} is exist` });

      const result = await prisma.user.create({
        data: {
          email: registerData.email,
          password: passwordHash,
          username: registerData.username,
        },
      });
      res.status(200).json({ result: result, message: "Register Success" });
    } catch (e) {
      res.status(500).json({ message: "Register Failed" });
    }
  }
}
