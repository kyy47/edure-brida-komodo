import React from "react";
import Description from "./Description";
import Link from "next/link";

type MyInputProps = {
  label: string;
  placeholder: string;
  type: string;
  variant?: "login" | "login-password";
  className?: string;
};
function MyInput({
  label,
  type,
  placeholder,
  variant,
  className,
}: MyInputProps) {
  if (variant == "login") {
    return (
      <>
        <div>
          <label htmlFor={label} className="block text-base font-semibold mb-2">
            {label}
          </label>
          <input
            type={type}
            id={label}
            name={label.toLowerCase()}
            className={`py-4 px-6 block w-full  rounded-lg text-sm border-2 border-cranberry-500 focus:border-cranberry-300  focus:outline-cranberry-300 ${className} `}
            placeholder={placeholder}
          />
        </div>
      </>
    );
  }
  if (variant == "login-password") {
    return (
      <>
        <div>
          <label htmlFor={label} className="block text-base font-semibold mb-2">
            {label}
          </label>
          <input
            type={type}
            id={label}
            name={label.toLowerCase()}
            className={`py-4 px-6 block w-full  rounded-lg text-sm border-2 border-cranberry-500 focus:border-cranberry-300  focus:outline-cranberry-300 ${className} `}
            placeholder={placeholder}
          />
          <div className="flex justify-end">
            <Link href="#">
              <Description
                fontSize="text-sm"
                className="font-light hover:text-cranberry-500"
              >
                Forgot password?
              </Description>
            </Link>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <label
          htmlFor="with-corner-hint"
          className="block text-sm font-semibold mb-2"
        >
          {label}
        </label>
        <input
          type={type}
          id={label}
          className={`py-2 px-2 block w-full  rounded-lg text-sm border border-black focus:border-cranberry-500  focus:outline-cranberry-500 ${className}`}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default MyInput;
