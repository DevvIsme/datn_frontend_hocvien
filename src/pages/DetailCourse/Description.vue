<script setup lang="ts">
import { defineProps, ref, onMounted, watch, nextTick } from "vue";

const props = defineProps({
  description: {
    type: String,
    required: true,
  },
});

const open = ref(false);
const showMore = ref(false);
const descriptionHeight = ref(0);
const descriptionRef = ref<HTMLElement | null>(null);

const toggleOpen = () => {
  open.value = !open.value;
};

const checkDescriptionHeight = async () => {
  await nextTick(); // Đảm bảo DOM cập nhật
  if (descriptionRef.value) {
    descriptionHeight.value = descriptionRef.value.scrollHeight;
    showMore.value = descriptionHeight.value > 200;
  }
};

onMounted(checkDescriptionHeight);
watch(() => props.description, checkDescriptionHeight);
</script>
<template>
  <div class="bg-white p-5 rounded-lg">
    <div class="flex gap-3 items-center border-b border-color-border-2 pb-3">
      <img src="@/assets/images/Info.svg" alt="Icon" />
      <p class="text-font20lh text-color-primary font-semibold max-lg:text-lg">
        Mô tả
      </p>
    </div>
    <div
      ref="descriptionRef"
      :class="{'max-h-[200px] overflow-hidden': !open}"
      class="py-5 border-b border-color-border-2 max-lg:text-sm text-color-primary transition-all"
      v-html="description"
    ></div>
    <p
      v-if="showMore"
      @click="toggleOpen"
      class="text-base text-color-primary-2 font-semibold pt-4 text-center max-lg:text-sm cursor-pointer"
    >
      {{ open ? 'Thu gọn' : 'Xem thêm' }}
    </p>
  </div>
</template>
