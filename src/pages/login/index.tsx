import ButtonPrimary from "@/components/micro/ButtonPrimary";
import MyCheckbox from "@/components/micro/MyCheckbox";
import MyInput from "@/components/micro/MyInput";
import useSnackbar from "@/hooks/useSnackbar";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent } from "react";

function Login() {
  const router = useRouter();
  const { Snackbar, showSnackbar } = useSnackbar();

  const toRegister = () => {
    router.push("/register");
  };

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJson = Object.fromEntries(formData.entries());
    try {
      showSnackbar(true, "Login....", "loading");
      const { data } = await axios.post(
        "http://localhost:3000/api/login",
        formDataJson
      );

      showSnackbar(true, data.message, "success");
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
      if (data.result) router.replace("/");
    } catch (e: any) {
      showSnackbar(true, e.response.data.message, "error");
      setTimeout(() => {
        showSnackbar(false, null);
      }, 2000);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Snackbar />
      <div
        className="w-full flex items-center justify-center px-10 min-h-[100vh] 
      py-6 max-w-5xl 
      "
      >
        <div className="grid md:grid-cols-2 w-full lg:gap-20 items-center">
          <div className="relative w-full h-[400px] ">
            <Image
              src="/login.png"
              priority
              fill
              alt="login"
              sizes="100%"
              className="object-contain object-center md:object-left"
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
              <ButtonPrimary variant="small-solid">Login</ButtonPrimary>
              <ButtonPrimary variant="small-minimal" onClick={toRegister}>
                Register
              </ButtonPrimary>
            </div>
            <form onSubmit={loginHandler} className="w-full">
              <div className="flex flex-col gap-5 w-full">
                <MyInput
                  label="Email"
                  placeholder="Enter your Email"
                  type="email"
                  variant="login"
                  className="w-full"
                />
                <MyInput
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="login-password"
                  className="w-full"
                />
                <MyCheckbox label="Remember me" />
              </div>
              <div className="flex justify-end w-full">
                <ButtonPrimary variant="medium-solid" type="submit">
                  Login
                </ButtonPrimary>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
