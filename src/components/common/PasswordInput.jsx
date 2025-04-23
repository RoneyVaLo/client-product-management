import React from "react";
import TogglePasswordButton from "./TogglePasswordButton";

const PasswordInput = ({
  id,
  label,
  register,
  error,
  show,
  toggle,
  ...props
}) => {
  return (
    <div className="relative space-y-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={show ? "text" : "password"}
        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
        {...register}
        {...props}
      />
      <TogglePasswordButton show={show} toggle={toggle} />
      {error && <p className="text-xs text-red-400 font-bold mt-1">{error}</p>}
    </div>
  );
};

export default PasswordInput;
