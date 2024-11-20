import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row, Typography, Skeleton, Modal } from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';
import './CardForm.css';

const { Title, Paragraph } = Typography;

const fakeCards = [
    { id: 1, cardType: 'Thẻ ghi nợ', bank: 'Vietcombank', accountNumber: '1234 5678 9012 3456', cardholder: 'Nguyễn Văn A', image: 'https://khuyenmai.kienlongbank.com/app/uploads/2021/10/The-moi-07.png', status: 'inactive' },
    { id: 2, cardType: 'Thẻ tín dụng', bank: 'BIDV', accountNumber: '2345 6789 0123 4567', cardholder: 'Trần Thị B', image: 'https://khuyenmai.kienlongbank.com/app/uploads/2021/10/The-moi-08.png', status: 'active' },
    { id: 3, cardType: 'Thẻ ghi nợ', bank: 'Agribank', accountNumber: '3456 7890 1234 5678', cardholder: 'Lê Quang C', image: 'https://khuyenmai.kienlongbank.com/app/uploads/2021/10/The-moi-09.png', status: 'inactive' },
    { id: 4, cardType: 'Thẻ tín dụng', bank: 'Techcombank', accountNumber: '4567 8901 2345 6789', cardholder: 'Phan Minh D', image: 'https://khuyenmai.kienlongbank.com/app/uploads/2021/10/The-moi-06.png', status: 'active' },
    { id: 5, cardType: 'Thẻ ghi nợ', bank: 'MB Bank', accountNumber: '5678 9012 3456 7890', cardholder: 'Bùi Hoàng E', image: 'https://khuyenmai.kienlongbank.com/app/uploads/2021/10/The-moi-05.png', status: 'inactive' },
];

const CardForm = () => {
    const [selectedCard, setSelectedCard] = useState(null);  // Store the selected card
    const [loading, setLoading] = useState(true);  // Trạng thái loading
    const [isMobile, setIsMobile] = useState(false); // To check if it's a mobile screen

    useEffect(() => {
        // Giả lập tải dữ liệu sau 2 giây
        setTimeout(() => {
            setLoading(false);
        }, 1000);  // Sau 2 giây, dữ liệu sẽ được tải xong

        // Check if screen size is mobile
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // 768px is considered mobile size
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCardSelect = (card) => {
        setSelectedCard(card);  // Update selected card
    };

    const handleModalClose = () => {
        setSelectedCard(null); // Close modal by clearing selected card
    };

    return (
        <div className="w-full mx-auto p-6">
            <Title level={3}>Danh sách thẻ</Title>
            <Row gutter={[16, 16]} justify="start">
                {fakeCards.map((card) => (
                    <Col xs={24} sm={8} key={card.id}>
                        {loading ? (
                            <Skeleton.Image active className="w-full mb-4" />  // Skeleton dạng ảnh
                        ) : (
                            <div
                                style={{ position: 'relative', border: 'none', boxShadow: 'none' }}
                                className={`p-4 mb-4 cursor-pointer transition-transform duration-300 hover:scale-105 rounded-lg ${selectedCard?.id === card.id ? 'border-2 border-blue-500' : ''} ${card.status === 'active' ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={() => card.status !== 'active' && handleCardSelect(card)} // Prevent selection for active cards
                            >
                                <img
                                    alt={card.bank}
                                    src={card.image}
                                    className="w-full rounded-lg mb-4"
                                />
                                {selectedCard?.id === card.id && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 10,
                                            right: 10,
                                            backgroundColor: '#1890ff',
                                            color: '#fff',
                                            borderRadius: '50%',
                                            width: 24,
                                            height: 24,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        ✓
                                    </div>
                                )}
                                {card.status === 'active' && (
                                    <div className="absolute top-2 left-2 bg-red-500 text-white p-2 rounded-full text-sm">Active</div>
                                )}

                                {/* Display card details when selected (for non-mobile view) */}
                                {!isMobile && selectedCard?.id === card.id && (
                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-white p-6 rounded-lg shadow-lg">
                                        <Title level={5}>Chi tiết thẻ</Title>
                                        <Paragraph>
                                            <strong>Loại thẻ:</strong> {card.cardType}
                                        </Paragraph>
                                        <Paragraph>
                                            <strong>Ngân hàng:</strong> {card.bank}
                                        </Paragraph>
                                        <Paragraph>
                                            <strong>Số tài khoản:</strong> {card.accountNumber}
                                        </Paragraph>
                                        <Paragraph>
                                            <strong>Tên chủ thẻ:</strong> {card.cardholder}
                                        </Paragraph>
                                        <Button
                                            type="primary"
                                            block
                                            icon={<CreditCardOutlined />}
                                            className="rounded-md py-3"
                                        >
                                            Mở thẻ mới
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )}
                    </Col>
                ))}
            </Row>

            {/* Display card details in modal for mobile */}
            {isMobile && selectedCard && (
                <Modal
                    visible={!!selectedCard}
                    onCancel={handleModalClose}
                    footer={null}
                    width={300}
                    bodyStyle={{ padding: '20px' }}
                    destroyOnClose
                >
                    <Title level={5}>Chi tiết thẻ</Title>
                    <Paragraph>
                        <strong>Loại thẻ:</strong> {selectedCard.cardType}
                    </Paragraph>
                    <Paragraph>
                        <strong>Ngân hàng:</strong> {selectedCard.bank}
                    </Paragraph>
                    <Paragraph>
                        <strong>Số tài khoản:</strong> {selectedCard.accountNumber}
                    </Paragraph>
                    <Paragraph>
                        <strong>Tên chủ thẻ:</strong> {selectedCard.cardholder}
                    </Paragraph>
                    <Button
                        type="primary"
                        block
                        icon={<CreditCardOutlined />}
                        className="rounded-md py-3"
                    >
                        Mở thẻ mới
                    </Button>
                </Modal>
            )}
        </div>
    );
};

export default CardForm;
