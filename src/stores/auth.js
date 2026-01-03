import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: '',
    accessToken: '',
    refreshToken: '',
    errorMessage: null,
  }),
  actions: {
    //Lấy thông tin người dùng
    async getInfo() {
      try {
        const response = await axios.get('/student/my_info/', {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },

        });
        this.user = response.data.data;
      } catch (error) {
        console.error('Get info failed:', error.response?.data?.error || error.message);
      }
    },
    //Đăng nhập
    async login(email, password) {
      try {
        const response = await axios.post('/auth/student/', { email, password });
        if (response.data && response.data.data) {
          this.accessToken = response.data.data.accessToken;
          this.refreshToken = response.data.data.refreshToken;
          axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
          this.errorMessage = null;
        } else {
          console.error('Unexpected response structure:', response);
        }
      } catch (error) {
        // Kiểm tra cấu trúc lỗi từ server
        if (error.response) {
          console.error('Error response:', error.response);

          const errorData = error.response.data;

          // Hiển thị thông báo lỗi từ server nếu có
          this.errorMessage = errorData?.error || 'Đã xảy ra lỗi khi đăng nhập.';
        } else if (error.request) {
          // Trường hợp không nhận được phản hồi từ server
          console.error('No response received:', error.request);
          this.errorMessage = 'Không thể kết nối tới server. Vui lòng thử lại.';
        } else {
          // Trường hợp lỗi khác (thiết lập request hoặc lỗi không xác định)
          console.error('Unexpected error:', error.message);
          this.errorMessage = 'Đã xảy ra lỗi không xác định.';
        }
      }
    }
    ,

    async loginWithGoogle(credential) {
      try {
        const response = await axios.post('/auth/student/google-login', { credential });

        // Kiểm tra xem token nằm ở đâu (response.data hay response.data.data)
        // Dựa vào code controller LoginGoogle trước đó: res.json({ accessToken, refreshToken }) 
        // => Token nằm trực tiếp ở response.data
        const data = response.data.data || response.data;

        if (data && data.accessToken) {
          // 1. Cập nhật State
          this.accessToken = data.accessToken;
          this.refreshToken = data.refreshToken;
          this.errorMessage = null;

          // 2. Gán Header mặc định cho các request sau này
          axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;

          // 3. Gọi ngay getInfo để lấy thông tin user nạp vào state "user"
          await this.getInfo();

          return true; // Trả về true báo hiệu thành công
        } else {
          this.errorMessage = "Không nhận được Token từ Google Login";
          return false;
        }
      } catch (error) {
        console.error('Google Login Error:', error);
        this.errorMessage = error.response?.data || "Lỗi đăng nhập Google";
        return false;
      }
    },


    async refreshTokenn() {
      try {
        const response = await axios.post(
          "/auth/refresh",
          {
            refreshToken: this.refreshToken,
          }
        );
        this.accessToken = response.data.data.accessToken;
        this.refreshToken = response.data.data.refreshToken;
        return this.accessToken;
      } catch (error) {
        if (error.response && error.response.status === 403) {
          this.errorMessage = 'Refresh token không hợp lệ. Vui lòng đăng nhập lại.';
          this.logout();
        } else {
          this.errorMessage = error.response?.data?.message || 'Failed to refresh token.';
        }
      }
    },

    logout() {
      // Xóa tất cả dữ liệu trong localStorage và sessionStorage
      localStorage.clear();
      sessionStorage.clear();

      // Reset các biến trạng thái
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;
      delete axios.defaults.headers.common['Authorization'];

      // (Tùy chọn) Chuyển hướng người dùng về trang đăng nhập
      window.location.href = '/';
    },
    // Phương thức để khôi phục user từ localStorage khi ứng dụng khởi động
    restoreUser() {
      const user = localStorage.getItem('user');
      if (user) {
        this.user = JSON.parse(user);
      }
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth', // Tên khóa lưu trữ trong localStorage
        storage: localStorage, // Lưu trữ trong localStorage
        paths: ['accessToken', 'refreshToken', 'user'], // Thêm user vào danh sách lưu trữ
      },
    ],
  },
});