<script setup lang="ts">
import { defineProps, ref, computed } from "vue";
// Import Icons
import TickCircleIcon from "@/assets/images/tick-circle.svg";
import VideoCircleIcon from "@/assets/images/video-circle.svg";
import TextIcon from "@/assets/images/icon_text.svg";
import DocumentIcon from "@/assets/images/icon_doc.svg";
import BookOpenIcon from "@/assets/images/BookOpen.svg";

const props = defineProps({
  lessons: { type: Array, required: true },
  slug: { type: String, required: true },
  isRegistered: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },
});

const open = ref(false);

const displayedLessons = computed(() =>
  open.value ? props.lessons : props.lessons?.slice(0, 5)
);

// 👇 CẬP NHẬT LOGIC ICON TẠI ĐÂY
const getLessonIcon = (lesson: any) => {
  // 1. Nếu đã đăng ký và học xong -> Luôn hiện tích xanh
  if (props.isRegistered && lesson.is_completed) {
      return TickCircleIcon;
  }

  // 2. Nếu chưa xong, hiện icon theo loại
  switch (lesson.type) {
    case "video":        // Youtube
    case "upload_video": // MP4
      return VideoCircleIcon;
      
    case "file":         // Zip/Rar
    case "pdf":          // PDF
      return DocumentIcon;
      
    case "text":         // Văn bản
      return TextIcon;
      
    default: 
      return BookOpenIcon;
  }
};

const toggleOpen = () => {
  open.value = !open.value;
};
</script>

<template>
  <div class="bg-white rounded-lg mb-5">
    <div class="p-5 max-md:p-2">
      <div class="flex items-center gap-3 border-b border-color-button-change-slide pb-2">
        <img :src="BookOpenIcon" alt="Icon" />
        <p class="text-color-primary text-font20lh font-semibold max-lg:text-lg">
          Bài học
        </p>
      </div>

      <div class="w-full mt-5">
        <div v-if="!props.lessons || props.lessons.length === 0" class="text-center text-color-gray text-sm italic">
          Chưa có bài học nào !
        </div>
        
        <div v-else class="mx-auto w-full">
          <div class="border border-color-border rounded-md overflow-hidden mb-3">
            <div class="py-2 px-4 bg-white">
              <div
                v-for="(lesson, index) in displayedLessons"
                :key="index"
                class="grid grid-cols-2 max-lg:grid-cols-1 py-3 relative group"
                :class="{ 'border-b border-color-border-2': index !== displayedLessons.length - 1 }"
              >
                <div class="flex items-center gap-2 max-lg:w-full">
                  <img
                    :src="getLessonIcon(lesson)"
                    alt="Icon"
                    class="max-lg:h-5 w-6 h-6 object-contain"
                  />
                  <p 
                    class="text-sm font-medium"
                    :class="(!isRegistered || isBlocked) ? 'text-gray-400' : 'text-color-text-1'"
                  >
                    {{ lesson.name }}
                  </p>
                </div>

                <div class="absolute inset-0 flex items-center justify-end transition-opacity max-lg:mt-1">
                  
                  <div v-if="isBlocked">
                      <span class="text-xs font-bold text-red-400 bg-red-50 px-2 py-1 rounded border border-red-100 cursor-not-allowed">
                        🚫 Đã khóa
                      </span>
                  </div>

                  <div v-else-if="!isRegistered" class="pr-2" title="Vui lòng đăng ký khóa học">
                      🔒
                  </div>

                  <div v-else>
                      
                      <div v-if="lesson.is_completed">
                          <router-link :to="{ path: `/hoc/${slug}`, query: { lessonId: lesson.id } }">
                            <button class="px-4 py-[5px] bg-green-100 text-green-700 border border-green-200 hover:bg-green-200 rounded-lg text-sm transition-colors font-medium">
                              Xem lại
                            </button>
                          </router-link>
                      </div>

                      <div v-else>
                          <router-link :to="{ path: `/hoc/${slug}`, query: { lessonId: lesson.id } }">
                            <button class="px-4 py-[5px] bg-[#005ED3] hover:bg-blue-700 rounded-lg text-white text-sm font-bold shadow-sm transition-colors">
                              Vào học
                            </button>
                          </router-link>
                      </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

          <p
            v-if="props.lessons?.length > 5"
            @click="toggleOpen"
            class="text-base text-color-primary-2 font-semibold pt-4 text-center max-lg:text-sm cursor-pointer"
          >
            {{ open ? "Thu gọn" : "Xem thêm" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>