// src/components/Layout.jsx
import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { Link } from 'react-router-dom';
// import Header from './Header';
import Headers from './Header';
import Footers from './Footer';

const { Content, Footer } = AntLayout;

const Layout = ({ children }) => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Headers />

      {/* Content */}
      <Content style={{ padding: '20px' }}>
        {children}
      </Content>

      {/* Footer */}
      <Footers />
    </AntLayout>
  );
};

export default Layout;
