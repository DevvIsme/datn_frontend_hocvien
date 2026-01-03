<template>
  <div class="mt-3">
    <button
      @click="handleGetExplanation"
      class="flex items-center gap-2 text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-5 h-5"
      >
        <path
          d="M12 2C7.589 2 4 5.589 4 10a9.98 9.98 0 002.396 6.545c.428.53.593 1.228.375 1.868l-.453 1.358A3.003 3.003 0 009.166 24h5.668a3.003 3.003 0 002.848-4.229l-.453-1.358c-.218-.64.053-1.338.48-1.868A9.98 9.98 0 0020 10c0-4.411-3.589-8-8-8zm0 2c3.309 0 6 2.691 6 6 0 2.256-1.258 4.229-3.125 5.253a2.978 2.978 0 00-1.47 2.05L13.12 18h-2.24l-.285-.854a2.979 2.979 0 00-1.47-1.996A5.969 5.969 0 016 10c0-3.309 2.691-6 6-6z"
        />
        <path d="M11 19h2v2h-2z" />
      </svg>
      {{
        loading
          ? "Đang hỏi giáo viên AI..."
          : isOpen
          ? "Ẩn giải thích"
          : "Xem giải thích chi tiết (AI)"
      }}
    </button>

    <div
      v-if="isOpen && explanation"
      class="mt-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg animate-fade-in"
    >
      <h4 class="font-bold text-yellow-800 mb-2 flex items-center text-sm">
        <span class="text-xl mr-2">🎓</span> Góc giải thích:
      </h4>
      <p
        class="text-gray-800 text-sm leading-relaxed whitespace-pre-line text-justify"
      >
        {{ explanation.explanation }}
      </p>

      <div
        v-if="explanation.key_point"
        class="mt-3 pt-3 border-t border-yellow-200"
      >
        <span
          class="font-bold text-yellow-900 text-xs uppercase tracking-wide"
          >Ghi nhớ:</span
        >
        <p class="text-yellow-800 text-sm italic font-medium mt-1">
          "{{ explanation.key_point }}"
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    questionData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      loading: false,
      explanation: null,
    };
  },
  methods: {
    async handleGetExplanation() {
      // Toggle đóng mở
      if (this.isOpen) {
        this.isOpen = false;
        return;
      }

      // Nếu đã có data (cache) thì mở luôn ko cần gọi lại
      if (this.explanation) {
        this.isOpen = true;
        return;
      }

      this.loading = true;
      try {
        // Chuẩn bị payload khớp với format backend mong đợi
        // Dữ liệu từ prop questionData (lấy từ XemDapAn.vue)
        const payload = {
          name: this.questionData.question, // Text câu hỏi
          choice: this.questionData.options.map((opt) => opt.text), // Mảng text lựa chọn
          correctAns: this.questionData.answer, // Mảng đáp án đúng
        };

        // Gọi API backend
        const response = await axios.post("/exam/explain", {
          question: payload,
        });

        this.explanation = response.data.data.data;
        this.isOpen = true;
      } catch (error) {
        console.error(error);
        alert("Hệ thống AI đang bận, vui lòng thử lại sau!");
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>