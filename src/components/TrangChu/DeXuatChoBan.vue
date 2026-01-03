<template>
  <div class="py-12 max-md:py-8 slider-recommend">
    <div class="container mx-auto relative">
      <p
        class="text-font36lh max-md:text-font24px font-bold text-color-primary pb-3 text-center"
      >
        Đề xuất cho bạn
      </p>

      <div class="pt-5">
        <Splide :options="splideOptions" ref="splide">
          <SplideSlide
            v-for="(group, index) in groupedSlidesData"
            :key="index"
            class="flex flex-col gap-x-10 gap-y-5 overflow-hidden bg-color-white rounded-lg"
          >
            <!-- Hiển thị từng phần tử trong nhóm -->
            <div v-for="item in group" :key="item.id">
               <CardCourse 
              :topic="item.topic.name"
              :name="item.name" 
              :studentCount="item.studentCount"
              :createdAt="item.createdAt"
              :state=0
               />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <button
        @click="$refs.splide.go('<')"
        class="hidden xl:block h-10 w-10 rounded-[10px] absolute top-[50%] left-[-60px] bg-arrow text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 mx-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        @click="$refs.splide.go('>')"
        class="hidden xl:block h-10 w-10 rounded-[10px] absolute top-[50%] right-[-60px] text-white bg-arrow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 mx-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import CardCourse from "@/pages/Dung_Chung/CardCourse.vue";
import axios from "axios"; // Import axios để gọi API

export default {
  components: {
    Splide,
    SplideSlide,
    CardCourse,
  },
  data() {
    return {
      items: [],
      splideOptions: {
        perPage: 3,
        perMove: 1,
        arrows: false,
        pagination: false,
        gap: "30px",
        breakpoints: {
          768: {
            perPage: 1,
            perMove: 1,
          },
          1024: {
            perPage: 2,
            perMove: 1,
          },
        },
      },
      itemsPerGroup: 1, // Default value for items per group
    };
  },
  computed: {
    groupedSlidesData() {
      const groupSize = this.itemsPerGroup;
      let groups = [];
      for (let i = 0; i < this.items.length; i += groupSize) {
        groups.push(this.items.slice(i, i + groupSize));
      }
      return groups;
    },
  },
  methods: {
    async fetchCourses() {
      try {
        const response = await axios.get("/course/list/");
        this.items = response.data.data.courses;
        
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    },
    updateItemsPerGroup() {
      this.itemsPerGroup = window.innerWidth < 768 ? this.items.length : 1;
    },
  },
  created() {
    this.fetchCourses();
    this.updateItemsPerGroup(); // Initial setup
    window.addEventListener("resize", this.updateItemsPerGroup);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateItemsPerGroup);
  },
};
</script>
