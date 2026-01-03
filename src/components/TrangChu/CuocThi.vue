<template>
  <div class="py-12 max-lg:py-8">
    <div class="container mx-auto">
      <div class="flex justify-between items-center pb-3 border-b border-color-border">
        <p class="text-font36lh font-bold text-color-primary pb-3 max-sm:text-font24px max-lg:text-center">
          Cuộc thi nổi bật
        </p>
        <RouterLink    :to="{ name: 'Competision' }">
          <div
            class="inline-flex items-center py-10px px-4 gap-2 border border-color-primary-2 rounded-lg max-sm:p-1 max-md:hidden">
            <p class="text-base font-semibold text-color-primary-2">
              Xem tất cả
            </p>
            <img src="@/assets/images/upper arrow.svg" alt="arrow" class="h-6 w-auto max-sm:h-4" />
          </div>
        </RouterLink>
      </div>

      <div class="pt-5 relative">
        <Splide :options="splideOptions" ref="splide">
          <SplideSlide v-for="(group, index) in groupedSlidesData" :key="index" class="bg-color-white rounded-lg">
            <!-- Hiển thị từng phần tử trong cặp (1 hoặc 3 phần tử) -->
            <div v-for="item in group" :key="item.id">
              <CardCompetition :slug="item.slug" :title="item.name" :numberQuestion="item.numberQuestion"
                :reDoTime="item.reDoTime" :submitTime="item.submitTime" />
            </div>
          </SplideSlide>
        </Splide>
        <button @click="$refs.splide.go('<')"
          class="hidden xl:block h-10 w-10 rounded-[10px] absolute top-[50%] left-[-50px] bg-arrow text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button @click="$refs.splide.go('>')"
          class="hidden xl:block h-10 w-10 rounded-[10px] absolute top-[50%] right-[-50px] text-white bg-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="flex items-center py-[9px] text-nowrap mt-5 px-4 gap-2 border border-color-primary-2 rounded-lg text-center w-[136px] mx-auto md:hidden">
      <p class="text-font14 font-semibold text-color-primary-2">Xem tất cả</p>
      <img src="@/assets/images/upper arrow.svg" alt="arrow" class="h-6 w-auto" />
    </div>
  </div>
</template>

<script>
  import { Splide, SplideSlide } from "@splidejs/vue-splide";
  import CardCompetition from "@/pages/Dung_Chung/CardCompetition.vue";
  import axios from "axios";
  export default {
    components: {
      Splide,
      SplideSlide,
      CardCompetition,
    },
    data() {
      return {
        itemsTab1: [],
        currentTab: "tab1",
        splideOptions: {
          perPage: 3,
          perMove: 1,
          gap: "25px",
          arrows: false,
          pagination: false,
          breakpoints: {
            768: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
          },
        },
        itemsPerGroup: 3, // Default value for items per group
      };
    },
    computed: {
      itemsTab2() {
        return this.itemsTab1
          .slice()
          .sort((a, b) => b.numberQuestion - a.numberQuestion)
          .slice(0, 3);
      },
      groupedSlidesData() {
        const items =
          this.currentTab === "tab1" ? this.itemsTab1 : this.itemsTab2;
        const groupSize = this.itemsPerGroup;
        let groups = [];
        for (let i = 0; i < items.length; i += groupSize) {
          groups.push(items.slice(i, i + groupSize));
        }
        return groups;
      },
    },
    methods: {
      async fetchCompetions() {
        try {
          const response = await axios.get("/exam/list/", {});
          this.itemsTab1 = response.data.data.exams;
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      },
      updateItemsPerGroup() {
        this.itemsPerGroup = window.innerWidth < 768 ? 3 : 1;
      },
      switchTab(tab) {
        this.currentTab = tab;
      },
      formatDate(dateString) {
        const date = new Date(dateString);
        date.setDate(date.getDate() + 30); // Cộng thêm 30 ngày

        // Định dạng lại ngày
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        return date.toLocaleDateString("en-GB", options); // Định dạng ngày kiểu DD/MM/YYYY
      },
    },
    created() {
      this.fetchCompetions();
      this.updateItemsPerGroup();
      window.addEventListener("resize", this.updateItemsPerGroup);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.updateItemsPerGroup);
    },
  };
</script>