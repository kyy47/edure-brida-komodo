import { type } from "os";
import React from "react";

type InputPrimaryProps = {
  placeholder: string;
  className?: string;
};
function InputPrimary({ placeholder, className }: InputPrimaryProps) {
  return (
    <input
      className={`w-fit min-w-[200px] px-5 py-3 text-sm rounded-lg ${className}`}
      placeholder={placeholder}
    />
  );
}

export default InputPrimary;
