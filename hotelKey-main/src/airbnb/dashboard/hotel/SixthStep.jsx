import React from 'react';
import axios from 'axios';
import { apiHeader } from '../../../services/authHeader';

const SixthStep = ({ props }) => {
  const { setCurrent, formValues } = props;

  const handleSubmit = () => {
    axios.post('https://test.hotelkey.pk/api/add-hotel', formValues, 			{
        headers: {
            "api-key": "d6dcc1bf-1189-4713-acc4-bf1da722475d",
            token: token,
        },
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
