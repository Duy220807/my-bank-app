import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Import jwt-decode
import DashboardPage from './pages/Home/DashboardPage';
import Layout from './components/Layout';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import TransferPage from './pages/Transfer/TransferPage';
import BillPaymentPage from './pages/BillPayment/BillPaymentPage';
import LoanPage from './pages/Loan/LoanPage';
import CreateCardPage from './pages/Card/CreateCardPage';

import './App.css';
import { getUserInfo } from './services/api';
import { setUser } from './redux/actions';
import { message } from 'antd';
import CustomerInfo from './pages/Customer/CustomerPage';


const MainApp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook để chuyển trang
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {

      if (location.pathname === '/login' || location.pathname === '/register') {
        return;
      }
      const token = localStorage.getItem('authToken');

      if (token) {
        try {
          // Decode the token to check expiration
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp < currentTime) {
            // Token has expired
            message.warning('Phiên đăng nhập của bạn đã hết hạn. Vui lòng đăng nhập lại.');
            localStorage.removeItem('authToken');
            navigate('/login'); // Chuyển về trang login
            return;
          }

          // Fetch user info
          const userInfo = await getUserInfo(token);
          console.log(userInfo);
          dispatch(setUser({
            username: `${userInfo.lastname} ${userInfo.firstname}`,
            role: 'admin',
          }));
        } catch (error) {
          console.error('Lỗi khi xác thực token:', error.message);
          message.error('Token không hợp lệ hoặc đã hết hạn.');
          localStorage.removeItem('authToken');
          navigate('/login'); // Chuyển về trang login
        }
      } else {
        // Không có token, chuyển về login
        navigate('/login');
      }
    };

    fetchUser();
  }, [dispatch, navigate]);

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  };

  return (
    <>
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
        <Route
          path="/customer-info"
          element={
            <Layout>
              <CustomerInfo />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

const App = () => (
  <Provider store={store}>
    <Router>
      <MainApp />
    </Router>
  </Provider>
);

export default App;
