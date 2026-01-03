<template>
  <div class="container mx-auto">
    <LocKhoaHoc
      @tabSelected="handleTabSelected"
      @searchQuery="handleSearch"
      :categories="categories"
      v-model="selectedCategory"
    />
    <DanhSachKhoaHoc :courses="currentItems" />

    <!-- Pagination cho các tab -->
    <Pagination
      v-if="tab === 'myCompetitions' || tab === 'otherCompetitions'"
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-changed="handlePageChange"
    />
  </div>
</template>

<script>
import Pagination from "@/pages/KhoaHoc/Pagination.vue";
import DanhSachKhoaHoc from "@/pages/KhoaHoc/DanhSachKhoaHoc.vue";
import LocKhoaHoc from "@/pages/KhoaHoc/LocKhoaHoc.vue";
import axios from "axios";

export default {
  components: {
    DanhSachKhoaHoc,
    LocKhoaHoc,
    Pagination,
  },
  data() {
    return {
      currentItems: [], // Data to display based on the current tab
      selectedCategory: "", // Default category
      categories: [], // List of categories
      searchQuery: "", // Search keyword
      currentPage: 1, // Current page number
      perPage: 10, // Number of items per page
      totalPages: 0, // Total number of pages
      tab: "myCompetitions", // Default tab
    };
  },
  methods: {
    handleTabSelected(tab) {
      this.tab = tab;
      this.currentPage = 1; // Reset to the first page when tab changes
      this.fetchData(); // Fetch data for the selected tab
    },
    async fetchData() {
      const apiUrl = this.tab === "myCompetitions" ? "/course/my-course" : "/course//list-course-users/";
      try {
       const params = {
            topic_id: this.selectedCategory,
            key_name: this.searchQuery,
            limit: this.perPage,
            page: this.currentPage,
        };

        // 👇 THÊM DÒNG NÀY
        if (this.tab === "otherCompetitions") {
            params.exclude_registered = true;
        }

        const response = await axios.get(apiUrl, { params });
        const data = response.data.data;
        this.currentItems = data.courses;
        this.totalPages = Math.ceil(data.count / this.perPage);
      } catch (e) {
        console.error(`Error fetching courses for tab ${this.tab}:`, e);
      }
    },
    handleSearch(query) {
      this.searchQuery = query;
      this.fetchData(); // Fetch data when search query changes
    },
    async fetchCategories() {
      try {
        const response = await axios.get("/topic/list");
        const data = response.data.data;
        this.categories = data.topics || [];
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    handlePageChange(page) {
      this.currentPage = page;
      this.fetchData(); // Fetch data when page changes
    },
  },
  watch: {
    selectedCategory() {
      
      this.fetchData(); // Fetch data when category changes
    },
  },
  mounted() {
    this.fetchCategories(); // Fetch categories on component mount
    this.fetchData(); // Initial data fetch for the default tab
  },
};
</script>
