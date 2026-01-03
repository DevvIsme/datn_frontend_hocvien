<template>
  <div class="min-h-screen bg-gray-50">
    <div class="bg-white border-b px-6 py-4 shadow-sm sticky top-0 z-20">
      <div class="flex justify-between items-center mb-2">
        <h1 class="text-xl font-bold text-[#005ED3] truncate w-2/3">
          {{ course?.name || "Đang tải..." }}
        </h1>
      </div>
    </div>

    <div class="max-w-[1600px] mx-auto p-4 lg:p-6">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div class="lg:col-span-1 order-2 lg:order-1 flex flex-col gap-4">
          <div
            class="bg-white rounded-xl shadow-sm border overflow-hidden flex flex-col"
          >
            <div
              @click="isSidebarOpen = !isSidebarOpen"
              class="p-4 bg-gray-50 border-b flex justify-between items-center cursor-pointer hover:bg-gray-100 transition select-none"
            >
              <div>
                <h3 class="font-bold text-gray-800 text-sm">
                  Nội dung khóa học
                </h3>
                <p class="text-xs text-gray-500 mt-1">
                  {{ lessons.length }} bài học
                </p>
              </div>
              <div
                class="transition-transform duration-300"
                :class="isSidebarOpen ? 'rotate-180' : ''"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div
              v-show="isSidebarOpen"
              class="transition-all duration-300 ease-in-out"
            >
              <div
                class="overflow-y-auto max-h-[60vh] p-2 space-y-1 custom-scrollbar"
              >
                <div
                  v-for="(l, index) in lessons"
                  :key="l.id"
                  @click="selectLesson(l)"
                  class="cursor-pointer p-3 rounded-lg transition-all duration-200 flex gap-3 items-center group"
                  :class="
                    isActive(l)
                      ? 'bg-blue-50 border-blue-200 border'
                      : 'hover:bg-gray-50 border border-transparent'
                  "
                >
                  <div class="min-w-[24px]">
                    <span
                      v-if="l.is_completed"
                      class="text-green-500 font-bold text-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <span v-else class="text-gray-300 text-lg">○</span>
                  </div>

                  <div class="flex-1">
                    <p
                      class="text-sm font-medium"
                      :class="isActive(l) ? 'text-blue-700' : 'text-gray-700'"
                    >
                      {{ index + 1 }}. {{ l.name }}
                    </p>
                  </div>

                  <div
                    v-if="isActive(l)"
                    class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border p-5">
            <h3 class="text-lg font-bold text-blue-900 mb-4">
              Tổng kết khóa học
            </h3>

            <div class="flex items-center gap-4 text-gray-600 text-sm mb-4">
              <div class="flex items-center gap-2">
                <span>📖</span>
                <span>{{ lessons.length }} bài học</span>
              </div>
            </div>

            <div class="flex items-center gap-2 text-gray-600 text-sm mb-4">
              <span class="text-green-500 text-lg">✅</span>
              <span>{{ completedCount }} bài hoàn thành</span>
            </div>

            <div class="mb-4">
              <p class="text-gray-700 font-medium mb-2 text-sm">
                Bạn đã hoàn thành
                <span class="text-green-600 font-bold"
                  >{{ currentPercent }}%</span
                >
              </p>
              <div
                class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden"
              >
                <div
                  class="bg-green-600 h-2.5 rounded-full transition-all duration-500"
                  :style="{ width: (currentPercent || 0) + '%' }"
                ></div>
              </div>
            </div>

            <div>
              <div
                v-if="currentPercent === 100"
                class="w-full py-2 text-center rounded-full bg-green-50 text-green-700 font-bold border border-green-200"
              >
                🏆 Đã hoàn thành
              </div>
              <div
                v-else
                class="w-full py-2 text-center rounded-full bg-orange-50 text-orange-500 font-bold border border-orange-200 flex items-center justify-center gap-2"
              >
                <span>⚠️</span> Chưa hoàn thành
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 order-1 lg:order-2">
          <div
            v-if="currentLesson"
            class="bg-white rounded-xl shadow-sm overflow-hidden border"
          >
            <div class="p-1">
              <div
                v-if="currentLesson.type === 'video'"
                class="aspect-video bg-black rounded-lg overflow-hidden"
              >
                <iframe
                  class="w-full h-full"
                  :src="embedYoutube(currentLesson.context)"
                  title="Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div
                v-else-if="currentLesson.type === 'upload_video'"
                class="aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center"
              >
                <video
                  controls
                  autoplay
                  class="w-full h-full"
                  controlsList="nodownload"
                  preload="metadata"
                >
                  <source
                    :src="getStreamUrl(currentLesson.file_path)"
                    type="video/mp4"
                  />
                </video>
              </div>

              <div
                v-else-if="currentLesson.type === 'pdf'"
                class="h-[85vh] bg-gray-100 rounded-lg overflow-hidden border"
              >
                <iframe
                  :src="getFileUrl(currentLesson.file_path)"
                  class="w-full h-full border-none"
                ></iframe>
              </div>

              <div
                v-else-if="currentLesson.type === 'file'"
                class="min-h-[400px] bg-gray-50 flex items-center justify-center p-8"
              >
                <div
                  class="text-center p-6 border-2 border-dashed border-gray-300 rounded-xl bg-white"
                >
                  <div class="text-4xl mb-3">📁</div>
                  <p class="mb-4 text-gray-600 font-medium">
                    Tài liệu đính kèm: {{ currentLesson.file_path }}
                  </p>
                  <a
                    :href="getFileUrl(currentLesson.file_path)"
                    target="_blank"
                    class="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >Tải xuống</a
                  >
                </div>
              </div>

              <div v-else class="p-8 min-h-[400px] prose max-w-none">
                <div v-html="currentLesson.context"></div>
              </div>
            </div>

            <div class="p-6 border-t mt-2 bg-gray-50">
              <div class="mb-4">
                <h2 class="text-xl font-bold text-gray-800">
                  {{ currentLesson.name }}
                </h2>
                <p class="text-gray-500 text-sm">
                  Bài {{ getCurrentIndex() + 1 }} / {{ lessons.length }}
                </p>
              </div>

              <div class="flex justify-between items-center gap-3 flex-wrap">
                <button
                  @click="goToPrevious"
                  :disabled="getCurrentIndex() === 0"
                  class="px-4 py-2 rounded-lg font-medium transition-colors border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                >
                  ⬅️ Bài trước
                </button>

                <div class="flex gap-3">
                  <button
                    v-if="!currentLesson.is_completed"
                    @click="handleMarkAsCompleted"
                    :disabled="loadingUpdate"
                    class="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold shadow-md transition-all active:scale-95 flex items-center gap-2 disabled:opacity-70"
                  >
                    <span v-if="loadingUpdate">Đang lưu...</span>
                    <span v-else>✅ Hoàn thành bài này</span>
                  </button>

                  <button
                    @click="goToNext"
                    :disabled="isLastLesson"
                    class="px-5 py-2 bg-[#005ED3] hover:bg-blue-700 text-white rounded-lg font-bold shadow-md transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <span>Bài tiếp theo ➡️</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            v-else
            class="bg-white p-10 rounded-xl shadow h-[500px] flex items-center justify-center"
          >
            <p class="text-gray-500">⏳ Đang tải nội dung...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
// 👇 Sửa lại đường dẫn import đúng config của bạn
import axiosInstance from "axios";
//import { api_url } from "../../configs/environments";

const route = useRoute();
const router = useRouter();
const isSidebarOpen = ref(true);
const course = ref(null);
const lessons = ref([]);
const currentLesson = ref(null);
const currentPercent = ref(0);
const loadingUpdate = ref(false);
const api_url = "http://localhost:3000";

const completedCount = computed(() => {
    if (!lessons.value) return 0;
    return lessons.value.filter(l => l.is_completed).length;
});

// --- UTILS ---
const embedYoutube = (url) => {
  if (!url) return "";
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
};

// URL để xem file tĩnh (PDF, File tải về)
const getFileUrl = (path) => `${api_url}/files/${path}`;

// URL để stream video (gọi vào API stream của backend)
const getStreamUrl = (path) => `${api_url}/api/material/stream/${path}`;

const isActive = (lesson) =>
  currentLesson.value && currentLesson.value.id === lesson.id;

// Lấy index bài hiện tại
const getCurrentIndex = () => {
  if (!currentLesson.value || lessons.value.length === 0) return -1;
  return lessons.value.findIndex((l) => l.id === currentLesson.value.id);
};

const isLastLesson = computed(() => {
  const index = getCurrentIndex();
  return index !== -1 && index === lessons.value.length - 1;
});

// --- NAVIGATION ---
const selectLesson = (lesson) => {
  currentLesson.value = lesson;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const goToPrevious = () => {
  const index = getCurrentIndex();
  if (index > 0) {
    selectLesson(lessons.value[index - 1]);
  }
};

const goToNext = () => {
  const index = getCurrentIndex();
  if (index < lessons.value.length - 1) {
    selectLesson(lessons.value[index + 1]);
  } else {
    alert("Bạn đang ở bài cuối cùng của khóa học!");
  }
};

// --- ACTION ---
const handleMarkAsCompleted = async () => {
  if (!currentLesson.value) return;
  loadingUpdate.value = true;

  try {
    const res = await axiosInstance.post("/course/update-progress", {
      course_slug: route.params.slug,
      lesson_id: currentLesson.value.id,
    });

    if (res.data.data.status) {
      currentPercent.value = res.data.data.percent;
      currentLesson.value.is_completed = true;

      const lessonInList = lessons.value.find(
        (l) => l.id === currentLesson.value.id
      );
      if (lessonInList) lessonInList.is_completed = true;
    }
  } catch (error) {
    console.error("Lỗi cập nhật:", error);
  } finally {
    loadingUpdate.value = false;
  }
};

// --- INIT ---
onMounted(async () => {
  const slug = route.params.slug;
  if (!slug) return;

  try {
    // 1. Lấy thông tin khóa học
    const resCourse = await axiosInstance.get(`/course/${slug}`);
    let cData = resCourse.data;
    if (cData.data) cData = cData.data; // Unwrap
    if (cData.data) cData = cData.data;

    course.value = cData;
    currentPercent.value = cData.percent || 0;

    // 2. Lấy danh sách bài học
    const resLesson = await axiosInstance.get(`/material/list-lesson/${slug}`);

    let lData = resLesson.data;
    if (lData.data) lData = lData.data;

    const list = lData.lessons || [];
    lessons.value = list;

    // 3. Mở bài chưa học đầu tiên
    if (list.length > 0) {
      const queryLessonId = route.query.lessonId;
      if (queryLessonId) {
          const targetLesson = list.find(l => l.id == queryLessonId);
          if (targetLesson) {
              currentLesson.value = targetLesson;
              return; // Xong việc
          }
      }

      // 2. Nếu không có query, mở bài chưa học đầu tiên
      const firstUnfinished = list.find(l => !l.is_completed);
      currentLesson.value = firstUnfinished || list[0];
    }
  } catch (error) {
    console.error("Lỗi tải dữ liệu:", error);
  }
});
</script>

<style scoped>
.overflow-y-auto::-webkit-scrollbar {
  width: 5px;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
