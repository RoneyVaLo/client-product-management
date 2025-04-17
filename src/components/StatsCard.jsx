import React from "react";

const StatsCard = ({ title, icon, value, trend }) => (
  <article className="rounded-lg border border-gray-200 bg-white shadow-sm lg:col-span-2">
    <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
      <h3 className="text-sm font-medium">{title}</h3>
      {icon}
    </div>
    <div className="p-6 pt-0">
      <div className="text-2xl font-bold">{value}</div>
      {trend && <p className="text-xs text-gray-500">{trend}</p>}
    </div>
  </article>
);

export default StatsCard;
