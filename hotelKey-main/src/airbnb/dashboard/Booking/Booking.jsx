import React from "react";
import { Table } from "antd";
const Booking = () => {
 const newCols = ["#","Guest Name", "Residence Name", "Room Name", "No Rooms", "Rooms rent/night", "Residence rent/night", "Nights" , "Date" ,"Amount","No of Guest","Action"].map((e) => ({
  title: e,
  dataIndex: e.toLocaleLowerCase(),
  key: e.toLocaleLowerCase(),
 }));
 return (
  <>
   <div className="flex flex-col justify-center items-center">
    <h1 className="mt-10">Your Orders</h1>
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
export default Booking;