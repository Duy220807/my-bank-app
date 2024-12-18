// src/pages/RegisterPage.js
import React from "react";
import { Card } from "antd";
import RegisterForm from "./RegisterForm"; // Import RegisterForm
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
