// src/components/BankServices.js
import React from "react";
import { Button, Row, Col, Image } from "antd";
import { WalletOutlined, TransactionOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const BankServices = () => {
    const navigate = useNavigate();

    const services = [
        { title: "Chuyển tiền", icon: <WalletOutlined />, description: "Chuyển tiền đến tài khoản khác", imgSrc: "https://picsum.photos/800/800?random=1", action: () => navigate('/transfer') },
        { title: "Thanh toán hóa đơn", icon: <TransactionOutlined />, description: "Thanh toán hóa đơn điện, nước, internet", imgSrc: "https://picsum.photos/800/800?random=2", action: () => navigate('/payment') },
        { title: "Cập nhật thông tin", icon: <SettingOutlined />, description: "Cập nhật thông tin cá nhân", imgSrc: "https://picsum.photos/800/800?random=3" },
        { title: "Vay tín chấp", icon: <UserOutlined />, description: "Đăng ký vay tín chấp nhanh chóng", imgSrc: "https://picsum.photos/800/800?random=4", action: () => navigate('/loan') },
        { title: "Mở thẻ tín dụng", icon: <WalletOutlined />, description: "Mở thẻ tín dụng với hạn mức linh hoạt", imgSrc: "https://picsum.photos/800/800?random=5" },
        { title: "Xem báo cáo tài chính", icon: <TransactionOutlined />, description: "Xem báo cáo tài chính và thống kê", imgSrc: "https://picsum.photos/800/800?random=6" },
        { title: "Đăng ký tiết kiệm", icon: <TransactionOutlined />, description: "Đăng ký gửi tiết kiệm với lãi suất hấp dẫn", imgSrc: "https://picsum.photos/800/800?random=7" },
        { title: "Nạp tiền điện thoại", icon: <WalletOutlined />, description: "Nạp tiền cho điện thoại di động của bạn", imgSrc: "https://picsum.photos/800/800?random=8" },
        { title: "Quản lý chi tiêu", icon: <SettingOutlined />, description: "Quản lý và phân tích chi tiêu của bạn", imgSrc: "https://picsum.photos/800/800?random=9" },
        { title: "Đổi mật khẩu", icon: <SettingOutlined />, description: "Đổi mật khẩu tài khoản của bạn", imgSrc: "https://picsum.photos/800/800?random=10" },
    ];

    return (
        <Row gutter={[16, 16]} className="mt-4">
            {services.map((service, index) => (
                <Col xs={24} sm={12} md={8} lg={6} key={index}>
                    {/* Sử dụng Tailwind CSS thay cho Ant Design Card */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <Image alt={service.title} src={service.imgSrc} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">{service.title}</h3>
                                <div className="text-xl">{service.icon}</div>
                            </div>
                            <p className="text-sm text-gray-600 mt-2 truncate">{service.description}</p>
                            <Button
                                type="primary"
                                block
                                className="mt-4"
                                onClick={service.action || (() => console.log(service.title))}
                            >
                                Khám phá
                            </Button>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default BankServices;
