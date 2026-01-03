<template>
  <div class="result-summary">
    <div
      class="flex justify-center items-center py-2 border-b border-color-border max-md:hidden"
    >
      <p class="text-color-primary text-font20lh font-semibold max-md:text-lg">
        Kết quả thi
      </p>
    </div>

    <!-- Thông tin tổng quát -->
    <div class="py-2 border-b border-color-border">
      <div class="grid grid-cols-2 gap-5 py-5 max-md:py-0">
        <!-- Phần Điểm -->
        <div class="text-center">
          <p class="text-color-text-1 text-base font-semibold max-md:text-sm">
            Điểm
          </p>
          <div class="p-2 rounded-lg mt-1" :class="scoreClass">
            <p class="text-lg font-semibold max-md:text-base">
              {{ score }} điểm
            </p>
          </div>
        </div>

        <!-- Phần Kết quả -->
        <div class="text-center">
          <p class="text-color-text-1 text-base font-semibold max-md:text-sm">
            Kết quả
          </p>
          <div class="p-2 rounded-lg mt-1" :class="statusClass">
            <p class="text-lg font-semibold max-md:text-base">
              {{ status }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p class="text-color-gray text-sm">
          Số câu đúng:
          <span class="text-color-text-1 font-medium ml-2"
            >{{ correctAnswers }}/{{ totalQuestions }}</span
          >
        </p>
        <p class="text-color-gray text-sm mt-1">
          Làm bài lúc:
          <span class="text-color-text-1 font-medium ml-2">{{
            createdAt
          }}</span>
        </p>
        <p class="text-color-gray text-sm mt-1">
          Nộp bài lúc:
          <span class="text-color-text-1 font-medium ml-2">{{ submitAt }}</span>
        </p>
      </div>
    </div>

    <!-- Chi tiết các câu hỏi -->
    <div class="grid grid-cols-5 gap-2 max-md:grid-cols-4 mt-3">
      <div
        v-for="(question, index) in detailResult"
        :key="question.id"
        :class="buttonClass(question)"
        @click="goToQuestion(index)"
      >
        <p>{{ index + 1 }}</p>
      </div>
    </div>

  <div class="py-4 border-t border-color-border mt-2">
      <p class="text-color-text-1 text-sm font-semibold mb-3">Chú thích ký hiệu:</p>
      
      <div class="flex items-center gap-3 mb-2">
        <div class="w-8 h-8 rounded-lg bg-green-50 border border-green-500 flex items-center justify-center flex-shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
           </svg>
        </div>
        <p class="text-color-text-1 text-sm">Đáp án bạn <span class="text-green-600 font-semibold">chọn đúng</span></p>
      </div>

      <div class="flex items-center gap-3 mb-2">
        <div class="w-8 h-8 rounded-lg bg-red-50 border border-red-500 flex items-center justify-center flex-shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
           </svg>
        </div>
        <p class="text-color-text-1 text-sm">Đáp án bạn <span class="text-red-500 font-semibold">chọn sai</span></p>
      </div>

      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-white border-2 border-dashed border-green-500 flex items-center justify-center flex-shrink-0">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
           </svg>
        </div>
        <p class="text-color-text-1 text-sm">Đáp án đúng <span class="text-gray-500 text-xs">(bạn chưa chọn)</span></p>
      </div>
    </div> 

    <!-- Nút điều hướng -->
    <div class="text-center flex items-center justify-between gap-4">
      <div
        @click="$router.back()"
        class="px-4 py-[9px] bg-color-white border border-color-primary-2 rounded-lg flex-1"
      >
        <p class="text-color-primary-2 text-base font-semibold max-md:text-sm">
          Trở lại
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      score: "", // giả sử 75 điểm, có thể cập nhật khi load API
      status: "", // trạng thái mặc định
      correctAnswers: "", // số câu đúng
      totalQuestions: "", // tổng số câu hỏi
      createdAt: "",
      submitAt: "",
      detailResult: [], // chứa dữ liệu chi tiết từng câu hỏi
    };
  },
  async created() {
    try {
      const id = this.$route.params.id;
      const response = await axios.get(`/exam/detail-result/${id}`);
      const data = response.data.data;
      console.log(data);
      // Cập nhật dữ liệu từ API
      this.score = data.point; // ví dụ tính điểm
      this.status = data.isPass ? "Đạt" : "Chưa đạt"; // điều kiện đạt/chưa đạt
      this.correctAnswers = data.correctAns;
      this.totalQuestions = data.detailResult.length;
      this.createdAt = data.createdAt;
      this.submitAt = data.submitAt;
      this.detailResult = data.detailResult;
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết kết quả bài thi:", error);
    }
  },
  methods: {
    isCorrect(question) {
      const { answer, correctAns } = question;

      // Sắp xếp và so sánh
      return (
        JSON.stringify([...answer].sort()) ===
        JSON.stringify([...correctAns].sort())
      );
    },
    buttonClass(question) {
      return this.isCorrect(question)
        ? "p-[10px] bg-color-green flex justify-center items-center text-white rounded-lg relative font-semibold"
        : "p-[10px] bg-color-red flex justify-center items-center text-white rounded-lg relative font-semibold";
    },
    goToQuestion(index) {
      this.currentQuestionIndex = index;
      this.$nextTick(() => {
        const questionElement = document.getElementById(`question-${index}`);
        if (questionElement) {
          questionElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    },
  },
  computed: {
    scoreClass() {
      return this.status
        ? "bg-color-green text-white"
        : "bg-color-red text-white";
    },
    statusClass() {
      return this.status === "Đạt"
        ? "bg-color-green text-white"
        : "bg-color-red text-white";
    },
  },
};
</script>

<style scoped>
.bg-color-green {
  background-color: #4caf50; /* Màu xanh */
}
.bg-color-red {
  background-color: #f44336; /* Màu đỏ */
}
</style>
