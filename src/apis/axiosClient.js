import axios from "axios";
import { alertError } from "./sweetAlert2";

const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgMzgiLCJIZXRIYW5TdHJpbmciOiIwMS8wNy8yMDI0IiwiSGV0SGFuVGltZSI6IjE3MTk3OTIwMDAwMDAiLCJuYmYiOjE3MDI0ODY4MDAsImV4cCI6MTcxOTkzOTYwMH0.j5NPYZk0JxrCI1kfiyTujvsQhlzH2uqY_tEuBXaJbyY",
  },
});

axiosClient.interceptors.request.use((config) => {
  // config: chứa thông tin của request từ client gửi lên server

  // Thêm key Authorization vào headers của request nếu user đã đăng nhập
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Xử lý những error chung
    const noiDungLoi = error?.response?.data?.content;
    alertError(noiDungLoi);
    // Lỗi 401: Trường hợp token hết hạn => Đăng xuất
    if (error.response.status === 401) {
      localStorage.removeItem("user");
      //   window.history.replaceState(null, null, "/signin");
      window.location.href = "/signin";
    }
  }
);

export default axiosClient;
