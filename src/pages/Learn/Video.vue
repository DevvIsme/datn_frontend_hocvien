<script setup>
import { ref } from "vue";

const openModel = ref(true);

function onsubmit() {
  openModel.value = false;
}
</script>

<template>
  <div class="lg:container">
    <p class="text-color-primary text-font24px font-bold mb-5 max-md:hidden">What is React JS?</p>
    <div class="aspect-video">
      <iframe
        class="w-full h-full object-cover"
        src="https://www.youtube.com/embed/N3AkSS5hXMA?si=Gy5Zm0-K4cUBlZXy"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div
      class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
      v-if="openModel"
    >
      <form action="#" @submit.prevent="onsubmit">
        <div class="p-5 bg-color-white rounded-lg">
          <div class="flex justify-between items-center">
            <p class="text-color-primary text-base font-semibold max-lg:text-sm">
              Câu 1: Phương án xác thực nào kém an toàn nhất cho điện thoại thông
              minh
            </p>
          </div>
          <div class="flex items-center gap-3 py-2">
            <p class="text-color-gray text-sm max-md:text-xs">(Chọn 1 đán án)</p>
          </div>
          <div class="flex items-center gap-3 py-1">
            <input
              type="radio"
              name="answer"
              id="answer"
              class="w-5 h-5 max-md:h-4"
            />
            <label
              for="answer"
              class="text-color-text-1 text-base max-md:text-sm flex-1"
              >A. Mã PIN 6 chữ số</label
            >
          </div>
          <div class="flex items-center gap-3 py-1">
            <input
              type="radio"
              name="answer"
              id="answer"
              class="w-5 h-5 max-md:h-4"
            />
            <label
              for="answer"
              class="text-color-text-1 text-base max-md:text-sm flex-1"
              >B. Mật khẩu hình vẽ</label
            >
          </div>
          <div class="flex items-center gap-3 py-1">
            <input
              type="radio"
              name="answer"
              id="answer"
              class="w-5 h-5 max-md:h-4"
            />
            <label
              for="answer"
              class="text-color-text-1 text-base max-md:text-sm flex-1"
              >C. Mã PIN 4 chữ số</label
            >
          </div>
          <div class="flex items-center gap-3 py-1">
            <input
              type="radio"
              name="answer"
              id="answer"
              class="w-5 h-5 max-md:h-4"
            />
            <label
              for="answer"
              class="text-color-text-1 text-base max-md:text-sm flex-1"
              >D. Vân tay</label
            >
          </div>
          <div class="text-center max-sm:py-2">
            <button class="px-4 py-2 max-sm:px-2 max-sm:py-1 bg-color-primary-2 rounded-lg text-white text-sm">
                <p class="max-sm:text-[10px] text-base font-semibold">Gửi</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
