<script setup>
import Lesson from "./Lesson.vue";
import Description from "./Description.vue";
import Infomation from "./Information.vue";
import Banner from "./Banner.vue";
// import Filter from "./Filter.vue"; // Đã bỏ import Filter
</script>

<template>
  <div class="bg-[#F5F5F5] min-h-screen pb-10">
    <Banner :name="detail.name" :topic="detail.topic" />

    <div class="container mx-auto mt-5 px-4">
      <div class="grid grid-cols-4 gap-6 max-md:grid-cols-1">
        <div class="col-span-3 max-md:order-2 max-md:col-span-1 flex flex-col gap-5">
          
          <Description :description="detail.description || ''" />

          <Lesson
            :lessons="lessonsData"
            :process="detail.process || 0"
            :slug="slug"
    :is-registered="detail.is_registered"
  :is-blocked="detail.is_blocked"
          />
        </div>

        <div class="col-span-1 max-md:order-1 relative">
           <div class="sticky top-[20px] z-10">
              <Infomation :course="detail" @register="register" />
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      detail: {},
      lessonsData: [],
      slug: this.$route.params.slug,
      loading: true,
    };
  },
  methods: {
    async register() {
      if(!confirm("Bạn có chắc chắn muốn đăng ký khóa học này?")) return;
      try {
        await axios.post(`/course/register/${this.slug}`);
        alert("Đăng ký thành công!");
        window.location.reload();
      } catch (error) {
        console.error("Lỗi đăng ký:", error);
        alert(error.response?.data?.message || "Đăng ký thất bại");
      }
    },

    async getInfo() {
      try {
        this.loading = true;
        
        const [resDetail, resLesson] = await Promise.all([
            axios.get(`/course/${this.slug}`),
            axios.get(`/material/list-lesson/${this.slug}`),
        ]);

        // 1. Detail
        // Backend trả về: { status: true, data: { ..., completed_lesson_ids: [...] } }
        let detailData = resDetail.data.data.data || resDetail.data; 
        console.log('COURSE: ' + detailData);
        this.detail = detailData || {};

        // Lấy danh sách ID đã học
        const completedIds = detailData.completed_lesson_ids || [];

        // 2. Lesson
        let lessonBody = resLesson.data;
        const rawLessons = lessonBody.lessons || lessonBody.data?.lessons || [];

        // 👇 QUAN TRỌNG: Map trạng thái is_completed vào từng bài học
        this.lessonsData = rawLessons.map(lesson => ({
            ...lesson,
            is_completed: completedIds.includes(lesson.id)
        }));

      } catch (error) {
        console.error("Lỗi tải trang chi tiết:", error);
      } finally {
        this.loading = false;
      }
    },
  
  },
  mounted() {
    this.getInfo();
  },
};
</script>