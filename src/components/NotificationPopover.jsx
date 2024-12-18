import React from 'react';
import { Popover, Badge, Button, Tabs } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const NotificationPopover = ({ notifications }) => {
    // Phân loại thông báo
    const generalNotifications = notifications.filter((n) => n.type === 'general');
    const personalNotifications = notifications.filter((n) => n.type === 'personal');

    const renderNotificationContent = (notifications, tabKey) => (
        <div style={{ width: '280px', maxWidth: '100%' }}>
            {notifications.slice(0, 5).map((notification, index) => (
                <div key={index} style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                    <strong>{notification.title}</strong>
                    <p style={{ margin: '4px 0' }}>{notification.description}</p>
                    <small style={{ color: '#888' }}>{notification.date}</small>
                </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                <Button
                    type="link"
                    style={{ padding: 0, fontSize: '14px' }}
                    onClick={() => console.log(`Xem tất cả thông báo ở tab: ${tabKey}`)}
                >
                    Xem tất cả
                </Button>
            </div>
        </div>
    );

    const notificationContent = (
        <Tabs defaultActiveKey="1">
            <TabPane tab="Thông báo chung" key="1">
                {renderNotificationContent(generalNotifications, 'Thông báo chung')}
            </TabPane>
            <TabPane tab="Thông báo cá nhân" key="2">
                {renderNotificationContent(personalNotifications, 'Thông báo cá nhân')}
            </TabPane>
        </Tabs>
    );

    return (
        <Popover
            content={notificationContent}
            trigger="hover"
            placement="bottom"
            overlayStyle={{
                maxWidth: '300px',
                minWidth: '280px',
            }}
        >
            <Badge size='small' count={notifications.length} offset={[0, 0]} style={{ backgroundColor: '#ff4d4f', marginRight: '16px' }}>
                <BellOutlined className="text-white text-xl cursor-pointer mr-6 hover:scale-110 hover:text-[#ff4d4f] transition-all duration-300" />
            </Badge>
        </Popover>
    );
};

export default NotificationPopover;
