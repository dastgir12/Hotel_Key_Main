import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import {
 SettingOutlined,
 SolutionOutlined,
 UploadOutlined,
 FundViewOutlined,
 AlignLeftOutlined,
 WalletOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const DashBoardPage = () => {
 const [pageTitle, setpageTitle] = useState("DashBoard");
 const [open, setOpen] = useState(false);
 const nav = useNavigate();
 const showDrawer = () => {
  setOpen(true);
 };

 const onClose = () => {
  setOpen(false);
 };

 const handleMenuItem = (e) => {
  setOpen(false);
  if (e.key === "/dashboard") setpageTitle("DashBoard");
  if (e.key === "hoteladd") setpageTitle("Hotel Add");
  if (e.key === "hotellist") setpageTitle("Hotel List");
  if (e.key === "addresidence") setpageTitle("Add Residence");
  if (e.key === "residencelist") setpageTitle("Residence List");
  if (e.key === "booking") setpageTitle("Booking");
  if (e.key === "approved") setpageTitle("ApprovedRequest");
  if (e.key === "roomadd") setpageTitle("Room Add");
  if (e.key === "paymentmethod") setpageTitle("Attach Payment Method");
  nav(e.key);
 };
 const adminItems = [
  {
   label: "DashBoard",
   key: "/dashboard",
   icon: <SettingOutlined />,
   style: { fontSize: "15px" },
  },
  {
    label: "Payment Method",
    key: "paymentmethod",
    icon: <WalletOutlined />,
    style: { fontSize: "15px" },
   },
  {
   label: "Hotel Add",
   key: "hoteladd",
   icon: <UploadOutlined />,
   style: { fontSize: "15px" },
  },
  {
   label: "Hotel List",
   key: "hotellist",
   icon: <SolutionOutlined />,
   style: { fontSize: "15px" },
  },
  {
   label: "Residence List",
   key: "residencelist",
   icon: <SolutionOutlined />,
   style: { fontSize: "15px" },
  },
  {
   label: "Add Residence",
   key: "addresidence",
   icon: <SolutionOutlined />,
   style: { fontSize: "15px" },
  },
  {
    label: "Booking",
    key: "booking",
    icon: <SolutionOutlined />,
    style: { fontSize: "15px" },
   },
   {
    label: "ApproveRequest",
    key: "approved",
    icon: <SolutionOutlined />,
    style: { fontSize: "15px" },
   },


 ];

 /////////////////
 return (
  <>
   <div className="px-3 py-2 mt-3 flex bg-red-400  text-white">
    <div className="cursor-pointer">
     <AlignLeftOutlined onClick={showDrawer} style={{ fontSize: "20px" }} />
    </div>
    <div className="flex justify-center items-center w-screen text-2xl">{pageTitle}</div>
   </div>
   <Drawer
    onClose={onClose}
    open={open}
    placement="left"
    width={300}
    extra={<Button onClick={onClose}>Cancel</Button>}
    closeIcon
   >
    <Menu
     defaultSelectedKeys={"1"}
     style={{ padding: 0, border: "none" }}
     onClick={handleMenuItem}
     theme="light"
     mode="vertical"
     items={adminItems}
    ></Menu>
   </Drawer>
   <Outlet />
  </>
 );
};

export default DashBoardPage;
