import React from "react";

const Status = ({ text }) => {
  return (
    <span
      className={
        text === "Active"
          ? "bg-green-400 text-green-800 text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : text === "Completed" || text === "Open"
          ? "bg-blue-400 text-primary text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : text === "On-going"
          ? "bg-yellow-400 text-yellow-800 text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : text === "Locked"
          ? "bg-red-400 text-red-800 text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : "bg-gray-400 text-gray-800 text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
      }
    >
      {text}
    </span>
  );
};

export default Status;
