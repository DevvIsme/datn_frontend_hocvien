<template>
  <!-- Đồng hồ đếm ngược -->
  <div class="flex justify-center items-center py-5 max-sm:py-2 gap-2">
    <img
      v-if="remainingSeconds > 300 && timeDisplay"
      src="@/assets/images/alarm-clock 1.svg"
      alt="Clock"
      class="max-md:h-8 max-sm:h-4"
    />
    <img
      v-else-if="remainingSeconds <= 300 && timeDisplay"
      src="@/assets/images/timered.png"
      alt="Clock"
      class="max-md:max-h-8 max-sm:max-h-4 animate-wiggle"
    />
    <p
      :class="[
        'text-4xl font-bold max-md:text-3xl max-sm:text-xs',
        remainingSeconds > 300 ? 'text-color-greend-2' : 'text-red-500',
      ]"
    >
      {{ timeDisplay }}
    </p>
  </div>

  <!-- Các nút điều hướng câu hỏi -->
  <div class="grid grid-cols-5 gap-2 max-lg:grid-cols-3 max-sm:grid-cols-6">
    <button
      v-for="(question, index) in dataQuestion"
      @click="goToQuestion(index)"
      :key="index"
      :class="[
        'p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-black flex justify-center items-center text-color-text-1 rounded-lg relative font-semibold border border-color-border w-11 h-11',
        {
          'bg-color-primary-2 text-white': isActive(question.id),
        },
      ]"
    >
      {{ index + 1 }}
    </button>
  </div>

  <!-- Thông báo thời gian -->
  <div
    class="flex items-start bg-color-orange-2 p-2 max-sm:p-1 rounded-md border border-color-orange-1 gap-2 mt-5 max-sm:flex-wrap max-md:text-center max-sm:justify-center"
  >
    <img src="@/assets/images/info-circle.svg" alt="Icon" class="max-lg:h-3" />
    <p class="text-color-primary text-sm max-lg:text-xs max-sm:text-[5px]">
      Thời gian được tính từ lúc bắt đầu làm bài. Hết thời gian quy định hệ
      thống sẽ tự động nộp bài.
    </p>
  </div>

  <!-- Nút Nộp bài -->
  <div class="py-5 text-center max-sm:py-2">
    <button
      @click="openThongBaoModal"
      class="px-4 py-2 max-sm:px-2 max-sm:py-1 bg-color-primary-2 rounded-lg text-white text-sm"
    >
      <p class="max-sm:text-[10px]">Nộp bài</p>
    </button>
  </div>
  <Modal ref="PopUpThongBao">
    <PopupThongBao @close="closeThongBaoModal" @submit="emitSubmitExam" />
  </Modal>
</template>

<script>
import Modal from "@/components/global/Modal.vue";
import PopupThongBao from "./PopupThongBao.vue";
export default {
  props: {
    dataQuestion: Array,
    selectedAnswers: Object,
    timeDisplay: String,
    remainingSeconds: Number,
  },
  components: { Modal, PopupThongBao },
  data() {
    return {
      countdownInterval: null,
      currentQuestionIndex: null,
    };
  },
  emits: ["submitExam"],
  methods: {
    openThongBaoModal() {
      this.$refs.PopUpThongBao.openModal();
    },
    closeThongBaoModal() {
      this.$refs.PopUpThongBao.closeModal();
    },
    isActive(questionId) {
      return this.selectedAnswers.hasOwnProperty(questionId);
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
    emitSubmitExam() {
      clearInterval(this.countdownInterval); // Dừng đồng hồ đếm ngược
      localStorage.removeItem("remainingTime"); // Xóa `remainingTime` khỏi `localStorage`
      this.$emit("submitExam");
    },
  },

  beforeUnmount() {
    clearInterval(this.countdownInterval);
  },
};
</script>
