
<script setup>

</script>

<template>
    <div class="bg-white text-center py-3 rounded-lg p-3">
        <div class="cursor-pointer">
            <img src="@/assets/images/Cancel.svg" alt="Icon"  class="ml-auto">
        </div>
        <div>
            <img src="@/assets/images/Notification icon.svg" alt="Icon" class="mx-auto max-md:h-12">
        </div>
        <div class="max-w-[363px] max-md:max-w-[300px]">
            <p class="text-color-primary text-xl font-semibold py-5 max-md:text-lg max-md:p-2">Thời gian làm bài sắp hết</p>
            <p class="text-color-text-1 text-base max-md:text-sm">Bạn còn 
                <span class="text-color-text-1 text-base font-semibold"> 5 phút</span> 
            làm bài</p>
        </div>
        <div class="py-5 text-center">
            <button class="px-4 py-10px max-sm:px-3 max-sm:py-1 bg-color-primary-2 rounded-lg">
                <p class="max-sm:text-[10px] text-color-white text-base font-semibold">Đã hiểu</p>
            </button>
        </div>
    </div>
</template>