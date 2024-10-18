import React from "react";

type Props = {
  name: string;
  label?: string;
}  & React.InputHTMLAttributes<HTMLInputElement>;


const Input = ({ name, label, ...props}: Props) => {
  return <div>
    {(label && <label htmlFor={name} className="block mb-spacing-md text-text-sm">{ label }</label>)}
    <input
      name={name}
      id={`input-${name}`}
      className="w-full placeholder:text-text-baseline outline-none text-text-default text-text-baseline border rounded-spacing-sm h-12 border-background-default p-spacing-md"
      {...props}
    />
  </div>
};

export default Input;
