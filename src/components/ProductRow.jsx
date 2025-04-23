import React from "react";
import Edit from "./icons/Edit";
import Trash from "./icons/Trash";
import { NavLink } from "react-router-dom";

const ProductRow = ({ product, onDelete }) => {
  product.price = parseFloat(product.price);
  const quantityClass =
    product.quantity > 20
      ? "bg-blue-50 text-blue-600 border-blue-600/20"
      : "bg-red-50 text-red-600 border-red-600/20";

  return (
    <tr className="border-b transition-colors hover:bg-gray-50">
      <td className="p-4 font-medium">{product.code}</td>
      <td className="p-4">{product.name}</td>
      <td className="p-4 hidden md:table-cell">{product.description}</td>
      <td className="p-4">
        <span
          className={`inline-flex h-6 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${quantityClass}`}
        >
          {product.quantity}
        </span>
      </td>
      <td className="p-4">${product.price.toFixed(2)}</td>
      <td className="p-4 text-right">
        <div className="flex justify-end gap-2">
          <NavLink
            to={`/products/${product.id}`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 w-8 p-0 hover:bg-gray-100"
            aria-label="Editar producto"
          >
            <Edit />
          </NavLink>
          <button
            onClick={() => onDelete(product.id)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 w-8 p-0 hover:bg-gray-100"
            aria-label="Eliminar producto"
          >
            <Trash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
