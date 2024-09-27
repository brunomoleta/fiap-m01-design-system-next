import React from "react";

interface ISpacingProps {
  spaceEntry: [string, string];
  children: React.ReactNode;
}

const Spacing = ({ spaceEntry: [key, value], children }: ISpacingProps) => {
  return (
    <div className={`flex flex-col w-fit gap-spacing-sm`}>
      {children}
      <div className={`flex flex-col`}>
        <span className={`w-full font-semibold`}>{key.toUpperCase()}</span>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default Spacing;
