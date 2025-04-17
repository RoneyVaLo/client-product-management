import React from "react";

const InfoCardWithList = ({ title, description, children }) => {
  return (
    <section className="rounded-lg border border-gray-200 bg-white shadow-sm col-span-3">
      <div className="flex flex-col space-y-1.5 p-6">
        <h2 className="font-semibold leading-none tracking-tight">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-4">{children}</div>
      </div>
    </section>
  );
};

export default InfoCardWithList;
