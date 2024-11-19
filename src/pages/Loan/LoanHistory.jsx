import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Select, Pagination, Typography, Skeleton } from 'antd';
import { TransactionOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Paragraph } = Typography;

const LoanHistory = ({ loans, filterAmount, filterDate, handleAmountFilterChange, handleDateFilterChange }) => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true); // State to control visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredLoansList = loans.filter((loan) => {
    let isValid = true;
    if (filterAmount && loan.amount !== filterAmount) {
      isValid = false;
    }
    if (filterDate && loan.date !== filterDate) {
      isValid = false;
    }
    return isValid;
  });

  const toggleVisibility = () => {
    setVisible(!visible); // Toggle the visibility state
  };

  return (
    <Card title={<span><TransactionOutlined /> Lịch sử khoản vay </span>} className="shadow-md p-4 rounded-lg">
      <Row gutter={16} className="mb-4 select-container">
        <Col span={12}>
          <Select placeholder="Lọc theo số tiền" onChange={handleAmountFilterChange} style={{ width: '100%' }}>
            <Option value={500000000}>500,000,000 VNĐ</Option>
            <Option value={200000000}>200,000,000 VNĐ</Option>
          </Select>
        </Col>
        <Col span={12}>
          <Select placeholder="Lọc theo ngày" onChange={handleDateFilterChange} style={{ width: '100%' }}>
            <Option value="2024-10-01">2024-10-01</Option>
            <Option value="2024-08-15">2024-08-15</Option>
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
      ) : visible ? ( // Show loan list only if visible is true
        <Row gutter={[8, 8]}>
          {filteredLoansList.map((loan) => (
            <Col span={24} key={loan.id} className="card-container">
              <Card className="shadow-lg p-2 rounded-lg">
                <Paragraph><strong>{loan.description}</strong></Paragraph>
                <Paragraph><strong>Số tiền vay:</strong> {loan.amount} VNĐ</Paragraph>
                <Paragraph><strong>Ngày:</strong> {loan.date}</Paragraph>
                <span className={`transaction-status ${loan.status === 'approved' ? 'success' : loan.status === 'rejected' ? 'failed' : 'pending'}`}>
                  {loan.status === "approved" ? "Thành công" : loan.status === "rejected" ? "Thất bại" : "Đang xử lý"}
                </span>
              </Card>
            </Col>
          ))}
        </Row>
      ) : null}

      {/* Conditionally render pagination based on loading state */}
      {!loading && (
        <Pagination
          total={filteredLoansList.length}
          pageSize={2}
          className="mt-4 flex justify-center"
        />
      )}
    </Card>
  );
};

export default LoanHistory;
