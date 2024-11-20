import React, { useState, useEffect } from 'react';
import { Layout as AntLayout } from 'antd';
import Headers from './Header';
import Footers from './Footer';

const { Content, Footer } = AntLayout;

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Kiểm tra kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px là kích thước chuẩn cho mobile
    };

    handleResize(); // Kiểm tra khi vừa load
    window.addEventListener('resize', handleResize); // Lắng nghe sự kiện resize

    return () => window.removeEventListener('resize', handleResize); // Dọn dẹp khi component unmount
  }, []);

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Headers />

      {/* Content */}
      <Content style={{ padding: isMobile ? '0' : '20px' }}>
        {children}
      </Content>

      {/* Footer */}
      <Footers />
    </AntLayout>
  );
};

export default Layout;
