import React from "react";
import Package from "./icons/Package";

const FeaturedProductItem = ({ name, quantity, price }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
        <Package width={"16"} height={"16"} />
      </div>
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-500">{quantity} unidades</p>
      </div>
    </div>
    <div className="text-sm font-medium">${price}</div>
  </div>
);

export default FeaturedProductItem;
