<template>
  <div class="py-5">
    <p
      class="text-font36lh font-bold text-color-primary pb-3 max-sm:text-font24px max-md:text-3xl max-md:ml-4"
    >
      Cuộc thi
    </p>

    <div class="bg-color-white rounded-lg max-md:pt-2">
      <!-- Tabs lựa chọn -->
      <div
        class="flex justify-start md:gap-3 px-6 border-b border-color-border max-md:px-0 text-font20lh max-md:text-font16lh"
      >
        <button
          @click="selectTab('myCompetitions')"
          :class="{
            'text-color-primary-2 font-semibold border-b-4 border-color-primary-2':
              activeTab === 'myCompetitions',
            'text-color-gray font-normal': activeTab !== 'myCompetitions',
          }"
          class="md:px-3 py-4 max-md:py-2 max-md:w-[50%]"
        >
          Cuộc thi của tôi
        </button>
        <button
          @click="selectTab('otherCompetitions')"
          :class="{
            'text-color-primary-2 font-semibold border-b-4 border-color-primary-2':
              activeTab === 'otherCompetitions',
            'text-color-gray font-normal': activeTab !== 'otherCompetitions',
          }"
          class="md:px-3 py-4 max-md:py-2 max-md:w-[50%]"
        >
          Cuộc thi khác
        </button>
      </div>

      <!-- Lọc theo danh mục và tìm kiếm -->
      <div
        class="grid grid-cols-4 gap-5 px-6 max-md:grid-cols-2 max-md:gap-3 text-color-primary"
      >
        <!-- Lọc theo danh mục -->
        <div class="py-3 max-md:pt-5 max-md:pb-0">
          <div class="max-md:text-sm max-md:pb-2">Danh mục</div>
          <select
            v-model="selectedCategory"
            @change="filterByCategory"
            class="py-2 px-3 border border-color-border w-full rounded-md focus:outline-none max-md:text-sm max-md:px-2 max-md:py-[10px]"
          >
            <option value="">Tất cả</option>
            <option
              v-for="category in categories"
              :key="category"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>

        <!-- Tìm kiếm -->
        <div class="py-3 max-md:pt-5 max-md:pb-0 col-span-2">
          <div class="max-md:text-sm max-md:pb-2">Tìm kiếm</div>
          <input
            type="text"
            v-model="searchQuery"
            @input="handleSearch"
            placeholder="Nhập từ khóa tìm kiếm..."
            class="py-2 px-3 border border-color-border w-full rounded-md focus:outline-none max-md:text-sm max-md:px-2 max-md:py-[10px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash/debounce";

export default {
  props: {
    categories: Array,
  },
  data() {
    return {
      activeTab: "myCompetitions",
      selectedCategory: "",
      searchQuery: "",
    };
  },
  methods: {
    selectTab(tab) {
      this.activeTab = tab;
      this.$emit("tabSelected", tab);
    },
    filterByCategory() {
      this.$emit("update:modelValue", this.selectedCategory);
    },
    handleSearch() {
      this.debouncedSearch(this.searchQuery);
    },
    emitSearch(query) {
      this.$emit("searchQuery", query);
    },
  },
  created() {
    // Tạo một function debounce để trì hoãn việc phát sự kiện search
    this.debouncedSearch = debounce(this.emitSearch, 1000);
  },
  beforeUnmount() {
    // Hủy debounce khi component bị gỡ bỏ
    this.debouncedSearch.cancel();
  },
};
</script>
