import { Header } from "antd/es/layout/layout"

const Headers = () => {
    return (
        <Header style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#001529' }}>
            <div className="logo" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
                KienlongBank
            </div>
        </Header>
    )
}

export default Headers;

