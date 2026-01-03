<template>
  <div class="container mx-auto pt-40 flex justify-center items-center">
    <div
      class="flex flex-col items-center w-full max-w-md bg-white shadow-lg rounded-lg p-8"
    >
      <!-- Tabs -->
      <div class="flex w-full mb-6">
        <button
          class="flex-1 py-2 font-semibold border-b-2"
          :class="
            isLogin
              ? 'border-blue-500 text-blue-600'
              : 'border-gray-200 text-gray-400'
          "
          @click="isLogin = true"
        >
          Đăng nhập
        </button>
        <button
          class="flex-1 py-2 font-semibold border-b-2"
          :class="
            !isLogin
              ? 'border-blue-500 text-blue-600'
              : 'border-gray-200 text-gray-400'
          "
          @click="isLogin = false"
        >
          Đăng ký
        </button>
      </div>

      <!-- ========== FORM ĐĂNG NHẬP ========== -->
      <form v-if="isLogin" @submit.prevent="handleLogin" class="w-full">
        <p class="font-semibold text-2xl mb-6 text-center">Đăng nhập</p>

        <div class="w-full mb-4">
          <label for="email" class="block text-sm font-medium mb-1"
            >Email</label
          >
          <input
            v-model="email"
            type="text"
            name="email"
            class="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Nhập email"
          />
        </div>

        <div class="w-full mb-4 relative">
          <label for="password" class="block text-sm font-medium mb-1"
            >Mật khẩu</label
          >
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            name="password"
            class="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Nhập mật khẩu"
          />
          <div
            v-if="hasPass"
            class="absolute right-3 top-[34px] text-gray-400 cursor-pointer"
            @click="showPassword = !showPassword"
          >
            <img
              v-if="!showPassword"
              src="@/assets/icon/eye-slash.svg"
              alt="show password"
              title="Ẩn"
            />
            <img
              v-if="showPassword"
              src="@/assets/icon/eye-pass.svg"
              alt="show password"
              title="Hiện"
            />
          </div>
        </div>

        <div @click="openForm" class="ml-auto cursor-pointer w-fit">
          <div class="text-base font-medium text-color-primary-2 mb-6">
            Quên mật khẩu?
          </div>
        </div>

        <button
          type="submit"
          class="bg-blue-500 text-white rounded-md w-full p-2 hover:bg-blue-600 transition duration-200"
        >
          Đăng nhập
        </button>
        <div class="mt-4 flex flex-col items-center">
          <p class="text-gray-500 text-sm mb-2">Hoặc</p>
          <GoogleLogin :callback="callbackGoogle" />
        </div>
      </form>

      <!-- ========== FORM ĐĂNG KÝ ========== -->
      <form
        v-else
        @submit.prevent="handleRegister"
        enctype="multipart/form-data"
        class="w-full"
      >
        <p class="font-semibold text-2xl mb-6 text-center">Đăng ký</p>

        <input
          v-model="register.fullName"
          class="input"
          placeholder="Họ tên"
          required
        />
        <input
          v-model="register.email"
          class="input"
          placeholder="Email"
          type="email"
          required
        />
        <input
          v-model="register.password"
          class="input"
          placeholder="Mật khẩu"
          type="password"
          required
        />

        <div class="mb-3">
          <label class="block text-sm font-medium mb-1">Giới tính</label>
          <select v-model="register.gender" class="input">
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
        </div>

        <input
          v-model="register.phone"
          class="input"
          placeholder="Số điện thoại"
        />
        <input
          v-model="register.birthday"
          class="input"
          type="date"
          placeholder="Ngày sinh"
        />

        <div class="mb-3">
          <label class="block text-sm font-medium mb-1">Ảnh đại diện</label>
          <input
            type="file"
            accept="image/*"
            @change="handleFileChange"
            class="input"
          />
          <div v-if="avatarPreview" class="text-center mt-2">
            <img
              :src="avatarPreview"
              class="w-20 h-20 rounded-full mx-auto border"
            />
          </div>
        </div>

        <button
          type="submit"
          class="bg-green-500 text-white rounded-md w-full p-2 hover:bg-green-600 transition duration-200"
        >
          Đăng ký
        </button>
      </form>
    </div>

    <!-- Modal Quên mật khẩu -->
    <Modal ref="ForgotPassword" @close-modal="doClearChangePassword">
      <ForgotPassword />
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
import Modal from "@/components/global/Modal.vue";
import ForgotPassword from "./ForgotPassword.vue";
import axios from "axios";

export default {
  name: "DangNhap",
  components: { Modal, ForgotPassword },
  data() {
    return {
      isLogin: true,
      showPassword: false,
      email: "",
      password: "",
      register: {
        fullName: "",
        email: "",
        password: "",
        gender: "other",
        phone: "",
        birthday: "",
        avatarFile: null,
      },
      avatarPreview: null,
    };
  },

  computed: {
    ...mapState(useAuthStore, ["user", "refreshToken"]),
    hasPass() {
      return this.password.length > 0;
    },
  },

  methods: {
    openForm() {
      this.$refs.ForgotPassword.openModal();
    },
    ...mapActions(useAuthStore, ["login", "getInfo"]),

    // Đăng nhập
    async handleLogin() {
      await this.login(this.email, this.password);
      await this.getInfo();

      if (this.user) {
        this.$toast.success("Đăng nhập thành công");
        window.location.href = "/";
      } else {
        this.$toast.error("Đăng nhập thất bại");
      }
    },
async callbackGoogle(response) {
      try {
        const authStore = useAuthStore(); // Gọi store ra
        
        // Gọi action loginWithGoogle vừa viết trong Store
        const success = await authStore.loginWithGoogle(response.credential);

        if (success) {
            this.$toast.success("Đăng nhập Google thành công!");
            
            // Chuyển trang
            // Vì store đã cập nhật state xong xuôi, router sẽ hoạt động mượt mà
            // Nếu bạn dùng Vue Router:
            this.$router.push('/');
            
            // Hoặc nếu muốn reload cứng để reset socket/cache:
            // window.location.href = "/"; 
        } else {
            this.$toast.error(authStore.errorMessage || "Đăng nhập thất bại");
        }
      } catch (err) {
        console.error(err);
        this.$toast.error("Có lỗi xảy ra");
      }
    },
  
    // Xử lý chọn ảnh
    handleFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.register.avatarFile = file;
        this.avatarPreview = URL.createObjectURL(file);
      }
    },

    // Đăng ký
    async handleRegister() {
      try {
        const formData = new FormData();
        for (const key in this.register) {
          if (key !== "avatarFile") formData.append(key, this.register[key]);
        }
        if (this.register.avatarFile)
          formData.append("avatar", this.register.avatarFile);

        const res = await axios.post(
          "/auth/student/register",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        this.$toast.success("Đăng ký thành công!");
        console.log(res.data);
        this.isLogin = true;
      } catch (err) {
        this.$toast.error(err.response?.data || "Lỗi đăng ký!");
      }
    },
  },
};
</script>

<style scoped>
.input {
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  outline: none;
}
.input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px #bfdbfe;
}
</style>
