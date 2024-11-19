// src/components/LoginForm.js
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message, Card } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom'; // Import Link từ react-router-dom

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    // Thực hiện logic đăng nhập (API call hoặc xác thực)
    setTimeout(() => {
      setLoading(false);
      message.success('Đăng nhập thành công');
      navigate('/dashboard');  // Chuyển hướng đến trang Dashboard
    }, 2000);
  };

  return (
    <div className="w-full bg-gray-100 p-4 flex justify-center">
      <Card className="shadow-lg max-w-[400px] w-full">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Đăng Nhập Ngân Hàng</h2>
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
          >
            <Input placeholder="Nhập tên đăng nhập" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password 
              placeholder="Nhập mật khẩu"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Nhớ mật khẩu</Checkbox>
            </Form.Item>
            <a className="float-right text-blue-600 hover:text-blue-800" href="#">Quên mật khẩu?</a>
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              loading={loading}
              className="bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Đăng nhập
            </Button>
          </Form.Item>

          <div className="text-center mt-4">
            <span>Bạn chưa có tài khoản? </span>
            {/* Thêm liên kết tới trang đăng ký */}
            <Link to="/register" className="text-blue-600 hover:text-blue-800">Đăng ký ngay</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
