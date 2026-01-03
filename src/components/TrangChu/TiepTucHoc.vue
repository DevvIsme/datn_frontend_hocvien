<script>
export default {
  data() {
    return {
      courses: [
        {
          id: 1,
          title: "Khóa các bài giảng TT3 xây dựng hoàn thành trong năm 2023",
          imageUrl: "", // Không có ảnh
        },
        {
          id: 2,
          title: "Khóa các bài giảng TT3 xây dựng hoàn thành trong năm 2023",
          imageUrl: "@/assets/images/Image-continue-2.png", // Có ảnh
        },
        {
          id: 3,
          title: "Khóa các bài giảng TT3 xây dựng hoàn thành trong năm 2023",
          imageUrl: "", // Không có ảnh
        },
      ],
      defaultImage: "@/assets/images/default-image.png", // Đường dẫn tới ảnh mặc định
    };
  },
};
</script>
<template>
  <div class="py-12 max-lg:py-6">
    <div class="container mx-auto">
      <p
        class="text-font36lh font-bold text-color-primary text-center max-sm:text-font24px"
      >
        Tiếp tục học
      </p>

      <div
        class="grid grid-cols-3 gap-4 pt-10 max-lg:pt-5 max-md:flex overflow-x-scroll scroll-container"
      >
        <div
          v-for="course in courses"
          :key="course.id"
          class="bg-color-white rounded-lg shadow-continue max-md:w-[270px] flex-shrink-0"
        >
          <div class="relative">
            <img
              src="@/assets/images/Image-continue-2.png"
              alt="Course Image"
              class="object-cover aspect-16/9 rounded-lg max-lg:h-[120px] w-full"
            />
            <img
              src="@/assets/images/heart.svg"
              alt="Heart"
              class="bg-bg absolute top-3 right-[14px] px-[8px] py-[5px] rounded-[52px] border-[1.5px] border-border-heart"
            />
          </div>
          <div class="px-5 py-7 max-lg:pt-3 max-lg:pb-4">
            <p
              class="text-font18 max-lg:text-font16lh line-clamp-2 font-bold text-color-primary mb-2"
            >
              {{ course.title }}
            </p>
            <div class="max-md:w-full">
              <button
                class="px-4 py-2 bg-color-primary-2 rounded-lg text-white text-sm font-semibold max-md:w-full"
              >
                Học tiếp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
