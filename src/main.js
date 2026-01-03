import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import './style.css';
import App from '@/App.vue';
import router from './router/index';
import '@/assets/style.css';
import ElementPlus from 'element-plus';
import ToastPlugin, { useToast } from 'vue-toast-notification'; // Import useToast từ toast
import 'vue-toast-notification/dist/theme-bootstrap.css';
import 'element-plus/dist/index.css';
import axios from 'axios';
import { useAuthStore } from "@/stores/auth.js";
import VueSplide from '@splidejs/vue-splide';
import { registerGlobalComponents } from "./utils/import";
import vue3GoogleLogin from 'vue3-google-login'

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
const pinia = createPinia();
pinia.use(piniaPersist);

const app = createApp(App);

// Cấu hình ToastPlugin
const toast = useToast(); // Khởi tạo toast
app.use(vue3GoogleLogin, {
  clientId: '361072770018-idlrlon3k2j3up5tmuknps6t3qmmhmn6.apps.googleusercontent.com'
})

registerGlobalComponents(app);
app.use(router);
app.use(ElementPlus);
app.use(VueSplide);
app.use(pinia);
app.use(ToastPlugin, {
  position: 'top-right', // Vị trí của toast
  duration: 5000, // Thời gian hiển thị (mặc định là 3000ms)
  progress: true,
});

// Gán toast vào globalProperties
app.config.globalProperties.$toast = toast; // Đăng ký toast toàn cục

const authStore = useAuthStore();

axios.interceptors.request.use(config => {
  if (authStore && authStore.accessToken) {
    config.headers['Authorization'] = `Bearer ${authStore.accessToken}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

let isRefreshing = false;
let failedRequestsQueue = [];

axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // Kiểm tra lỗi 401 và thử lại yêu cầu
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (originalRequest.url === '/auth/refresh') {
         localStorage.setItem('returnUrl', window.location.pathname); // Lưu URL hiện tại

  authStore.logout();
  window.location.href = '/dang-nhap';
  return Promise.reject(error);
}

      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers['Authorization'] = `Bearer ${token}`;
          return axios(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      isRefreshing = true;

      try {
        const accessToken = await authStore.refreshTokenn();
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        // Giải quyết các yêu cầu trong hàng đợi
        failedRequestsQueue.forEach(prom => prom.resolve(accessToken));
        failedRequestsQueue = []; // Reset hàng đợi

        return axios(originalRequest); // Thực hiện lại yêu cầu gốc
      } catch (refreshError) {
        authStore.logout();
        failedRequestsQueue.forEach(prom => prom.reject(refreshError));
        failedRequestsQueue = [];
        authStore.logout();
        window.location.href = '/dang-nhap';
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false; // Reset cờ refreshing
      }
    }

    return Promise.reject(error);
  }
);

app.mount('#app');
