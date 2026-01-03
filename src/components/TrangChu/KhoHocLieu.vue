<template>
  <div class="py-12 max-lg:py-8">
    <div class="container mx-auto">
      <div>
        <p class="text-font36lh font-bold text-color-primary pb-3 max-md:text-font24px max-md:text-center">
          Kho học liệu
        </p>
        <div class="flex justify-between items-center border-b border-color-border">
          <div class="flex justify-center gap-3 max-md:w-full text-color-text-1">
            <p
              :class="{
                'border-b-4 border-color-primary-2 text-color-primary-2 font-bold': currentTab === 'tab1',
              }"
              class="text-font20lh max-md:text-font16lh font-semibold px-3 py-4 max-md:py-2 max-md:w-[40%] flex items-center justify-center cursor-pointer"
              @click="switchTab('tab1')"
            >
              Mới nhất
            </p>
            <p
              :class="{
                'border-b-4 border-color-primary-2 text-color-primary-2': currentTab === 'tab2',
              }"
              class="text-font20lh max-md:text-font16lh font-semibold px-3 py-4 max-md:py-2 max-md:w-[60%] flex items-center justify-center cursor-pointer"
              @click="switchTab('tab2')"
            >
              Nhiều người xem nhất 
            </p>
          </div>
          <div>
            <RouterLink to="/dao-tao/khoa-hoc">
              <div class="flex items-center py-10px px-4 gap-2 border border-color-primary-2 rounded-lg text-center max-sm:p-1 max-md:hidden">
                <p class="text-base font-semibold text-color-primary-2">Xem tất cả</p>
                <img src="@/assets/images/upper arrow.svg" alt="arrow" class="h-6 w-auto max-sm:h-4" />
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="pt-5 relative course">
        <Splide :options="splideOptions" ref="splide">
          <SplideSlide
            v-for="item in displayedItems"
            :key="item.id"
            class="relative max-md:h-300px max-md:w-[253px]"
          >
            <img src="@/assets/images/image-document.jpg" alt="Image" class="h-[308px] max-md:h-300px w-full object-cover rounded-lg" />
            <div class="bg-custom-dark absolute left-0 bottom-0 w-full text-white p-3 rounded-bl-lg rounded-br-lg">
              <p class="text-font18 font-bold">{{ item.title }}</p>
              <p class="font-normal text-sm">{{ item.description }}</p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
  <div class="flex items-center py-[9px] text-nowrap mt-3 px-4 gap-2 border border-color-primary-2 rounded-lg text-center w-[136px] mx-auto md:hidden">
    <p class="text-font14 font-semibold text-color-primary-2">Xem tất cả</p>
    <img src="@/assets/images/upper arrow.svg" alt="arrow" class="h-6 w-auto" />
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import axios from "axios";

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      itemsTab1: [],
      itemsTab2: [],
      currentTab: "tab1",
      splideOptions: {
        perPage: 4,
        perMove: 1,
        gap: 10,
        arrows: false,
        pagination: false,
        breakpoints: {
          768: {
            perPage: 1,
            pagination: true,
          },
          1024: {
            perPage: 3,
          },
        },
      },
    };
  },
  computed: {
    displayedItems() {
      return this.currentTab === 'tab1' ? this.itemsTab1 : this.itemsTab2;
    }
  },
  methods: {
    async fetchDocuments() { 
      try {
        const response = await axios.get("/material/list-document/1");
        const docs = response.data.data.docs;

        // Cập nhật itemsTab1 và itemsTab2 với dữ liệu nhận được
        this.itemsTab1 = docs.slice(0, 3).map(doc => ({
          id: doc.id,
          title: doc.name,
          description: "Học liệu tự do", // Thay đổi mô tả nếu cần
          image: "@/assets/images/image-document.jpg", // Thay đổi nếu cần
        }));

        this.itemsTab2 = docs.slice(3).map(doc => ({
          id: doc.id,
          title: doc.name,
          description: "Học liệu tự do", // Thay đổi mô tả nếu cần
          image: "@/assets/images/image-document.jpg", // Thay đổi nếu cần
        }));
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    },
    switchTab(tab) {
      this.currentTab = tab;
    },
  },
  created() {
    this.fetchDocuments();
  },
};
</script>
