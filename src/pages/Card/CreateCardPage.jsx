import React, { useState } from "react";
import { Row, Col, Card, Typography } from "antd";
import CardForm from './CardForm';
import CardHistory from './CardHistory';

const CreateCardPage = () => {
  const [filterAmount, setFilterAmount] = useState(null);
  const [filterDate, setFilterDate] = useState(null);

  const handleAmountFilterChange = (value) => setFilterAmount(value);
  const handleDateFilterChange = (value) => setFilterDate(value);

  return (
    <div className="w-full mx-auto p-6">
      <Row gutter={24}>
        {/* Card Mở thẻ */}
        <Col span={18}>
          <Card
            cover={<img alt="Mở thẻ" src="https://kienlongbank.com/Data/Sites/1/News/20277/kienlongbank-an-sinh-xa-hoi.jpg" className="rounded-t-lg" />}
            className="shadow-md p-4 rounded-lg"
          >
            <CardForm />
          </Card>
        </Col>

        {/* Card Lịch sử thẻ */}
        <Col span={6}>
          <CardHistory
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

export default CreateCardPage;
