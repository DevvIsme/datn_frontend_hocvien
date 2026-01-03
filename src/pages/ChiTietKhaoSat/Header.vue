<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  props: {
    name: String,
  },
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  computed: {
    // Sử dụng mapState để lấy state từ Pinia
    ...mapState(useAuthStore, ["user"]),
  },
};
</script>
<template>
  <div class="bg-white">
    <div class="container mx-auto max-lg:border max-lg:border-color-border">
      <div class="flex justify-between items-center gap-3 py-3">
        <!--================= nút trở về ==================-->
        <div class="flex items-center gap-3">
          <div
            class="flex gap-3 cursor-pointer max-lg:hidden"
            @click="$router.back()"
          >
            <img src="@/assets/images/arrow-left.svg" alt="Icon" />
            <p class="text-[#005ED3] text-base font-semibold">Trở về</p>
          </div>
          <!--================= nút trở về ==================-->
          <!--================= nội dung ==================-->
          <div>
            <p
              class="text-[#273266] text-font20lh font-semibold max-md:text-lg"
            >
              {{ name }}
            </p>
            <!-- <div class="flex gap-2">
              <p class="text-[#636B90] text-sm">Số điểm cần đạt:</p>
              <p class="text-[#3C4378] text-sm font-medium">80 điểm</p>
            </div> -->
          </div>
        </div>
        <!--================= nội dung ==================-->

        <!--================= dấu x ==================-->
        <img
          @click="$router.back()"
          src="@/assets/images/Cancel.svg"
          alt="Icon"
          class="w-6 h-6 absolute top-3 right-4 lg:hidden"
        />
        <!--================= dấu x ==================-->

        <!--================= tên và menu ==================-->
        <Popover class="relative max-lg:hidden">
          <PopoverButton class="flex gap-1 items-center outline-none">
       <!--     <div>
              <img
                src="@/assets/images/Default.svg"
                alt="Aatar"
                class="w-full h-auto object-cover max-md:h-8"
              />
            </div>
            <div class="flex gap-1 items-center">
              <p
                class="text-sm font-medium text-[#273266] max-sm:hidden max-md:text-xs"
              >
                {{ user.fullName }}
              </p>
              <img
                src="@/assets/images/arrow-down.svg"
                alt="Arrow"
                class="w-4 h-4 cursor-pointer"
              />
            </div>-->
          </PopoverButton>
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel
              class="absolute top-9 w-[163px] z-10 right-0 bg-[#FFFFFF] p-2 rounded-[10px]"
            >
              <ul>
                <li
                  class="py-2 px-10px bg-[#EDF5FF] text-[#005ED3] text-base font-medium rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                >
                  Hồ sơ cá nhân
                </li>
                <li
                  class="py-2 px-10px text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                >
                  Khoá học của tôi
                </li>
                <li
                  class="py-2 px-10px text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                >
                  Cuộc thi của tôi
                </li>
                <li
                  class="py-2 px-10px text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                >
                  Khảo sát của tôi
                </li>
                <li
                  class="py-2 px-10px text-[#FB324A] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                >
                  Đăng xuất
                </li>
              </ul>
            </PopoverPanel>
          </transition>
        </Popover>
        <!--================= tên và menu ==================-->
      </div>
    </div>
  </div>
</template>
