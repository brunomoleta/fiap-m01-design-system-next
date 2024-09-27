import React from "react";

interface IconDocProps {
  children: React.ReactNode;
  componentName: string;
}

const IconDoc = ({ children, componentName }: IconDocProps) => {
  return (
    <div className={"flex items-center gap-spacing-lg "}>
      <div
        className={
          "border-background-medium-grey border-2 w-fit p-spacing-lg rounded-md shadow-md"
        }
      >
        {children}
      </div>
      <span> {componentName} </span>
    </div>
  );
};

export default IconDoc;
