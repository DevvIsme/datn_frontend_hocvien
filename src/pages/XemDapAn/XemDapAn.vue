<template>
  <Header :name="nameHeader" :slug="slug" />
  <div class="py-8 max-md:py-0">
    <div class="md:container mx-auto">
      <div class="grid grid-cols-5 gap-0 max-md:grid-cols-1 max-md:gap-0">
        <div class="col-span-4">
          <!-- Truyền câu hỏi vào CauHoi -->
          <CauHoi :questions="questions" />
        </div>
        <div class="bg-white rounded-lg p-3 h-fit sticky -top-20">
          <!-- Truyền kết quả vào KetQua -->
          <KetQua />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CauHoi from "./CauHoi.vue";
import KetQua from "./KetQua.vue";
import Header from "@/components/XemDapAn/Header.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"; // Import useRoute

export default {
  components: {
    CauHoi,
    KetQua,
    Header,
  },

  setup() {
    const questions = ref([]); // Dữ liệu câu hỏi
    const route = useRoute(); // Sử dụng useRoute để lấy route thông qua hook
    const nameHeader = ref("");
    const slug = ref("");

    // Hàm fetch kết quả bài thi
    const fetchExamResult = async () => {
      try {
        const id = route.params.id; // Lấy id từ URL params
        const response = await axios.get(`/exam/detail-result/${id}`); // Gọi API với id
        const data = response.data.data;
        nameHeader.value = data.exam.name; // Cấu trúc lại dữ liệu cho câu hỏi
        slug.value = data.exam.slug;
        console.log(slug.value);
        
        questions.value = data.detailResult.map((item) => ({
          id: item.id,
          question: item.name,
          options: item.choice.map((choice) => ({
            text: choice,
          })),
          answer: item.correctAns,
          selectedAnswer: item.answer,
          type: item.type,
        }));
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu bài thi:", error);
      }
    };

    // Gọi API khi component được mount
    onMounted(fetchExamResult);

    return {
      questions,
      nameHeader,
      slug,
    };
  },
};
</script>
