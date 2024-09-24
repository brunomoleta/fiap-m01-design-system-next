import {colors} from "@/tokens";
import React from "react";

const TextColors = () => {
  return (
    <>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-text-default h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'text-default'.toUpperCase()}</span>
          <span>{colors["text-default"]}</span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-text-active h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'text-active'.toUpperCase()}</span>
          <span>{colors["text-active"]}</span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-text-dark-green h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'text-dark-green'.toUpperCase()}</span>
          <span>{colors["text-dark-green"]}</span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-text-revert h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'text-revert'.toUpperCase()}</span>
          <span>{colors["text-revert"]}</span>
        </div>
      </div>
    </>
  )
}

export default TextColors;