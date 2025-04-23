import React from "react";
import { NavLink } from "react-router-dom";
import Edit from "./icons/Edit";
import Trash from "./icons/Trash";

const RoleRow = ({ role, onDelete }) => {
  // const permisos = []
  return (
    <tr className="border-b transition-colors hover:bg-gray-50">
      <td className="p-4 font-medium">{role.name}</td>
      <td className="p-4 hidden md:table-cell">
        {role.permissions.map((permission, key) => (
          <div
            key={key}
            className={`inline-flex items-center rounded-full px-2.5 m-1 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 bg-gray-900 text-gray-50 hover:bg-gray-800`}
          >
            {permission.name}
          </div>
        ))}
      </td>
      <td className="p-4 text-right">
        <div className="flex justify-end gap-2">
          <NavLink
            to={`/roles/${role.id}`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 w-8 p-0 hover:bg-gray-100"
            aria-label="Editar rol"
          >
            <Edit />
          </NavLink>
          <button
            onClick={() => onDelete(role.id)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 w-8 p-0 hover:bg-gray-100"
            aria-label="Eliminar rol"
          >
            <Trash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default RoleRow;
