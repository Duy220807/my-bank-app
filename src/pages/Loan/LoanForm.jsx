import React, { useState, useEffect } from 'react';
import { Form, Input, Radio, Button, Select, Slider, Upload, notification, Row, Col } from 'antd';
import { MoneyCollectOutlined, CameraOutlined } from '@ant-design/icons';
import InterestRatePopover from '../../components/InterestRatePopover';

const { Option } = Select;

const LoanForm = ({ loanType, handleLoanTypeChange }) => {
  const [loanAmount, setLoanAmount] = useState(5000000); // Default loan amount
  const [interestRate, setInterestRate] = useState(5); // Default interest rate
  const [loanDuration, setLoanDuration] = useState(5); // Default loan duration (in years)
  const [borrowerName, setBorrowerName] = useState('');
  const [borrowerPhone, setBorrowerPhone] = useState('');
  const [cccdFront, setCccdFront] = useState(null); // Store CCCD front image
  const [cccdBack, setCccdBack] = useState(null); // Store CCCD back image
  const [portrait, setPortrait] = useState(null); // Store portrait image

  // Handle changes for loan amount slider
  const handleAmountChange = (value) => setLoanAmount(value);

  // Handle changes for loan duration (years)
  const handleLoanDurationChange = (value) => setLoanDuration(value);

  // Calculate interest rate based on loan amount and loan duration
  useEffect(() => {
    const calculatedInterestRate = 5 + (loanDuration - 5) * 0.5;
    setInterestRate(calculatedInterestRate);
  }, [loanAmount, loanDuration]);

  // Handle file upload preview
  const handleUploadChange = (info, type) => {
    if (info.file.status === 'done') {
      notification.success({
        message: `${info.file.name} file uploaded successfully`,
      });
    } else if (info.file.status === 'error') {
      notification.error({
        message: `${info.file.name} file upload failed.`,
        description: 'Please upload again!',
      });
    }

    if (type === 'cccdFront') {
      setCccdFront(info.fileList[0]?.thumbUrl || null);
    } else if (type === 'cccdBack') {
      setCccdBack(info.fileList[0]?.thumbUrl || null);
    } else if (type === 'portrait') {
      setPortrait(info.fileList[0]?.thumbUrl || null);
    }
  };

  // Prevent file upload directly, just for preview
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      notification.error({
        message: 'Bạn chỉ có thể tải lên các file ảnh!',
      });
    }
    return isImage;
  };

  return (
    <Form layout="vertical">
      {/* Loại vay */}
      <Form.Item label="Loại vay">
        <Radio.Group value={loanType} onChange={handleLoanTypeChange}>
          <Radio value="personal">Vay cá nhân</Radio>
          <Radio value="home">Vay mua nhà</Radio>
          <Radio value="vehicle">Vay mua xe</Radio>
        </Radio.Group>
      </Form.Item>

      {/* Số tiền vay */}
      <Form.Item label="Số tiền vay" name="amount" rules={[{ required: true, message: "Vui lòng nhập số tiền vay" }]}>
        <Slider
          min={1000000}
          max={100000000}
          step={1000000}
          value={loanAmount}
          onChange={handleAmountChange}
          tooltipVisible
          marks={{
            1000000: '1M',
            5000000: '5M',
            100000000: '100M',
          }}
        />
        <Input
          value={loanAmount}
          onChange={(e) => handleAmountChange(e.target.value)}
          style={{ marginTop: 10 }}
          placeholder="Nhập số tiền vay"
          className="border-2 rounded-md"
        />
      </Form.Item>

      {/* Thời gian vay */}
      <Form.Item label="Thời gian vay" name="duration" rules={[{ required: true, message: "Vui lòng chọn thời gian vay" }]}>
        <Select value={loanDuration} onChange={handleLoanDurationChange} className="border-2 rounded-md">
          <Option value={5}>5 năm</Option>
          <Option value={10}>10 năm</Option>
          <Option value={15}>15 năm</Option>
          <Option value={20}>20 năm</Option>
        </Select>
      </Form.Item>

      {/* Lãi suất */}
      <Form.Item label={<span>Lãi suất (%) <InterestRatePopover /></span>}>
        <Input value={interestRate} disabled className="border-2 rounded-md" />
      </Form.Item>

      {/* Mục đích vay */}
      <Form.Item label="Mục đích vay" name="purpose" rules={[{ required: true, message: "Vui lòng nhập mục đích vay" }]}>
        <Select placeholder="Chọn mục đích vay" className="border-2 rounded-md">
          <Option value="house">Mua nhà</Option>
          <Option value="vehicle">Mua xe</Option>
          <Option value="education">Học phí</Option>
        </Select>
      </Form.Item>

      {/* Thông tin cá nhân */}
      <Form.Item label="Họ tên" name="name" rules={[{ required: true, message: "Vui lòng nhập họ tên của bạn" }]}>
        <Input value={borrowerName} onChange={(e) => setBorrowerName(e.target.value)} placeholder="Nhập họ tên" className="border-2 rounded-md" />
      </Form.Item>

      <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}>
        <Input value={borrowerPhone} onChange={(e) => setBorrowerPhone(e.target.value)} placeholder="Nhập số điện thoại" className="border-2 rounded-md" />
      </Form.Item>

      {/* Upload CCCD 2 mặt và ảnh chân dung */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="CCCD mặt trước" name="cccdFront" rules={[{ required: true, message: "Vui lòng tải lên mặt trước CCCD" }]}>
            <Upload
              listType="picture-card"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={(info) => handleUploadChange(info, 'cccdFront')}
            >
              {cccdFront ? <img src={cccdFront} alt="CCCD Front" style={{ width: '100%' }} /> : <div><CameraOutlined /> Tải lên</div>}
            </Upload>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="CCCD mặt sau" name="cccdBack" rules={[{ required: true, message: "Vui lòng tải lên mặt sau CCCD" }]}>
            <Upload
              listType="picture-card"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={(info) => handleUploadChange(info, 'cccdBack')}
            >
              {cccdBack ? <img src={cccdBack} alt="CCCD Back" style={{ width: '100%' }} /> : <div><CameraOutlined /> Tải lên</div>}
            </Upload>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Ảnh chân dung" name="portrait" rules={[{ required: true, message: "Vui lòng tải lên ảnh chân dung" }]}>
        <Upload
          listType="picture-card"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={(info) => handleUploadChange(info, 'portrait')}
        >
          {portrait ? <img src={portrait} alt="Portrait" style={{ width: '100%' }} /> : <div><CameraOutlined /> Tải lên</div>}
        </Upload>
      </Form.Item>

      {/* Nút nộp đơn */}
      <Button type="primary" htmlType="submit" block icon={<MoneyCollectOutlined />} className="rounded-md py-3">
        Nộp đơn vay
      </Button>
    </Form>
  );
};

export default LoanForm;
