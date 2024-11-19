import React, { useState } from "react";
import { Row, Col, Card, Typography } from "antd";
import TransferForm from './TransferForm';
import TransactionHistory from './TransactionHistory';
// import './TransferPage.css';

const TransferPage = () => {
  const [transferType, setTransferType] = useState("internal");
  const [transactions] = useState([
    { id: 1, description: "Chuyển tiền cho bạn A", amount: 500000, date: "2024-11-10", status: "success" },
    { id: 2, description: "Thanh toán hóa đơn điện", amount: 200000, date: "2024-11-05", status: "failed" },
    { id: 3, description: "Chuyển tiền cho bạn B", amount: 300000, date: "2024-11-08", status: "pending" },
    { id: 4, description: "Thanh toán tiền nước", amount: 150000, date: "2024-11-12", status: "success" },
  ]);
  const [filterAmount, setFilterAmount] = useState(null);
  const [filterDate, setFilterDate] = useState(null);

  const handleTransferTypeChange = (e) => setTransferType(e.target.value);
  const handleAmountFilterChange = (value) => setFilterAmount(value);
  const handleDateFilterChange = (value) => setFilterDate(value);

  return (
    <div className="w-full mx-auto p-6">
      <Row gutter={24}>
        {/* Card Chuyển tiền */}
        <Col span={18}>
          <Card
            cover={<img alt="Chuyển tiền" src="https://www.noblewebstudio.com/blog/wp-content/uploads/2023/01/17-domestic-money-transfer-software-api.jpg" className="rounded-t-lg" />}
            className="shadow-md p-4 rounded-lg"
          >
            <TransferForm transferType={transferType} handleTransferTypeChange={handleTransferTypeChange} />
          </Card>
        </Col>

        {/* Card Lịch sử giao dịch */}
        <Col span={6}>
          <TransactionHistory
            transactions={transactions}
            filterAmount={filterAmount}
            filterDate={filterDate}
            handleAmountFilterChange={handleAmountFilterChange}
            handleDateFilterChange={handleDateFilterChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TransferPage;
