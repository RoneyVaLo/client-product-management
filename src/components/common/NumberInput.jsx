import React from "react";
import TextInput from "./TextInput";

const NumberInput = ({ label, name, register, error, ...props }) => {
  return (
    <TextInput
      label={label}
      name={name}
      register={register}
      error={error}
      type="number"
      {...props}
    />
  );
};

export default NumberInput;
