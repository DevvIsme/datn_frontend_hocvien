<template>
   <div class="pt-3 pb-5 flex items-center flex-col gap-5 max-lg:hidden">
    <div class="container mx-auto">
      <div
        class="font-semibold text-sm text-color-text-1 mt-3 mb-5 text-center"
      >
        Cảm ơn bạn đã tham gia khảo sát này
      </div>
      <div class="flex flex-wrap gap-2 items-center justify-center">
        <button
          v-for="(question, index) in questions"
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
    </div>
    <button
      @click="emitOpenThongBao"
      type="button"
      class="py-[10px] w-[200px] h-11 px-4 bg-color-primary-2 rounded-lg text-white font-semibold text-base col-span-5"
    >
      <p class="max-sm:text-[10px]">Gửi kết quả</p>
    </button>
  </div>
  <div class="bg-white px-4 py-3 lg:hidden text-center">
    <div class="">
      <Popover class="h-[42px]">
        <PopoverButton
          class="focus:outline-none w-full"
        >
          <div
            class="text-color-primary-2 flex items-center justify-center gap-1 font-semibold text-font14"
          >
            <p class="py-[9px]">Xem danh sách câu hỏi</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        </PopoverButton>
         <button
      class="w-full py-10px bg-color-primary-2 rounded-lg"
      @click="emitOpenThongBao2"
    >
      <p class="max-md:text-font14 text-color-white text-base font-semibold">
        Gửi kết quả
      </p>
    </button>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="translate-y-4 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-4 opacity-0"
        >
          <PopoverPanel class="z-50 fixed top-0 left-0 w-full h-full bg-white">
            <div
              class="flex justify-between border-b border-color-border py-3 px-4"
            >
              <p class="font-bold text-font20lh text-color-primary">
                Danh sách câu hỏi
              </p>

              <PopoverButton class="focus:outline-none"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-neutral-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </PopoverButton>
            </div>
           <div
        class="font-semibold text-sm text-color-text-1 mt-3 mb-5 text-center"
      >
        Cảm ơn bạn đã tham gia khảo sát này
      </div>
      <div class="flex flex-wrap gap-2 items-center justify-center">
        <button
          v-for="(question, index) in questions"
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
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
    <!-- Nút Gửi Kết Quả -->
   
  </div>
 
</template>

<script>
import PopupThongBao from "./PopupThongBao.vue";
import PopupCanhBao from "./PopupThanhCong.vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

export default {
  components: {
    PopupThongBao,
    PopupCanhBao,
    Popover,
    PopoverButton,
    PopoverPanel,
  },
   emits: ["open-thong-bao","open-thong-bao-2"],
  props: {
    questions: {
      type: Array,
      required: true,
    },
    answers: {
      type: Array,
      required: true, // Đảm bảo rằng answers được truyền dưới dạng mảng
    },
  },
  methods: {
    isActive(questionId) {
      // Kiểm tra xem câu hỏi có được chọn không
      return this.answers.some((answer) => answer.id === questionId);
    },
    emitOpenThongBao() {
      // Emit sự kiện để mở thông báo ở component cha
      this.$emit("open-thong-bao");
    },
    emitOpenThongBao2() {
      // Emit sự kiện để mở thông báo ở component cha
      this.$emit("open-thong-bao-2");
    },
  },
};
</script>
