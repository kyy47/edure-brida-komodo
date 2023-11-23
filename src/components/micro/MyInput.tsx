import { type } from "os";
import React from "react";
import { InputType } from "zlib";

type MyInputProps = {
  label: string;
  placeholder: string;
  type: string;
};
function MyInput({ label, type, placeholder }: MyInputProps) {
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
          className="py-2 px-2 block w-full  rounded-lg text-sm border border-black focus:border-cranberry-500  focus:outline-cranberry-500 "
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default MyInput;
