import React from "react";
import DashBoardComponent from "./DashBoardComponent";
import { BankFilled, EyeFilled, DollarCircleFilled } from "@ant-design/icons";

const DashBoard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row flex-wrap gap-4 w-[900px] h-[250px] border-[1px] border-gray-300 rounded-md p-2 mt-3 ">
        <DashBoardComponent
          icon={<BankFilled style={{ fontSize: "50px" }} />}
          text="Total Residencies = 0"
        />
        <DashBoardComponent
          icon={<EyeFilled style={{ fontSize: "50px" }} />}
          text="Total Views = 1000"
        />
        <DashBoardComponent
          icon={<DollarCircleFilled style={{ fontSize: "50px" }} />}
          text="Total Revenue = $1000"
        />
      </div>
    </div>
  );
};

export default DashBoard;
