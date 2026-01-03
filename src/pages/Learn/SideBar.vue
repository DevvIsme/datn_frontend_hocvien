<script setup>

    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        open: {
            type: Function,
            required: true
        },
        isopen : {
            type: Function,
            required: true
        },
    });


    function isopen() {
        props.isopen()
    }
</script>


<template>
  <div class="flex gap-2 border-b border-color-border px-8 py-4 cursor-pointer max-md:hidden" @click="isopen">
    <img src="@/assets/images/arrow-left-border.svg" alt="Icon" />
    <p v-if="open" class="text-color-primary text-font18 font-semibold">Nội dung nhiệm vụ</p>
  </div>
  <div>
    <div class="gap-3 relative overflow-hidden">
      <input
        type="checkbox"
        class="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"
      />
      <div
        class="flex gap-2 border-b border-color-border px-8 py-4 justify-between max-md:py-3 max-md:px-4"
      >
        <div>
          <p class="text-color-primary text-base font-semibold">
            Chương 1. Getting Started
          </p>
          <p class="text-color-gray text-xs ">
            1/10 | 1giờ 30 phút
          </p>
        </div>

        <img src="@/assets/images/arrow-down.svg" alt="Icon" />
      </div>

      <div
        class="bg-white overflow-hidden transition-all duration-100 hidden peer-checked:block"
      >
        <RouterLink to="/learn-video">
          <div class=" py-3 pl-8 pr-5 bg-color-primary-4 border-l-4 border-color-primary-2 max-md:py-3 max-md:px-4">
            <div class="flex gap-2 items-start">
              <img
                src="@/assets/images/tick-circle.svg"
                alt="Icon"
              />
              <div>
                <p
                  class="text-color-text-1 text-sm font-medium "
                >
                  What is React Js ?
                </p>
                <p
                  class="text-color-gray text-xs "
                >
                  10 phút
                </p>
              </div>
            </div>
          </div>
        </RouterLink>
        <div class="border-b border-color-border-2 py-3 pl-8 pr-5 max-md:py-3 max-md:px-4">
          <div class="flex gap-2 items-start">
            <img
              src="@/assets/images/video-circle.svg"
              alt="Icon"
            />
            <div>
              <p
                class="text-color-text-1 text-sm font-medium "
              >
                Welcome to the course
              </p>
              <p
                class="text-color-gray text-xs"
              >
                15 phút
              </p>
            </div>
          </div>
        </div>
        <div class="border-b border-color-border-2 py-3 pl-8 pr-5 max-md:py-3 max-md:px-4">
          <div class="flex gap-2 items-start">
            <img
              src="@/assets/images/video-circle.svg"
              alt="Icon"
            />
            <div>
              <p
                class="text-color-text-1 text-sm"
              >
                Why “React” but not “JavaScript”?
              </p>
              <p
                class="text-color-gray text-xs"
              >
                20 phút
              </p>
            </div>
          </div>
        </div>
        <div class="border-b border-color-border-2 py-3 pl-8 pr-5 max-md:py-3 max-md:px-4">
          <div class="flex gap-2 items-start">
            <img
              src="@/assets/images/book.svg"
              alt="Icon"
            />
            <div>
              <p
                class="text-color-text-1 text-sm font-medium"
              >
                Setting up Environment
              </p>
              <p
                class="text-color-gray text-xs"
              >
                15 phút
              </p>
            </div>
          </div>
        </div>
        <!-- <RouterLink :to="{name : 'pdf'}">
          <div class="border-b border-color-border-2 py-3 pl-8 pr-5 max-md:py-3 max-md:px-4">
            <div class="flex gap-2 items-start">
              <img
                src="@/assets/images/video-circle.svg"
                alt="Icon"
              />
              <div>
                <p
                  class="text-color-text-1 text-sm"
                >Learn more about research methods
                </p>
                <p
                  class="text-color-gray text-xs mt-1"
                >
                  20 phút
                </p>
              </div>
            </div>
          </div>
        </RouterLink> -->

        <RouterLink to="/learn-exam">
          <div class="border-b border-color-border-2 py-3 pl-8 pr-5 max-md:py-3 max-md:px-4">
            <div class="flex gap-2 items-start">
              <img
                src="@/assets/images/info-circle.svg"
                alt="Icon"
              />
              <div>
                <p
                  class="text-color-text-1 text-sm font-medium"
                >
                  Bài kiểm tra
                </p>
                <p
                  class="text-color-gray text-xs"
                >
                  Số điểm cần đạt 80 điểm |
                  <span class="text-color-red">Chưa đạt</span>
                </p>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>

    <div class="gap-3 relative overflow-hidden mb-5">
      <input
        type="checkbox"
        class="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"
      />
      <div
        class="flex gap-2 border-b border-color-border px-8 py-4 justify-between max-md:py-3 max-md:px-4"
      >
        <div class="flex gap-2 items-center">
            <img src="@/assets/images/medal-star-blue.svg" alt="Icon">
            <p class="text-color-primary text-lg font-semibold">
                Tổng kết khoá học
            </p>
        </div>
        

        <img src="@/assets/images/arrow-down.svg" alt="Icon" />
      </div>

      <div
        class="bg-white overflow-hidden transition-all duration-100 hidden peer-checked:block"
      >
        <div class="border-b border-color-border-2 py-3 pl-8 pr-5">
          <p class="text-color-primary text-base font-semibold">Figma UI UX Design</p>
          <div class="flex justify-between flex-wrap gap-3">
            <div class="flex gap-2 py-1">
                <img src="@/assets/images/bookmark.svg" alt="Icon">
                <p class="text-color-text-1 text-sm"><span>30</span> nhiệm vụ</p>
            </div>
            <div class="flex gap-2 py-1">
                <img src="@/assets/images/bookmark.svg" alt="Icon">
                <p class="text-color-text-1 text-sm"><span>30</span> nhiệm vụ</p>
            </div>
            <div class="flex gap-2 py-1">
                <img src="@/assets/images/bookmark.svg" alt="Icon">
                <p class="text-color-text-1 text-sm ">1 nhiệm vụ hoàn thành</p>
            </div>
          </div>
          <div>
              <p class="text-[#3C43780] text-base font-semibold">
                Bạn đã hoàn thành <span class="text-color-greend-1">10%</span>
              </p>
              <div
                class="relative w-full h-2 bg-gray-200 rounded-lg overflow-hidden mt-2"
              >
                <div
                  class="absolute top-0 left-0 h-full bg-color-greend-2 w-10%"
                ></div>
              </div>
            </div>
            <div class="flex justify-between py-2 items-center">
                <p class="text-color-primary text-sm font-semibold">Tổng kết:</p>
                <div class="flex gap-1 px-3 py-[6px] bg-color-orange-2 rounded-[100px] border border-color-orange-1">
                    <img src="@/assets/images/info-circle.svg" alt="Icon">
                    <p class="text-color-orange-1 text-sm font-semibold">Chưa hoàn thành</p>
                </div>
            </div>
            
        </div>
        
      </div>
    </div>
    
  </div>
</template>
