import React from "react";
import Search from "../icons/Search";

const EntitySearchBar = ({
  searchTerm,
  setSearchTerm,
  totalCount,
  placeholder,
}) => {
  return (
    <section className="flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div className="relative w-full sm:w-96">
        <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
        <input
          type="search"
          placeholder={placeholder || "Buscar..."}
          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 pl-8 text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Buscar"
        />
      </div>
      <p className="text-sm text-gray-500">Total: {totalCount}</p>
    </section>
  );
};

export default EntitySearchBar;
