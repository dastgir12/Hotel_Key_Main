import React from 'react';
import axios from 'axios';
import { useCookies } from "react-cookie";
const SixthStep = ({ props}) => {
  const { setCurrent, formValues } = props;
  const [cookies] = useCookies(["user"]);
  const token = cookies.user;
  const handleSubmit = () => {
    axios.post('https://test.hotelkey.pk/api/add-hotel', formValues,{
      headers: { Authorization: `Bearer ${token}` } 
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Sixth Step</h2>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default SixthStep;