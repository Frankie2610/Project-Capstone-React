import axios from "axios";
import { alertError } from "./sweetAlert2";

const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MiIsIkhldEhhblN0cmluZyI6IjExLzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjI1MjgwMDAwMCIsIm5iZiI6MTY2NzA2MjgwMCwiZXhwIjoxNzAyNDAwNDAwfQ.WRTj_6tr0SSgX4a_yoloJ5KyL5DGv9E21DyHyblms2A",
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
