<script>
import Banner from "./Banner.vue";
import Filter from "./Filter.vue";
import ResultSearch from "./ResultSearch.vue";
import axios from "axios";
export default {
  components: {
    Banner,
    Filter,
    ResultSearch,
  },
  data() {
    return {
      surveys: [],
      surveys2: [
        {
          title: "Khảo sát về khoá học an toàn thông tin quý 1 năm 2024hhhhhhh",
          daysRemaining: 30,
          studentCount: 120,
          type: "2",
          studentImages: [1, 2, 3, 4, 5],
          imageSrc: "@/assets/images/image-invite.jpg",
        },
        {
          title: "Khảo sát về khoá học lập trình Vue.js",
          daysRemaining: 15,
          studentCount: 150,
          type: "1",
          studentImages: [1, 2, 3, 4],
          imageSrc: "@/assets/images/image-invite.jpg",
        },
        {
          title: "Khảo sát về khoá học thiết kế giao diện với Figma",
          daysRemaining: 10,
          studentCount: 100,
          type: "1",
          studentImages: [1, 2, 3],
          imageSrc: "@/assets/images/image-invite.jpg",
        },
        // Thêm nhiều khảo sát khác nếu cần
      ],

      searchQuery: "",
      activeTab: [],
      currentItems: [],
    };
  },
  methods: {
    async fetchSurveys() {
      try {
        const response = await axios.get("/survey/list");
        console.log(response.data.data.surveys);
        this.surveys = response.data.data.surveys;
        this.activeTab = this.surveys;
        this.filterSurveys();

        console.log(this.surveys);
      } catch (e) {
        console.error("Error fetching surveys:", e);
      }
    },
    handleTabSelected(tab) {
      this.activeTab = tab === "Continue" ? this.surveys : this.surveys2;
      this.filterSurveys();
    },
    handleSearchQuery(query) {
      this.searchQuery = query;
      this.filterSurveys();
    },
    filterSurveys() {
      // let items =
      //   this.selectedCategory === "Tất cả"
      //     ? this.activeTab
      //     : this.activeTab.filter(
      //         (item) => item.type === this.selectedCategory
      //       );
      let items = this.activeTab;
      console.log(items);

      if (this.searchQuery) {
        items = items.filter((item) =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      this.currentItems = items;
    },
  },
  watch: {
    selectedCategory() {
      this.filterSurveys();
    },
    searchQuery() {
      this.filterSurveys();
    },
  },
  created() {
    this.fetchSurveys();
  },
  mounted() {},
};
</script>

<template>
  <div>
    <Banner @searchQuery="handleSearchQuery"/>

    <div class="container mx-auto">
      <!-- <Filter
        @tab-selected="handleTabSelected"
       
      /> -->
      <h1 class="font-bold text-color-text-1 text-font24px my-5 text-center">Danh sách khảo sát</h1>
      <ResultSearch :surveys="currentItems" />
    </div>
  </div>
</template>
