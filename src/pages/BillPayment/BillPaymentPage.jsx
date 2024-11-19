import React, { useState } from "react";
import { Row, Col, Card } from "antd";
import BillPaymentForm from "./BillPaymentForm";
import BillHistory from "./BillHistory";

const BillPaymentPage = () => {
  const [transactions] = useState([
    { id: 1, description: "Thanh toán tiền điện", amount: 500000, date: "2024-11-10", status: "success" },
    { id: 2, description: "Thanh toán tiền nước", amount: 200000, date: "2024-11-05", status: "failed" },
    { id: 3, description: "Thanh toán tiền Internet", amount: 300000, date: "2024-11-08", status: "pending" },
    { id: 4, description: "Thanh toán tiền điện", amount: 300000, date: "2024-11-08", status: "pending" },
  ]);
  const [filterAmount, setFilterAmount] = useState(null);
  const [filterDate, setFilterDate] = useState(null);

  const handleAmountFilterChange = (value) => setFilterAmount(value);
  const handleDateFilterChange = (value) => setFilterDate(value);

  return (
    <div className="w-full mx-auto p-6">
      <Row gutter={24}>
        <Col span={18}>
          <Card
            cover={
              <img
                alt="Thanh toán hóa đơn"
                src="https://admonk.in/abt/image/onlinepayment-banner.jpg"
                className="rounded-t-lg"
              />
            }
            className="shadow-md p-4 rounded-lg"
          >
            <BillPaymentForm />
          </Card>
        </Col>
        <Col span={6}>
          <BillHistory
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

export default BillPaymentPage;
