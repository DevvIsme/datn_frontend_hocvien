<!-- PopupThongBao.vue -->
<script setup>
const emit = defineEmits(["close"]);

function handleClose() {
  emit("close");
}
</script>

<template>
  <div
    class="bg-white text-center rounded-lg px-[35px] py-[32px] max-md:py-6 max-md:px-4 relative max-md:w-[343px]"
  >
  
    <div>
      <img
        src="@/assets/images/Notification.png"
        alt="Icon"
        class="mx-auto max-md:h-[68px]"
      />
    </div>
    <div class="max-w-[363px] max-md:max-w-[300px] mx-auto">
      <p
        class="text-color-primary text-xl font-semibold pt-4 pb-1 max-md:text-lg max-md:pb-1 max-md:pt-6"
      >
        Thành công
      </p>
      <p class="text-color-text-1 text-base max-md:text-sm">
        Chúc mừng bạn hoàn thành bài khảo sát!
      </p>
    </div>
    <div class="pt-5 text-center flex items-center gap-4 justify-center">
      <router-link
        :to="{ name: 'KhaoSat' }"
        class="w-[50%] py-10px max-md:py-[9px] bg-color-white border border-color-primary-2 rounded-lg"
      >
        <p
          class="max-md:text-font14 text-color-primary-2 text-base font-semibold"
        >
          Trở về danh sách
        </p>
      </router-link>
    </div>
  </div>
</template>
