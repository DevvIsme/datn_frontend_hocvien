<template>
  <div class="container mx-auto">
    <Filter
      @tabSelected="handleTabSelected"
      @searchQuery="handleSearch"
      :categories="categories"
      v-model="selectedCategory"
    />
    <ListCompetision :items="currentItems" />
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
import Filter from "./Filter.vue";
import ListCompetision from "./ListCompetision.vue";
import axios from "axios";
export default {
  components: {
    Filter,
    ListCompetision,
    Pagination,
  },
  data() {
    return {
      currentItems: [],
      selectedCategory: "",
      categories: [],
      searchQuery: "",
      currentPage: 1,
      perPage: 9,
      totalPages: 0,
      tab: "myCompetitions",
    };
  },
  methods: {
    handleTabSelected(tab) {
      this.tab = tab;
      this.currentPage = 1;
      this.fetchData();
    },
    async fetchData() {
      const apiUrl =
        this.tab === "myCompetitions" ? "/exam/have-attend/" : "exam/list-for-users?exclude_taken=true";
      try {
        const response = await axios.get(apiUrl, {
          params: {
            topic_id: this.selectedCategory,
            key_name: this.searchQuery,
            limit: this.perPage,
            page: this.currentPage,
          },
        });
        const data = response.data.data;
        this.currentItems = data.exams;
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
      this.fetchData();
    },
  },
  watch: {
    selectedCategory() {
      this.fetchData();
      console.log(this.selectedCategory);
    },
  },
  mounted() {
    this.fetchCategories();
    this.fetchData();
  },
};
</script>
