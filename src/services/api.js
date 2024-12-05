// services/api.js
import axios from "axios";

const API_URL = "/api/v1/customer-info";

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
        const response = await axiosInstance.post("/auth/login", { phone, password });
        return response.data.data; // Lấy dữ liệu từ API
    } catch (error) {
        // Xử lý lỗi
        const errorMessage =
            error.response?.data?.message || "Đăng nhập thất bại!";
        throw new Error(errorMessage);
    }
};

export const getUserInfo = async (token) => {
    try {
        const response = await axiosInstance.get("/customers", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.data; // Trả về phần `data` từ API
    } catch (error) {
        // Xử lý lỗi giống như login
        const errorMessage =
            error.response?.data?.message || "Không thể lấy thông tin người dùng!";
        throw new Error(errorMessage);
    }
};

