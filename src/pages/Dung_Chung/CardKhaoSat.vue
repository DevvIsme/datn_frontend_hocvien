<template>
  <div
    class="bg-color-white rounded-lg shadow-box-shadow-1 flex flex-col h-full"
    v-if="!isExpired"
  >
    <div class="relative">
  <img
  :src="randomThumbnail"
  alt="Image"
  class="object-cover aspect-16/9 rounded-t-lg w-full"
/>

      <div
        class="bg-customColor absolute bottom-3 left-3 py-1 px-2 flex justify-between items-center gap-1 rounded bg-blue-600 bg-opacity-90"
      >
        <img src="@/assets/images/clock.svg" alt="Clock" class="w-4 h-4" />
        <p class="text-white font-medium text-sm">
          {{ daysRemaining > 0 ? `Còn ${daysRemaining} ngày` : "Sắp hết hạn" }}
        </p>
      </div>
    </div>

    <div class="px-5 max-md:px-3 pt-5 py-8 max-md:py-3 flex flex-col flex-1">
      <p
        class="text-font18 font-bold text-color-primary py-1 line-clamp-2 min-h-[56px]"
      >
        {{ title }}
      </p>

      <div class="mt-auto"></div>

      <div
        v-if="status === 'locked'"
        class="flex py-[10px] px-4 gap-2 bg-gray-100 border border-gray-300 rounded-lg justify-center mt-4 max-md:mt-3 cursor-not-allowed"
      >
        <p class="text-base font-semibold text-gray-500">🔒 Đã bị khóa</p>
      </div>

      <div
        v-else-if="attend"
        class="flex py-[10px] px-4 gap-2 border border-green-600 bg-green-50 rounded-lg justify-center mt-4 max-md:mt-3"
      >
        <p class="text-base font-semibold text-green-700 cursor-default">
          ✅ Bạn đã hoàn thành
        </p>
      </div>

      <router-link
        v-else
        :to="{ name: 'ChiTietKhaoSat', params: { id: slug } }"
        class="flex py-[10px] px-4 gap-2 border border-color-primary-2 bg-white hover:bg-blue-50 transition-colors rounded-lg justify-center mt-4 max-md:mt-3 group"
      >
        <p class="text-base font-semibold text-color-primary-2 cursor-pointer">
          Khảo sát ngay
        </p>
        <img
          src="@/assets/images/upper arrow.svg"
          alt="arrow"
          class="h-6 w-auto group-hover:translate-x-1 transition-transform"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: "@/assets/images/image-invite.jpg",
    },
    title: {
      type: String,
      required: true,
    },
    studentCount: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    attend: {
      type: [Object, null],
      default: null,
    },
    isExpired: {
      type: Boolean,
      default: false,
    },
    dueAt: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "active",
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
    },

    // giữ nguyên logic cũ
    daysRemaining() {
      if (!this.dueAt) return 0;
      try {
        const endDate = new Date(this.dueAt);
        const today = new Date();
        const diffTime = endDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
      } catch (e) {
        return 0;
      }
    },
  },
};

</script>

<style scoped>
/* CSS bổ sung nếu cần */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
