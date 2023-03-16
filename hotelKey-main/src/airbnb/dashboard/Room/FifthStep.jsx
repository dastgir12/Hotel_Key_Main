import React from "react";

const FifthStep = ({ props }) => {
  const { current, setCurrent, setformValues, formValues } = props;

  const handleSubmit = (e) => {
    setCurrent((prev) => prev - 1);
    setformValues({ ...formValues, ...e });
  };

  return (
    <div className="flex flex-col gap-y-4 justify-center items-center border border-gray-300]">
      <div className="flex flex-col gap-y-4 justify-center items-start">
        <div className="text-2xl text-center">Add Room</div>
        <div>Please Check Detail carefully</div>
        <div className="grid place-items-center">
          <button
            className="bg-green-400 w-24 px-3 py-2 rounded-2xl text-white"
            type="submit"
          >
            Add
          </button>
        </div>
        <div className="border border-blue-600 w-full"></div>
        <div className="grid place-items-center">
          <button
          onClick={handleSubmit}
            className="bg-green-400 w-24 px-3 py-2 rounded-2xl text-white"
            type="submit"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FifthStep;
