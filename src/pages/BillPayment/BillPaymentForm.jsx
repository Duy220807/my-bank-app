import React from "react";
import { Form, Input, Select, Button } from "antd";
import { PayCircleOutlined } from "@ant-design/icons";

const { Option } = Select;

const BillPaymentForm = () => {
  return (
    <Form layout="vertical">
      {/* Loại hóa đơn */}
      <Form.Item
        label="Loại hóa đơn"
        name="billType"
        rules={[{ required: true, message: "Vui lòng chọn loại hóa đơn" }]}
      >
        <Select placeholder="Chọn loại hóa đơn" className="border-2 rounded-md">
          <Option value="electricity">Tiền điện</Option>
          <Option value="water">Tiền nước</Option>
          <Option value="internet">Tiền Internet</Option>
        </Select>
      </Form.Item>

      {/* Nhà cung cấp */}
      <Form.Item
        label="Nhà cung cấp"
        name="provider"
        rules={[{ required: true, message: "Vui lòng chọn nhà cung cấp" }]}
      >
        <Select placeholder="Chọn nhà cung cấp" className="border-2 rounded-md">
          <Option value="evn">EVN (Điện lực Việt Nam)</Option>
          <Option value="sawaco">SAWACO (Nước Sài Gòn)</Option>
          <Option value="viettel">Viettel</Option>
          <Option value="vnpt">VNPT</Option>
          <Option value="fpt">FPT Telecom</Option>
        </Select>
      </Form.Item>

      {/* Mã khách hàng */}
      <Form.Item
        label="Mã khách hàng"
        name="customerCode"
        rules={[{ required: true, message: "Vui lòng nhập mã khách hàng" }]}
      >
        <Input placeholder="Nhập mã khách hàng" className="border-2 rounded-md" />
      </Form.Item>

      {/* Số tiền */}
      <Form.Item
        label="Số tiền"
        name="amount"
        rules={[{ required: true, message: "Vui lòng nhập số tiền" }]}
      >
        <Input type="number" placeholder="Nhập số tiền" className="border-2 rounded-md" />
      </Form.Item>

      <Button type="primary" htmlType="submit" block icon={<PayCircleOutlined />} className="rounded-md py-3">
        Thanh toán hóa đơn
      </Button>
    </Form>
  );
};

export default BillPaymentForm;
