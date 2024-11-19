// src/App.jsx
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
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
            element={
              <RegisterPage />
            }
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
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
