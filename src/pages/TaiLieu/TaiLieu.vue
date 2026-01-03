<script setup>
import List from "./List.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

// Khởi tạo biến lưu dữ liệu từ API
const documents = ref([]);

// Hàm gọi API để lấy dữ liệu
const fetchDocuments = async () => {
  try {
    const response = await axios.get("/material/list-document/");
    documents.value = response.data.data.docs;
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
};

// Gọi API khi component được mount
onMounted(() => {
  fetchDocuments();
});
</script>

<template>
  <div class="container mx-auto">

    <!-- Truyền danh sách tài liệu xuống List -->
    <List :documents="documents" />
  </div>
</template>
