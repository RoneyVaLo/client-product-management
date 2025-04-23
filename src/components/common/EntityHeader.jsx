import React from "react";
import Plus from "../icons/Plus";
import { NavLink } from "react-router-dom";

const EntityHeader = ({ title, subtitle, buttonLabel, buttonHref }) => {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-gray-500">{subtitle}</p>
      </div>
      <NavLink
        to={buttonHref}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
      >
        <Plus className="mr-2 h-4 w-4" />
        {buttonLabel}
      </NavLink>
    </header>
  );
};

export default EntityHeader;
