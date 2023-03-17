import React from "react";

const DashBoardComponent = ({ icon, text }) => {
  return (
    <div className="bg-white rounded-lg w-[200px] h-[170px] shadow-md flex flex-col justify-center p-3 mt-2">
      <div className="flex flex-col">
        <div>{icon}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default DashBoardComponent;
