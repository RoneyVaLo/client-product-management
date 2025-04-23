import React from "react";
import Edit from "./icons/Edit";
import Trash from "./icons/Trash";
import { NavLink } from "react-router-dom";

const UserRow = ({ user, onDelete }) => {
  return (
    <tr className="border-b transition-colors hover:bg-gray-50">
      <td className="p-4 font-medium">{user.name}</td>
      <td className="p-4 hidden md:table-cell">{user.identification}</td>
      <td className="p-4">{(user.lastLogin) ? user.lastLogin : "-"}</td>
      <td className="p-4">{(user.Role) ? user.Role : "-"}</td>
      {/* <td className="p-4">${user}</td> */}
      <td className="p-4 text-right">
        <div className="flex justify-end gap-2">
          <NavLink
            to={`/users/${user.id}`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 w-8 p-0 hover:bg-gray-100"
            aria-label="Editar usuario"
          >
            <Edit />
          </NavLink>
          <button
            onClick={() => onDelete(user.id)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 w-8 p-0 hover:bg-gray-100"
            aria-label="Eliminar usuario"
          >
            <Trash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
