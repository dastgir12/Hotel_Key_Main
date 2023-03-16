import React from "react";
import { Form, Input, Select, Button, InputNumber } from "antd";
const SecondStep = ({ props }) => {
  const { current, setCurrent, setformValues, formValues } = props;
  console.log(formValues);
  const [form] = Form.useForm();

  const Bathrooms = ["Attached", "Common"].map((e, i) => ({
    label: e,
    value: `${i + 1}`,
  }));

  const Guest = ["1", "2", "3", "4", "more"].map((e, i) => ({
    label: e,
    value: `${i + 1}`,
  }));

  const Beds = ["1", "2", "3", "4", "more"].map((e, i) => ({
    label: e,
    value: `${i + 1}`,
  }));

  const handleSubmit = (e) => {
    setCurrent((prev) => prev + 1);
    setformValues({ ...formValues, ...e });
  };

  return (
    <>
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <div className="text-2xl text-center">Please Select</div>
        <Form form={form} onFinish={handleSubmit}>
          <div className="flex flex-col justify-between gap-6">
            <div className="flex flex-row justify-between ">
              <div className="flex flex-col">
                <div>
                  <label for="">No of Rooms</label>
                </div>

                <div>
                  <Form.Item
                    name="number"
                    rules={[
                      {
                        type: "number",
                        message: "Please input a valid number",
                      },
                      {
                        required: true,
                        message: "Please input a number",
                      },
                    ]}
                  >
                    <InputNumber />
                  </Form.Item>
                </div>
              </div>
              <div>
                <label for="" className="mb-1">
                  BathRooms
                </label>
                <Form.Item
                  name={"type"}
                  rules={[
                    {
                      type: "string",
                      required: true,
                      message: "Please Enter",
                    },
                  ]}
                >
                  <Select
                    style={{ width: "150px" }}
                    allowClear
                    size="large"
                    placeholder="Attached"
                    options={Bathrooms}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col">
                <div>
                  <div>
                    <label for="">Guest</label>
                  </div>
                  <div>
                    <Form.Item
                      name={"kind"}
                      rules={[
                        {
                          required: true,
                          message: "Please Enter City",
                        },
                      ]}
                    >
                      <Select
                        style={{ width: "150px" }}
                        allowClear
                        size="large"
                        placeholder="1"
                        options={Guest}
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>

              <div >
                <div>
                  <div>
                    <label for="">Beds</label>
                  </div>
                  <div>
                    <Form.Item
                      name={"kind"}
                      rules={[
                        {
                          required: true,
                          message: "Please Enter no of beds",
                        },
                      ]}
                    >
                      <Select
                        style={{ width: "150px" }}
                        allowClear
                        size="large"
                        placeholder="1"
                        options={Beds}
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid place-items-center">
            <button
              className="bg-green-400 w-24 px-3 py-2 rounded-2xl text-white"
              type="submit"
            >
              Next
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SecondStep;
