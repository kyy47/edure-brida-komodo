import React from "react";

type MyCheckboxProps = {
  label: string;
};
function MyCheckbox({ label }: MyCheckboxProps) {
  return (
    <div className="flex">
      <input
        type="checkbox"
        className="shrink-0 mt-0.5 border-gray-200 rounded accent-cranberry-500 "
        id={label}
      />
      <label
        htmlFor="hs-default-checkbox"
        className="text-sm text-gray-500 ms-3 dark:text-gray-400"
      >
        {label}
      </label>
    </div>
  );
}

export default MyCheckbox;
