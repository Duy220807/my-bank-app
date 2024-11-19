import React, { useState, useEffect } from "react";
import { Card, Typography, Skeleton, Button } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const AccountDashboard = ({ accountInfo }) => {
  const [loading, setLoading] = useState(true);
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  // Giả lập tải dữ liệu với delay 1 giây
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Dữ liệu đã có sẵn sau 1 giây
    }, 1000); // Delay 1 giây

    return () => clearTimeout(timer); // Dọn dẹp khi component unmount
  }, []);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <div className="w-full bg-gray-100 p-4 flex justify-center">
      <div className="w-full">
        {/* Thông tin tài khoản */}
        <Card
          className="shadow-xl w-full mt-6 rounded-lg bg-white p-6"
          bordered={false}
        >
          {loading ? (
            <Skeleton active paragraph={{ rows: 2 }} />
          ) : (
            <div className="flex items-center justify-between">
              {/* Thông tin bên trái */}
              <div>
                <Title level={3} className="text-indigo-600 font-semibold">
                  {accountInfo.name}
                </Title>
                <div className="mt-2">
                  <Paragraph className="text-lg">
                    <strong>Số tài khoản:</strong> {accountInfo.accountNumber}
                  </Paragraph>
                </div>
              </div>

              {/* Thông tin bên phải */}
              <div className="flex items-center space-x-3">
                <span className="text-lg font-semibold">
                  <strong>Số dư:</strong>{" "}
                  {isBalanceVisible ? (
                    `${accountInfo.balance.toLocaleString()} VNĐ`
                  ) : (
                    "******"
                  )}
                </span>
                <Button
                  type="text"
                  icon={
                    isBalanceVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />
                  }
                  onClick={toggleBalanceVisibility}
                  className="flex items-center justify-center text-indigo-600 hover:text-indigo-800"
                />
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AccountDashboard;
