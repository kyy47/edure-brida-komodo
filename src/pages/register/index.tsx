import ButtonPrimary from "@/components/micro/ButtonPrimary";
import MyCheckbox from "@/components/micro/MyCheckbox";
import MyInput from "@/components/micro/MyInput";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Register() {
  const router = useRouter();
  const toLogin = () => {
    router.push("/login");
  };
  return (
    <div
      className="w-full flex items-center justify-center px-10 min-h-[100vh] 
      py-6
  "
    >
      <div className="grid md:grid-cols-2 w-full lg:gap-20 items-center">
        <div className="relative w-full h-[400px] ">
          <Image
            src="/register.png"
            priority
            fill
            alt="register"
            sizes="100%"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h2 className="font-normal text-2xl">
            Welcome To
            <Link href="/">
              <span className="text-cranberry-500 hover:text-cranberry-700 ">
                {" "}
                Edure
              </span>
            </Link>
          </h2>
          <div className="bg-cranberry-200 p-2 rounded-md flex gap-4">
            <ButtonPrimary variant="small-minimal" onClick={toLogin}>
              Login
            </ButtonPrimary>
            <ButtonPrimary variant="small-solid">Register</ButtonPrimary>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <MyInput
              label="Username"
              placeholder="Register your username"
              type="text"
              variant="login"
              className="w-full"
            />
            <MyInput
              label="Email"
              placeholder="Register your email"
              type="email"
              variant="login"
              className="w-full"
            />
            <MyInput
              label="Password"
              placeholder="Register your password"
              type="password"
              variant="login"
              className="w-full"
            />
          </div>
          <div className="flex justify-end w-full">
            <ButtonPrimary variant="medium-solid">Register</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
