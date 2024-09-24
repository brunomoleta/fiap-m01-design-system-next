import {colors} from "@/tokens";
import React from "react";

const BackgroundColors = () => {
  return (
    <>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-background-accent h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'background-accent'.toUpperCase()}</span>
          <span>{colors["background-accent"]}</span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-background-default h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'background-default'.toUpperCase()}</span>
          <span>{colors["background-default"]}</span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-background-dark-grey h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'background-dark-grey'.toUpperCase()}</span>
          <span>{colors["background-dark-grey"]}</span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-background-medium-grey h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'background-medium-grey'.toUpperCase()}</span>
          <span>{colors["background-medium-grey"]}</span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-background-light-grey h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'background-light-grey'.toUpperCase()}</span>
          <span>{colors["background-light-grey"]}</span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-background-light-green h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'background-light-green'.toUpperCase()}</span>
          <span>{colors["background-light-green"]}</span>
        </div>
      </div>

    </>
  )
}

export default BackgroundColors;