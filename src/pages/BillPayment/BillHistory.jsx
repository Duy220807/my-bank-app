import React, { useState, useEffect } from "react";
import { Card, Row, Col, Select, Pagination, Typography, Skeleton } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Paragraph } = Typography;

const BillHistory = ({ transactions, filterAmount, filterDate, handleAmountFilterChange, handleDateFilterChange }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredTransactionsList = transactions.filter((transaction) => {
    let isValid = true;
    if (filterAmount && transaction.amount !== filterAmount) {
      isValid = false;
    }
    if (filterDate && transaction.date !== filterDate) {
      isValid = false;
    }
    return isValid;
  });

  return (
    <Card title={<span><FileTextOutlined /> Lịch sử thanh toán</span>} className="shadow-md p-4 rounded-lg">
      <Row gutter={16} className="mb-4">
        <Col span={12}>
          <Select placeholder="Lọc theo số tiền" onChange={handleAmountFilterChange} style={{ width: "100%" }}>
            <Option value={500000}>500,000 VNĐ</Option>
            <Option value={200000}>200,000 VNĐ</Option>
          </Select>
        </Col>
        <Col span={12}>
          <Select placeholder="Lọc theo ngày" onChange={handleDateFilterChange} style={{ width: "100%" }}>
            <Option value="2024-11-10">2024-11-10</Option>
            <Option value="2024-11-05">2024-11-05</Option>
          </Select>
        </Col>
      </Row>

      {loading ? (
        <Row gutter={[8, 8]}>
          {[...Array(4)].map((_, index) => (
            <Col span={24} key={index}>
              <Skeleton active paragraph={{ rows: 3 }} />
            </Col>
          ))}
        </Row>
      ) : (
        <Row gutter={[8, 8]}>
          {filteredTransactionsList.map((transaction) => (
            <Col span={24} key={transaction.id}>
              <div className="card-container">
                <span className={`transaction-status ${transaction.status}`}>
                  {transaction.status === "success"
                    ? "Thành công"
                    : transaction.status === "failed"
                      ? "Thất bại"
                      : "Đang xử lý"}
                </span>
                <Card className="shadow-lg p-2 rounded-lg">
                  <Paragraph><strong>{transaction.description}</strong></Paragraph>
                  <Paragraph><strong>Số tiền:</strong> {transaction.amount} VNĐ</Paragraph>
                  <Paragraph><strong>Ngày:</strong> {transaction.date}</Paragraph>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      )}

      <Pagination
        total={filteredTransactionsList.length}
        pageSize={2}
        className="mt-4 flex justify-center"
      />
    </Card>
  );
};

export default BillHistory;
