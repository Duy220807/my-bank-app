import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Upload, message, Card, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../../services/api"; // Replace with actual API call

const { Option } = Select;

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [fileList, setFileList] = useState({
    identityCardFront: null,
    identityCardBack: null,
    avatar: null,
  });

  const handleFileChange = (field, info) => {
    console.log(field)
    console.log(info)
    setFileList((prev) => ({
      ...prev,
      [field]: info.file,
    }));

  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("phone", values.phone);
      formData.append("password", values.password);
      formData.append("firstname", values.firstname);
      formData.append("lastname", values.lastname);
      formData.append("gender", values.gender);
      formData.append("mail", values.mail);
      formData.append("address", values.address);
      formData.append("placeOrigin", values.placeOrigin);
      formData.append("identityCard", values.identityCard);
      formData.append("dob", values.dob.format("YYYY-MM-DD"));

      // Append file uploads
      formData.append("identityCardFront", fileList.identityCardFront);
      formData.append("identityCardBack", fileList.identityCardBack);
      formData.append("avatar", fileList.avatar);

      const accountNumber = values.accountNumber; // Get accountNumber from form input

      const result = await register(formData, accountNumber);
      message.success("Đăng ký thành công!");
      console.log("API Response:", result);
      navigate("/login");
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="w-full bg-gray-100 p-4 flex justify-center">
      <Card className="shadow-lg max-w-[500px] w-full">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Đăng Ký Tài Khoản</h2>
        <Form name="register" onFinish={onFinish} layout="vertical" encType="multipart/form-data">
          <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}>
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          <Form.Item label="Mật khẩu" name="password" rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}>
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item label="Họ" name="lastname" rules={[{ required: true, message: "Vui lòng nhập họ!" }]}>
            <Input placeholder="Nhập họ" />
          </Form.Item>

          <Form.Item label="Tên" name="firstname" rules={[{ required: true, message: "Vui lòng nhập tên!" }]}>
            <Input placeholder="Nhập tên" />
          </Form.Item>

          <Form.Item label="Giới tính" name="gender" rules={[{ required: true, message: "Vui lòng chọn giới tính!" }]}>
            <Select placeholder="Chọn giới tính">
              <Option value="Nam">Nam</Option>
              <Option value="Nu">Nữ</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Email" name="mail" rules={[{ type: "email", required: true, message: "Vui lòng nhập email hợp lệ!" }]}>
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item label="Địa chỉ" name="address" rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}>
            <Input placeholder="Nhập địa chỉ" />
          </Form.Item>

          <Form.Item label="Nơi Sinh" name="placeOrigin" rules={[{ required: true, message: "Vui lòng nhập nơi sinh!" }]}>
            <Input placeholder="Nhập nơi sinh" />
          </Form.Item>

          <Form.Item label="CMND/CCCD" name="identityCard" rules={[{ required: true, message: "Vui lòng nhập số CMND/CCCD!" }]}>
            <Input placeholder="Nhập số CMND/CCCD" />
          </Form.Item>

          <Form.Item label="Ngày Sinh" name="dob" rules={[{ required: true, message: "Vui lòng chọn ngày sinh!" }]}>
            <DatePicker placeholder="Chọn ngày sinh" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Số tài khoản"
            name="accountNumber"
            rules={[{ required: true, message: "Vui lòng nhập số tài khoản!" }]}
          >
            <Input placeholder="Nhập số tài khoản" />
          </Form.Item>

          <Form.Item label="Ảnh CMND/CCCD Mặt Trước">
            <Upload beforeUpload={() => false} onChange={(info) => handleFileChange("identityCardFront", info)}>
              <Button icon={<UploadOutlined />}>Tải ảnh mặt trước</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Ảnh CMND/CCCD Mặt Sau">
            <Upload beforeUpload={() => false} onChange={(info) => handleFileChange("identityCardBack", info)}>
              <Button icon={<UploadOutlined />}>Tải ảnh mặt sau</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Ảnh Đại Diện">
            <Upload beforeUpload={() => false} onChange={(info) => handleFileChange("avatar", info)}>
              <Button icon={<UploadOutlined />}>Tải ảnh đại diện</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              className="bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Đăng ký
            </Button>
          </Form.Item>

          <div className="text-center mt-4">
            <span>Đã có tài khoản? </span>
            <Link to="/login" className="text-blue-600 hover:text-blue-800">
              Đăng nhập ngay
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterForm;
