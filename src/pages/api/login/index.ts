import type { NextApiRequest, NextApiResponse } from "next";
import jsonwebtoken from "jsonwebtoken";
import prisma from "@/custom-script/prisma";
import argon from "argon2";
type LoginDataType = {
  email: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const loginData = req.body as LoginDataType;
    const privateKeyLogin = process.env.PRIVATE_KEY_LOGIN as string;
    const jwtToken = jsonwebtoken.sign(
      {
        email: loginData.email,
      },
      privateKeyLogin
    );

    try {
      const userData = await prisma.user.findUnique({
        where: {
          email: loginData.email,
        },
      });

      if (userData === null)
        return res.status(404).json({ message: "User Not Found" });
      const authStatus = await argon.verify(
        userData.password,
        loginData.password
      );
      if (!authStatus) return res.status(401).json({ message: "Unauthorized" });
      const cookies = [
        `token=${jwtToken}; path=/; SameSite:Lax; Secure`,
        `user_id=${userData.id}; path=/; SameSite:Lax; Secure`,
      ];
      res.setHeader("Set-Cookie", cookies);
      res.status(200).json({ result: userData, message: "Login Success" });
    } catch (e) {
      res.status(500).json({ message: "Login Failed" });
    }
  }
}
