import React from "react";

const TextAreaInput = ({ label, name, register, error, ...props }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <textarea
        {...register}
        {...props}
        className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
      />
      {error && <p className="text-xs text-red-400 font-bold">{error}</p>}
    </div>
  );
};

export default TextAreaInput;
