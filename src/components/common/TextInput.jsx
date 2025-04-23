import React from "react";

const TextInput = ({ label, name, register, error, ...props }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        {...register}
        {...props}
        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
      />
      {error && <p className="text-xs text-red-400 font-bold">{error}</p>}
    </div>
  );
};

export default TextInput;
