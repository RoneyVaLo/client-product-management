import React from "react";
import Edit from "./icons/Edit";
import Trash from "./icons/Trash";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const UserRow = ({ userShow, onDelete }) => {
  const {user} = useAuth();
  
  return (
    <tr className="border-b transition-colors hover:bg-gray-50">
      <td className="p-4 font-medium">{userShow.name}</td>
      <td className="p-4 hidden md:table-cell">{userShow.identification}</td>
      <td className="p-4">{(userShow.lastLogin) ? userShow.lastLogin : "-"}</td>
      <td className="p-4">{(userShow.Role) ? userShow.Role : "-"}</td>
      {/* <td className="p-4">${userShow}</td> */}
      <td className="p-4 text-right">
        <div className="flex justify-end gap-2">
          <NavLink
            to={`/users/${userShow.id}`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 w-8 p-0 hover:bg-gray-100"
            aria-label="Editar usuario"
            disabled= {user.Role !== "SuperAdmin"}
          >
            <Edit />
          </NavLink>
          <button
            onClick={() => onDelete(userShow.id)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 w-8 p-0 hover:bg-gray-100"
            aria-label="Eliminar usuario"
            disabled= {user.Role !== "SuperAdmin"}
          >
            <Trash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
