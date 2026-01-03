

<template>
  <div class="relative slider">
    <div
      class="absolute right-[4rem] top-[25%] max-xl:top-[20%] text-color-white z-20 flex-col max-lg:hidden"
    >
      <p class="text-color-white text-2xl font-bold">0{{ current }}</p>
      <div class="w-[1px] h-[86px] bg-color-gray-2 mx-auto"></div>
      <p class="text-colbg-color-gray-2 text-2xl font-bold">0{{ total }}</p>
    </div>
    <Splide
      :options="splideOptions"
      ref="splide"
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img
          src="@/assets/images/bg-home-2.png"
          alt="Background"
          class="object-cover h-[700px] w-full max-lg:object-right max-md:hidden"
        />
        <img
          src="@/assets/images/bg-slide-mobile.png"
          alt="Background"
          class="object-cover max-h-[728px] w-full md:hidden"
        />

        <div
          class="absolute top-[120px] max-lg:top-6 max-lg:left-4 max-lg:right-4 left-[120px] lg:w-[584px] bg-bg-content-slide rounded-2xl px-8 py-10 max-lg:pt-8 max-lg:pb-9 max-lg:px-5 opacity-90 text-white"
        >
          <div class="mb-10 max-lg:mb-5">
            <p class="text-font16lh mb-3 max-lg:mb-1 max-lg:text-font12">
              CHÀO MỪNG BẠN ĐẾN VỚI HỆ THỐNG HỌC TẬP EDU
            </p>
            <h3 class="text-font48lh font-bold max-lg:text-font28">
              Hành trang kiến thức
            </h3>
            <h3
              class="text-font48lh font-bold mb-5 max-lg:text-font28 max-lg:mb-3"
            >
              Nâng tầm tương lai
            </h3>
            <p class="text-font18 font-normal lg:pr-5 max-lg:text-font14">
              Giúp bạn phát triển sự nghiệp và hoàn thiện kiến thức của bản thân
              với các khóa học Online. Bạn có thể học mọi lúc, mọi nơi với
              điện thoại hoặc máy tính.
            </p>
          </div>

          <!-- <form
            class="bg-white text-black py-1 pl-4 pr-1 rounded-lg flex items-center justify-between w-full lg:w-[450px]"
          >
            <input
              type="text "
              placeholder="Nhập từ khóa tìm kiếm"
              class="focus:outline-none py-1 pl-4 pr-1 rounded-lg text-base font-normal"
            />
            <button class="bg-color-primary-2 text-white p-2 rounded">
              <img
                src="@/assets/images/search-normal.svg"
                alt="Icon"
                class=""
              />
            </button>
          </form> -->
        </div>
      </SplideSlide>
      <SplideSlide>
        <img
          src="@/assets/images/bg-home-2.png"
          alt="Background"
          class="object-cover h-[700px] w-full max-lg:object-right max-md:hidden"
        />
        <img
          src="@/assets/images/bg-slide-mobile.png"
          alt="Background"
          class="object-cover max-h-[728px] w-full md:hidden"
        />

        <div
          class="absolute top-[120px] max-lg:top-6 max-lg:left-4 max-lg:right-4 left-[120px] lg:w-[584px] bg-bg-content-slide rounded-2xl px-8 py-10 max-lg:pt-8 max-lg:pb-9 max-lg:px-5 opacity-90 text-white"
        >
          <div class="mb-10 max-lg:mb-5">
            <p class="text-font16lh mb-3 max-lg:mb-1 max-lg:text-font12">
              CHÀO MỪNG BẠN ĐẾN VỚI
            </p>
            <h3 class="text-font48lh font-bold max-lg:text-font28">
              Hành trang kiến thức
            </h3>
            <h3
              class="text-font48lh font-bold mb-5 max-lg:text-font28 max-lg:mb-3"
            >
              Nâng tầm tương lai
            </h3>
            <p class="text-font18 font-normal lg:pr-5 max-lg:text-font14">
              Giúp bạn phát triển sự nghiệp và hoàn thiện kiến thức của bản thân
              với hàng ngàn khóa học Online. Bạn có thể học mọi lúc, mọi nơi với
              điện thoại hoặc máy tính.
            </p>
          </div>

          <!-- <form
            class="bg-white text-black py-1 pl-4 pr-1 rounded-lg flex items-center justify-between w-full lg:w-[450px]"
          >
            <input
              type="text "
              placeholder="Nhập từ khóa tìm kiếm"
              class="focus:outline-none py-1 pl-4 pr-1 rounded-lg text-base font-normal"
            />
            <button class="bg-color-primary-2 text-white p-2 rounded">
              <img
                src="@/assets/images/search-normal.svg"
                alt="Icon"
                class=""
              />
            </button>
          </form> -->
        </div>
      </SplideSlide>
    </Splide>
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
        current: 1,
        total: null,
        splideOptions: {
          arrows: false,
          perPage: 1,
          paginationDirection: "ttb",
          breakpoints: {
            1024: {
              paginationDirection: "ltr",
            },
          },
        },
      };
    },
    mounted() {
      this.$nextTick(() => {
        if (this.$refs.splide && this.$refs.splide.splide) {
          this.splide = this.$refs.splide.splide;
          this.total = this.splide.length;
          this.splide.on("move", (newIndex) => {
            this.current = newIndex + 1;
            this.total = this.splide.length;
          });
        }
      });
    },
  };
</script>