import React from "react";

const InputComp = ({
  type = "text",
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  wrapperClass,
  inputClass
}) => {
  return (
    <div className={`${wrapperClass} mb-4`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        className={`${inputClass} mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputComp;
