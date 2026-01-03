<template>
  <div class="bg-white lg:rounded-lg">
    <div class="mx-4 lg:pt-1">
      <div
        v-for="(question, index) in questions"
        :key="question.id"
        class="border-b border-color-border py-4"
      >
        <div class="flex justify-between lg:items-center">
          <p class="text-color-primary text-base font-semibold max-lg:text-sm">
            Câu {{ index + 1 }}: {{ question.name }}
          </p>
        </div>
        <div class="flex items-center gap-3 py-2">
          <p class="text-color-gray text-sm max-lg:text-sm">(Chọn 1 đáp án)</p>
        </div>
        <!-- Hiển thị 5 lựa chọn từ Không đồng ý đến Đồng ý -->
        <div
          v-for="(answer, idx) in ['Không đồng ý', 'Hơi không đồng ý', 'Trung lập', 'Hơi đồng ý', 'Đồng ý']"
          :key="idx"
          class="flex items-center gap-3 py-1"
        >
          <input
            type="radio"
            :name="'answer' + index"
            :id="'answer' + index + idx"
            @change="$emit('answer-selected', { index, answer })"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            :for="'answer' + index + idx"
            class="text-color-text-1 text-base max-lg:text-sm flex-1"
          >
            {{ answer }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: Array, // Nhận danh sách câu hỏi từ component cha
  },
};
</script>
