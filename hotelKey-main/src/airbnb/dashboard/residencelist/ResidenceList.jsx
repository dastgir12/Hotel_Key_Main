import React, { useEffect } from "react";
import { Table } from "antd";
import { useCookies } from "react-cookie";
import axios from "axios";

const ResidenceList = () => {
  const [cookies] = useCookies(["user"]);
  const token = cookies.user;
  const url = "https://test.hotelkey.pk/api/my-residencies";
  const headers = {
    "Content-Type": "application/json",
    "api-key": "d6dcc1bf-1189-4713-acc4-bf1da722475d",
    token: `${token}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(url, { headers })
          .then((response) => console.log(response))
          .catch((error) => console.log('error'));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const newCols = [
    "Name",
    "Type",
    "Kind",
    "Approval",
    "Location",
    "Rooms",
    "Action",
  ].map((e) => ({
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
