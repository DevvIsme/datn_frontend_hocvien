<template>
  <div class="max-w-md mx-auto my-20">
    <h2 class="text-xl font-semibold mb-4 text-left">Thay đổi mật khẩu mới</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
         Mật khẩu mới
        </label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label
          for="confirm-password"
          class="block text-sm font-medium text-gray-700"
        >
          Xác nhận mật khẩu
        </label>
        <input
          type="password"
          id="confirm-password"
          v-model="confirmPassword"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Xác nhận
      </button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const password = ref("");
    const confirmPassword = ref("");
    const error = ref("");
    const loading = ref(true);

    const route = useRoute();
    const router = useRouter();
    const token = route.params.id;

    // Kiểm tra tính hợp lệ của token
    onMounted(async () => {
      try {
        const response = await axios.get(`/student/forgot_password/${token}`);
        if (response.status !== 200) {
          router.push("/dang-nhap");
        }
      } catch (err) {
        console.error(err);
        router.push("/dang-nhap");
      } finally {
        loading.value = false;
      }
      console.log(token);
    });

    // Xử lý submit form
    const handleSubmit = async () => {
      error.value = ""; // Clear lỗi trước đó

      if (password.value !== confirmPassword.value) {
        error.value = "Passwords do not match!";
        return;
      }
      try {
        const response = await axios.post(`/student/forgot_password/${token}`, {
          new_password: password.value,
          confirm_password: confirmPassword.value,
        });

        if (response.status === 200) {
          alert("Thay đổi mật khẩu thành công!");
          router.push("/dang-nhap");
        }
      } catch (err) {
        console.error(err);
        error.value = "An error occurred. Please try again.";
      }
    };

    return {
      password,
      confirmPassword,
      error,
      loading,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
/* Thêm CSS nếu cần */
</style>
