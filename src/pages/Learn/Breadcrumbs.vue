<script setup>

    import { defineProps, ref } from 'vue';
    import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
    import SideBar from './SideBar.vue';

    const props = defineProps({
        open: Boolean,
        isopen : {
            type: Function,
            required: true
        },
    });

    console.log(open);
    function isopen() {
        props.isopen();
    }
</script>

<template>
  <div class="container mx-auto ">
    <div class="flex justify-between py-5 max-lg:flex-wrap max-md:py-2 items-center">
      <div class="flex items-center justify-start gap-2 py-4 max-lg:flex-wrap">
        <div class="flex max-lg:order-3 items-center max-md:gap-2 max-md:hidden">
          <div v-if="!open" class="flex gap-3 py-4 cursor-pointer items-center" @click="isopen">
            <img src="@/assets/images/arrow-left-border.svg" alt="Icon" />
            <p  class="text-color-text-3 text-font18 font-semibold">Nội dung nhiệm vụ</p>
          </div> 
          <div>
            <div class="flex gap-2 md:hidden">
              <div class="p-2 border border-color-primary-2 rounded-lg">
                <img src="@/assets/images/message-text.svg" alt="Icon" class="max-md:h-5"/>
              </div>
              <div class="p-2 border border-color-primary-2 rounded-lg">
                <img src="@/assets/images/arrow-left.svg" alt="Icon" class="max-md:h-5"/>
              </div>
              <div class="p-2 border border-color-primary-2 rounded-lg">
                <img src="@/assets/images/arrow-right.svg" alt="Icon" class="max-md:h-5" />
              </div>
            </div>  
          </div> 
        </div>
        <div class="lg:hidden max-lg:order-3">
          <Popover>
            <PopoverButton class="focus:outline-none w-full">
              <div class="flex max-lg:order-3 items-center max-md:gap-2">
                <div class="flex gap-3 py-4 cursor-pointer items-center">
                  <img src="@/assets/images/arrow-left-border.svg" alt="Icon" />
                  <p  class="text-color-text-3 text-font18 font-semibold">Nội dung nhiệm vụ</p>
                </div> 
                <div>
                  <div class="flex gap-2 md:hidden">
                    <div class="p-2 border border-color-primary-2 rounded-lg">
                      <img src="@/assets/images/message-text.svg" alt="Icon" class="max-md:h-5"/>
                    </div>
                    <div class="p-2 border border-color-primary-2 rounded-lg">
                      <img src="@/assets/images/arrow-left.svg" alt="Icon" class="max-md:h-5"/>
                    </div>
                    <div class="p-2 border border-color-primary-2 rounded-lg">
                      <img src="@/assets/images/arrow-right.svg" alt="Icon" class="max-md:h-5" />
                    </div>
                  </div>  
                </div> 
              </div>
            </PopoverButton>
            <transition
              enter-active-class="transition duration-700 ease-out"
              enter-from-class="translate-y-4 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-4 opacity-0"
            >
              <PopoverPanel class="z-50 fixed top-0 left-0 w-full h-full bg-white">
                <div
                  class="flex justify-between border-b border-color-border py-[14px] px-4"
                >
                <div class="flex gap-2 cursor-pointer">
                  <img src="@/assets/images/arrow-left-border.svg" alt="Icon" />
                  <p class="text-color-primary text-xl font-semibold">Nội dung nhiệm vụ</p>
                </div>

                  <PopoverButton class="focus:outline-none"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 text-neutral-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </PopoverButton>
                </div>
                  <SideBar />
              </PopoverPanel>
            </transition>
          </Popover>
        </div>
        <!-- <p class="text-color-primary text-font24px font-bold mb-5 order-2 md:hidden">What is React JS?</p> -->
        <div class="flex justify-between items-center order-2 md:hidden gap-14">
            <p class="text-color-primary text-font24px font-bold max-md:text-xl">Bài kiểm tra</p>
            <p class="text-color-gray text-sm">Thời gian làm bài: <span class="text-color-text-1 font-medium">90 phút</span></p>
        </div>
        
        <div class="flex gap-2 max-lg:order-1 items-center">
          <p class="text-color-gray text-font14 font-normal max-md:text-xs">Trang chủ</p>
          <img src="@/assets/images/DoubleRight 2.svg" alt="Icon" />
          <p class="text-color-gray text-font14 font-normal max-md:text-xs">Khoá học</p>
          <img src="@/assets/images/DoubleRight 2.svg" alt="Icon" />
          <p class="text-color-text-1 text-font14 font-medium max-md:text-xs">Figma UI UX Design</p>
        </div>
        
      </div>
      <div>
        <div class="flex gap-3 max-md:gap-2 max-md:hidden">
          <div class="py-2 px-4 border border-color-primary-2 flex gap-2 rounded-lg max-md:py-[9px] max-md:px-2">
            <img src="@/assets/images/message-text.svg" alt="Icon" class="max-md:h-5"/>
            <p class="text-color-primary-2 text-base font-semibold max-md:hidden">Ghi chú</p>
          </div>
          <div class="py-2 px-4 border border-color-primary-2 flex gap-2 rounded-lg max-md:py-[9px] max-md:px-2">
            <img src="@/assets/images/arrow-left.svg" alt="Icon" class="max-md:h-5"/>
            <p class="text-color-primary-2 text-base font-semibold max-md:hidden">Bài trước</p>
          </div>
          <div class="py-2 px-4 border border-color-primary-2 flex gap-2 rounded-lg max-md:py-[9px] max-md:px-2">
            <img src="@/assets/images/arrow-right.svg" alt="Icon" class="max-md:h-5" />
            <p class="text-color-primary-2 text-base font-semibold max-md:hidden">Chuyển bài</p>
          </div>
        </div>  
      </div>
    </div>
  </div>
  </template>
  