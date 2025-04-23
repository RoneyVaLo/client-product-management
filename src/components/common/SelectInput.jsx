import React from "react";
import ChevronDown from "../icons/ChevronDown";

const SelectInput = ({ label, name, options, register, error }) => {
  return (
    <div className="space-y-2 relative">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <select
        {...register}
        className="flex h-10 w-full appearance-none rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-sm"
      >
        <option value="" disabled>
          Seleccione un valor
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute top-9 right-3 text-gray-500 pointer-events-none" />
      {error && <p className="text-xs text-red-400 font-bold">{error}</p>}
    </div>
  );
};

export default SelectInput;
