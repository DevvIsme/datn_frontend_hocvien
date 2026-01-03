<script setup>
  import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

</script>

<template>
  <div class="bg-white rounded-lg p-3 max-md:hidden">
    <div class="flex justify-center items-center py-5 max-sm:py-2 gap-2">
      <img
        src="@/assets/images/alarm-clock 1.svg"
        alt="Clock"
        class="max-md:h-8 max-sm:h-4"
      />
      <p
        class="text-color-greend-2 text-4xl font-bold max-md:text-3xl max-sm:text-xs"
      >
        80:42
      </p>
    </div>

    <!-- Het thoi gian -->
    <!-- <div class="flex justify-center items-center py-5 gap-2">
                    <img src="@/assets/images/alarm-clock 1-2.svg" alt="Clock" class="max-md:h-8 max-sm:h-4">
                    <p class="text-color-red text-4xl font-bold max-md:text-3xl max-sm:text-xs">80:42</p>
                </div> -->

    <!-- ////// -->
    <div class="grid grid-cols-5 gap-2 max-lg:grid-cols-3 max-sm:grid-cols-6">
      <button
        class="p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-primary-2 flex justify-center items-center text-white rounded-lg relative font-semibold"
      >
        1
        <img
          src="@/assets/images/archive.svg"
          alt="Icon"
          class="absolute top-0 right-0 max-sm:h-2"
        />
        <img
          src="@/assets/images/IconBg.svg"
          alt="Icon"
          class="absolute bottom-0 right-0 h-4 object-cover max-sm:h-2"
        />
      </button>

      <button
        class="p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-white flex justify-center items-center text-color-text-1 rounded-lg relative font-semibold border border-[#D1D4E0]"
      >
        2
      </button>
      <button
        class="p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-white flex justify-center items-center text-color-text-1 rounded-lg relative font-semibold border border-[#D1D4E0]"
      >
        3
      </button>
      <button
        class="p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-white flex justify-center items-center text-color-text-1 rounded-lg relative font-semibold border border-[#D1D4E0]"
      >
        4
      </button>
      <button
        class="p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-white flex justify-center items-center text-color-text-1 rounded-lg relative font-semibold border border-[#D1D4E0]"
      >
        5
      </button>
      <button
        class="p-[10px] max-sm:p-1 max-sm:text-[10px] bg-color-white flex justify-center items-center text-color-text-1 rounded-lg relative font-semibold border border-[#D1D4E0]"
      >
        6
      </button>
    </div>
    <div
      class="flex items-start bg-color-orange-2 p-2 max-sm:p-1 rounded-md border border-color-orange-1 gap-2 mt-5 max-sm:flex-wrap max-md:text-center max-sm:justify-center"
    >
      <img
        src="@/assets/images/info-circle.svg"
        alt="Icon"
        class="max-lg:h-3"
      />
      <p class="text-color-primary text-sm max-lg:text-xs max-sm:text-[5px]">
        Thời gian được tính từ lúc bắt đầu làm bài. Hết thời gian quy định hệ
        thống sẽ tự động nộp bài
      </p>
    </div>
    <div class="py-5 text-center max-sm:py-2">
      <button
        class="py-[10px] px-4 w-[200px] bg-color-primary-2 rounded-lg text-white text-sm"
      >
        <p class="max-sm:text-[10px]">Nộp bài</p>
      </button>
    </div>
  </div>

  <div class="bg-white px-4 py-3 md:hidden text-center sticky bottom-0 shadow-box-shadow-1 border-t border-color-border">
      <Popover>
        <PopoverButton class="focus:outline-none w-full">
          <div class="flex justify-between items-center max-sm:py-2 gap-2">
            <div class="flex gap-3">
                <img
                src="@/assets/images/alarm-clock 1.svg"
                alt="Clock"
                class="max-md:h-6 max-md:w-auto"
              />
              <p
                class="text-color-greend-2 text-4xl font-bold max-md:text-xl"
              >
                80:42
              </p>
            </div>
            <div class="flex gap-2 items-center">
              <p class="text-sm font-semibold text-color-primary-2">Xem danh sách câu hỏi</p>
              <img src="@/assets/images/arrow-up-blue.svg" alt="Icon">
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
              class="flex justify-between border-b border-color-border py-3 px-4"
            >
              <p class="font-bold text-font20lh text-color-primary">
                Danh sách câu hỏi
              </p>

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
            <div class="mt-3 container mx-auto">
              <div class="flex justify-center items-center py-5 gap-2">
                <img
                  src="@/assets/images/alarm-clock 1.svg"
                  alt="Clock"
                />
                <p
                  class="text-color-greend-2 text-4xl font-bold"
                >
                  80:42
                </p>
              </div>
              <div class="grid grid-cols-7 gap-2 mt-4 text-font14">
                <button
                  class="p-[10px] bg-color-primary-2 flex justify-center items-center text-white rounded-lg relative font-semibold"
                >
                  1
                  <img
                    src="@/assets/images/archive.svg"
                    alt="Icon"
                    class="absolute top-0 right-0"
                  />
                  <img
                    src="@/assets/images/IconBg.svg"
                    alt="Icon"
                    class="absolute bottom-0 right-0 h-4 object-cover"
                  />
                </button>
                <button
                  class="py-[9px] px-2 bg-color-primary-2 w-10 h-10 text-center mx-auto text-white rounded-lg relative font-semibold"
                >
                  2
                  <img
                    src="@/assets/images/Union.svg"
                    alt="Icon"
                    class="absolute top-0 right-1"
                  />
                </button>
                <button
                  class="py-[9px] px-2 bg-color-primary-2 w-10 h-10 text-center mx-auto text-white rounded-lg relative font-semibold"
                >
                  3
                  <img
                    src="@/assets/images/Union.svg"
                    alt="Icon"
                    class="absolute top-0 right-1"
                  />
                </button>
                <button
                  class="py-[9px] px-2 bg-color-primary-2 w-10 h-10 text-center mx-auto text-white rounded-lg relative font-semibold"
                >
                  4
                  <img
                    src="@/assets/images/Union.svg"
                    alt="Icon"
                    class="absolute top-0 right-1"
                  />
                </button>
                <button
                  class="py-[9px] px-2 bg-color-primary-2 w-10 h-10 text-center mx-auto text-white rounded-lg relative font-semibold"
                >
                  5
                  <img
                    src="@/assets/images/Union.svg"
                    alt="Icon"
                    class="absolute mx-auto top-0 right-1"
                  />
                </button>
                <button
                  class="py-[9px] px-2 bg-color-primary-2 w-10 h-10 text-center mx-auto text-white rounded-lg relative font-semibold"
                >
                  6
                  <img
                    src="@/assets/images/Union.svg"
                    alt="Icon"
                    class="absolute mx-auto top-0 right-1"
                  />
                </button>
                <button
                  class="py-[9px] px-2 bg-white w-10 h-10 text-center mx-auto text-color-primary border border-color-border rounded-lg relative font-semibold"
                >
                  7
                  <!-- <img src="@/assets/images/Union.svg" alt="Icon" class="absolute top-0 right-1"> -->
                </button>
              </div>
              <div
                class="flex items-start bg-color-orange-2 p-2 rounded-md border border-color-orange-1 gap-2 my-4"
              >
                <img
                  src="@/assets/images/info-circle.svg"
                  alt="Icon"
                  class="h-5 w-5"
                />
                <p class="text-color-primary text-xs text-start">
                  Thời gian được tính từ lúc bắt đầu làm bài. Hết thời gian quy
                  định hệ thống sẽ tự động nộp bài
                </p>
              </div>
              <button
                @click=""
                class="w-full py-[9px] bg-color-primary-2 rounded-lg text-white font-semibold text-sm"
              >
                <p>Nộp bài</p>
              </button>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    <button
      class="w-full py-10px bg-color-primary-2 rounded-lg"
      @click=""
    >
      <p class="max-md:text-font14 text-color-white text-base font-semibold">
        Nộp bài
      </p>
    </button>
    
  </div>
</template>
