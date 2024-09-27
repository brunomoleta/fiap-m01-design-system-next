import React from "react";
import { typography } from "../../../../../tokens";

const TypeSample = () => {
  return (
    <section className={`grid grid-cols-auto-fill-400`}>
      {Object.entries(typography).map(([key, value]) => (
        <div
          key={key}
          className={`flex flex-col border-b-4 w-fit gap-spacing-sm p-spacing-xl pl-spacing-md`}
        >
          <span
            style={{
              fontSize: value["font-size"],
              fontWeight: value["font-weight"],
            }}
            className={`font-serif`}
          >
            Aa
          </span>
          <div />
          <div className={`flex flex-col gap-spacing-xl`}>
            <span className={`text-text-active font-bold`}>
              {key.toUpperCase()}
            </span>
            <div className={`flex flex-col`}>
              <span>
                <strong>Font size: </strong>
                {value["font-size"]}
              </span>
              <span>
                <strong>Font weight: </strong>
                {value["font-weight"]}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TypeSample;
