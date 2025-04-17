import React from "react";

const ActivityItem = ({ isNew, description, timeAgo }) => (
  <div className="flex items-center gap-4">
    <div
      className={`w-2 h-2 rounded-full bg-${isNew ? "blue-600" : "green-600"}`}
    ></div>
    <div className="flex-1">
      <p className="text-sm font-medium">{description}</p>
      <p className="text-xs text-gray-500">{timeAgo}</p>
    </div>
  </div>
);

export default ActivityItem;
