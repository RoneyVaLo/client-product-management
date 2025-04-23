import React from "react";
import Eye from "../icons/Eye";
import EyeOff from "../icons/Eyeoff";

const TogglePasswordButton = ({ show, toggle }) => {
  return (
    <button
      type="button"
      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
      onClick={toggle}
    >
      {show ? <Eye /> : <EyeOff />}
      <span className="sr-only">{show ? "Ocultar" : "Mostrar"} contraseña</span>
    </button>
  );
};

export default TogglePasswordButton;
