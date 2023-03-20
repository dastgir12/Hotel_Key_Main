import React from 'react';
import axios from 'axios';
import { useCookies } from "react-cookie";
const SixthStep = ({ props}) => {
  const { setCurrent, formValues } = props;
  const [cookies] = useCookies(["user"]);
  const token = cookies.user;
  console.log(token);
  const handleSubmit = () => {
    axios.post('https://test.hotelkey.pk/api/add-hotel', formValues, {
      headers: { 
        "api-key": "d6dcc1bf-1189-4713-acc4-bf1da722475d", 
        Authorization: `Bearer ${token}` } 
        
    })
    // console.log(headers);
      // .then((response) => {
      //   console.log(headers);
      //   // console.log(response.data);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
  };
  return (
    <div>
      <h2>Sixth Step</h2>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default SixthStep;