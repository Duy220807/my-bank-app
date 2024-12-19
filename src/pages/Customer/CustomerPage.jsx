import React, { useState } from "react";
import { Card, Avatar } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined, IdcardOutlined, CalendarOutlined } from "@ant-design/icons";
import EditCustomerDrawer from "./EditCustomerDrawer";

const CustomerInfo = () => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [customer, setCustomer] = useState({
        id: "241211171118rY1hZk6",
        phone: "0480192983",
        firstname: "DUNG",
        lastname: "TRAN VAN",
        gender: "Nam",
        mail: "duynguyenquoc92@gmail.com",
        address: "Quang Binh",
        identityCard: "044099999888",
        dob: "1999-09-09",
        avatar:
            "https://customer-klb.s3.ap-southeast-2.amazonaws.com/1733911881284_avatar_241211171118rY1hZk6",
        roles: [],
    });

    const handleEdit = (updatedCustomer) => {
        setCustomer((prev) => ({ ...prev, ...updatedCustomer })); // Cập nhật thông tin khách hàng
    };

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <Card
                className="w-full max-w-3xl shadow-lg bg-white rounded-lg"
                style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    padding: "20px",
                }}
            >
                {/* Header */}
                <div className="text-center">
                    <Avatar
                        size={120}
                        src={customer.avatar}
                        icon={<UserOutlined />}
                        style={{
                            marginBottom: "10px",
                            border: "2px solid #1890ff",
                        }}
                    />
                    <h2 className="text-xl font-bold text-gray-800">
                        {customer.lastname} {customer.firstname}
                    </h2>
                    <p className="text-gray-500">{customer.gender}</p>
                </div>

                {/* Details */}
                <div className="mt-6 space-y-4">
                    <Card className="shadow-sm" bordered>
                        <p>
                            <PhoneOutlined /> <strong>Số điện thoại:</strong> {customer.phone}
                        </p>
                    </Card>
                    <Card className="shadow-sm" bordered>
                        <p>
                            <MailOutlined /> <strong>Email:</strong> {customer.mail}
                        </p>
                    </Card>
                    <Card className="shadow-sm" bordered>
                        <p>
                            <HomeOutlined /> <strong>Địa chỉ:</strong> {customer.address}
                        </p>
                    </Card>
                    <Card className="shadow-sm" bordered>
                        <p>
                            <IdcardOutlined /> <strong>CMND/CCCD:</strong> {customer.identityCard}
                        </p>
                    </Card>
                    <Card className="shadow-sm" bordered>
                        <p>
                            <CalendarOutlined /> <strong>Ngày sinh:</strong> {customer.dob}
                        </p>
                    </Card>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center">
                    <button
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300"
                        onClick={() => setIsDrawerVisible(true)} // Mở Drawer
                    >
                        Chỉnh sửa thông tin
                    </button>
                </div>
            </Card>

            {/* Drawer */}
            <EditCustomerDrawer
                visible={isDrawerVisible}
                onClose={() => setIsDrawerVisible(false)}
                customer={customer}
                onSave={handleEdit}
            />
        </div>
    );
};

export default CustomerInfo;
