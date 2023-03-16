import React from "react";
import { Select, DatePicker } from "antd";
import { format } from "date-fns";
const PopUpForm = ({ props }) => {
 const { setcity, setdateRange, setpersons, persons } = props;
 const { RangePicker } = DatePicker;
 const cities = [
  {
   value: "2",
   label: "Islamabad",
  },
  {
   value: "1",
   label: "Lahore",
  },
  {
   value: "3",
   label: "Kashmir",
  },
 ];
 const handleDate = (e) => {
  if (!e) {
   setdateRange();
   return;
  }

  if (e) {
   const dateRanges = e.map((e) => format(new Date(e.$d), "MM/dd/yyy")).join("-");
   setdateRange(dateRanges);
  }
 };
 return (
  <div className="flex justify-center flex-wrap gap-y-3 gap-x-2  p-3  ">
   {/* Select City */}
   <div className="flex flex-col shadow-md border-[1.5px] border-red-400 gap-y-4 rounded-3xl items-center p-4 ">
    <div className="text-base font-semibold p-2">Select Location</div>
    <div>
     <Select
      style={{ width: "200px" }}
      allowClear
      size="large"
      showSearch
      placeholder="Select City"
      optionFilterProp="children"
      onChange={(e) => setcity(e)}
      filterOption={(input, option) =>
       (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={cities}
     />
    </div>
    <div className=" font-thin text-center text-base">Lorem ipsum dolor sit amet consectetur.</div>
   </div>
   {/* Select Date */}
   <div className=" sm:p-6   flex flex-col shadow-md border-[1.5px] border-red-400 rounded-3xl items-center gap-y-4">
    <div className="text-base  font-semibold p-2">Select Date</div>
    <RangePicker onChange={handleDate} style={{ width: "250px", padding: "10px" }} />
    <div className=" font-thin text-center p-2   text-base">
     Lorem ipsum dolor sit amet consectetur
    </div>
   </div>
   {/* Select Persons */}
   <div className="flex flex-col shadow-md border-[1.5px] border-red-400 gap-y-4 rounded-3xl items-center  p-4">
    <div className="text-base  font-semibold p-2">Add Persons</div>
    <input
     value={persons}
     onChange={(e) => setpersons(e.target.value)}
     type="number"
     placeholder="Enter Persons"
     className="p-2 border hover:border-blue-500 active:border-none focus:ring-slate-600 active:ring-slate-100 placeholder:font-light rounded-lg "
    />
    <div className=" font-thin text-center text-base">Lorem ipsum dolor sit amet consectetur.</div>
   </div>
  </div>
 );
};

export default PopUpForm;
