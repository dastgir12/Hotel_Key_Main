// import React from 'react'
import React from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "antd";
const RoomList = () => {
const navigate = useNavigate();
    const handleRoomButtonClick = () => {
        navigate('/dashboard/roomadd');
      };
  const newCols = [
    {
      title: "  Title",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "No of Guest",
      dataIndex: "no of guest",
      key: "no of guest",
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) => (
        <Button>View Rooms</Button>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-10 text-rose-900">Room List</h1>
        <div className="mt-1">
          <button
          onClick={handleRoomButtonClick}
          className=" rounded-lg text-rose-50 bg-rose-700 w-[100px] h-[40px] hover:bg-blue-600">Add room</button>
        </div>
        <div className="border-[1.5px] mt-2 border-gray-300 w-[95vw] sm:w-[80vw] ">
          <Table columns={newCols} dataSource='' scroll={{ x: 600 }} />
        </div>
      </div>
    </>
  );
}

export default RoomList
