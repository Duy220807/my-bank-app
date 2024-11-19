import React, { useState } from 'react';
import { Button, Card, Col, Row, Typography } from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const fakeCards = [
    { id: 1, cardType: 'Thẻ ghi nợ', bank: 'Vietcombank', accountNumber: '1234 5678 9012 3456', cardholder: 'Nguyễn Văn A', image: 'https://via.placeholder.com/150?text=Vietcombank' },
    { id: 2, cardType: 'Thẻ tín dụng', bank: 'BIDV', accountNumber: '2345 6789 0123 4567', cardholder: 'Trần Thị B', image: 'https://via.placeholder.com/150?text=BIDV' },
    { id: 3, cardType: 'Thẻ ghi nợ', bank: 'Agribank', accountNumber: '3456 7890 1234 5678', cardholder: 'Lê Quang C', image: 'https://via.placeholder.com/150?text=Agribank' },
    { id: 4, cardType: 'Thẻ tín dụng', bank: 'Techcombank', accountNumber: '4567 8901 2345 6789', cardholder: 'Phan Minh D', image: 'https://via.placeholder.com/150?text=Techcombank' },
    { id: 5, cardType: 'Thẻ ghi nợ', bank: 'MB Bank', accountNumber: '5678 9012 3456 7890', cardholder: 'Bùi Hoàng E', image: 'https://via.placeholder.com/150?text=MB+Bank' },
];

const CardForm = () => {
    const [selectedCard, setSelectedCard] = useState(null);  // Store the selected card

    const handleCardSelect = (card) => {
        setSelectedCard(card);  // Update selected card
    };

    return (
        <div className="w-full mx-auto p-6">
            <Title level={3}>Danh sách thẻ</Title>
            <Row gutter={16}>
                {fakeCards.map((card) => (
                    <Col span={8} key={card.id}>
                        <Card
                            className="shadow-md p-4 mb-4 rounded-lg cursor-pointer"
                            onClick={() => handleCardSelect(card)}
                            cover={<img alt={card.bank} src={card.image} className="rounded-lg" />}
                        >
                            <Paragraph><strong>Loại thẻ:</strong> {card.cardType}</Paragraph>
                            <Paragraph><strong>Ngân hàng:</strong> {card.bank}</Paragraph>
                            <Paragraph><strong>Số tài khoản:</strong> {card.accountNumber}</Paragraph>
                            <Paragraph><strong>Tên chủ thẻ:</strong> {card.cardholder}</Paragraph>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Show details of the selected card */}
            {selectedCard && (
                <div className="mt-6">
                    <Title level={4}>Chi tiết thẻ đã chọn</Title>
                    <Card className="shadow-lg p-4 rounded-lg">
                        <img alt={selectedCard.bank} src={selectedCard.image} className="rounded-lg mb-4" />
                        <Paragraph><strong>Loại thẻ:</strong> {selectedCard.cardType}</Paragraph>
                        <Paragraph><strong>Ngân hàng:</strong> {selectedCard.bank}</Paragraph>
                        <Paragraph><strong>Số tài khoản:</strong> {selectedCard.accountNumber}</Paragraph>
                        <Paragraph><strong>Tên chủ thẻ:</strong> {selectedCard.cardholder}</Paragraph>
                    </Card>
                </div>
            )}

            {/* Button to create a new card */}
            <Button
                type="primary"
                block
                icon={<CreditCardOutlined />}
                className="mt-6 rounded-md py-3"
                onClick={() => setSelectedCard(null)} // Reset the selected card
            >
                Mở thẻ mới
            </Button>
        </div>
    );
};

export default CardForm;
