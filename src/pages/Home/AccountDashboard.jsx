import React, { useState, useEffect } from "react";
import { Card, Typography, Skeleton } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const { Title } = Typography;

const AccountDashboard = ({ accountInfo }) => {
  const [loading, setLoading] = useState(true);

  // Giả lập tải dữ liệu với delay 1 giây
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Dữ liệu đã có sẵn sau 1 giây
    }, 1000); // Delay 1 giây

    return () => clearTimeout(timer); // Dọn dẹp khi component unmount
  }, []);

  return (
    <div className="w-full bg-gray-100 p-4 flex justify-center">
      <div className="w-full">
        {/* Thông tin tài khoản */}
        <Card
          title="Thông tin tài khoản"
          className="shadow-xl w-full mt-6 rounded-lg bg-white p-6"
          bordered={false}
        >
          {loading ? (
            <Skeleton active paragraph={{ rows: 3 }} />
          ) : (
            <>
              <Title level={2} className=" text-indigo-600 font-semibold">
                {accountInfo.name}
              </Title>
              <div className="mt-4 space-y-2">
                <Paragraph className="text-lg">
                  <strong>Số tài khoản:</strong> {accountInfo.accountNumber}
                </Paragraph>
                <Paragraph className="text-lg">
                  <strong>Số dư hiện tại:</strong> {accountInfo.balance} VNĐ
                </Paragraph>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AccountDashboard;
