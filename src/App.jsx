import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import DashboardPage from './pages/Home/DashboardPage';
import Layout from './components/Layout'; // Import Layout
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import TransferPage from './pages/Transfer/TransferPage';
import BillPaymentPage from './pages/BillPayment/BillPaymentPage';
import LoanPage from './pages/Loan/LoanPage';
import CreateCardPage from './pages/Card/CreateCardPage';

import './App.css'
import { getUserInfo } from './services/api';
import { setUser } from './redux/actions';

const MainApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('authToken'); // Lấy token từ localStorage
      if (token) {
        try {
          const userInfo = await getUserInfo(token); // Gọi API để lấy thông tin người dùng
          console.log(userInfo)
          dispatch(setUser({
            username: userInfo.phone,
            role: 'admin',
          }));
        } catch (error) {
          console.error('Lỗi khi xác thực token:', error.message);
          localStorage.removeItem('authToken'); // Xóa token nếu không hợp lệ
        }
      }
    };

    fetchUser();
  }, []);

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      // Cuộn lên đầu trang mỗi khi đường dẫn thay đổi
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <DashboardPage />
            </Layout>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
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
  );
};

const App = () => (
  <Provider store={store}>
    <MainApp />
  </Provider>
);

export default App;
