


// import { mockUsers } from "./mockData";

export const mockUsers = [
    {
        id: 1,
        username: "admin",
        password: "admin123",
        role: "admin",
    },
    {
        id: 2,
        username: "user1",
        password: "user123",
        role: "user",
    },
    {
        id: 3,
        username: "manager",
        password: "manager123",
        role: "manager",
    },
];

export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = mockUsers.find(
                (u) => u.username === username && u.password === password
            );

            if (user) {
                resolve({
                    token: `${username}-token`,
                    'username': username,
                    id: user.id,
                    role: user.role,
                });
            } else {
                reject(new Error("Tên đăng nhập hoặc mật khẩu không đúng"));
            }
        }, 1000); // Mô phỏng độ trễ API
    });
};
