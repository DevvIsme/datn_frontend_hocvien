<template>
  <Popover v-slot="{ open, close  }" class="lg:hidden">
    <PopoverButton class="flex items-center outline-none">
      <!-- <img v-if="!open" src="@/assets/images/Notification.svg" alt="Location" class="h-6 w-6 mr-2" /> -->
      <img v-if="!open" src="@/assets/images/menu.svg" alt="Menu" class="max-lg:py-4" />
      <div v-else class="flex gap-x-2 items-center max-lg:py-[12px]">
        <!-- <img src="@/assets/images/Notification.svg" alt="Location" class="w-6 h-6" @click.stop /> -->
        <img src="@/assets/images/Default.svg" alt="Avatar" class="w-9 h-9" @click.stop />
        <img src="@/assets/images/Cancel.svg" alt="Close" class="w-6 h-6" />
      </div>
    </PopoverButton>

    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
      <PopoverPanel
        class="custom-scrollbar absolute left-0 top-14 z-50 w-full overflow-auto border-b-2 border-border bg-white text-base font-medium text-color-primary"
        style="max-height: calc(100vh - 0px); min-height: calc(100vh - 0px)">
        <div class="py-[7px] px-3 border">
        <router-link :to="{ name: 'Home' }" class="py-3 pl-2 block rounded-lg" active-class="bg-color-primary-2 text-white"   @click="close">
          Trang chủ
        </router-link>
          <router-link :to="{ name: 'Course' }" class="flex items-center gap-x-3 px-2 py-[10px] rounded-lg"
            active-class="bg-color-primary-2 text-white" @click="close">
            Khóa học
          </router-link>
          <router-link :to="{ name: 'Competision' }" class="flex items-center gap-x-3 px-2 py-[10px] rounded-lg"
            active-class="bg-color-primary-2 text-white" @click="close">
            Cuộc thi
          </router-link>
          <router-link :to="{ name: 'KhaoSat' }" class="py-3 pl-2 block rounded-lg"
            active-class="bg-color-primary-2 text-white" @click="close">
            Khảo sát
          </router-link>
        </div>

      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
  import { useRoute } from "vue-router";
  import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
  import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
  import { ChevronUpIcon } from "@heroicons/vue/20/solid";
  import TaiLieu from "@/assets/images/TaiLieu.svg";
  import TaiLieuActive from "@/assets/images/TaiLieuActive.svg";
  import CuocThi from "@/assets/images/CuocThi.svg";
  import CuocThiActive from "@/assets/images/CuocThiActive.svg";
  import KhoaHoc from "@/assets/images/KhoaHoc.svg";
  import KhoaHocActive from "@/assets/images/KhoaHocActive.svg";

  export default {
    data() {
      return {
        KhoaHoc,
        KhoaHocActive,
        CuocThi,
        CuocThiActive,
        TaiLieu,
        TaiLieuActive,
      };
    },
    computed: {
      route() {
        return useRoute();
      },
      isCourseActive() {
        return this.route.name === "Course";
      },
      isCompetisionActive() {
        return this.route.name === "Competision";
      },
      isTaiLieuActive() {
        return this.route.name === "TaiLieu";
      },
    },
    components: {
      Popover,
      PopoverButton,
      PopoverPanel,
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      ChevronUpIcon,
    },
  };
</script>