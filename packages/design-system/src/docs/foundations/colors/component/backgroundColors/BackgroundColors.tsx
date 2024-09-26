import {colorsComplete} from "@/tokens";
import React from "react";

const BackgroundColors = () => {
  return (
    <>
      <div className={`grid gap-spacing-md w-fit`}>
        <div className={`bg-background-accent h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'background-accent'.toUpperCase()}</span>
          <span><span className={`font-bold`}>HSL:</span> {colorsComplete["background-accent"].hsl}</span>
          <span><span className={`font-bold`}>HEX:</span> {colorsComplete["background-accent"].hex}</span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-background-default h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'background-default'.toUpperCase()}</span>
          <span><span className={`font-bold`}>HSL:</span> {colorsComplete["background-default"].hsl}</span>
          <span><span className={`font-bold`}>HEX:</span> {colorsComplete["background-default"].hex}</span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-background-dark-grey h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'background-dark-grey'.toUpperCase()}</span>
          <span><span className={`font-bold`}>HSL:</span> {colorsComplete["background-dark-grey"].hsl}</span>
          <span><span className={`font-bold`}>HEX:</span> {colorsComplete["background-dark-grey"].hex}</span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-background-medium-grey h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'background-medium-grey'.toUpperCase()}</span>
          <span><span className={`font-bold`}>HSL:</span> {colorsComplete["background-medium-grey"].hsl}</span>
          <span><span className={`font-bold`}>HEX:</span> {colorsComplete["background-medium-grey"].hex}</span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-background-light-grey h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'background-light-grey'.toUpperCase()}</span>
          <span><span className={`font-bold`}>HSL:</span> {colorsComplete["background-light-grey"].hsl}</span>
          <span><span className={`font-bold`}>HEX:</span> {colorsComplete["background-light-grey"].hex}</span>
        </div>
      </div>
      <div className={`grid gap-spacing-md w-fit`}>
        <canvas className={`bg-background-light-green h-24 w-24`}/>
        <div className={`flex flex-col`}>
          <span className={`font-semibold`}>{'background-light-green'.toUpperCase()}</span>
          <span><span className={`font-bold`}>HSL:</span> {colorsComplete["background-light-green"].hsl}</span>
          <span><span className={`font-bold`}>HEX:</span> {colorsComplete["background-light-green"].hex}</span>
        </div>
      </div>

    </>
  )
}

export default BackgroundColors;