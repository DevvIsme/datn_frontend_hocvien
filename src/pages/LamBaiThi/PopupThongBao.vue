<template>
  <div
    class="bg-white text-center rounded-lg px-[35px] py-[32px] max-md:py-6 max-md:px-4 relative max-md:w-[343px]"
  >
    <div class="cursor-pointer">
      <img
        src="@/assets/images/Cancel.svg"
        alt="Icon"
        class="absolute top-3 right-3"
        @click="handleClose"
      />
    </div>
    <div>
      <img
        src="@/assets/images/Notification icon-2.svg"
        alt="Icon"
        class="mx-auto max-md:h-[68px]"
      />
    </div>
    <div class="max-w-[363px] max-md:max-w-[300px] mx-auto">
      <p
        class="text-color-primary text-xl font-semibold pt-4 pb-1 max-md:text-lg max-md:pb-1 max-md:pt-6"
      >
        Thông báo
      </p>
      <p class="text-color-text-1 text-base max-md:text-sm">
        Bạn có chắc chắn nộp bài thi này?
      </p>
    </div>
    <div class="pt-5 text-center flex items-center gap-4 justify-center">
      <button
        @click="handleClose"
        class="w-[50%] py-10px max-md:py-[9px] bg-color-white border border-color-primary-2 rounded-lg"
      >
        <p
          class="max-md:text-font14 text-color-primary-2 text-base font-semibold"
        >
          Hủy
        </p>
      </button>
      <div
        class="w-[50%] py-[10px] bg-color-primary-2 rounded-lg"
        @click="handleSubmit"
      >
        <p class="max-md:text-[14px] text-color-white text-base font-semibold">
          Nộp bài
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleSubmit() {
      this.$emit("submit");
    },
  },
};
</script>
