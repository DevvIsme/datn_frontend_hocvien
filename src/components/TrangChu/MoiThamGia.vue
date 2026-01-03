<template>
  <div class="py-12">
    <div class="container mx-auto">
      <div class="flex justify-between items-center pb-3 border-b border-color-border">
        <p class="text-font36lh font-bold text-color-primary pb-3 max-md:text-font24px max-md:text-center">
          Khảo sát nổi bật
        </p>
        <RouterLink to="/khao-sat">
          <div
            class="flex items-center py-10px px-4 gap-2 border border-color-primary-2 rounded-lg text-center max-sm:p-1 max-md:hidden">
            <p class="text-base font-semibold text-color-primary-2">
              Xem tất cả
            </p>
            <img src="@/assets/images/upper arrow.svg" alt="arrow" class="h-6 w-auto max-sm:h-4" />
          </div>
        </RouterLink>
        <!-- <div
          class="flex justify-between items-center border-b border-color-border text-color-text-1"
        >
          <div class="flex justify-center gap-3 max-md:w-full">
           
          </div>
          
        </div> -->
      </div>

      <div class="pt-5 relative course">
        <Splide :options="splideOptions" ref="splide">
          <SplideSlide v-for="(survey, index) in itemsTab1" :key="index" class="relative max-md:w-[269px]">
            <CardKhaoSat :title="survey.name" :slug="survey.slug" :attend="survey.attend"
              :studentCount="survey.participated" :dueAt="getDaysLeft(survey.dueAt)" />
            <!-- :isExpired="survey.isExpired" -->
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script>
  import { Splide, SplideSlide } from "@splidejs/vue-splide";
  import CardKhaoSat from "@/pages/Dung_Chung/CardKhaoSat.vue";
  import axios from "axios";

  export default {
    components: {
      Splide,
      SplideSlide,
      CardKhaoSat, // Khai báo component này
    },
    data() {
      return {
        itemsTab1: [],
        currentTab: "tab1",
        splideOptions: {
          perPage: 3,
          perMove: 1,
          gap: 10,
          arrows: false,
          pagination: false,
          breakpoints: {
            768: {
              perPage: 1,
              pagination: true,
            },
            1024: {
              perPage: 2,
            },
          },
        },
      };
    },
    computed: {
      itemsTab2() {
        return this.itemsTab1
          .slice() // Create a copy of the array
          .sort((a, b) => b.participated - a.participated) // Sort by number of students
          .slice(0, 3); // Get top 3
      },
      displayedItems() {
        return this.currentTab === "tab1" ? this.itemsTab1 : this.itemsTab2;
      },
    },
    methods: {
      async fetchSurveys() {
        try {
          const response = await axios.get("/survey/list");
          this.itemsTab1 = response.data.data.surveys;
          console.log(this.itemsTab1);
        } catch (error) {
          console.error("Error fetching surveys:", error);
        }
      },
      switchTab(tab) {
        this.currentTab = tab;
      },
      getDaysLeft(dueDate) {
        const due = new Date(dueDate);
        const today = new Date();
        const difference = due - today;
        return Math.ceil(difference / (1000 * 60 * 60 * 24)); // Chuyển đổi thành số ngày
      },
    },
    created() {
      this.fetchSurveys();
    },
  };
</script>