import React from "react";

type Option = {
  value: string;
  label: string;
}

type Props = {
  name: string;
  label?: string;
  options: Array<Option>;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ name, label, options, ...props}: Props) => {
  return <div>
    {(label && <label htmlFor={name} className="block mb-spacing-md text-text-sm">{ label }</label>)}
    <select
      name={name}
      id={`select-${name}`}
      className="w-full placeholder:text-text-baseline outline-none text-text-default text-text-baseline border rounded-spacing-sm h-12 border-background-default px-spacing-md"
      {...props}
    >
      {options.map(({ value, label }: Option, index: number) => (<option key={index} value={value}>{label}</option>))}
    </select>
  </div>
};

export default Select;
