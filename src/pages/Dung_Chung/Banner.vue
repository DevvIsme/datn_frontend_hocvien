<template>
  <div class="bg-BgCourse bg-cover">
    <div class="container mx-auto">
      <div class="md:grid grid-cols-2 items-center">
        <div class="py-6 max-md:py-0">
          <div class="flex items-center justify-start gap-2 max-md:gap-1 py-4 text-font14 max-md:text-xs">
         <router-link
  to="/"
  class="text-color-text-breakcurmb font-normal cursor-pointer"
>
  Trang chủ
</router-link>
            <img src="@/assets/images/arrow-square-right.svg" alt="Icon" />
            <p class="text-[#fff]  font-medium cursor-pointer">
              Đào tạo
            </p>
          </div>
          <div>
            <p class="text-font24px font-bold text-white max-md:text-font20lh max-md:mb-3">
              Đào tạo
            </p>
          </div>
          <div class="md:py-6 w-4/6 max-md:w-full max-md:mb-[18px] opacity-0 cursor-pointer">
            <div
              action="#"
              class="bg-white py-1 pl-4 pr-1 rounded-lg flex justify-between cursor-pointer"
            >
              <div
                type="text"
                placeholder="Nhập tìm kiếm"
                class="w-full focus:outline-none max-md:text-base text-color-gray font-normal"
              />
              <button
                class="bg-color-primary-2 text-white p-2 gap-2 rounded max-md:w-10 max-md:h-10 flex-shrink-0"
              >
                <img
                  src="@/assets/images/search-normal.svg"
                  alt="Search"
                  class="max-md:w-6 max-md:h-6"
                />
              </button>
            </div>
          </div>
        </div>
          <div>
            <img src="@/assets/images/bg-banner-right.png" alt="Banner" class="max-md:hidden">
            <img src="@/assets/images/Frame.png" alt="Banner" class=" md:hidden">
          </div>
      </div>
    </div>
    <div class="bg-custom-gradient-banner max-md:hidden">
      <div
        class="grid grid-cols-2 px-120px max-lg:px-[50px] max-md:px-[20px] max-md:grid-cols-3"
      >
        <router-link
          :to="{ name: 'Course' }"
          class="py-3 max-lg:py-2 text-[#fff]"
          active-class="bg-[#fff] text-color-primary-2"
        >
          <div class="text-center border-x border-color-border" :class="isCourseActive ? 'border-none' : ''">
            <img
              :src="isCourseActive ? courseActiveIcon : courseIcon"
              alt="Image"
              class="mx-auto h-8 w-auto max-lg:h-5"
            />
            <p class="text-lg font-semibold max-lg:text-sm">Khóa học</p>
          </div>
        </router-link>
        <router-link
          :to="{ name: 'Competision' }"
            class="py-3 max-lg:py-2 text-[#fff]"
          active-class="bg-[#fff] text-color-primary-2"
        >
          <div class="text-center border-x border-color-border" :class="isCompetisionActive ? 'border-none' : ''">
            <img
              :src="
                isCompetisionActive ? competisionActiveIcon : competisionIcon
              "
              alt="Image"
              class="mx-auto h-8 w-auto max-lg:h-5"
            />
            <p class="text-lg font-semibold max-lg:text-sm">Cuộc thi</p>
          </div>
        </router-link>
        <!-- <router-link
          :to="{ name: 'TaiLieu' }"
          class="py-3 max-lg:py-2 text-[#fff]"
          active-class="bg-[#fff] text-color-primary-2"
        >
          <div class="text-center border-x border-color-border" :class="isTaiLieuActive ? 'border-none' : ''">
            <img
              :src="isTaiLieuActive ? taiLieuActiveIcon : taiLieuIcon"
              alt="Image"
              class="mx-auto h-8 w-auto max-lg:h-5"
            />
            <p class="text-lg font-semibold max-lg:text-sm">Tài liệu</p>
          </div>
        </router-link> -->
        <!-- <div class="py-3 max-lg:py-2">
          <div class="text-center border-l border-color-border">
            <img
              src="@/assets/images/medal-star.svg"
              alt="Image"
              class="mx-auto h-8 w-auto max-lg:h-5"
            />
            <p class="text-lg font-medium text-white max-lg:text-sm">
              Thành tích
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
  <!-- search -->
  <!-- <search :people="people" @update:selectedPerson="handleSelectedPerson" /> -->
  <!-- end search  -->
  <router-view></router-view>
</template>

<script setup>
import { computed,ref } from "vue";
import { useRoute } from "vue-router";

import courseIcon from "@/assets/images/ChalkboardTeacherBanner.svg";
import courseActiveIcon from "@/assets/images/ChalkboardTeacher1.svg";
import competisionIcon from "@/assets/images/Exam.svg";
import competisionActiveIcon from "@/assets/images/Exam1.svg";
import taiLieuIcon from "@/assets/images/Books.svg";
import taiLieuActiveIcon from "@/assets/images/Books1.svg";
//import search
// import search from "@/pages/search.vue";
const route = useRoute();

function goHome() {
router.push({ name: "Home" }); 
}

const isCourseActive = computed(() => {
  return route.name === "Course";
});

const isCompetisionActive = computed(() => {
  return route.name === "Competision";
});

const isTaiLieuActive = computed(() => {
  return route.name === "TaiLieu";
});

//search
// const people = [
//   { id: 1, name: "Wade Cooper" },
//   { id: 2, name: "Arlene Mccoy" },
//   { id: 3, name: "Devon Webb" },
//   { id: 4, name: "Tom Cook" },
//   { id: 5, name: "Tanya Fox" },
//   { id: 6, name: "Hellen Schmidt" },
// ];
// const selectedPerson = ref(null)

// function handleSelectedPerson(person) {
//     selectedPerson.value = person;
//   console.log('Parent received selected person:', selectedPerson.value);
//   // Handle the selected person (e.g., save to a v-model)
// }
//end-search
</script>