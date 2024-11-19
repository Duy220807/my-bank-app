import React, { useState } from 'react';
import { Form, Input, Radio, Button, Select } from 'antd';
import { WalletOutlined } from '@ant-design/icons';

const { Option } = Select;

const TransferForm = () => {
    const [transferType, setTransferType] = useState('internal');  // Default transfer type
    const [bankCode, setBankCode] = useState('');  // Store selected bank code

    const handleTransferTypeChange = (e) => {
        setTransferType(e.target.value);  // Update transfer type on change
        setBankCode(''); // Reset bank selection when type changes
    };

    return (
        <Form layout="vertical">
            {/* Loại chuyển tiền */}
            <Form.Item label="Loại chuyển tiền">
                <Radio.Group value={transferType} onChange={handleTransferTypeChange}>
                    <Radio value="internal">Chuyển tiền nội bộ</Radio>
                    <Radio value="external">Chuyển tiền liên ngân hàng</Radio>
                </Radio.Group>
            </Form.Item>

            {/* Chọn ngân hàng */}
            {transferType === 'external' && (
                <Form.Item
                    label="Mã ngân hàng người nhận"
                    name="bankCode"
                    rules={[{ required: true, message: "Vui lòng chọn mã ngân hàng người nhận" }]}
                >
                    <Select
                        value={bankCode}
                        onChange={setBankCode}
                        placeholder="Chọn mã ngân hàng người nhận"
                        className="border-2 rounded-md"
                    >
                        <Option value="vietcombank">Vietcombank</Option>
                        <Option value="bidv">BIDV</Option>
                        <Option value="agribank">Agribank</Option>
                        <Option value="techcombank">Techcombank</Option>
                        <Option value="mbbank">MB Bank</Option>
                        <Option value="vietinbank">VietinBank</Option>
                        <Option value="shb">SHB</Option>
                        {/* Thêm các ngân hàng khác nếu cần */}
                    </Select>
                </Form.Item>
            )}

            {/* Chọn mã chi nhánh */}
            {bankCode && transferType === 'external' && (
                <Form.Item
                    label="Mã chi nhánh người nhận"
                    name="branchCode"
                    rules={[{ required: true, message: "Vui lòng nhập mã chi nhánh người nhận" }]}
                >
                    <Input placeholder="Nhập mã chi nhánh ngân hàng" className="border-2 rounded-md" />
                </Form.Item>
            )}

            {/* Số tài khoản người nhận */}
            <Form.Item
                label="Số tài khoản người nhận"
                name="accountNumber"
                rules={[{ required: true, message: "Vui lòng nhập số tài khoản" }]}
            >
                <Input placeholder="Nhập số tài khoản người nhận" className="border-2 rounded-md" />
            </Form.Item>

            {/* Tên người nhận */}
            <Form.Item
                label="Tên người nhận"
                name="recipient"
                rules={[{ required: true, message: "Vui lòng nhập tên người nhận" }]}
            >
                <Input disabled placeholder="Hiển thị tên người nhận" className="border-2 rounded-md" />
            </Form.Item>

            {/* Số tiền */}
            <Form.Item
                label="Số tiền"
                name="amount"
                rules={[{ required: true, message: "Vui lòng nhập số tiền" }]}
            >
                <Input type="number" placeholder="Nhập số tiền" className="border-2 rounded-md" />
            </Form.Item>

            <Button type="primary" htmlType="submit" block icon={<WalletOutlined />} className="rounded-md py-3">
                Chuyển tiền
            </Button>
        </Form>
    );
};

export default TransferForm;
