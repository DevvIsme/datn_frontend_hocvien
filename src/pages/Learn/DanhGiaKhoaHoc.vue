
<script setup>
    import { ref } from 'vue';

    const open = ref(true)

    function onClose() {
        open.value = false
    }
</script>

<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 bg-bg-modal flex justify-center items-center" v-if="open">
        <div class="bg-color-white rounded-lg">
            <div class="p-2 cursor-pointer" @click="onClose">
                <img src="@/assets/images/Cancel.svg" alt="Icon" class="ml-auto">
            </div>
            <form action="" class=" px-8">
                <p class="text-color-primary text-font20lh font-semibold">Bạn có hài lòng với khóa học?</p>
                <div class="flex justify-center py-5 gap-3">
                    <img
                    src="@/assets/images/star-filled.svg"
                    alt="Star"
                    class="h-8 w-auto"
                    />
                    <img
                    src="@/assets/images/star-filled.svg"
                    alt="Star"
                    class="h-8 w-auto"
                    />
                    <img
                    src="@/assets/images/star-filled.svg"
                    alt="Star"
                    class="h-8 w-auto"
                    />
                    <img
                    src="@/assets/images/star-filled.svg"
                    alt="Star"
                    class="h-8 w-auto"
                    />
                    <img
                    src="@/assets/images/star-filled-2.svg"
                    alt="Star"
                    class="h-8 w-auto"
                    />
                </div>
                <textarea name="" id="" placeholder="Nhập đánh giá của bạn" 
                    class="py-2 px-3 w-full border min-h-6 border-color-border-2 focus:outline-none rounded-lg text-base text-color-purple"></textarea>
                <div class="text-center  py-2">
                    <button class="px-4 py-1 bg-color-primary-2 rounded-lg text-white text-sm max-sm:py-[9px] max-sm:px-4">
                        <p class=" text-base font-semibold max-sm:text-xs">Gửi đánh giá</p>
                    </button>
                </div>
            </form>
        </div>
    </div>

</template>