<template>
  <div class="py-14 course bg-training relative">
    <div class="container mx-auto">
      <p
        class="text-font36lh font-bold text-color-primary pb-3 max-md:text-font24px"
      >
        Các câu nói nổi tiếng
      </p>
      <div class="mt-4">
        <Splide :options="splideOptions" ref="splide">
          <SplideSlide v-for="(group, index) in groupedQuotes" :key="index">
            <div class="flex flex-col md:flex-row gap-4">
              <div
                v-for="quote in group"
                :key="quote.id"
                class="flex items-center bg-color-white p-6 max-md:p-4 rounded-lg gap-3 flex-1"
              >
                <div class="w-2/3 max-md:w-full">
                  <p
                    class="text-font18 font-medium text-color-primary border-b border-color-border pb-2 max-md:text-base"
                  >
                    {{ quote.text }}
                  </p>
                  <div class="max-md:flex justify-between max-md:mt-3">
                    <div
                      class="mt-3 max-md:mt-5 max-md:gap-4 flex justify-between max-md:flex-col max-md:justify-start"
                    >
                      <div>
                        <p
                          class="text-color-text-1 text-base font-semibold max-md:text-font14"
                        >
                          {{ quote.author }}
                        </p>
                        <p
                          class="text-color-gray text-sm font-normal max-md:text-xs"
                        >
                          {{ quote.occupation }}
                        </p>
                      </div>
                      <div>
                        <img :src="quote.icon" alt="Icon" class="max-md:h-8" />
                      </div>
                    </div>
                    <div class="md:hidden">
                      <img
                        :src="quote.image"
                        alt="Image"
                        class="object-cover rounded-lg h-[140px] w-auto"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex-1 max-md:hidden">
                  <img
                    :src="quote.image"
                    alt="Image"
                    class="object-cover rounded-lg h-52 w-auto"
                  />
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
        <button
          @click="$refs.splide.go('<')"
          class="hidden xl:block h-10 w-10 rounded-[10px] absolute top-14 right-[220px] bg-color-white text-arrow-2"
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
          class="hidden xl:block h-10 w-10 rounded-[10px] absolute top-14 right-[160px] text-arrow-2 bg-color-white"
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
import image1 from "@/assets/images/image-speech.png";
import image2 from "@/assets/images/image64.png";
import icon from "@/assets/images/Icon.svg";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      splideOptions: {
        perPage: 2,
        perMove: 1,
        gap: "30px",
        arrows: false,
        pagination: false,
        breakpoints: {
          768: {
            perPage: 1,
            perMove: 1,
            gap: "0.5rem",
            pagination: true,
          },
        },
      },
      quotes: [
        {
          id: 1,
          text: "“ Học vấn do người siêng năng đạt được, tài sản do người tinh tế sở hữu, quyền lợi do người dũng cảm nắm giữ, thiên đường do người lương thiện xây dựng.”",
          author: "Franklin",
          occupation: "Chính trị gia",
          image: image1, // Sử dụng ảnh từ import
          icon: icon,
        },
        {
          id: 2,
          text: "“ Những gì chúng ta biết vào ngày hôm nay sẽ lỗi thời vào ngày hôm sau. Nếu chúng ta ngừng học thì chúng ta sẽ ngừng phát triển.”",
          author: "Doroty Billington",
          occupation: "Nhà hóa học người Anh",
          image: image2, // Sử dụng ảnh từ import
          icon: icon,
        },
        // Thêm các mục khác
      ],
      groupedQuotes: [],
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 768) {
        this.groupedQuotes = this.groupQuotes(this.quotes, 2);
      } else {
        this.groupedQuotes = this.quotes.map((quote) => [quote]);
      }
    },
    groupQuotes(quotes, groupSize) {
      const grouped = [];
      for (let i = 0; i < quotes.length; i += groupSize) {
        grouped.push(quotes.slice(i, i + groupSize));
      }
      return grouped;
    },
  },
};
</script>

<style scoped>
.splide__slide {
  display: flex;
  justify-content: center;
}
</style>
