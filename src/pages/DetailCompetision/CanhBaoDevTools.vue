<template>
  <div
    class="lg:min-w-[575px] bg-white rounded-lg max-md:h-full overflow-y-auto pb-8"
  >
    <div
      class="flex justify-between items-center mb-4 max-md:mb-3 border-b border-line md:mt-1 py-3 px-5 max-md:px-4"
    >
      <div class="flex items-center gap-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.4167 7L22.0048 21.875H4.82858L13.4167 7Z" fill="white" />
          <path
            d="M25.3869 18.573L17.9202 5.13301C16.9169 3.32467 15.5286 2.33301 14.0002 2.33301C12.4719 2.33301 11.0836 3.32467 10.0802 5.13301L2.61355 18.573C1.66855 20.288 1.56355 21.933 2.32188 23.228C3.08022 24.523 4.57355 25.2347 6.53355 25.2347H21.4669C23.4269 25.2347 24.9202 24.523 25.6786 23.228C26.4369 21.933 26.3319 20.2763 25.3869 18.573ZM13.1252 10.4997C13.1252 10.0213 13.5219 9.62467 14.0002 9.62467C14.4785 9.62467 14.8752 10.0213 14.8752 10.4997V16.333C14.8752 16.8113 14.4785 17.208 14.0002 17.208C13.5219 17.208 13.1252 16.8113 13.1252 16.333V10.4997ZM14.8286 20.6613C14.7702 20.708 14.7119 20.7547 14.6536 20.8013C14.5836 20.848 14.5136 20.883 14.4436 20.9063C14.3736 20.9413 14.3035 20.9647 14.2219 20.9763C14.1519 20.988 14.0702 20.9997 14.0002 20.9997C13.9302 20.9997 13.8486 20.988 13.7669 20.9763C13.6969 20.9647 13.6269 20.9413 13.5569 20.9063C13.4869 20.883 13.4169 20.848 13.3469 20.8013C13.2885 20.7547 13.2302 20.708 13.1719 20.6613C12.9619 20.4397 12.8336 20.1363 12.8336 19.833C12.8336 19.5297 12.9619 19.2263 13.1719 19.0047C13.2302 18.958 13.2885 18.9113 13.3469 18.8647C13.4169 18.818 13.4869 18.783 13.5569 18.7597C13.6269 18.7247 13.6969 18.7013 13.7669 18.6897C13.9186 18.6547 14.0819 18.6547 14.2219 18.6897C14.3035 18.7013 14.3736 18.7247 14.4436 18.7597C14.5136 18.783 14.5836 18.818 14.6536 18.8647C14.7119 18.9113 14.7702 18.958 14.8286 19.0047C15.0386 19.2263 15.1669 19.5297 15.1669 19.833C15.1669 20.1363 15.0386 20.4397 14.8286 20.6613Z"
            fill="#FF8A00"
          />
        </svg>

        <h2 class="text-xl text-color-text-1 font-semibold uppercase">
          Cảnh báo
        </h2>
      </div>

      <button @click="$emit('close')" class="text-line">
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div class="px-4 max-md:px-4 text-color-text-1 text-sm">
      <p class="font-bold mb-1">
        Hệ thống phát hiện bạn đang mở chế độ dev tools.
      </p>
      <div class="font-normal">
        <ul class="list-disc pl-5 space-y-1">
          <li>
            Nếu bạn mở chế độ này thì bạn sẽ không được vào làm bài thi.
          </li>
          <li>
            Vui lòng tắt chế độ dev tools để được làm bài thi.
          </li>
        </ul>
      </div>
      <p v-html="confirmText" class="mt-1"></p>
      <div class="flex gap-3 justify-center mt-5">
       
        <button
          @click="handleSubmit"
          class="w-[160px] py-[10px] bg-primary-brand text-white rounded-lg font-semibold text-base first-letter:uppercase"
        >
          Đồng ý
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      this.$emit("close"); // Đóng popup sau khi submit
    },
  },
  computed: {
    confirmText() {
      return "Vui lòng bấm nút đồng ý và tắt chế độ dev tools để làm bài thi";
    },
  },
};
</script>
