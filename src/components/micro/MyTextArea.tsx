import React from "react";

type MyTextArea = {
  label: string;
  placeholder: string;
  rows: number;
};
function MyTextArea({ label, rows, placeholder }: MyTextArea) {
  return (
    <div>
      <label
        htmlFor="textarea-label"
        className="block text-sm font-medium mb-1 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id="textarea-label"
        className="py-2 px-2 block w-full  rounded-lg text-sm border border-black focus:border-cranberry-500  focus:outline-cranberry-500 "
        rows={rows}
        placeholder={placeholder}
        defaultValue={""}
      />
    </div>
  );
}

export default MyTextArea;
