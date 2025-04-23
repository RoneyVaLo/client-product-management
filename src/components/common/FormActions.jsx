import React from "react";
import Save from "../icons/Save";

const FormActions = ({ onCancel }) => {
  return (
    <div className="flex items-center justify-end gap-2 p-6 pt-0">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium h-10"
        onClick={onCancel}
      >
        Cancelar
      </button>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium h-10 hover:bg-blue-700"
      >
        <Save />
        Guardar
      </button>
    </div>
  );
};

export default FormActions;
