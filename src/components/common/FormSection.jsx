import React from "react";

const FormSection = ({ title, description, children }) => {
    return (
      <>
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold leading-none tracking-tight">{title}</h3>
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
        <div className="p-6 space-y-4">{children}</div>
      </>
    );
  }
  
  export default FormSection;