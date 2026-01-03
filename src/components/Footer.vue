<template>
  <div class="bg-[#2B2D3B] pt-8 max-lg:pt-10">
    <div class="relative">
      <div class="container mx-auto">
        <div class="lg:grid lg:grid-cols-12">
          <div class="col-span-5">
            <!--            <div class="mb-8 max-lg:mb-5">-->
            <!--              <img-->
            <!--                src="@/assets/images/LogoFooter.svg"-->
            <!--                alt="Logo"-->
            <!--                class="h-9 w-auto max-lg:w-[100px] max-lg:h-[31px]"-->
            <!--              />-->
            <!--            </div>-->
            <div>
              <div class="flex mb-4 max-lg:mb-3">
                <img src="../assets/images/Outline.svg" alt="OutLine" class="h-6" />
                <p class="text-sm text-white font-normal ml-2">
                  Hoàng Quốc Việt - Hoàng Mai - Hà Nội
                </p>
              </div>
              <div class="flex mb-4 max-lg:mb-3">
                <img src="../assets/images/OutlineMail.png" alt="" class="h-6" />
                <p class="text-sm text-white font-normal ml-2">
                  012345679
                </p>
              </div>
              <div class="flex mb-4 max-lg:mb-[22px]">
                <img src="../assets/images/Outline.png" alt="" class="h-6" />
                <p class="text-sm text-white font-normal ml-2">
                  eedulearning@gmail.com
                </p>
              </div>
            </div>
          </div>
          <!-- <div class="max-lg:flex gap-4 lg:hidden">
            <div class="col-span-2 max-lg:w-[164px]">
              <h2 class="text-base font-bold text-white mb-5 max-lg:mb-4">
                DANH MỤC
              </h2>
              <p class="text-sm text-white font-medium mb-3">Trang chủ</p>
              <p class="text-sm text-white font-medium mb-3">Knowledge</p>
              <p class="text-sm text-white font-medium mb-3">Kho học liệu</p>
              <p class="text-sm text-white font-medium mb-3">Khảo sát</p>
            </div>
            <div class="col-span-2">
              <h2 class="text-base font-bold text-white mb-5 max-lg:mb-4">
                HỖ TRỢ
              </h2>
              <p class="text-sm text-white font-medium mb-3">Hotline</p>
              <p class="text-sm text-white font-medium mb-3">Liên hệ</p>
            </div>
          </div>
          <div class="col-span-2 max-lg:hidden">
            <h2 class="text-base font-bold text-white mb-5">DANH MỤC</h2>
            <p class="text-sm text-white font-medium mb-3 max-sm:text-[10px]">
              Trang chủ
            </p>
            <p class="text-sm text-white font-medium mb-3 max-sm:text-[10px]">
              Knowledge
            </p>
            <p class="text-sm text-white font-medium mb-3 max-sm:text-[10px]">
              Kho học liệu
            </p>
            <p class="text-sm text-white font-medium mb-3 max-sm:text-[10px]">
              Khảo sát
            </p>
          </div> -->
          <!-- <div class="col-span-2 max-lg:hidden">
            <h2 class="text-base font-bold text-white mb-5">HỖ TRỢ</h2>
            <p class="text-sm text-white font-medium mb-3 max-sm:text-[10px]">
              Hotline
            </p>
            <p class="text-sm text-white font-medium mb-3 max-sm:text-[10px]">
              Liên hệ
            </p>
          </div> -->
          <!-- <div class="col-span-3 max-lg:mb-4">
            <h2 class="font-bold text-white mb-5 max-lg:mb-3 text-base">
              TẢI ỨNG DỤNG
            </h2>
            <div class="flex justify-start flex-wrap gap-3">
              <img
                src="@/assets/images/g4036.svg"
                alt="Icon"
                class="max-lg:hidden"
              />
              <img
                src="@/assets/images/Badge.svg"
                alt="Icon"
                class="max-lg:hidden"
              />
              <img
                src="@/assets/images/ggplay.png"
                alt="Icon"
                class="lg:hidden w-[140px]"
              />
              <img
                src="@/assets/images/applestore.png"
                alt="Icon"
                class="lg:hidden w-[140px]"
              />
            </div>
          </div> -->
        </div>
      </div>
      <div
        class="rounded-[50%] bg-color-primary-2 fixed bottom-[58px] right-[48px] h-[48px] w-[48px] max-lg:w-10 max-lg:h-10 max-lg:right-4 max-lg:bottom-[54px] flex items-center justify-center"
        @click="scrollToTop">
        <img src="@/assets/images/arrow-up.svg" />
      </div>
    </div>
    <!-- <div class="w-full">t
      <hr />
    </div> -->
    <!-- <div
      class="flex text-[#8F8F8F] text-xs leading-[22px] font-medium items-center justify-center py-4 max-lg:py-2"
    >
      © 2024 CNGTVT. Đã đăng ký bản quyền.
    </div> -->
  </div>
</template>

<script>
  import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
  import defaultIcon from "@/assets/images/category-2.svg";
  import openIcon from "@/assets/images/CancelIcon.svg";
  export default {
    components: {
      Popover,
      PopoverButton,
      PopoverPanel,
    },
    data() {
      return {
        defaultIcon,
        openIcon,
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
  };
</script>