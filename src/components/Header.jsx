import { Header } from "antd/es/layout/layout";
import { Dropdown, Menu } from "antd";
import avatar from '../assets/images/avatar.png'

const Headers = () => {
    const userMenu = (
        <Menu>
            <Menu.Item key="1">Thông tin cá nhân</Menu.Item>
            <Menu.Item key="2">Đăng xuất</Menu.Item>
        </Menu>
    );

    return (
        <Header style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#001529', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="logo" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
                KienlongBank
            </div>
            <Dropdown overlay={userMenu} trigger={['click']}>
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    {/* Thay Avatar bằng img để hiển thị ảnh từ local */}
                    <img
                        src={avatar}
                        style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '8px' }}
                    />
                    <span style={{ color: 'white', fontWeight: 600 }}>
                        NGUYEN VAN AN
                    </span>

                </div>
            </Dropdown>
        </Header>
    );
}

export default Headers;
