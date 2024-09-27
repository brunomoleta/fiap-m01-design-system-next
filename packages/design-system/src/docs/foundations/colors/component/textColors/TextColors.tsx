import { colorsComplete } from "@/tokens";
import React from "react";

const TextColors = () => {
  return (
    <>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-text-default h-24 w-24`} />
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>
            {"text-default".toUpperCase()}
          </span>
          <span className={`m-0`}>
            <span className={`font-bold inline-block`}>HSL:</span>{" "}
            {colorsComplete["text-default"].hsl}
          </span>
          <span className={`m-0`}>
            <span className={`font-bold inline-block`}>HEX:</span>{" "}
            {colorsComplete["text-default"].hex}
          </span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-text-active h-24 w-24`} />
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{"text-active".toUpperCase()}</span>
          <span className={`m-0`}>
            <span className={`font-bold inline-block`}>HSL:</span>{" "}
            {colorsComplete["text-active"].hsl}
          </span>
          <span className={`m-0`}>
            <span className={`font-bold inline-block`}>HEX:</span>{" "}
            {colorsComplete["text-active"].hex}
          </span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-text-dark-green h-24 w-24`} />
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>
            {"text-dark-green".toUpperCase()}
          </span>
          <span className={`m-0`}>
            <span className={`font-bold inline-block`}>HSL:</span>{" "}
            {colorsComplete["text-dark-green"].hsl}
          </span>
          <span className={`m-0`}>
            <span className={`font-bold inline-block`}>HEX:</span>{" "}
            {colorsComplete["text-dark-green"].hex}
          </span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-text-revert h-24 w-24`} />
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{"text-revert".toUpperCase()}</span>
          <span className={`m-0`}>
            <span className={`font-bold inline-block`}>HSL:</span>{" "}
            {colorsComplete["text-revert"].hsl}
          </span>
          <span className={`m-0`}>
            <span className={`font-bold inline-block`}>HEX:</span>{" "}
            {colorsComplete["text-revert"].hex}
          </span>
        </div>
      </div>
    </>
  );
};

export default TextColors;
