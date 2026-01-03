<script>
import GiaiThichAI from "./GiaiThichAI.vue";

export default {
  components: {
    GiaiThichAI,
  },
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    /**
     * Xác định trạng thái của một lựa chọn (option) để trả về class CSS phù hợp
     */
    getOptionClass(question, optionText) {
      const isSelected = this.checkSelected(question, optionText);
      const isCorrect = this.checkCorrect(question, optionText);

      // 1. Trường hợp người dùng chọn
      if (isSelected) {
        if (isCorrect) {
          // Chọn ĐÚNG: Nền xanh nhạt, viền xanh
          return "bg-green-50 border-green-500 text-green-700 font-medium";
        } else {
          // Chọn SAI: Nền đỏ nhạt, viền đỏ
          return "bg-red-50 border-red-500 text-red-700 font-medium";
        }
      }

      // 2. Trường hợp người dùng KHÔNG chọn nhưng đó là đáp án ĐÚNG
      if (!isSelected && isCorrect) {
        return "bg-white border-green-500 text-green-600 border-dashed border-2";
      }

      // 3. Các đáp án còn lại (Bình thường)
      return "bg-white border-gray-200 text-gray-600 hover:bg-gray-50";
    },

    /**
     * Helper: Kiểm tra xem option này có được user chọn không
     */
    checkSelected(question, optionText) {
      if (Array.isArray(question.selectedAnswer)) {
        return question.selectedAnswer.includes(optionText);
      }
      return question.selectedAnswer === optionText;
    },

    /**
     * Helper: Kiểm tra xem option này có phải đáp án đúng không
     */
    checkCorrect(question, optionText) {
      if (Array.isArray(question.answer)) {
        return question.answer.includes(optionText);
      }
      return question.answer === optionText; // Fallback nếu data không chuẩn mảng
    }
  },
};
</script>

<template>
  <div class="container mx-auto bg-white rounded-lg shadow-sm">
    <div class="p-5">
      <div
        v-for="(question, index) in questions"
        :key="question.id"
        :id="`question-${index}`"
        class="border-b border-color-border py-6 last:border-0"
      >
        <div class="mb-4">
          <p class="text-color-primary text-lg font-semibold">
            <span class="text-blue-600 mr-1">Câu {{ index + 1 }}:</span>
            {{ question.question }}
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <div
            v-for="option in question.options"
            :key="option.id"
            class="relative flex items-center p-3 border rounded-lg transition-all duration-200"
            :class="getOptionClass(question, option.text)"
          >
            <div class="mr-3 flex-shrink-0">
              <svg
                v-if="checkCorrect(question, option.text)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>

              <svg
                v-else-if="checkSelected(question, option.text) && !checkCorrect(question, option.text)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

              <div
                v-else
                class="h-5 w-5 rounded-full border border-gray-300"
              ></div>
            </div>

            <div class="flex-1 text-base">
              {{ option.text }}
            </div>

            <div class="ml-2 text-xs font-bold uppercase tracking-wider">
               <span v-if="checkSelected(question, option.text) && checkCorrect(question, option.text)" class="text-green-600">Đã chọn đúng</span>
               <span v-if="checkSelected(question, option.text) && !checkCorrect(question, option.text)" class="text-red-500">Đã chọn sai</span>
               <span v-if="!checkSelected(question, option.text) && checkCorrect(question, option.text)" class="text-green-600">Đáp án đúng</span>
            </div>
          </div>
        </div>

        <div class="mt-4 pl-2 border-l-4 border-gray-200">
           <GiaiThichAI :questionData="question" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Không cần custom css nhiều vì đã dùng Tailwind */
</style>