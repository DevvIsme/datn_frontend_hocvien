

<template>
  <div class="py-[80px] bg-training">
    <div class="container mx-auto relative">
      <p
        class="text-font36lh font-bold text-color-primary max-sm:text-font24px"
      >
        Kế hoạch đào tạo
      </p>

      <!-- // -->
      <Splide class="splide trainning" :options="splideOptions" ref="splide">
        <SplideSlide class="splide__slide">
          <div class="grid grid-cols-2 max-sm:grid-cols-1 gap-5 max-md:gap-2">
            <div
              class="flex items-center border-b border-color-border py-6 gap-3 max-md:gap-1 max-md:py-3"
            >
              <div class="w-12%">
                <p
                  class="text-font28 font-bold text-color-primary max-md:text-lg"
                >
                  09
                </p>
                <p class="font-medium text-sm text-color-gray max-md:text-[10px]">
                  Tháng12,
                  <br />
                  2024
                </p>
              </div>
              <div class="max-md:w-[88px] max-md:h-[66px]">
                <img
                  src="@/assets/images/Image_Ke_Hoach_Dao_Tao.svg"
                  alt="Image"
                  class=" rounded object-cover w-full h-full"
                />
              </div>
              <div class="flex-1 ml-2">
                <p
                  class="text-lg font-medium text-color-primary max-md:text-sm line-clamp-2"
                >
                  Khóa quản trị hệ thống theo tiêu chuẩn của hãng Microsoft
                </p>
                <div class="flex justify-start items-center gap-3 mt-2 max-md:gap-2">
                  <div
                    class="font-normal text-sm text-color-gray border-r border-color-border pr-3 max-md:text-[10px] max-md:pr-1"
                  >
                    6 Khoá học
                  </div>
                  <div
                    class="font-normal text-sm text-color-gray border-r border-color-border pr-3 max-md:text-[10px] max-md:pr-1"
                  >
                    2 Cuộc thi
                  </div>
                  <div
                    class="font-normal text-sm text-color-gray max-md:text-[10px]"
                  >
                    1 Khảo sát
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center border-b border-color-border py-6 gap-3 max-md:gap-1 max-md:py-3"
            >
              <div class="w-12%">
                <p
                  class="text-font28 font-bold text-color-primary max-md:text-lg"
                >
                  09
                </p>
                <p class="font-medium text-sm text-color-gray max-md:text-[10px]">
                  Tháng12,
                  <br />
                  2024
                </p>
              </div>
              <div class="max-md:w-[88px] max-md:h-[66px]">
                <img
                  src="@/assets/images/Image_Ke_Hoach_Dao_Tao.svg"
                  alt="Image"
                  class=" rounded object-cover w-full h-full"
                />
              </div>
              <div class="flex-1 ml-2">
                <p
                  class="text-lg font-medium text-color-primary max-md:text-sm line-clamp-2"
                >
                  Khóa quản trị hệ thống theo tiêu chuẩn của hãng Microsoft
                </p>
                <div class="flex justify-start items-center gap-3 mt-2 max-md:gap-2">
                  <div
                    class="font-normal text-sm text-color-gray border-r border-color-border pr-3 max-md:text-[10px] max-md:pr-1"
                  >
                    6 Khoá học
                  </div>
                  <div
                    class="font-normal text-sm text-color-gray border-r border-color-border pr-3 max-md:text-[10px] max-md:pr-1"
                  >
                    2 Cuộc thi
                  </div>
                  <div
                    class="font-normal text-sm text-color-gray max-md:text-[10px]"
                  >
                    1 Khảo sát
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center border-b border-color-border py-6 gap-3 max-md:gap-1 max-md:py-3"
            >
              <div class="w-12%">
                <p
                  class="text-font28 font-bold text-color-primary max-md:text-lg"
                >
                  09
                </p>
                <p class="font-medium text-sm text-color-gray max-md:text-[10px]">
                  Tháng12,
                  <br />
                  2024
                </p>
              </div>
              <div class="max-md:w-[88px] max-md:h-[66px]">
                <img
                  src="@/assets/images/Image_Ke_Hoach_Dao_Tao.svg"
                  alt="Image"
                  class=" rounded object-cover w-full h-full"
                />
              </div>
              <div class="flex-1 ml-2">
                <p
                  class="text-lg font-medium text-color-primary max-md:text-sm line-clamp-2"
                >
                  Khóa quản trị hệ thống theo tiêu chuẩn của hãng Microsoft
                </p>
                <div class="flex justify-start items-center gap-3 mt-2 max-md:gap-1">
                  <div
                    class="font-normal text-sm text-color-gray border-r border-color-border pr-3 max-md:text-[10px] max-md:pr-1"
                  >
                    6 Khoá học
                  </div>
                  <div
                    class="font-normal text-sm text-color-gray border-r border-color-border pr-3 max-md:text-[10px] max-md:pr-1"
                  >
                    2 Cuộc thi
                  </div>
                  <div
                    class="font-normal text-sm text-color-gray max-md:text-[10px]"
                  >
                    1 Khảo sát
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center border-b border-color-border py-6 gap-3 max-md:gap-1 max-md:py-3"
            >
              <div class="w-12%">
                <p
                  class="text-font28 font-bold text-color-primary max-md:text-lg"
                >
                  09
                </p>
                <p class="font-medium text-sm text-color-gray max-md:text-[10px]">
                  Tháng12,
                  <br />
                  2024
                </p>
              </div>
              <div class="max-md:w-[88px] max-md:h-[66px]">
                <img
                  src="@/assets/images/Image_Ke_Hoach_Dao_Tao.svg"
                  alt="Image"
                  class=" rounded object-cover w-full h-full"
                />
              </div>
              <div class="flex-1 ml-2">
                <p
                  class="text-lg font-medium text-color-primary max-md:text-sm line-clamp-2"
                >
                  Khóa quản trị hệ thống theo tiêu chuẩn của hãng Microsoft
                </p>
                <div class="flex justify-start items-center gap-3 mt-2 max-md:gap-2">
                  <div
                    class="font-normal text-sm text-color-gray border-r border-color-border pr-3 max-md:text-[10px] max-md:pr-1"
                  >
                    6 Khoá học
                  </div>
                  <div
                    class="font-normal text-sm text-color-gray border-r border-color-border pr-3 max-md:text-[10px] max-md:pr-1"
                  >
                    2 Cuộc thi
                  </div>
                  <div
                    class="font-normal text-sm text-color-gray max-md:text-[10px]"
                  >
                    1 Khảo sát
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </SplideSlide>
      </Splide>
      <div class="absolute top-1 right-0 flex gap-x-4">
    <button
          @click="$refs.splide.go('<')"
          class="hidden xl:block h-10 w-10 rounded-[10px] bg-color-button-change-slide text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
           <button
          @click="$refs.splide.go('>')"
          class="hidden xl:block h-10 w-10 rounded-[10px] text-white bg-color-button-change-slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
  </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      splide: null,
      splideOptions: {
        perPage: 1,
        perMove: 1,
        arrows: false,
        pagination: false,
      },
    };
  },
};
</script>
