<template>
  <div class="shadow-continue">
      <div class="relative">
 <img
  :src="randomThumbnail"
  alt="Image"
  class="object-cover aspect-16/9 rounded-lg"
/>
      
      </div>
      <div class="px-5 py-5 max-md:pt-3 max-md:px-3 max-md:pb-4">
        <RouterLink :to="{name : 'competision-detail', params: { id: slug } }"
          class="text-font18 max-md:text-base font-bold text-color-primary pb-2"
        >
            {{ title }}
        </RouterLink>
        <div
          class="flex justify-start items-center gap-2 pb-2 border-b border-color-border my-2"
        >
       
          <p
            class="font-medium text-base text-color-primary max-md:text-font14"
          >
            Số lượng câu hỏi: {{ numberQuestion }}
          </p>
        </div>
          <div
          class="flex justify-start items-center gap-2 max-md:text-font14 pt-2"
        >
          <div class="flex justify-start items-center gap-2">
            <img
              src="@/assets/images/edit.svg"
              alt="Calendar"
            />
            <p class="text-color-gray font-normal">
              Số lần được làm bài
            </p>
            
          </div>
          <div v-if="reDoTime !== 0">{{ reDoTime }} lần</div>
          <div v-else>Vô hạn</div>
        </div>
        <div
          class="flex justify-start items-center gap-2 max-md:text-font14 pt-2"
        >
          <div class="flex justify-start items-center gap-2">
            <img
              src="@/assets/images/calendar-2.svg"
              alt="Calendar"
            />
            <p class=" text-color-gray font-normal">
              Thời gian :
            </p>
          </div>
          <div>{{submitTime}} phút</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    numberQuestion: {
      type: Number,
      required: true,
    },
    reDoTime: {
      type: Number,
      required: true,
    },
    submitTime: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },

  data() {
    // random 1 lần duy nhất
    const randomNumber = Math.floor(Math.random() * 16) + 1
    return {
      randomNumber
    }
  },

  computed: {
    randomThumbnail() {
      return new URL(
        `../../assets/images/course-${this.randomNumber}.png`,
        import.meta.url
      ).href
    }
  }
}

</script>
