<template>
  <Header :competitions="competitions" @back="goBack" />
  <div class="md:py-8 min-h-[calc(100vh-250px)]">
    <div
      class="bg-white container pt-[10px] py-3 border-b border-color-border lg:hidden relative"
    >
      <!-- Nội dung và thông tin -->
    </div>
    <div class="lg:container mx-auto">
      <form @submit.prevent>
        <div class="lg:grid grid-cols-5 gap-3 max-sm:grid-cols-1">
          <div class="col-span-4 max-sm:col-span-1 max-sm:order-2">
            <CauHoi
              :dataQuestion="dataQuestion"
:selectedAnswers="selectedAnswers" @updateSelectedAnswers="updateSelectedAnswers"            />
          </div>
          <div
            class="bg-white rounded-lg p-3 max-sm:order-1 max-md:hidden h-fit sticky top-8"
          >
            <ThoiGian
              :dataQuestion="dataQuestion"
              :selectedAnswers="selectedAnswers"
              @submitExam="onSubmit"
              :timeDisplay="timeDisplay"
              :remainingSeconds="remainingSeconds"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  <Modal ref="PopUpCanhBao">
    <PopupCanhBao @close="closeThongBaoModal" @submit="onSubmit" />
  </Modal>
  <div
    v-if="showWarningModal"
    class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-white p-6 rounded shadow-lg text-center max-w-md">
      <h3 class="text-lg font-semibold mb-4">Cảnh báo</h3>
      <p class="text-gray-600 mb-4">
        Bạn không được chuyển tab hoặc thoát chế độ toàn màn hình!<br />
        Hệ thống sẽ tự động nộp bài trong
        <span class="text-red-500 font-bold">{{ warningCountdown }}</span> giây.
      </p>
      <button
        class="bg-red-500 text-white px-4 py-2 rounded"
        @click="handleCloseWarningModal"
      >
        Đóng và tiếp tục nộp bài
      </button>
    </div>
  </div>
 <CameraGiamSat
    v-if="isAIProctoringEnabled && id && !isFinished" 
    :examId="id"
    @forceSubmit="handleForceSubmit"
/>
</template>

<script>
import axios from "axios";
import CauHoi from "./CauHoi.vue";
import ThoiGian from "./ThoiGian.vue";
import Header from "@/components/ParitialCompetision/Header.vue";
import Modal from "@/components/global/Modal.vue";
import PopupCanhBao from "./PopupCanhBao.vue";
import _ from "lodash";
import CameraGiamSat from "@/components/GiamSat/CameraGiamSat.vue";
export default {
  components: {
    CauHoi,
    ThoiGian,
    Header,
    Modal,
    PopupCanhBao,
    CameraGiamSat,
  },
  data() {
    return {
      competitions: [],
      dataQuestion: [],
      selectedAnswers: {},
      slug: "",
      id: null,
      timeDisplay: null,
      // isFullscreen: false,
      remainingSeconds: "",
      isSubmitting: false,
      // showWarningModal: false,
      // warningCountdown: 5, // Đếm ngược 5 giây
      // warningInterval: null, // Interval cho đếm ngược
      isAIProctoringEnabled: false,
      isFinished: false,
      currentViolations: 0
    };
  },
  created() {
    // Tạo hàm saveDraft có khả năng Debounce (chờ 2s mới lưu)
    this.debouncedSaveDraft = _.debounce(this.saveDraft, 2000);
  },
  computed: {
    submitTime() {
      return this.competitions.submitTime;
    },
  },
  methods: {
    // openThongBaoModal() {
    //   this.$refs.PopUpCanhBao.openModal();
    // },
    // closeThongBaoModal() {
    //   this.$refs.PopUpCanhBao.closeModal();
    // },
handleViolationUpdate(count) {
        this.currentViolations = count;
    },

    async saveDraft() {
      // QUAN TRỌNG: Nếu đang nộp hoặc đã nộp thì KHÔNG ĐƯỢC LƯU NHÁP NỮA
      if (this.isSubmitting || !this.id) return;

      try {
        // Format đáp án để gửi lên
        const answersArray = this.dataQuestion.map((question) => {
          const qId = question.id;
          const ans = this.selectedAnswers[qId]
            ? Array.isArray(this.selectedAnswers[qId])
              ? this.selectedAnswers[qId]
              : [this.selectedAnswers[qId]]
            : [];
          return { id: qId, selectedAns: ans };
        });

        await axios.put(`/exam/save-draft/${this.id}`, {
          answers: answersArray,
        });
        console.log("Auto-saved draft");
      } catch (error) {
        console.error("Save draft error", error);
      }
    },

    handleForceSubmit(reason) {
      // 1. Hiện thông báo chặn
      if (this.debouncedSaveDraft) this.debouncedSaveDraft.cancel();
alert(`⛔ KẾT THÚC BÀI THI!\n\nBạn đã vi phạm quy chế quá 3 lần.\nLỗi cuối cùng: ${reason}\n\nHệ thống đang thu bài...`);

      // 2. Gọi hàm nộp bài (tham số true để báo là auto submit)
      this.onSubmit(true);
    },

    async fetchQuestions() {
      const testId = this.$route.params.id;
      try {
        const response = await axios.get(`/exam/detail-result/${testId}`);
        const resultData = response.data.data; // Dữ liệu từ Backend
console.log("Dữ liệu từ Server:", resultData.detailResult);
        // 1. Kiểm tra nếu bài đã nộp -> Chuyển hướng xem kết quả
        if (resultData.submitAt) {
          localStorage.removeItem("remainingTime");
          alert("Bài thi đã hoàn thành!");
          this.$router.replace({ name: "XemDapAn", params: { id: testId } });
          return;
        }

        // 2. Kiểm tra thời gian còn lại từ Server
        this.remainingSeconds = resultData.remainingSeconds;

        if (this.remainingSeconds <= 0) {
          alert("Bài thi đã hết giờ!");
          this.$router.replace({ name: "XemDapAn", params: { id: testId } });
          return;
        }

        // 3. Gán dữ liệu vào State
        this.dataQuestion = resultData.detailResult;
        this.slug = resultData.exam.slug;
        this.id = resultData.id;
        this.isAIProctoringEnabled = !!resultData.exam.is_ai_proctoring;
        console.log("AI Proctoring Status:", this.isAIProctoringEnabled);

        // 4. Khôi phục đáp án cũ (Fix lỗi savedAnswers)
        const savedAnswers = {}; // <--- QUAN TRỌNG: Khai báo biến trước khi dùng

        this.dataQuestion.forEach((q) => {
          if (q.answer && q.answer.length > 0) {
            if (q.type === "radio") {
              savedAnswers[q.id] = q.answer[0];
            } else {
              savedAnswers[q.id] = q.answer;
            }
          }
        });
        this.selectedAnswers = savedAnswers;

        // 5. Bắt đầu đếm ngược (Fix lỗi biến realRemainingSeconds)
        this.startCountdown(this.remainingSeconds);

        // 6. Lấy thêm thông tin bài thi (để hiển thị header nếu cần)
        await this.getInfo();
      } catch (error) {
console.error("Lỗi chi tiết:", error);
    
    // Ưu tiên lấy message từ các trường error thường gặp
    const errorMessage = error.response?.data?.error 
                      || error.response?.data?.message 
                      || JSON.stringify(error.response?.data) 
                      || error.message;

    alert("Chi tiết lỗi: " + errorMessage);
    //    this.$router.back(); // Quay lại trang trước nếu lỗi
      }
    },
    updateSelectedAnswers({ questionId, choice, type }) {
      if (type === "radio") {
        this.selectedAnswers[questionId] = choice;
      } else if (type === "checkbox") {
        if (!this.selectedAnswers[questionId]) {
          this.selectedAnswers[questionId] = [];
        }
        const answers = this.selectedAnswers[questionId];
        const index = answers.indexOf(choice);
        if (index > -1) {
          answers.splice(index, 1);
        } else {
          answers.push(choice);
        }
      }
      this.debouncedSaveDraft();
    },
    async onSubmit(isAutoSubmit = false) {
      if (!isAutoSubmit) {
        // eslint-disable-next-line no-restricted-globals
        // const confirmSubmit = confirm("Bạn chắc chắn muốn nộp bài?");
        // if (!confirmSubmit) return;
      }
      if (this.debouncedSaveDraft) {
        this.debouncedSaveDraft.cancel();
      }
      this.isSubmitting = true; // Khóa trạng thái
      const answersArray = this.dataQuestion.map((question) => {
        const questionId = question.id;
        const answer = this.selectedAnswers[questionId]
          ? Array.isArray(this.selectedAnswers[questionId])
            ? this.selectedAnswers[questionId]
            : [this.selectedAnswers[questionId]]
          : [];
        return { id: questionId, selectedAns: answer };
      });

      const payload = {
        answers: answersArray,
      };

      try {
        await axios.post(`/exam/submit/${this.id}`, payload);
        // 2. Xóa sạch dữ liệu tạm ở trình duyệt
        localStorage.removeItem(`remainingTime_${this.id}`); // Xóa key theo ID
        localStorage.removeItem("remainingTime"); // Xóa key cũ cho chắc
        localStorage.removeItem(`remainingTime_${this.id}`);
          localStorage.removeItem("remainingTime");
          localStorage.removeItem(`violations_${this.id}`); // <--- QUAN TRỌNG: Xóa số lần vi phạm sau khi nộp xong
        this.selectedAnswers = {}; // Reset biến tạm
        this.isFinished = true;
        if (isAutoSubmit) {
            alert("Đã hết thời gian làm bài! Hệ thống đã tự động nộp bài.");
        } else {
            alert("Nộp bài thành công!"); 
        }
       // alert("Nộp bài thành công!");
        this.$router.replace({ name: "competision-detail",params: { id: this.slug },query: { reload: Date.now() } }); // Dùng replace để không back lại được
      } catch (error) {
       console.error("Error submitting:", error);
        // Nếu lỗi là do quá hạn (Backend trả về 403), vẫn đá ra trang kết quả
        if (error.response && error.response.status === 403) {
             alert("Bài thi đã kết thúc.");
        this.$router.replace({ name: "competision-detail",params: { id: this.slug },query: { reload: Date.now() } }); // Dùng replace để không back lại được
        } else {
             alert("Có lỗi khi nộp bài: " + error.message);
        }
        this.isSubmitting = false;
      } finally {
        this.isSubmitting = false;
        clearInterval(this.countdownInterval); // Dừng countdown
        localStorage.removeItem("remainingTime"); // Xóa remainingTime
     //   this.$router.back(); // Chuyển trang
        clearInterval(this.countdownInterval);
      }
    },
    updateTimeDisplay(seconds) {
      const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
      const sec = String(seconds % 60).padStart(2, "0");
      this.timeDisplay = `${minutes}:${sec}`;
      this.remainingSeconds = seconds;
    },
    startCountdown(initialSeconds) {
      if (this.countdownInterval) clearInterval(this.countdownInterval);
      let totalSeconds = initialSeconds;
      this.updateTimeDisplay(totalSeconds);
      this.countdownInterval = setInterval(() => {
        if (totalSeconds <= 0) {
          clearInterval(this.countdownInterval);
          this.onSubmit(true);
        } else {
          totalSeconds -= 1;
          this.updateTimeDisplay(totalSeconds);
          localStorage.setItem(`remainingTime_${this.id}`, totalSeconds);
          const minutes = String(Math.floor(totalSeconds / 60)).padStart(
            2,
            "0"
          );
          const seconds = String(totalSeconds % 60).padStart(2, "0");
          this.timeDisplay = `${minutes}:${seconds}`;
          this.remainingSeconds = totalSeconds;
        }
      }, 1000);
    },
    async getInfo() {
      try {
        const [response] = await Promise.all([
          axios.get(`/exam/detail/${this.slug}`),
        ]);
        this.competitions = response.data.data;
        //  this.startCountdown();
        console.log(this.competitions.submitTime);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    goBack() {
      this.$router.back();
    },
    // Hàm kiểm tra trạng thái fullscreen
    // checkFullscreen() {
    //   this.isFullscreen = !!document.fullscreenElement;
    // },
    // // Mở fullscreen
    // enableFullscreen() {
    //   if (!document.fullscreenElement) {
    //     document.documentElement
    //       .requestFullscreen()
    //       .then(() => {
    //         console.log("Fullscreen activated!");
    //       })
    //       .catch((err) => {
    //         console.error("Failed to enable fullscreen:", err);
    //       });
    //   }
    // },

    // Hàm hiển thị modal cảnh báo và bắt đầu đếm ngược
    // openWarningModal() {
    //   this.showWarningModal = true; // Hiển thị modal cảnh báo
    //   this.startWarningCountdown(); // Bắt đầu đếm ngược
    // },
    // // Hàm đếm ngược 5 giây
    // startWarningCountdown() {
    //   this.warningCountdown = 5;
    //   if (this.warningInterval) clearInterval(this.warningInterval);
    //   this.warningInterval = setInterval(() => {
    //     if (this.warningCountdown > 1) {
    //       this.warningCountdown--;
    //     } else {
    //       this.handleCloseWarningModal();
    //     }
    //   }, 1000);
    // },
    // // Hàm đóng modal cảnh báo và nộp bài
    // handleCloseWarningModal() {
    //   this.showWarningModal = false; // Đóng modal cảnh báo
    //   clearInterval(this.warningInterval); // Dừng đếm ngược
    //   this.isSubmitting = true; // Đánh dấu trạng thái nộp bài
    //   this.onSubmit(); // Tự động nộp bài
    // },
    // // Khi thoát fullscreen
    // handleExitFullscreen() {
    //   if (!document.fullscreenElement && !this.isSubmitting) {
    //     this.openWarningModal(); // Mở modal cảnh báo
    //   }
    // },
    // // Khi chuyển tab
    // preventTabSwitch() {
    //   if (document.hidden && !this.isSubmitting) {
    //     this.openWarningModal(); // Mở modal cảnh báo
    //   }
    // },

    preventRightClick(event) {
      event.preventDefault();
    },
    preventKeyActions(event) {
      if (
        event.key === "F12" ||
        (event.ctrlKey &&
          event.shiftKey &&
          ["I", "C", "J", "N"].includes(event.key))
      ) {
        event.preventDefault();
      }
      if (event.altKey && event.key === "Tab") {
        event.preventDefault();
      }
    },
    handleKeyDown(event) {
      // Chặn Ctrl
      if (event.ctrlKey && !event.shiftKey && !event.altKey) {
        event.preventDefault();
      }

      // Cảnh báo khi nhấn Alt + Tab
      if (event.altKey) {
        event.preventDefault();
      }
    },
  },
  mounted() {
    // Khi trang được mount, mở fullscreen và gọi API
    // this.enableFullscreen();
    this.fetchQuestions();
    // this.preventTabOutAndDevTools();
    // Lắng nghe sự kiện thay đổi fullscreen
    // document.addEventListener("fullscreenchange", this.checkFullscreen);
    // document.addEventListener("fullscreenchange", this.handleExitFullscreen);
    document.addEventListener("contextmenu", this.preventRightClick);
    document.addEventListener("keydown", this.preventKeyActions);
    // document.addEventListener("visibilitychange", this.preventTabSwitch);
    document.addEventListener("keydown", this.handleKeyDown);
  },
  beforeUnmount() {
    // Xóa sự kiện khi component bị destroy
    // document.removeEventListener("fullscreenchange", this.checkFullscreen);
    // document.removeEventListener("fullscreenchange", this.handleExitFullscreen);
    document.removeEventListener("contextmenu", this.preventRightClick);
    document.removeEventListener("keydown", this.preventKeyActions);
    // document.removeEventListener("visibilitychange", this.preventTabSwitch);
    document.removeEventListener("keydown", this.handleKeyDown);
    // if (document.fullscreenElement) {
    //   document
    //     .exitFullscreen()
    //     .then(() => {
    //       console.log("Exited fullscreen successfully.");
    //     })
    //     .catch((err) => {
    //       console.error("Error exiting fullscreen:", err);
    //     });
    // }
  },
};
</script>
