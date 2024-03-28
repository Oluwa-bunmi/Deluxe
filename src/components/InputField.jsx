import React from "react";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <div className="flex flex-col mb-[20px]">
      <label htmlFor={name} className="text-[16px] text-dark font-medium">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        className={`border-gray outline-none border p-2 rounded-lg ${
          error ? "border border-red-500" : ""
        }`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
    </div>
  );
};

export default InputField;
