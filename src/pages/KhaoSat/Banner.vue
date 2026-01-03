<template>
  <div class="bg-BgCourse bg-cover">
    <div class="container mx-auto">
      <div class="md:grid grid-cols-2 items-center">
        <div class="py-6 max-md:py-0">
          <div
            class="flex items-center justify-start gap-2 max-md:gap-1 py-4 text-font14 max-md:text-xs"
          >
          <router-link
  to="/"
  class="text-color-text-breakcurmb font-normal cursor-pointer"
>
  Trang chủ
</router-link>
            <img src="@/assets/images/arrow-square-right.svg" alt="Icon" />
            <p class="text-[#fff] font-medium">Khảo sát</p>
          </div>
          <div>
            <p
              class="text-font24px font-bold text-white max-md:text-font20lh max-md:mb-3"
            >
              Khảo sát
            </p>
          </div>
          <div class="md:py-6 w-4/6 max-md:w-full max-md:mb-[18px]">
            <!-- Thanh tìm kiếm -->
            <div class="relative mt-4">
              <input
                type="text"
                v-model="searchQuery"
                @input="handleSearch"
                placeholder="Tìm kiếm khảo sát..."
                class="w-full px-4 py-2 text-sm text-gray-800 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
            </div>
          </div>
        </div>
        <div>
          <img
            src="@/assets/images/KhaoSat.png"
            alt="Banner"
            class="max-md:hidden"
          />

          <img
            src="@/assets/images/KhaoSatMobile.png"
            alt="Banner"
            class="md:hidden"
          />
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearch() {
      this.$emit("searchQuery", this.searchQuery);
      // Xử lý logic tìm kiếm ở đây nếu cần
      console.log("Tìm kiếm:", this.searchQuery);
    },
  },
};
</script>
