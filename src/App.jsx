import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
// import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/Home/DashboardPage';
// import RegisterPage from './pages/RegisterPage';
// import TransferPage from './pages/TransferPage';
import Layout from './components/Layout'; // Import Layout
// import PaymentPage from './pages/PaymentPage';
// import LoanPage from './pages/LoanPage';
// import TransferPage from './pages/Transfer';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import TransferPage from './pages/Transfer/TransferPage';
import BillPaymentPage from './pages/BillPayment/BillPaymentPage';
import LoanPage from './pages/Loan/LoanPage';
import CreateCardPage from './pages/Card/CreateCardPage';

import './App.css'

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Cuộn lên đầu trang mỗi khi đường dẫn thay đổi
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop /> {/* Đảm bảo ScrollToTop luôn được sử dụng */}
        <Routes>
          {/* Chuyển hướng từ / sang /dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Các trang auth */}
          <Route path="/login" element={<LoginPage />} />

          {/* Các trang khác sử dụng Layout */}
          <Route
            path="/dashboard"
            element={
              <Layout>
                <DashboardPage />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
          <Route
            path="/transfer"
            element={
              <Layout>
                <TransferPage />
              </Layout>
            }
          />
          <Route
            path="/payment"
            element={
              <Layout>
                <BillPaymentPage />
              </Layout>
            }
          />
          <Route
            path="/loan"
            element={
              <Layout>
                <LoanPage />
              </Layout>
            }
          />
          <Route
            path="/card"
            element={
              <Layout>
                <CreateCardPage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
