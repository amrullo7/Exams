
import React from "react";

const Modal = ({ open, setOpen, title, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-[800px] rounded-xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-5">
          <h1 className="text-2xl font-semibold">
            {title} User
          </h1>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl font-bold text-red-500 hover:text-red-700"
          >
            X
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto p-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;