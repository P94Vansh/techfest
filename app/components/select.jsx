import { useCallback, useState } from "react";

export default function Select({
  label,
  name,
  value = -1,
  onChange,
  options = [],
  id,
  className,
  theme = "dark",
  required = false,
}) {
  const handleInput = (e) => {
    let { value } = e.target;
    console.log({value})
    // console.log({name, value})
    if (onChange) onChange({ target: { name, value } });
  };

  return (
    <label
      htmlFor={name}
      className={"flex flex-col mb-3" + " " + className}
      id={id}
    >
      <div className="mb-1 dark:text-gray-200">
        {label} {required && "*"}
      </div>
      <select
        id={name}
        className={
          "border border-gray-300 text-black h-[40px] rounded-md px-3 focus:outline-none focus:ring-[3px] focus:ring-blue-500 focus:border-transparent dark:bg-gray-900 dark:text-gray-100"
        }
        value={value}
        onChange={handleInput}
        required={required}
      >
        <option value="">Select an option</option>
        {options.map((item, i) => (
          <option
            key={i}
            value={item}
            className={" py-3 block text-black dark:bg-gray-900 dark:text-gray-400"}
          >
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}

const cycle = (n, a, z) => {
  if (n < a) return z;
  if (n > z) return a;
  return n;
};
