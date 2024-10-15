import React from "react";

type Props = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  min?: string;
  max?: string;
};


const Input = ({ name, type = 'text', label, placeholder, ...props}: Props) => {
  return <div>
    {(label && <label htmlFor={name} className="block mb-spacing-md text-text-sm">{ label }</label>)}
    <input
      type={type}
      name={name}
      id={`input-${name}`}
      className="w-full placeholder:text-text-baseline outline-none text-text-default text-text-baseline border rounded-spacing-sm h-12 border-background-default p-spacing-md"
      placeholder={placeholder}
      {...props}
    />
  </div>
};

export default Input;
