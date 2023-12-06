import React, { useState } from "react";

export default function useSnackbar() {
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function showSnackbar(status: boolean, msg: string | null) {
    setToggle(status);
    setMessage(msg);
  }

  function Snackbar() {
    if (!toggle) return null;
    return (
      <div className="absolute top-0 left-0 flex justify-center w-full items-center z-[99999]">
        <div className="bg-cranberry-300 w-fit mt-5 px-8 py-2 rounded-lg text-gray-600 flex items-center gap-2">
          {message}
        </div>
      </div>
    );
  }

  return { showSnackbar, Snackbar };
}
