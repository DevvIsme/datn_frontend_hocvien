<template>
  <div
    class="relative min-w-[343px] max-w-[343px] mx-auto flex py-6 px-4 justify-center bg-white rounded-xl"
  >
    <div class="absolute top-3 right-3 cursor-pointer">
      <img src="@/assets/icon/Cancel.svg" alt="close" title="close" class="" />
    </div>
    <div v-if="!successMsg" class="w-full max-w-[460px] mx-auto">
      <!-- Back button -->
      <div class="md:mb-3"></div>
      <!-- Main Form -->
      <div
        class="text-font28 max-lg:text-font20 font-bold text-color-text-1 mb-4 text-center"
        data-i18n="quen_mat_khau"
      >
        Quên mật khẩu
      </div>

      <form @submit.prevent="submitForgetPassword">
        <label
          for="email"
          class="block text-base font-medium text-color-text-1 mb-1"
          data-i18n="vui_long_nhap_email_de_kho_phuc"
        >
          Vui lòng nhập email để khôi phục
          <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <input
            id="email"
            v-model="email"
            type="text"
            :class="[
              'w-full h-[40px] px-3 py-2 border rounded-md outline-none ',
              errorMsg ? 'border-red-500 pr-10' : 'border-line',
            ]"
            placeholder="Nhập email"
          />
          <!-- Error Icon -->
          <div
            v-if="errorMsg"
            class="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <img src="@/assets/icon/Login/Delete@2x.svg" alt="" />
          </div>
        </div>
        <!-- Error Message -->
        <p v-if="errorMsg" class="text-color-red font-medium text-base mt-1">
          {{ errorMsg }}
        </p>

        <button
          type="submit"
          class="w-full bg-color-primary-2 text-white font-semibold text-base py-2 px-4 rounded-md transition-colors mt-5 flex flex-row items-center justify-center"
          :disabled="!isEnable"
          :class="{
            'opacity-50 cursor-not-allowed': !isEnable,
          }"
        >
          <span
            class="spinner loader loader-white mr-3"
            v-show="loading"
          ></span>
          <span data-i18n="khoi_phuc">Khôi phục</span>
        </button>
      </form>
    </div>
    <div
      v-if="successMsg"
      class="w-full max-w-[460px] flex flex-col justify-center items-center mx-auto"
    >
      <div class="relative flex items-center justify-center w-[80px] h-[80px]">
        <span
          class="animate-ping absolute inline-flex h-[50px] w-[50px] rounded-full bg-green-500/[0.3] z-0"
        ></span>
        <span
          class="absolute inline-flex h-[58px] w-[58px] rounded-full bg-green-500/[0.7] z-1"
        ></span>
        <img
          alt="notice"
          class="w-[27.5px] h-[27.5px] relative z-10 animate-wiggle"
          src="@/assets/icon/success.svg"
        />
      </div>
      <div class="text-color-text-1 font-bold text-2xl">Thành công</div>
      <p
        class="text-base mt-1 text-center text-color-text-2 w-[75%]"
        v-html="successMsg"
      ></p>
      <RouterLink
        :to="{ name: 'Home' }"
        class="w-full bg-color-primary-2 text-white font-semibold text-base py-2.5 rounded-md transition-colors mt-6 flex items-center justify-center"
      >
        <span data-i18n="da_hieu">Đã hiểu</span>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      errorMsg: "",
      successMsg: "",
      loading: false,
      isEnable: false,
    };
  },
  watch: {
    email(val) {
      if (val != "") {
        this.isEnable = true;
      } else {
        this.isEnable = false;
      }
    },
  },
  methods: {
    closeAllModal() {
      eventBus.$emit("closeAllModal");
    },
    toggleForgotPassword() {
      this.$emit("toggleForgotPassword");
    },
    validateEmail(email) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(email).toLowerCase()
      );
    },
    async submitForgetPassword() {
      // Không gửi yêu cầu nếu nút không khả dụng
      if (!this.isEnable) return;

      // Kiểm tra email hợp lệ
      if (!this.validateEmail(this.email)) {
        this.errorMsg = "Email không đúng định dạng";
        return;
      } else {
        this.errorMsg = "";
      }

      // Gửi yêu cầu API
      this.loading = true; // Bật trạng thái loading
      try {
        const response = await axios.post("/student/forgot_password/", {
          email: this.email,
          origin: "http://localhost:5173",
        });

        // Kiểm tra nếu mã trả về là 200
        if (
          response.data?.code === 200 &&
          response.data?.status === "success"
        ) {
          this.successMsg = response.data.data; // Hiển thị thông báo thành công
          this.errorMsg = ""; // Xóa thông báo lỗi (nếu có)
        } else {
          // Trường hợp không thành công nhưng không có lỗi rõ ràng
          this.errorMsg = "Có lỗi xảy ra. Vui lòng thử lại sau.";
        }
      } catch (error) {
        // Xử lý lỗi từ server
        this.errorMsg =
          error.response?.data?.error ||
          "Không thể gửi yêu cầu. Vui lòng thử lại.";
      } finally {
        this.loading = false; // Tắt trạng thái loading
      }
    },
  },
};
</script>
