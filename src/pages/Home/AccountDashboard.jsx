import React, { useState, useEffect } from "react";
import { Card, Typography, Skeleton, Button } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const AccountDashboard = ({ accountInfo }) => {
  const [loading, setLoading] = useState(true);
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

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
      <div className="w-full"> {/* Tối đa chiều rộng */}
        {/* Thông tin tài khoản */}
        <Card
          className="shadow-xl w-full mt-6 rounded-lg bg-white p-2"
          bordered={false}
        >
          {loading ? (
            <Skeleton active paragraph={{ rows: 2 }} />
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-6">
              {/* Thông tin bên trái */}
              <div className="sm:w-2/3">
                <Title level={3} className="text-indigo-600 font-semibold text-center sm:text-left">
                  {accountInfo.nickname}
                </Title>
                <div className="mt-2">
                  <Paragraph className="text-lg text-center sm:text-left">
                    <strong>Số tài khoản:</strong> {accountInfo.accountNumber}
                  </Paragraph>
                </div>
              </div>

              {/* Thông tin bên phải */}
              <div className="flex items-center justify-center sm:justify-end space-x-3 sm:w-1/3">
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
