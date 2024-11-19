// src/pages/DashboardPage.js
import React from "react";
import AccountDashboard from "./AccountDashboard"; // Import AccountDashboard
import BankServices from "./BankServices"; // Import BankServices

const DashboardPage = () => {
  // Mock data for account info
  const accountInfo = {
    name: "NGUYEN VAN AN",
    accountNumber: "123-456-789",
    balance: 5000, // Số dư
  };

  return (
    <div className="w-full p-4">
      {/* Gọi component AccountDashboard và truyền dữ liệu tài khoản */}
      <AccountDashboard accountInfo={accountInfo} />

      {/* Gọi component BankServices để hiển thị các dịch vụ */}
      <BankServices />
    </div>
  );
};

export default DashboardPage;
