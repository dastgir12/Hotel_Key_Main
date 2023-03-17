import React from "react";
import { Form, Input, Select, Button, InputNumber } from "antd";
const PaymentMethod = () => {
  const [form] = Form.useForm();
  const selectBank = ["HBL", "UBL", "MEEZAN", "BANK ISLAMI", "BANK ALFLA"].map(
    (e, i) => ({
      label: e,
      value: `${i + 1}`,
    })
  );
  return (
    <div className="grid place-items-center ">
      <div className="mt-11">
        <Form>
          <div className="flex flex-row border-b-2">
            <div className="flex flex-col p-6 border-r-[1px]  border-b-slate-300">
              <h3 className=" font-san">EasyPaisa Account Detail</h3>
              <Form.Item
                name={"name"}
                rules={[
                  {
                    type: "string",
                    required: true,
                    message: "Please enter Name",
                  },
                ]}
              >
                <div>
                  <label for="" className=" font-sans">EasyPaisa Account Name</label>
                </div>
                <div>
                  <Input
                    style={{ padding: "10px", width: "300px" }}
                    placeholder="Admin"
                  />
                </div>
              </Form.Item>

              <Form.Item
                name={"Number"}
                rules={[
                  {
                    type: "number",
                    required: true,
                    message: "Please Enter Account Number",
                  },
                ]}
              >
                <div>
                  <label for="number">EasyPaisa Account Number</label>
                </div>

                <div>
                  <InputNumber
                    style={{ padding: "10px", width: "300px" }}
                    placeholder="Enter Number"
                  />
                </div>
              </Form.Item>
            </div>

            <div className="flex flex-col p-6">
              <h3>Bank Account Detail</h3>

              <Form.Item
                name={"kind"}
                rules={[
                  {
                    required: true,
                    message: "select bank",
                  },
                ]}
              >
                <div>
                  <label for="bankName">Select Bank</label>
                </div>
                <div>
                  <Select
                    style={{ width: "300px" }}
                    allowClear
                    size="large"
                    placeholder="Select Bank"
                    options={selectBank}
                  />
                </div>
              </Form.Item>

              <Form.Item
                name={"name"}
                rules={[
                  {
                    type: "string",
                    required: true,
                    message: "Please enter Name",
                  },
                ]}
              >
                <div>
                  <label for="">EasyPaisa Account Name</label>
                </div>
                <div>
                  <Input
                    style={{ padding: "10px", width: "300px" }}
                    placeholder="Admin"
                  />
                </div>
              </Form.Item>

              <Form.Item
                name={"Number"}
                rules={[
                  {
                    type: "number",
                    required: true,
                    message: "Please Enter Account Number",
                  },
                ]}
              >
                <div>
                  <label for="number">EasyPaisa Account Number</label>
                </div>

                <div>
                  <InputNumber
                    style={{ padding: "10px", width: "300px" }}
                    placeholder="Enter Number"
                  />
                </div>
              </Form.Item>
            </div>
          </div>

          <div className=" mt-6 p-6">
            <div className="mb-1">
              <label for="password">Enter Password</label>
            </div>
            <div>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password style={{ padding: "10px", width: "300px" }} />
              </Form.Item>
            </div>
            <Form.Item>
              <div>
                <button
                  className="bg-green-400 w-24 px-3 py-2 rounded-2xl text-white"
                  type="submit"
                >
                  Upload
                </button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default PaymentMethod;
