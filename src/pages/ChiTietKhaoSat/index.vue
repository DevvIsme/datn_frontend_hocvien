<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <Header :name="surveyName || 'Đang tải...'" />

    <div class="container mx-auto px-4 mt-6 max-w-4xl">
      
      <div v-if="loading" class="text-center py-10">
        <p class="text-gray-500">Đang tải nội dung khảo sát...</p>
      </div>

      <div v-else>
        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 class="text-2xl font-bold text-color-primary mb-2">{{ surveyName }}</h1>
          <p class="text-gray-500 text-sm">
            Vui lòng hoàn thành tất cả <span class="font-bold text-blue-600">{{ questions.length }}</span> câu hỏi dưới đây.
          </p>
        </div>

        <div class="space-y-6">
          <div 
            v-for="(q, index) in questions" 
            :key="q.id" 
            class="bg-white rounded-lg shadow-sm p-6 border-l-4 transition-all hover:shadow-md"
            :class="answers[index]?.value ? 'border-green-500' : 'border-gray-300'"
          >
            <div class="mb-4">
              <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mb-2 font-bold uppercase">
                {{ translateType(q.type) }}
              </span>
              <h3 class="text-lg font-semibold text-gray-800">
                <span class="text-blue-600 mr-1">Câu {{ index + 1 }}:</span> 
                {{ q.content }}
              </h3>
            </div>

            <div class="mt-3">
              
              <div v-if="q.type === 'rating' || !q.type" class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <button 
                    v-for="star in 5" 
                    :key="star"
                    type="button"
                    class="focus:outline-none transition-transform active:scale-110"
                    @click="updateAnswer(index, q.bank_id, star)"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      class="w-10 h-10 transition-colors duration-200"
                      :class="star <= (answers[index]?.value || 0) ? 'text-yellow-400' : 'text-gray-300'"
                    >
                      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  
                  <span v-if="answers[index]?.value" class="ml-3 font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                    {{ ratingLabels[answers[index]?.value - 1] }}
                  </span>
                </div>
                <p class="text-xs text-gray-400 mt-1 italic">Chọn số sao tương ứng với mức độ hài lòng của bạn.</p>
              </div>

              <div v-else-if="q.type === 'text'">
                <textarea
                  rows="4"
                  class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  placeholder="Nhập câu trả lời của bạn tại đây..."
                  :value="answers[index]?.value || ''"
                  @input="(e) => updateAnswer(index, q.bank_id, e.target.value)"
                ></textarea>
              </div>

              <div v-else-if="q.type === 'choice'" class="flex flex-wrap gap-4">
                 <button 
                    v-for="opt in ['Có / Đồng ý', 'Không / Từ chối']" :key="opt"
                    class="flex-1 min-w-[120px] py-3 px-4 rounded-lg border font-medium transition-all"
                    :class="answers[index]?.value === opt ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-gray-700 hover:bg-gray-50'"
                    @click="updateAnswer(index, q.bank_id, opt)"
                 >
                   {{ opt }}
                 </button>
              </div>

            </div>
          </div>
        </div>

        <div class="mt-8 flex justify-end">
          <button
            @click="handleSubmit"
            class="px-8 py-3 bg-color-primary-2 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="submitting"
          >
            {{ submitting ? 'Đang gửi...' : 'Gửi bài khảo sát' }}
          </button>
        </div>

      </div>
    </div>

    <div v-if="showSuccessPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
       <div class="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm mx-4 animate-fade-in-up">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Thành công!</h3>
          <p class="text-gray-600 mb-6">Cảm ơn bạn đã hoàn thành bài khảo sát.</p>
          <button @click="$router.push({ name: 'KhaoSat' })" class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Về danh sách
          </button>
       </div>
    </div>

  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios"; 

export default {
  components: { Header },
  data() {
    return {
      slug: this.$route.params.id,
      surveyId: null,
      surveyName: "",
      questions: [],
      answers: [], 
      loading: true,
      submitting: false,
      showSuccessPopup: false,
      
      // Label để hiển thị bên cạnh số sao
      ratingLabels: [
        "Không đồng ý", 
        "Hơi không đồng ý", 
        "Trung lập", 
        "Hơi đồng ý", 
        "Đồng ý"
      ]
    };
  },
  methods: {
    translateType(type) {
      if (type === 'text') return 'Tự luận';
      if (type === 'choice') return 'Trắc nghiệm';
      return 'Đánh giá';
    },

    async fetchSurveyData() {
      try {
        this.loading = true;
        // Chú ý: Đổi URL này cho đúng với config axios của bạn
        // Nếu bạn dùng axiosInstance thì thay axios bằng axiosInstance và bỏ domain localhost đi
        const res = await axios.get(`http://localhost:3000/api/survey/${this.slug}`);
        
        const data = res.data.survey ? res.data : res.data.data;
        
        this.surveyId = data.survey.id;
        this.surveyName = data.survey.name;
        this.questions = data.questions || [];
        this.answers = new Array(this.questions.length).fill(null);
      } catch (error) {
        console.error("Lỗi tải khảo sát:", error);
        alert("Không thể tải bài khảo sát.");
      } finally {
        this.loading = false;
      }
    },

    updateAnswer(index, bankId, value) {
      this.answers[index] = {
        bank_id: bankId,
        value: value 
      };
    },

    async handleSubmit() {
      const unanswered = this.answers.findIndex(a => !a || a.value === "" || a.value === null);
      if (unanswered !== -1) {
        alert(`Bạn chưa trả lời Câu ${unanswered + 1}.`);
        return;
      }

      if (!confirm("Gửi kết quả ngay?")) return;

      try {
        this.submitting = true;
        const payload = this.answers.filter(a => a !== null);
        
        await axios.post(`/survey/submit/${this.surveyId}`, {
          answers: payload
        });

        this.showSuccessPopup = true;
      } catch (error) {
        if (error.response && error.response.status === 401) {
            alert("Bạn đã làm bài này rồi!");
            this.$router.push({ name: 'KhaoSat' });
        } else {
            alert("Lỗi khi gửi bài.");
        }
      } finally {
        this.submitting = false;
      }
    }
  },
  mounted() {
    this.fetchSurveyData();
  }
};
</script>

<style scoped>
.bg-color-primary-2 {
  background-color: #005ED3;
}
/* Animation cho popup */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out forwards;
}
</style>