<script>
export default {
  props: {
    topic: {
      type: Object,
    },
    name: {
      type: String,
    },
  },
};
</script>

<template>
  <div class="py-4 bg-BgCourse bg-cover relative">
    <div class="container mx-auto">
      <div>
        <div class="max-md:col-span-4 max-md:flex-1">
          <div
            class="flex items-center justify-start gap-2 py-4 max-lg:py-1 max-lg:gap-1"
          >
            <RouterLink
              href="/"
              class="text-color-text-breakcurmb text-font14 font-normal max-lg:text-xs cursor-pointer"
            >
              Trang chủ
            </RouterLink>
            <img
              src="@/assets/images/arrow-square-right.svg"
              alt="Icon"
              class="max-lg:h-[8px]"
            />
            <RouterLink
              href="/dao-tao/khoa-hoc"
              class="text-color-text-breakcurmb text-font14 font-normal max-lg:text-xs"
            >
              Khoá học
            </RouterLink>
            <img
              src="@/assets/images/arrow-square-right.svg"
              alt="Icon"
              class="max-lg:h-[8px]"
            />
            <p class="text-color-white text-font14 font-medium max-lg:text-xs">
              {{ name }}
            </p>
          </div>
          <div class="py-5">
            <div class="mt-16 max-md:mt-0">
              <p class="text-font24px font-bold text-white pb-3 max-lg:text-xl">
                {{ name }}
              </p>
              <div class="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
                <div class="flex items-center gap-1">
                  <p
                    class="text-color-text-breakcurmb text-font14 font-normal max-lg:text-sm"
                  >
                    Danh mục :
                  </p>
                  <p
                    class="text-font16lh font-medium text-color-white max-lg:text-sm"
                  >
                    {{ topic?.name }}
                  </p>
                </div>
              </div>
            </div>
            <!-- <div class="absolute bottom-0 right-0 max-lg:right-[-7rem]">
              <img
                src="@/assets/images/VNPT building 3.png"
                alt="Icon"
                class="max-lg:h-[142px]"
              />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
