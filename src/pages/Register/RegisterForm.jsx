// src/components/RegisterForm.js
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    // Thực hiện logic đăng ký (API call hoặc lưu trữ dữ liệu)
    setTimeout(() => {
      setLoading(false);
      message.success('Đăng ký thành công');
      // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
      navigate('/');
    }, 2000);
  };

  return (
    
    <Form name="register" onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Họ và tên"
        name="fullName"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
      >
        <Input placeholder="Nhập họ và tên" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: "Vui lòng nhập email!" }, { type: 'email', message: "Email không hợp lệ!" }]}
      >
        <Input placeholder="Nhập email" />
      </Form.Item>

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

      <Form.Item
        label="Xác nhận mật khẩu"
        name="confirmPassword"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        dependencies={['password']}
        rules={[
          { required: true, message: "Vui lòng xác nhận mật khẩu!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Mật khẩu không khớp!'));
            },
          }),
        ]}
      >
        <Input.Password 
          placeholder="Xác nhận mật khẩu"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>

      <Form.Item>
        <Form.Item name="terms" valuePropName="checked" noStyle rules={[{ required: true, message: "Bạn phải đồng ý với các điều khoản!" }]}>
          <Checkbox>Tôi đồng ý với các điều khoản và điều kiện</Checkbox>
        </Form.Item>
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
    </Form>
  );
};

export default RegisterForm;
