import React from 'react';
import { Popover, Badge, Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const NotificationPopover = ({ notifications }) => {
    const notificationContent = (
        <div style={{ width: '300px' }}>
            {notifications.slice(0, 5).map((notification, index) => (
                <div key={index} style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                    <strong>{notification.title}</strong>
                    <p style={{ margin: '4px 0' }}>{notification.description}</p>
                    <small style={{ color: '#888' }}>{notification.date}</small>
                </div>
            ))}
            {notifications.length > 4 && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                    <Button type="link" style={{ padding: 0, fontSize: '14px' }}>
                        Xem tất cả
                    </Button>
                </div>
            )}
        </div>
    );

    return (
        <Popover
            content={notificationContent}
            trigger="hover"
            placement="bottomRight"
        >
            <Badge count={notifications.length} offset={[0, 0]} style={{ backgroundColor: '#ff4d4f', marginRight: '16px' }}>
                <BellOutlined className="text-white text-2xl cursor-pointer mr-6 hover:scale-110 hover:text-[#ff4d4f] transition-all duration-300" />
            </Badge>
        </Popover>
    );
};

export default NotificationPopover;
