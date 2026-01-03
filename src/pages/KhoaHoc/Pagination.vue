<template>
  <div class="m-5 flex justify-center items-center">
    <!-- Nút quay về trang trước -->
    <button
      class="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg mr-2"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      Trước
    </button>

    <!-- Hiển thị các trang -->
    <span
      v-for="page in pageNumbersToShow"
      :key="page"
      class="px-3 py-1 mx-1 rounded-lg cursor-pointer"
      :class="{
        'bg-blue-500 text-white': page === currentPage,
        'bg-gray-200 text-gray-700': page !== currentPage,
      }"
      @click="changePage(page)"
    >
      {{ page }}
    </span>

    <!-- Nút tới trang kế tiếp -->
    <button
      class="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg ml-2"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Tiếp
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pageNumbersToShow() {
      const pages = [];
      const delta = 2; // Số trang hiển thị quanh trang hiện tại

      // Hiển thị tất cả nếu số trang ít hơn hoặc bằng 9
      if (this.totalPages <= 5 + 2 * delta) {
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Luôn hiển thị trang đầu
        pages.push(1);

        // Hiển thị `...` nếu trang hiện tại nằm xa trang đầu
        if (this.currentPage > delta + 3) pages.push('...');

        // Hiển thị các trang xung quanh trang hiện tại
        for (
          let i = Math.max(2, this.currentPage - delta);
          i <= Math.min(this.totalPages - 1, this.currentPage + delta);
          i++
        ) {
          pages.push(i);
        }

        // Hiển thị `...` nếu trang hiện tại nằm xa trang cuối
        if (this.currentPage < this.totalPages - delta - 2) pages.push('...');

        // Luôn hiển thị trang cuối
        pages.push(this.totalPages);
      }

      return pages;
    },
  },
  methods: {
    changePage(page) {
      if (page !== '...' && page !== this.currentPage) {
        this.$emit("page-changed", page);
      }
    },
  },
};
</script>
