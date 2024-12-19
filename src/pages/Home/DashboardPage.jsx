// src/pages/DashboardPage.js
import React, { useEffect, useState } from "react";
import AccountDashboard from "./AccountDashboard";
import BankServices from "./BankServices";
import PromotionsCarousel from "./PromotionsCarousel";
import { getUserAccountInfo } from "../../services/api";
// import PromotionsCarousel from "../components/PromotionsCarousel";

const DashboardPage = () => {
  // Mock data for account info
  // const accountInfo = {
  //   name: "NGUYEN VAN AN",
  //   accountNumber: "01928299",
  //   balance: 5000, // Số dư
  // };

  const [accountInfo, setAccountInfo] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('authToken');
  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        const info = await getUserAccountInfo(token);
        setAccountInfo(info);
      } catch (err) {
        console.error('Failed to fetch account info:', err);
        setError(err.message || 'An error occurred');
      }
    };

    if (token) {
      fetchAccountInfo();
    }
  }, [token]); // Dependency array: run effect when `token` changes
  
  return (
    <div className="w-full p-4">

      {/* Gọi component PromotionsCarousel */}
      <PromotionsCarousel />

      {/* Gọi component AccountDashboard và truyền dữ liệu tài khoản */}
      <AccountDashboard accountInfo={accountInfo} />

      {/* Gọi component BankServices để hiển thị các dịch vụ */}
      <BankServices />


    </div>
  );
};

export default DashboardPage;
