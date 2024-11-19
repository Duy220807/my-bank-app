// src/pages/RegisterPage.js
import React from "react";
import { Card } from "antd";
import RegisterForm from "./RegisterForm"; // Import RegisterForm
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <Card className="shadow-lg max-w-[400px] w-full">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Đăng Ký Ngân Hàng</h2>
        {/* Sử dụng RegisterForm component */}
        <RegisterForm />
        <div className="text-center mt-4">
          <span>Đã có tài khoản? </span>
          {/* Thêm liên kết quay lại trang đăng nhập */}
          <Link to="/login" className="text-blue-600 hover:text-blue-800">Đăng nhập ngay</Link>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;
