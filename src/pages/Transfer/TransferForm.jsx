import React from 'react';
import { Form, Input, Radio, Button } from 'antd';
import { WalletOutlined } from '@ant-design/icons';

const TransferForm = ({ transferType, handleTransferTypeChange }) => {
    return (
        <Form layout="vertical">
            <Form.Item
                label="Số tài khoản người nhận"
                name="accountNumber"
                rules={[{ required: true, message: "Vui lòng nhập số tài khoản" }]}
            >
                <Input placeholder="Nhập số tài khoản người nhận" className="border-2 rounded-md" />
            </Form.Item>
            <Form.Item
                label="Tên người nhận"
                name="recipient"
                rules={[{ required: true, message: "Vui lòng nhập tên người nhận" }]}
            >
                <Input disabled placeholder="Hiển thị tên người nhận" className="border-2 rounded-md" />
            </Form.Item>
            <Form.Item
                label="Số tiền"
                name="amount"
                rules={[{ required: true, message: "Vui lòng nhập số tiền" }]}
            >
                <Input type="number" placeholder="Nhập số tiền" className="border-2 rounded-md" />
            </Form.Item>
            <Form.Item label="Loại chuyển tiền">
                <Radio.Group value={transferType} onChange={handleTransferTypeChange}>
                    <Radio value="internal">Chuyển tiền nội bộ</Radio>
                    <Radio value="external">Chuyển tiền liên ngân hàng</Radio>
                </Radio.Group>
            </Form.Item>
            {transferType === "external" && (
                <Form.Item
                    label="Mã ngân hàng người nhận"
                    name="bankCode"
                    rules={[{ required: true, message: "Vui lòng nhập mã ngân hàng người nhận" }]}
                >
                    <Input placeholder="Nhập mã ngân hàng người nhận" className="border-2 rounded-md" />
                </Form.Item>
            )}
            <Button type="primary" htmlType="submit" block icon={<WalletOutlined />} className="rounded-md py-3">
                Chuyển tiền
            </Button>
        </Form>
    );
};

export default TransferForm;
