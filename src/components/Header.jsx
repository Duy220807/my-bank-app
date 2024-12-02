import { Header } from "antd/es/layout/layout";
import { Dropdown, Menu, message } from "antd";
import avatar from '../assets/images/avatar.png';
import logo from '../assets/logo/logo.png'; // Đường dẫn đến ảnh logo
import NotificationPopover from "./NotificationPopover";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../redux/actions";

const Headers = () => {
    const user = useSelector((state) => state.user); // 
    // const user = useSelector((state) => state.user); // Lấy thông tin người dùng từ Redux
    const dispatch = useDispatch(); // Khởi tạo dispatch
    const navigate = useNavigate(); // Khởi tạo navigate

    const handleLogout = () => {
        dispatch(clearUser()); // Xóa thông tin người dùng từ Redux
        localStorage.removeItem("authToken"); // Xóa token từ localStorage
        message.success("Đăng xuất thành công");
        navigate("/login"); // Điều hướng về trang đăng nhập
    };

    const userMenu = (
        <Menu>
            <Menu.Item key="1">Thông tin cá nhân</Menu.Item>
            <Menu.Item key="2" onClick={handleLogout}>Đăng xuất</Menu.Item>
        </Menu>
    );

    const notifications = [
        {
            title: "Thông báo 1",
            description: "Mô tả chi tiết của thông báo 1",
            date: "2024-11-19 10:00",
            type: "general"
        },
        {
            title: "Thông báo 2",
            description: "Mô tả chi tiết của thông báo 2",
            date: "2024-11-19 11:00",
            type: "general"
        },
        {
            title: "Thông báo 3",
            description: "Mô tả chi tiết của thông báo 3",
            date: "2024-11-19 12:00",
            type: "personal"
        },
        {
            title: "Thông báo 4",
            description: "Mô tả chi tiết của thông báo 4",
            date: "2024-11-19 13:00",
            type: "personal"
        },
        {
            title: "Thông báo 5",
            description: "Mô tả chi tiết của thông báo 5",
            date: "2024-11-19 14:00",
            type: "personal"
        }
    ];



    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                background: '#001529',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px', // Thêm padding để tránh các phần tử bị cắt
            }}
        >
            {/* Logo */}
            <div style={{ flex: 1 }}>
                <img
                    src={logo}
                    alt="KienlongBank Logo"
                    onClick={() => window.location.href = '/'} // Điều hướng về trang chủ
                    style={{
                        height: '30px',  // Giảm chiều cao logo trên màn hình nhỏ
                        maxWidth: '100%',
                        objectFit: 'contain',  // Đảm bảo logo không bị méo
                        cursor: 'pointer', // Thay đổi con trỏ chuột khi hover
                        transition: 'transform 0.3s ease', // Thêm hiệu ứng chuyển động
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} // Phóng to khi hover
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Trở lại kích thước ban đầu
                />
            </div>


            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Nút thông báo */}
                <NotificationPopover notifications={notifications} />

                {/* Dropdown user */}
                <Dropdown overlay={userMenu} trigger={['click']}>
                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <img
                            src={avatar}
                            alt="Avatar"
                            style={{
                                width: '25px',  // Giảm kích thước avatar trên mobile
                                height: '25px',
                                borderRadius: '50%',
                                marginRight: '8px',
                            }}
                        />
                        <span style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>
                            {user?.username || "Khách"} {/* Hiển thị username hoặc "Khách" nếu chưa đăng nhập */}
                        </span>
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
}

export default Headers;
