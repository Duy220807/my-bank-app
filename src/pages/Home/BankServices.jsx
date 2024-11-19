import React, { useState, useEffect } from "react";
import { Row, Col, Image, Skeleton } from "antd";
import { WalletOutlined, TransactionOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

// Import ảnh từ thư mục local
import transferImg from './../../assets/menus/transfer.png';
import saveImg from './../../assets/menus/save.png';
import loanImg from './../../assets/menus/loan.png';
import billImg from './../../assets/menus/bill.png';
import cardImg from './../../assets/menus/card.png';
import chatImg from './../../assets/menus/chat.png';

const BankServices = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // Trạng thái loading
    const services = [
        { title: "Chuyển tiền", icon: <WalletOutlined />, description: "Chuyển tiền đến tài khoản khác", imgSrc: transferImg, action: () => navigate('/transfer') },
        { title: "Thanh toán hóa đơn", icon: <TransactionOutlined />, description: "Thanh toán hóa đơn điện, nước, internet", imgSrc: billImg, action: () => navigate('/payment') },
        { title: "Mở thẻ", icon: <WalletOutlined />, description: "Mở thẻ tín dụng với hạn mức linh hoạt", imgSrc: cardImg },
        { title: "Đăng ký vay tín chấp", icon: <TransactionOutlined />, description: "Đăng ký gửi vay tín chấp với lãi suất hấp dẫn", imgSrc: loanImg, action: () => navigate('/loan') },
        { title: "Đăng ký tài khoản tiết kiệm", icon: <TransactionOutlined />, description: "Đăng ký tài khoản tiết kiệm với lãi suất hấp dẫn", imgSrc: saveImg },
        { title: "Chăm sóc khách hàng", icon: <TransactionOutlined />, description: "Chăm sóc khách hàng KLB", imgSrc: chatImg },
    ];

    // Simulate loading with a 1-second delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after 1 second
        }, 1000);

        return () => clearTimeout(timer); // Clean up timer on component unmount
    }, []);

    return (
        <div className="mt-4">
            {/* Hiển thị skeleton khi loading */}
            {loading ? (
                <Row gutter={[16, 16]}>
                    {Array(6).fill(0).map((_, index) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={index}>
                            <div className="bg-white shadow-lg rounded-2xl overflow-hidden m-4">
                                <Skeleton.Image active className="w-full h-80" />
                                <Skeleton active paragraph={false} />
                            </div>
                        </Col>
                    ))}
                </Row>
            ) : (
                <Row gutter={[16, 16]}>
                    {services.map((service, index) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={index}>
                            {/* Gói toàn bộ nội dung dịch vụ vào một div và sử dụng sự kiện onClick */}
                            <div
                                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer m-4"
                                onClick={service.action || (() => console.log(service.title))}
                            >
                                {/* Tên dịch vụ sẽ được ẩn khi không hover */}
                                <div className="relative group">
                                    <Image
                                        alt={service.title}
                                        src={service.imgSrc}
                                        className="w-full object-cover"
                                        preview={false}
                                    />
                                    {/* Tên dịch vụ hiển thị khi hover */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-xl font-semibold">{service.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default BankServices;
