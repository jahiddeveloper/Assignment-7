import React from "react";

const TaskStatus = ({ ticket }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h1 className="text-lg font-bold">{ticket.title}</h1>
      <button className="mt-4 bg-green-700 w-full py-3 cursor-pointer rounded-lg text-white hover:bg-green-600 hover:transition duration-300">
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;
