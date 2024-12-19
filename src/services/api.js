import axios from "axios";

const API_URL = "/api/v1/";

// Cấu hình axios instance
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Hàm login
export const login = async (phone, password) => {
    try {
        const response = await axiosInstance.post("customer-info/auth/login", { phone, password });
        return response.data.data; // Lấy dữ liệu từ API
    } catch (error) {
        const errorMessage =
            error.response?.data?.message || "Đăng nhập thất bại!";
        throw new Error(errorMessage);
    }
};

// Hàm getUserInfo
export const getUserInfo = async (token) => {
    try {
        const response = await axiosInstance.get("/customer-info/customers", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data; // Trả về phần `data` từ API
    } catch (error) {
        const errorMessage =
            error.response?.data?.message || "Không thể lấy thông tin người dùng!";
        throw new Error(errorMessage);
    }
};

export const register = async (formData, accountNumber) => {
    try {
        // Create a new axios instance for multipart/form-data
        const axiosMultipart = axios.create({
            baseURL: API_URL,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        // Append accountNumber as query param in the URL
        const response = await axiosMultipart.post(
            `/customer-info/customers?accountNumber=${encodeURIComponent(accountNumber)}`,
            formData
        );

        return response.data; // Trả về toàn bộ phản hồi từ API
    } catch (error) {
        const errorMessage =
            error.response?.data?.message || "Đăng ký thất bại!";
        throw new Error(errorMessage);
    }
};

// Hàm getAccountInfo
export const getUserAccountInfo = async (token) => {
    try {
        const response = await axiosInstance.get("/banking-account/bankingAccount", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data; // Trả về phần `data` từ API
    } catch (error) {
        const errorMessage =
            error.response?.data?.message || "Không thể lấy thông tin người dùng!";
        throw new Error(errorMessage);
    }
};