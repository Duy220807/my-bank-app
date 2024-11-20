import React, { useState } from "react";
import { Row, Col, Card } from "antd";
import LoanForm from './LoanForm';
import LoanHistory from './LoanHistory';

const LoanPage = () => {
  const [loanType, setLoanType] = useState("personal");
  const [loans] = useState([
    { id: 1, description: "Vay mua nhà", amount: 500000000, date: "2024-10-01", status: "approved" },
    { id: 2, description: "Vay mua xe", amount: 200000000, date: "2024-08-15", status: "pending" },
    { id: 3, description: "Vay học phí", amount: 30000000, date: "2024-09-10", status: "rejected" },
    { id: 4, description: "Vay mua nhà", amount: 30000000, date: "2024-09-10", status: "rejected" },
  ]);
  const [filterAmount, setFilterAmount] = useState(null);
  const [filterDate, setFilterDate] = useState(null);

  const handleLoanTypeChange = (e) => setLoanType(e.target.value);
  const handleAmountFilterChange = (value) => setFilterAmount(value);
  const handleDateFilterChange = (value) => setFilterDate(value);

  return (
    <div className="w-full mx-auto p-6">
      <Row gutter={[16, 16]}>
        {/* Card Form Vay */}
        <Col sm={18} xs={24}>
          <Card
            cover={<img alt="Vay tiền" src="https://www.publicbankgroup.com/media/dikfw4f4/bftp-new-x1000.jpg" className="rounded-t-lg" />}
            className="shadow-md p-4 rounded-lg"
          >
            <LoanForm loanType={loanType} handleLoanTypeChange={handleLoanTypeChange} />
          </Card>
        </Col>

        {/* Card Lịch sử khoản vay */}
        <Col sm={6} xs={24}>
          <LoanHistory
            loans={loans}
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

export default LoanPage;
