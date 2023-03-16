import React from "react";
import { Table } from "antd";
const ResidenceList = () => {
 const newCols = ["Name", "Type", "Kind", "Approval", "Location", "Rooms", "Action"].map((e) => ({
  title: e,
  dataIndex: e.toLocaleLowerCase(),
  key: e.toLocaleLowerCase(),
 }));
 return (
  <>
   <div className="flex flex-col justify-center items-center">
    <h1 className="mt-10">Residence List</h1>
    <div className="border-[1.5px] mt-7 border-gray-300 w-[95vw] sm:w-[80vw] ">
     <Table
      columns={newCols}
      scroll={{
       x: 600,
      }}
     />
    </div>
   </div>
  </>
 );
};
export default ResidenceList;