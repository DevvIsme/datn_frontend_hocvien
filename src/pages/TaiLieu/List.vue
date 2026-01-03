<template>
  <div class="bg-white rounded-lg mb-6">
    <div class="p-5 max-md:px-3 max-md:pt-1">
      <!-- Duyệt qua danh sách tài liệu -->
      <div
        v-for="item in documents"
        :key="item.id"
        class="flex items-center justify-between gap-3 border border-color-button-change-slide px-4 py-2 mt-4 rounded-lg max-md:flex-wrap max-md:rounded max-md:p-3"
      >
        <div class="flex items-center gap-3 flex-1">
          <img src="@/assets/images/word.svg" alt="Icon" class="max-md:h-6" />
          <p class="text-color-primary text-base font-medium text-left">
            {{ item.name }}
          </p>
        </div>
        <p class="max-md:text-sm text-base text-color-gray flex-1 text-center">
          {{ item.createdAt || "Không có ngày" }}
        </p>
        <button
          @click="downloadFile(item.context)"
          class="bg-color-primary-2 rounded-lg text-white text-sm flex gap-2 items-center py-[5px] px-4 flex-1 justify-center"
        >
          <img src="@/assets/images/import.svg" alt="Icon" class="max-md:h-3" />
          <p class="text-base text-color-white max-md:text-sm">Tải xuống</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    documents: {
      type: Array,
      required: true,
    },
  },
  methods: {
    async downloadFile(context) {
      const url = `https://datn-backend-mjeb.onrender.com/files/${context}`;
      const response = await fetch(url);

      if (response.ok) {
        const blob = await response.blob();
        const link = document.createElement('a'); 
        link.href = window.URL.createObjectURL(blob); 
        link.download = context; 
        link.click(); 
        link.remove(); 
      } else {
        console.error("Error downloading file:", response.statusText);
      }
    },
  },
};
</script>
