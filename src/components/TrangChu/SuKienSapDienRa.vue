
<template>
  <div class="py-10 max-lg:pt-4 max-lg:pb-8 relative bg-arrow">
    <img src="@/assets/images/Bg_Su_Kien_Sap_Dien_Ra.png" alt="Image" class="absolute bottom-0 right-0 max-md:hidden">
    <div class="container mx-auto">
      <div class="flex justify-between border-b border-[#A5ABCA] items-center pb-3 px-4">
        <p class="text-font28 text-color-primary font-bold max-sm:text-lg">
          Sự kiện sắp diễn ra
        </p>
        <div class="flex">
          <p class="text-base font-semibold text-color-primary-2 z-50">Xem tất cả</p>
          <img
            src="@/assets/images/upper arrow.svg"
            alt="arrow"
            class="h-6 w-auto"
          />
        </div>
      </div>

      <div class="mt-5 event-slide container">
        <Splide :options="splideOptions">
          <SplideSlide>
            <div
            class="flex justify-between gap-2 max-lg:text-center max-lg:pb-2 max-md:text-start items-center"
          >
            <div class="bg-white py-2 px-3 rounded-lg w-24 h-24 flex justify-center items-center">
              <div>
                <p class="text-font28lh font-extrabold text-color-primary">
                14.01
              </p>
              <p class="text-sm font-medium text-color-gray">Năm 2024</p>
              </div>
              
            </div>
            <div class="flex-1 max-md:flex justify-between items-center">
              <div>
                <p class="text-base font-semibold text-color-primary">
                  Khóa bồi dưỡng kiến thức cơ bản về Lập trình Web Front-End
                </p>
                <p class="text-sm font-normal text-color-gray line-clamp-2">
                  Chuyên gia lập trình Front End - Trọn nghề Front end từ HTML,
                  CSS, đến Javascript 
                  CSS, đến Javascript 
                  CSS, đến Javascript 
                </p>
              </div>
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
            <div
            class="flex justify-between gap-2 max-lg:text-center max-lg:pb-2 max-md:text-start items-center"
          >
            <div class="bg-white py-2 px-3 rounded-lg w-24 h-24 flex justify-center items-center">
              <div>
                <p class="text-font28lh font-extrabold text-color-primary">
                14.01
              </p>
              <p class="text-sm font-medium text-color-gray">Năm 2024</p>
              </div>
              
            </div>
            <div class="flex-1 max-md:flex justify-between items-center">
              <div>
                <p class="text-base font-semibold text-color-primary">
                  Khóa bồi dưỡng kiến thức cơ bản về Lập trình Web Front-End
                </p>
                <p class="text-sm font-normal text-color-gray line-clamp-2">
                  Chuyên gia lập trình Front End - Trọn nghề Front end từ HTML,
                  CSS, đến Javascript
                </p>
              </div>
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
            <div
            class="flex justify-between gap-2 max-lg:text-center max-lg:pb-2 max-md:text-start items-center"
          >
            <div class="bg-white py-2 px-3 rounded-lg w-24 h-24 flex justify-center items-center">
              <div>
                <p class="text-font28lh font-extrabold text-color-primary">
                14.01
              </p>
              <p class="text-sm font-medium text-color-gray">Năm 2024</p>
              </div>
              
            </div>
            <div class="flex-1 max-md:flex justify-between items-center">
              <div>
                <p class="text-base font-semibold text-color-primary">
                  Khóa bồi dưỡng kiến thức cơ bản về Lập trình Web Front-End
                </p>
                <p class="text-sm font-normal text-color-gray line-clamp-2">
                  Chuyên gia lập trình Front End - Trọn nghề Front end từ HTML,
                  CSS, đến Javascript
                </p>
              </div>
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
            <div
            class="flex justify-between gap-2 max-lg:text-center max-lg:pb-2 max-md:text-start items-center"
          >
            <div class="bg-white py-2 px-3 rounded-lg w-24 h-24 flex justify-center items-center">
              <div>
                <p class="text-font28lh font-extrabold text-color-primary">
                14.01
              </p>
              <p class="text-sm font-medium text-color-gray">Năm 2024</p>
              </div>
              
            </div>
            <div class="flex-1 max-md:flex justify-between items-center">
              <div>
                <p class="text-base font-semibold text-color-primary">
                  Khóa bồi dưỡng kiến thức cơ bản về Lập trình Web Front-End
                </p>
                <p class="text-sm font-normal text-color-gray line-clamp-2">
                  Chuyên gia lập trình Front End - Trọn nghề Front end từ HTML,
                  CSS, đến Javascript
                </p>
              </div>
            </div>
          </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script>
  import { Splide, SplideSlide } from "@splidejs/vue-splide";

  // Default theme
  import "@splidejs/splide/css";

  // or only core styles
  import "@splidejs/splide/css/core";


  import { RouterLink } from "vue-router";
  import { ref } from "vue";

  const totalSlide = ref(4);
  const currentSlide = ref(0);
  export default {
    components: {
      Splide,
      SplideSlide,
    },
    data() {
      return {
        splideOptions: {
          arrows: false,
          autoplay: true,
          perPage: 3,
          gap : "30px",
        breakpoints: {
            1024: {
              perPage: 1,
            },
          },
        },
      };
    },
  };
</script>
