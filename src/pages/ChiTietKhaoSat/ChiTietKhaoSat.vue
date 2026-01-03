<template>
  <Header :name="name" />
  <div class="py-8 max-lg:py-0 min-h-[100vh] max-lg:min-h-0">
    <div class="md:mx-8">
      <div>
        <div class="lg:grid grid-cols-4 gap-3 max-sm:grid-cols-1">
          <div class="col-span-3 max-sm:col-span-1 max-sm:order-2">
            <CauHoi :questions="questions" @answer-selected="updateAnswer" />
          </div>
          <div class="bg-white rounded-lg p-3 h-fit sticky lg:top-0 bottom-0">
            <ThoiGian
              :questions="questions"
              :answers="answers"
              @open-thong-bao="openThongBaoHandler"
              @open-thong-bao-2="openThongBaoHandler"
            />
          </div>
          <div
            class="fixed top-0 left-0 right-0 bottom-0 bg-[#000] bg-modal flex justify-center items-center z-50"
            v-if="openThongBao"
          >
            <PopupThongBao @close="onCloseThongBao" @submit="submitAnswers" />
          </div>
          <div
            class="fixed top-0 left-0 right-0 bottom-0 bg-[#000] bg-modal flex justify-center items-center z-50"
            v-if="openThanhCong"
          >
            <PopupThanhCong />
          </div>
          <div
            class="fixed top-0 left-0 right-0 bottom-0 bg-[#000] bg-modal flex justify-center items-center z-50"
            v-if="openYeuCauLam"
          >
            <YeuCauLam @close="onCloseYeuCauLam" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopupThongBao from "./PopupThongBao.vue";
import PopupThanhCong from "./PopupThanhCong.vue";
import YeuCauLam from "./YeuCauLam.vue";
import CauHoi from "./CauHoi.vue";
import ThoiGian from "./ThoiGian.vue";
import Header from "./Header.vue";
import axios from "axios";

export default {
  components: {
    PopupThongBao,
    YeuCauLam,
    PopupThanhCong,
    CauHoi,
    ThoiGian,
    Header,
  },
  data() {
    return {
      questions: [],
      answers: [],
      submitted: false,
      openThongBao: false,
      openThanhCong: false,
      openYeuCauLam: false, // Quản lý trạng thái của popup YeuCauLam
      slug: this.$route.params.id,
      surveyId: "",
      name: "",
    };
  },
  methods: {
    async fetchKhaoSat() {
      try {
        const response = await axios.get(`/survey/${this.slug}`);
        // Check status ngay khi load
    if (response.data.data.survey.status === 'locked') {
        alert("Bài khảo sát này đang bị khóa.");
        // Có thể redirect về trang chủ hoặc disable toàn bộ input
        this.isLocked = true; // Khai báo thêm biến này trong data()
    }
        this.questions = response.data.data.questions;
        this.surveyId = response.data.data.survey.id;
        this.name = response.data.data.survey.name;
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu khảo sát:", error);
      }
    },
    updateAnswer({ index, answer }) {
      // Mapping các lựa chọn từ text sang số
      const answerMapping = {
        "Không đồng ý": 1,
        "Hơi không đồng ý": 2,
        "Trung lập": 3,
        "Hơi đồng ý": 4,
        "Đồng ý": 5,
      };

      // Tìm giá trị số tương ứng với đáp án
      const answerValue = answerMapping[answer] || 0;

      // Cập nhật trực tiếp mảng answers
      this.answers[index] = {
        id: this.questions[index].id,
        answer: answerValue,
      };
    },
    async submitAnswers() {
      if (
        this.answers.length !== this.questions.length ||
        this.answers.some((answer) => answer == null)
      ) {
        this.openThongBao = false; // Đảm bảo popup thông báo chính đóng lại
        this.openYeuCauLam = true; // Mở popup yêu cầu làm
        return;
      }

      try {
        this.submitted = true;
        const response = await axios.post(`/survey/attend/${this.surveyId}`, {
          answers: this.answers,
        });
        console.log("Phản hồi từ API:", response.data);
        this.openThanhCong = true;
      } catch (error) {
        console.error("Lỗi khi gửi câu trả lời:", error);
        this.submitted = false;
      }

      this.openThongBao = false;
    },
    onCloseYeuCauLam() {
      this.openYeuCauLam = false;
    },
    openThongBaoHandler() {
      this.openThongBao = true; // Mở popup thông báo
    },
    onCloseThongBao() {
      this.openThongBao = false;
    },
    handleBeforeUnload(event) {
      event.preventDefault();
      event.returnValue = ""; // Một thông báo mặc định sẽ hiển thị
    },
  },
  created() {
    // Thêm listener cho sự kiện beforeunload
    window.addEventListener("beforeunload", this.handleBeforeUnload);
  },
  beforeDestroy() {
    // Xóa listener khi component bị hủy
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
  },
  mounted() {
    this.fetchKhaoSat();
  },
};
</script>
