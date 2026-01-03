
<script setup>
    

</script>

<template>
    <div class="bg-white text-center py-3 rounded-lg p-3">
        <div class="cursor-pointer" @click="this.$emit('close')">
            <img src="@/assets/images/Cancel.svg" alt="Icon"  class="ml-auto">
        </div>
        <div>
            <img src="@/assets/images/Notification icon.svg" alt="Icon" class="mx-auto max-md:h-12">
        </div>
        <div class="max-w-[363px] max-md:max-w-[300px]">
            <p class="text-color-primary text-xl font-semibold py-5 max-md:text-lg max-md:p-2">Cảnh báo</p>
            <p class="text-color-text-1 text-base max-md:text-sm">Nếu bạn thoát ra ngoài bài của bạn sẽ được nộp!</p>
        </div>
        <div class="py-5 text-center flex items-center gap-3 justify-center">
            <button @click="this.$emit('submit')" class="px-4 py-10px max-sm:px-3 max-sm:py-1 bg-color-white border border-color-primary-2 rounded-lg  ">
                <p class="max-sm:text-[10px] text-color-primary-2 text-base font-semibold">Thoát ra</p>
            </button>
            <button @click="this.$emit('close')" class="px-4 py-10px max-sm:px-3 max-sm:py-1 bg-color-primary-2 rounded-lg">
                <p class="max-sm:text-[10px] text-color-white text-base font-semibold">Tiếp tục làm bài</p>
            </button>
        </div>
    </div>
</template>