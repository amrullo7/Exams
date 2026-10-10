
import React from "react";

const Heart = ({ img, title, text, text2, row }) => {
  return (
    <div
      className={`mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 py-10 lg:flex-row lg:gap-16 ${
        row ? "" : "lg:flex-row-reverse"
      }`}
    >
      <div className="flex w-full justify-center lg:w-1/2">
        <img
          src={img}
          alt=""
          className="w-full max-w-[280px] object-contain lg:max-w-[380px]"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
          {title}
        </h1>

        <p className="mt-6 text-sm leading-6 text-[#493E3E] sm:text-base">
          {text}
        </p>

        <p className="mt-5 text-sm leading-6 text-[#493E3E] sm:text-base">
          {text2}
        </p>
      </div>
    </div>
  );
};

export default Heart;