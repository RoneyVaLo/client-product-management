import React from "react";
import ArrowLeft from "../icons/ArrowLeft";

const FormHeader = ({ title, onBack }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium h-9 w-9 p-0"
        onClick={onBack}
      >
        <ArrowLeft />
        <span className="sr-only">Volver</span>
      </button>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
    </div>
  );
}

export default FormHeader;