import React from "react";
import { Card, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const { Title } = Typography;

const AccountDashboard = ({ accountInfo }) => {
  return (
    <div className="w-full bg-gray-100 p-4 flex justify-center">
      <div className="w-full">
        {/* Thông tin tài khoản */}
        <Card title="Thông tin tài khoản" className="shadow-lg w-full mt-6">
          <Title level={3}>Chào, {accountInfo.name}</Title>
          <Paragraph><strong>Số tài khoản:</strong> {accountInfo.accountNumber}</Paragraph>
          <Paragraph><strong>Số dư hiện tại:</strong> {accountInfo.balance} VNĐ</Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default AccountDashboard;
