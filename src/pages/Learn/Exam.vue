<script setup>
    import CauHoiKiemTra from './CauHoiKiemTra.vue';
    import ThoiGianKiemTra from './ThoiGianKiemTra.vue';
    import TabMota from './TabMota.vue';
    import TabBaiHoc from './TabBaiHoc.vue';
    import TabGhiChu from './TabGhiChu.vue'
    import TabTaiLieu from './TabTaiLieu.vue'
    import TabPhongChat from './TabPhongChat.vue'

    import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
    import defaultIcon from "@/assets/images/category-2.svg";
    import openIcon from "@/assets/images/CancelIcon.svg";

</script>

<template>
  <div class=" mx-auto">

    <form action="#">
          <div class="grid grid-cols-4 max-md:hidden">    
              <div class="col-span-3 flex justify-between items-center">
                <p class="text-color-primary text-font24px font-bold mb-5">Bài kiểm tra</p>
                  <p class="text-color-gray text-sm">Thời gian làm bài: <span class="text-color-text-1 font-medium">90 phút</span></p>
              </div>
          </div>
      <div class="grid grid-cols-4 gap-3 max-sm:grid-cols-1 max-md:gap-0">
        <div class="col-span-3 max-sm:col-span-1">
          <CauHoiKiemTra />
        </div>
        <ThoiGianKiemTra />
      </div>
    </form>
    <Popover class="fixed bottom-[120px] right-[20px] md:hidden">
      <PopoverButton
        class="rounded-[50%] bg-color-primary-2 h-[48px] w-[48px] flex items-center justify-center focus:outline-none"
      >
        <template v-slot="{ open }">
          <img :src="open ? openIcon : defaultIcon" alt="Toggle Icon" />
        </template>
      </PopoverButton>

      <PopoverPanel class="absolute top-[-300px] w-fit">
        <div class="flex flex-col gap-3">
          <button
            class="rounded-[50%] bg-white border border-color-border h-[48px] w-[48px] flex items-center justify-center focus:outline-none"
          >
            <Popover>
              <PopoverButton class="focus:outline-none w-full">
                <img src="@/assets/images/Books (1).svg" alt="Image" class="" />
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
                    <img src="@/assets/images/Books (1).svg" alt="Image" class="" />
                    <p class="text-color-primary text-xl font-semibold">Tài liệu</p>
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
                    <TabTaiLieu />
                </PopoverPanel>
              </transition>
            </Popover>
          </button>

          <button
            class="rounded-[50%] bg-white border border-color-border h-[48px] w-[48px] flex items-center justify-center focus:outline-none"
          >
            <Popover>
              <PopoverButton class="focus:outline-none w-full">
                <img src="@/assets/images/ChatsCircle.svg" alt="Category 1"/>
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
                    <img src="@/assets/images/ChatsCircle.svg" alt="Category 1"/>
                    <p class="text-color-primary text-xl font-semibold">Phòng chat</p>
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
                    <TabPhongChat />
                </PopoverPanel>
              </transition>
            </Popover>
          </button
          ><button
            class="rounded-[50%] bg-white border border-color-border h-[48px] w-[48px] flex items-center justify-center focus:outline-none"
          >
            <Popover>
              <PopoverButton class="focus:outline-none w-full">
                <img src="@/assets/images/message-text copy.svg" alt="Category 1"/>
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
                    <img src="@/assets/images/message-text copy.svg" alt="Category 1"/>
                    <p class="text-color-primary text-xl font-semibold">Ghi chú</p>
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
                    <TabGhiChu />
                </PopoverPanel>
              </transition>
            </Popover>
            </button
          ><button
            class="rounded-[50%] bg-white border border-color-border h-[48px] w-[48px] flex items-center justify-center focus:outline-none"
          >
            <Popover>
              <PopoverButton class="focus:outline-none w-full">
                <img src="@/assets/images/BookOpen1.svg" alt="Category 1" class="" />
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
                    <img src="@/assets/images/BookOpen1.svg" alt="Category 1" class="" />
                    <p class="text-color-primary text-xl font-semibold">Bài học</p>
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
                    <TabBaiHoc />
                </PopoverPanel>
              </transition>
            </Popover>
            
          </button>
          <button
            class="rounded-[50%] bg-white border border-color-border h-[48px] w-[48px] flex items-center justify-center focus:outline-none"
          >
            <Popover>
              <PopoverButton class="focus:outline-none w-full">
                <img src="@/assets/images/Info1.svg" alt="Category 1" class="" />
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
                    <img src="@/assets/images/Info1.svg" alt="Category 1" class="" />
                    <p class="text-color-primary text-xl font-semibold">Mô tả</p>
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
                    <TabMota />
                </PopoverPanel>
              </transition>
            </Popover>
          </button>
        </div>
      </PopoverPanel>
    </Popover>
  </div>
</template>
