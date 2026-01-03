<template>
  <a :href="`/course-detail/${slug}`" class="bg-color-white rounded-lg shadow-continue cursor-pointer">
    <div class="relative">
 <img
  :src="randomThumbnail"
  alt="Image"
  class="object-cover aspect-16/9 rounded-lg"
/>

    </div>
    <div class="px-5 max-md:px-3 py-7 max-md:pt-3 max-md:pb-4">
      <div class="flex justify-between gap-3 border-b border-color-border pb-2">
        <p
          class="text-base max-md:text-font14 font-medium text-color-primary-2 bg-color-primary-4 px-3 py-1 rounded-[100px] line-clamp-1"
        >
          {{ topic }}
        </p>
      
      </div>
      <p class="text-font18 max-md:text-base font-bold text-color-primary pt-2">
        {{ name }}
      </p>
      <div
        v-if="state === 0"
        class="flex justify-start items-center gap-2 max-md:text-font14"
      >
        <div class="flex justify-start items-center gap-2">
          <img src="@/assets/images/calendar-2.svg" alt="Calendar" />
          <p class="text-color-gray font-normal">Bắt đầu:</p>
        </div>
        <div>{{ createdAt }}</div>
      </div>
      <div v-else-if="state === 1">
        <div class="text-nowrap text-base text-color-primary">
          <span class="font-normal">Bạn đã hoàn thành </span>
          <span class="text-color-greend-2 font-medium"> {{ progress }}%</span>
        </div>
        <div
          class="relative w-full h-2 bg-gray-200 rounded-lg overflow-hidden mt-1"
        >
          <div
            class="absolute top-0 left-0 h-full bg-color-greend-2"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
      </div>
      <div
        v-else-if="state === 2"
        class="text-base font-semibold flex text-center justify-between"
      >
        <div
          class="bg-color-greend-3 rounded-full border border-color-greend-2 py-[6px] px-3 text-color-greend-2 flex gap-2 items-center text-nowrap"
        >
          <img src="@/assets/images/tick-circle.svg" alt="" />
          Đã hoàn thành
        </div>
        <div
          class="bg-color-border-3 text-white py-[6px] px-[19px] rounded-lg max-md:text-font14 text-nowrap flex items-center"
        >
          Đánh giá ngay
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    name: String,
    slug: String,
    topic: String,
    studentCount: Number,
    state: Number,
    createdAt: String,
    progress: Number,
  },

  computed: {
    randomThumbnail() {
      const randomNumber = Math.floor(Math.random() * 16) + 1
      return new URL(
        `../../assets/images/course-${randomNumber}.png`,
        import.meta.url
      ).href
    }
  }
}

</script>
