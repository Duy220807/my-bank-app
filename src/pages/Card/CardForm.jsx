import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row, Typography, Skeleton } from 'antd';
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

    useEffect(() => {
        // Giả lập tải dữ liệu sau 2 giây
        setTimeout(() => {
            setLoading(false);
        }, 1000);  // Sau 2 giây, dữ liệu sẽ được tải xong
    }, []);

    const handleCardSelect = (card) => {
        setSelectedCard(card);  // Update selected card
    };

    return (
        <div className="w-full mx-auto p-6">
            <Title level={3}>Danh sách thẻ</Title>
            <Row gutter={16}>
                {fakeCards.map((card) => (
                    <Col span={8} key={card.id}>
                        {loading ? (
                            <Skeleton.Image active className="w-full mb-4" />  // Skeleton dạng ảnh
                        ) : (
                            <div
                                style={{ position: 'relative' }}
                                className={`p-4 mb-4 cursor-pointer transition-transform duration-300 hover:scale-105 rounded-lg shadow-none ${selectedCard?.id === card.id ? 'shadow-lg border-2 border-blue-500' : ''} ${card.status === 'active' ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                            </div>
                        )}
                    </Col>
                ))}
            </Row>

            {/* Show details of the selected card */}
            {selectedCard && loading ? (
                <Skeleton.Image active className="w-full h-80 mb-4" />
            ) : (
                selectedCard && (
                    <div className="mt-6">
                        <Title level={4}>Chi tiết thẻ đã chọn</Title>
                        <Card className="shadow-lg p-4 rounded-lg">
                            <Row align="middle" gutter={16}>
                                <Col span={8}>
                                    {loading ? (
                                        <Skeleton.Image active width={300} height={200} />  // Skeleton cho ảnh chi tiết thẻ
                                    ) : (
                                        <img
                                            width={300} // Kích thước ảnh
                                            alt={selectedCard.bank}
                                            src={selectedCard.image}
                                            className="rounded-lg"
                                        />
                                    )}
                                </Col>

                                <Col span={16}>
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
                                </Col>
                            </Row>
                        </Card>
                    </div>
                )
            )}

            {/* Button to create a new card */}
            <Button
                type="primary"
                block
                icon={<CreditCardOutlined />}
                className="mt-6 rounded-md py-3"
                onClick={() => setSelectedCard(null)} // Reset the selected card
                disabled={loading} // Disable button while loading
            >
                {loading ? <Skeleton.Input active size="small" /> : 'Mở thẻ mới'}
            </Button>
        </div>
    );
};

export default CardForm;
