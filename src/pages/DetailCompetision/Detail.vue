<template>
  <Header :competitions="competitions" @back="goBack" />
  <div>
    <div
      class="bg-white container pt-[10px] py-3 border-b border-color-border lg:hidden relative"
    >
      <!-- Nội dung khác của trang -->
    </div>

    <div class="container mx-auto min-h-[80vh]">
      <div
        class="grid grid-cols-1 gap-5 max-md:gap-[6px] pt-5 max-md:pt-1 pb-[100px] max-md:grid-cols-1"
      >
        <div class="bg-white pt-5 max-md:pt-3 rounded-lg">
          <!-- Nội dung khác của trang -->
          <div class="text-center pb-3 md:border-b border-color-border">
            <p
              class="text-color-primary text-font20lh font-semibold max-md:text-lg"
            >
              Làm bài thi
            </p>
          </div>
          <div class="max-md:border-y border-color-border">
            <div class="grid grid-cols-2 max-lg:grid-cols-1 mx-4">
              <div class="flex items-center gap-2 pt-3 max-md:pt-4">
                <div class="flex items-center gap-2">
                  <img src="@/assets/images/message-question.svg" alt="Icon" />
                  <p class="text-color-gray text-sm font-semibold">
                    Số câu hỏi :
                  </p>
                </div>
                <p class="text-color-primary text-sm font-medium">
                  {{ competitions.numberQuestion }} câu
                </p>
              </div>
              <div class="flex items-center gap-2 pt-3 max-md:pt-2">
                <div class="flex items-center gap-2">
                  <img src="@/assets/images/message-question.svg" alt="Icon" />
                  <p class="text-color-gray text-sm font-semibold">
                    Số lần làm bài:
                  </p>
                </div>
                <p
                  v-if="competitions.reDoTime !== 0"
                  class="text-color-primary text-sm font-medium"
                >
                  {{ competitions.reDoTime }}
                </p>
                <p v-else>Vô hạn</p>
              </div>

              <div class="flex items-center gap-2 pt-3 max-md:pt-2">
                <div class="flex items-center gap-2">
                  <img src="@/assets/images/message-question.svg" alt="Icon" />
                  <p class="text-color-gray text-sm font-semibold">
                    Thời gian làm bài:
                  </p>
                </div>
                <p class="text-color-primary text-sm font-medium">
                  {{ competitions.submitTime }} phút
                </p>
              </div>
                <div class="flex items-center gap-2 pt-3 max-md:pt-2">
                <div class="flex items-center gap-2">
                  <img src="@/assets/images/message-question.svg" alt="Icon" />
                  <p class="text-color-gray text-sm font-semibold">
                    Số điểm cần đạt:
                  </p>
                </div>
                <p class="text-color-primary text-sm font-medium">
                  {{ competitions.passingScore }}
                </p>
              </div>
              <div 
                class="flex items-start gap-2 pt-3 max-md:pt-2 col-span-2" 
                v-if="competitions.start_date || competitions.end_date"
              >
                <div class="flex items-center gap-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                  </svg>
                  <p class="text-color-gray text-sm font-semibold whitespace-nowrap">
                    Thời gian diễn ra:
                  </p>
                </div>
                <div class="text-color-primary text-sm font-medium flex flex-col">
                  <span v-if="competitions.start_date">
                    Bắt đầu: {{ formatDate(competitions.start_date) }}
                  </span>
                  <span v-if="competitions.end_date">
                    Kết thúc: {{ formatDate(competitions.end_date) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- Nút tham gia vòng thi -->
          <div
            class="py-5 max-md:py-4 mx-4 text-center md:border-b border-color-border"
          >
       <button
  @click="confirmJoinExam"
  :disabled="buttonState.disabled"
  class="px-4 py-2 rounded-lg text-white text-sm max-md:w-[200px] transition-colors shadow-sm"
  :class="buttonState.class" >
  <p class="max-md:text-xs font-bold">
    {{ buttonState.text }}
  </p>
</button>
          </div>

          <!-- Truyền prop vào component ResultTest -->
          <ResultTest
            :results="detail"
            :count="count"
            :examResult="competitions.submitTime"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResultTest from "./ResultTest.vue";
import Header from "@/components/ParitialCompetision/Header.vue";
import CanhBaoManHinh from "./CanhBaoManHinh.vue";
import CanhBaoDevTools from "./CanhBaoDevTools.vue";
import Modal from "@/components/global/Modal.vue";
import axios from "axios";

export default {

  computed: {
    // Logic quyết định trạng thái nút bấm
buttonState() {
      const now = new Date().getTime();
      const startDate = this.competitions.start_date ? new Date(this.competitions.start_date).getTime() : null;
      const endDate = this.competitions.end_date ? new Date(this.competitions.end_date).getTime() : null;

      // 1. Kiểm tra trạng thái ADMIN cấu hình
      if (this.competitions.status === 2) {
        return { text: "Bài thi đang bị khóa", disabled: true, class: "bg-orange-500 cursor-not-allowed" };
      }
      if (this.competitions.status === 0) {
        return { text: "Bài thi đang ẩn", disabled: true, class: "bg-gray-400 cursor-not-allowed" };
      }

      // 2. Kiểm tra THỜI GIAN
      if (startDate && now < startDate) {
         // Tính thời gian còn lại (Optional)
         return { text: "Chưa đến giờ làm bài", disabled: true, class: "bg-yellow-500 cursor-not-allowed" };
      }
      if (endDate && now > endDate) {
         return { text: "Bài thi đã kết thúc", disabled: true, class: "bg-red-500 cursor-not-allowed" };
      }

      // 3. Kiểm tra ĐANG LÀM DỞ (Ưu tiên cho phép vào làm nốt)
      if (this.ongoingExamId) {
        return { text: "Làm bài tiếp", disabled: false, class: "bg-green-600 hover:bg-green-700" };
      }

      // 4. Kiểm tra HẾT LƯỢT
      const maxAttempts = this.competitions.reDoTime;
      const currentAttempts = this.count || 0;

      if (maxAttempts > 0 && currentAttempts >= maxAttempts) {
        return { text: "Hết lượt làm bài", disabled: true, class: "bg-gray-500 cursor-not-allowed" };
      }

      // 5. Mặc định: Cho phép tham gia
      return { text: "Tham gia vòng thi", disabled: false, class: "bg-color-primary-2 hover:bg-blue-600" };
    }
  },
  // watch: {
  //   // Theo dõi sự thay đổi của đường dẫn (Route)
  //   $route(to, from) {
  //     // Bất cứ khi nào quay lại trang này, gọi ngay getInfo để làm mới dữ liệu
  //     this.getInfo();
  //   }
  // },
  components: {
    ResultTest,
    Header,
    CanhBaoManHinh,
    CanhBaoDevTools,
    Modal,
  },
  data() {
    return {
      competitions: [],
      detail: {},
      count: 0,
      status: "",
      slug: this.$route.params.id,
      error: null,
      loading: true,
      ongoingExamId: null,
    };
  },
  methods: {

    formatDate(dateString) {
      if (!dateString) return "Không giới hạn";
      const date = new Date(dateString);
      return date.toLocaleString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },
    async getInfo() {
      try {
        this.ongoingExamId = null;
        const [response, response_] = await Promise.all([
          axios.get(`/exam/detail/${this.slug}`),
          axios.get(`/exam/list-attend/${this.slug}`, {
            params: { limit: 999 },
          }),
        ]);
        this.competitions = response.data.data;
        this.detail = response_.data.data.results;
        const unfinished = this.detail.find(
          (item) => item.submitAt === null || item.submitAt === ""
        );
        if (unfinished) {
          this.ongoingExamId = unfinished.id;
        }
        this.count = response_.data.data.count;
        console.log(this.competitions, this.detail, this.count);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    // openThongBaoModal() {
    //   this.$refs.PopUpCanhBao.openModal();
    // },
    // closeThongBaoModal() {
    //   this.$refs.PopUpCanhBao.closeModal();
    // },
    //  openDevToolModal() {
    //   this.$refs.PopUpDevTool.openModal();
    // },
    // closeDevToolModal() {
    //   this.$refs.PopUpDevTool.closeModal();
    // },
    // isDevToolsOpen() {
    //   const threshold = 160; // Kích thước nhỏ hơn giá trị này có thể là DevTools đang mở
    //   const isOpen =
    //     window.outerWidth - window.innerWidth > threshold ||
    //     window.outerHeight - window.innerHeight > threshold;

    //   return isOpen;
    // },
    async confirmJoinExam() {
      if (this.buttonState.disabled) return;
      // if (this.isDevToolsOpen()) { 
      //   this.openDevToolModal();
      //   return;
      // }
      // this.closeThongBaoModal(); // Đóng modal trước
      try {
        // Gọi API để tham gia vòng thi
        // if (this.ongoingExamId) {
        //   this.$router.push({
        //     name: "LamBaiThi",
        //     params: { id: this.ongoingExamId },
        //   });
        //   return;
        // }
        const response = await axios.get(
          `/exam/attend/${this.competitions.slug}`
        );
        const examId = response.data.data.test; // Lấy `id` từ API
        // Điều hướng đến trang làm bài với `id` vừa nhận được
        this.$router.push({ name: "LamBaiThi", params: { id: examId } });
      } catch (error) {
        console.error("Lỗi khi tham gia vòng thi:", error);
        this.error = error.message;
      }
    },
    goBack() {
      this.$router.push({ name: "Competision" });
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>
