import React, { useState } from "react";

type IconType = "loading" | "success" | "error" | "warning" | null;
export default function useSnackbar() {
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [iconSnackbar, setIconSnackbar] = useState<IconType>();
  function showSnackbar(
    status: boolean,
    msg: string | null,
    type: IconType = null
  ) {
    setToggle(status);
    setMessage(msg);
    setIconSnackbar(type);
  }

  function Snackbar() {
    if (!toggle) return null;
    return (
      <div className="fixed top-0 left-0 flex justify-center w-full items-center z-[99999]">
        <div className="bg-cranberry-100 w-fit mt-5 px-8 py-2 rounded-lg text-gray-600 flex items-center gap-2 ">
          {iconSnackbar === "loading" ? (
            <span className="w-4 h-4 border-2 border-black border-t-cranberry-300 border-b-cranberry-500 rounded-full animate-spin" />
          ) : iconSnackbar === "success" ? (
            <svg viewBox="0 0 15 15" className="w-4 h-4 fill-teal-600">
              <path
                fill=""
                fillRule="evenodd"
                d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm7.072 3.21l4.318-5.398-.78-.624-3.682 4.601L4.32 7.116l-.64.768 3.392 2.827z"
                clipRule="evenodd"
              />
            </svg>
          ) : iconSnackbar === "error" ? (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-cranberry-600">
              <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          ) : iconSnackbar === "warning" ? (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-orange-500">
              <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          ) : null}
          {message}
        </div>
      </div>
    );
  }

  return { showSnackbar, Snackbar };
}
