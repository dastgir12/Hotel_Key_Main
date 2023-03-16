import React from "react";
import { Form, Input, InputNumber } from "antd";
import { apiHeader } from "../../services/authHeader";
import axios from "axios";
const Register = () => {
	const [form] = Form.useForm();
	const postForm = async (values) => {
		console.log(values);
		// form.resetFields();
		try {
			const formData = new FormData();
			formData.append("email", values.email);
			formData.append("password", values.password);
			formData.append("repassword", values.repassword);
			formData.append("name", values.name);
			formData.append("number", values.number);

			const { data, status } = await axios.post(
				"https://test.hotelkey.pk/api/user-signup",
				formData,
				apiHeader
			);
			if (status === 200) {
				console.log(data);
			}
		} catch (e) {
			console.log(e.response.data.message);
		}
	};
	//// Number Validation
	const numberValidation = async (rule, value) => {
		if (!value) {
			return Promise.reject(new Error("Please Enter Your Phone Number "));
		}
		console.log(value);
		const count = value.toString();

		if (count.length < 11) {
			return Promise.reject(new Error("Number Length must be 11"));
		}
	};
	return (
		<>
			<div className="mt-11 flex  justify-center">
				<div className="w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[35vw] p-10 rounded-3xl border shadow-md">
					<div className="font-bold text-2xl text-center mb-3">Sign Up </div>
					<Form
						form={form}
						onFinish={postForm}
						className="flex flex-col justify-center "
					>
						<Form.Item
							name="email"
							hasFeedback
							rules={[
								{
									type: "email",
									message: "This is not a valid E-mail!",
								},
								{
									required: true,
									message: "Please input your E-mail!",
								},
							]}
						>
							<Input placeholder="Enter Your Email" />
						</Form.Item>
						<Form.Item
							name="name"
							rules={[
								{
									type: "string",
								},
								{
									required: true,
									message: "Please Enter your Name",
								},
							]}
						>
							<Input placeholder="Enter Your Name" />
						</Form.Item>
						<Form.Item
							hasFeedback
							name="number"
							rules={[
								{
									validator: numberValidation,
								},
							]}
						>
							<InputNumber
								controls={false}
								className="w-full"
								placeholder="Enter Your Number"
							/>
						</Form.Item>
						<Form.Item
							hasFeedback
							name="password"
							rules={[
								{
									required: true,
									message: "Please Enter Your Password",
								},
								{
									min: 8,
									message: "Password must contains 8 characters",
								},
							]}
						>
							<Input.Password
								className="placeholder:text-slate-700 placeholder:border-slate-700"
								placeholder="Enter Your Password"
							/>
						</Form.Item>
						<Form.Item
							hasFeedback
							dependencies={["password"]}
							name="repassword"
							rules={[
								{
									required: true,
									message: "Please Enter your password!",
								},
								({ getFieldValue }) => ({
									validator(_, value) {
										if (!value || getFieldValue("password") === value) {
											return Promise.resolve();
										}
										return Promise.reject(new Error("Passwords do not match!"));
									},
								}),
							]}
						>
							<Input.Password placeholder="Confrim Your password" />
						</Form.Item>
						<Form.Item>
							<div className="flex justify-center items-center">
								<button
									className="px-5 cursor-pointer py-2 text-lg font-bold tracking-wider text-white bg-blue-500 rounded-3xl hover:bg-blue-400"
									type="submit"
								>
									Register
								</button>
							</div>
						</Form.Item>
					</Form>
				</div>
			</div>
		</>
	);
};

export default Register;