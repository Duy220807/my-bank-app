import React, { useState } from "react";
import { Drawer, Form, Input, Button, message } from "antd";

const EditCustomerDrawer = ({ visible, onClose, customer, onSave }) => {
    const [form] = Form.useForm();

    const handleSave = () => {
        form
            .validateFields()
            .then((values) => {
                onSave(values); // Gửi dữ liệu chỉnh sửa về component cha
                message.success("Chỉnh sửa thông tin thành công!"); // Hiển thị thông báo thành công
                onClose(); // Đóng Drawer
            })
            .catch((info) => {
                console.error("Validation Failed:", info);
                message.error("Chỉnh sửa thất bại. Vui lòng kiểm tra lại thông tin."); // Hiển thị thông báo thất bại
            });
    };
    return (
        <Drawer
            title="Chỉnh sửa thông tin khách hàng"
            width={400}
            onClose={onClose}
            visible={visible}
            footer={
                <div
                    style={{
                        textAlign: "right",
                    }}
                >
                    <Button onClick={onClose} style={{ marginRight: 8 }}>
                        Hủy
                    </Button>
                    <Button onClick={handleSave} type="primary">
                        Lưu
                    </Button>
                </div>
            }
        >
            <Form form={form} layout="vertical" initialValues={customer}>
                {/* <Form.Item
                    name="firstname"
                    label="Họ"
                    rules={[{ required: true, message: "Vui lòng nhập họ!" }]}
                >
                    <Input placeholder="Nhập họ" />
                </Form.Item>
                <Form.Item
                    name="lastname"
                    label="Tên"
                    rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
                >
                    <Input placeholder="Nhập tên" />
                </Form.Item> */}
                <Form.Item
                    name="phone"
                    label="Số điện thoại"
                    rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
                >
                    <Input placeholder="Nhập số điện thoại" />
                </Form.Item>
                <Form.Item
                    name="mail"
                    label="Email"
                    rules={[{ required: true, type: "email", message: "Vui lòng nhập email hợp lệ!" }]}
                >
                    <Input placeholder="Nhập email" />
                </Form.Item>
                {/* <Form.Item
                    name="address"
                    label="Địa chỉ"
                    rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
                >
                    <Input placeholder="Nhập địa chỉ" />
                </Form.Item> */}
            </Form>
        </Drawer>
    );
};

export default EditCustomerDrawer;
