import React from "react";
import { Table } from "antd";
const ApprovedRequest = () => {
 const newCols = ["#", "Reservation Id", "Guest Name", "Residence name", "Dates", "Payment", "Amount"].map((e) => ({
  title: e,
  dataIndex: e.toLocaleLowerCase(),
  key: e.toLocaleLowerCase(),
 }));
 return (
  <>
   <div className="flex flex-col justify-center items-center">
    <h1 className="mt-10">Approved Request List</h1>
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
export default ApprovedRequest;