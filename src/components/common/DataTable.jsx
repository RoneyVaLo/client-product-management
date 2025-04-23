import React from "react";

const DataTable = ({ columns, data, renderRow }) => {
  let emptyMessage = "No se encontraron resultados";

  return (
    <section className="rounded-md border">
      <div className="w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead>
            <tr className="border-b transition-colors hover:bg-gray-50">
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`h-12 px-4 text-left font-medium ${
                    col.className || ""
                  } ${col.hiddenOn ? `hidden ${col.hiddenOn}:table-cell` : ""}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr className="border-b transition-colors hover:bg-gray-50">
                <td colSpan={columns.length} className="h-24 px-4 text-center">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((item) => renderRow(item))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DataTable;
