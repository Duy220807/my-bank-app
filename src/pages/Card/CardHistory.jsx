import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Select, Pagination, Typography, Skeleton } from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';
// import './CardHistory.css';

const { Option } = Select;
const { Paragraph } = Typography;

const CardHistory = ({ filterAmount, filterDate, handleAmountFilterChange, handleDateFilterChange }) => {
  const [loading, setLoading] = useState(true);

  // Simulate data loading (1 second)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Data is loaded after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, []);

  const transactions = [
    { id: 1, description: "Mở thẻ tín dụng", amount: 5000000, date: "2024-11-10", status: "success" },
    { id: 2, description: "Mở thẻ ghi nợ", amount: 1000000, date: "2024-11-05", status: "failed" },
    { id: 3, description: "Mở thẻ tín dụng", amount: 3000000, date: "2024-11-08", status: "pending" },
    { id: 3, description: "Mở thẻ ghi nợ", amount: 3000000, date: "2024-11-08", status: "pending" },
  ];

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
    <Card title={<span><CreditCardOutlined /> Lịch sử mở thẻ</span>} className="shadow-md p-4 rounded-lg">
      <Row gutter={16} className="mb-4">
        <Col span={12}>
          <Select placeholder="Lọc theo số tiền" onChange={handleAmountFilterChange} style={{ width: '100%' }}>
            <Option value={5000000}>5,000,000 VNĐ</Option>
            <Option value={1000000}>1,000,000 VNĐ</Option>
          </Select>
        </Col>
        <Col span={12}>
          <Select placeholder="Lọc theo ngày" onChange={handleDateFilterChange} style={{ width: '100%' }}>
            <Option value="2024-11-10">2024-11-10</Option>
            <Option value="2024-11-05">2024-11-05</Option>
          </Select>
        </Col>
      </Row>

      {loading ? (
        <Row gutter={[8, 8]}>
          {[...Array(3)].map((_, index) => (
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
                  {/* <Paragraph><strong>Trạng thái:</strong> {transaction.status}</Paragraph> */}
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      )}

      {!loading && (
        <Pagination
          total={filteredTransactionsList.length}
          pageSize={2}
          className="mt-4 flex justify-center"
        />
      )}
    </Card>
  );
};

export default CardHistory;
