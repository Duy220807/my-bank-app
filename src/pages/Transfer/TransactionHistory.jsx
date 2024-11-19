import React from 'react';
import { Card, Row, Col, Select, Pagination, Typography } from 'antd';
import { TransactionOutlined } from '@ant-design/icons';
import './TransactionHistory.css';

const { Option } = Select;
const { Paragraph } = Typography;

const TransactionHistory = ({ transactions, filterAmount, filterDate, handleAmountFilterChange, handleDateFilterChange }) => {
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
    <Card title={<span><TransactionOutlined /> Lịch sử giao dịch</span>} className="shadow-md p-4 rounded-lg">
      <Row gutter={16} className="mb-4">
        <Col span={12}>
          <Select placeholder="Lọc theo số tiền" onChange={handleAmountFilterChange} style={{ width: '100%' }}>
            <Option value={500000}>500,000 VNĐ</Option>
            <Option value={200000}>200,000 VNĐ</Option>
          </Select>
        </Col>
        <Col span={12}>
          <Select placeholder="Lọc theo ngày" onChange={handleDateFilterChange} style={{ width: '100%' }}>
            <Option value="2024-11-10">2024-11-10</Option>
            <Option value="2024-11-05">2024-11-05</Option>
          </Select>
        </Col>
      </Row>

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

      <Pagination
        total={filteredTransactionsList.length}
        pageSize={2}
        className="mt-4 flex justify-center"
      />
    </Card>
  );
};

export default TransactionHistory;
