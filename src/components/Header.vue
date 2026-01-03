<template>
  <div class="sticky top-0 z-[1000] h-14">
    <div class="bg-white">
      <div class="container mx-auto">
        <div
          class="grid grid-cols-10 gap-3 max-lg:flex max-lg:justify-between items-center"
        >
          <div class="col-span-2 flex items-center justify-center">
          <RouterLink to="/">
              <img
              src="@/assets/images/default_logo.png"
                alt="Logo"
              class="h-14 w-auto"
           />
           </RouterLink> 
          </div>
          <div class="col-span-5 max-lg:hidden">
          <ul class="flex items-center gap-5 text-[#3C4378] text-base font-normal">
    <li class="px-4 py-4">
      <router-link
        :to="{ name: 'Home' }"
        active-class="text-[#005ED3] font-semibold"
      >
        Trang chủ
      </router-link>
    </li>

    <li class="px-4 py-4 max-xl:px-1" v-if="user">
      <router-link
        :to="{ name: 'DaoTao' }"
        active-class="text-[#005ED3] font-semibold"
        >Đào tạo
      </router-link>
    </li>

    <li class="px-4 py-4 max-xl:px-1" v-if="user">
      <router-link
        :to="{ name: 'KhaoSat' }"
        active-class="text-[#005ED3] font-semibold"
        >Khảo sát
      </router-link>
    </li>
  </ul>
          </div>
          <div
            class="col-span-3 flex items-center gap-6 max-lg:justify-end justify-end max-md:gap-2 max-lg:hidden"
          >
         
            <div class="flex items-center gap-1 relative" v-if="user">
              <div class="max-w-10 max-h-10 overflow-hidden rounded-full max-sm:max-h-6">
<!--                <img :src="userAvatar" alt="Avatar" />-->
                <img
                  :src="userAvatarUrl"
                  alt="Avatar"
                  class="w-10 h-10 rounded-md max-sm:h-4"
                />
              </div>
              <Popover class="relative" v-slot="{ close }">
                <PopoverButton class="flex gap-1 items-center outline-none">
                  <p class="text-base font-medium text-[#273266] max-sm:hidden">
                    {{ user.fullName }}
                  </p>
                  <img
                    src="@/assets/images/arrow-down.svg"
                    alt="Arrow"
                    class="w-4 h-4 cursor-pointer"
                  />
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
                    <div>
                      <router-link
                        @click="close"
                        :to="{ name: 'HoSoCaNhan' }"
                        active-class="text-color-primary-2 bg-color-primary-2/[0.1]"
                        class="py-2 px-10px text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1 block w-full hover:bg-color-primary-2/[0.1] hover:text-color-primary-2"
                      >
                        Hồ sơ cá nhân
                      </router-link>
                      <router-link
                        @click="close"
                        :to="{ name: 'Course' }"
                        active-class="text-color-primary-2 bg-color-primary-2/[0.1]"
                        class="py-2 px-10px text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1 block w-full hover:bg-color-primary-2/[0.1] hover:text-color-primary-2"
                      >
                        Khóa học của tôi
                      </router-link>
                      <router-link
                        @click="close"
                        :to="{ name: 'Competision' }"
                        active-class="text-color-primary-2 bg-color-primary-2/[0.1]"
                        class="py-2 px-10px text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1 block w-full hover:bg-color-primary-2/[0.1] hover:text-color-primary-2"
                      >
                        Cuộc thi của tôi
                      </router-link>
                       <router-link
                        @click="close"
                     :to="{ name: 'KhaoSat' }"
                        active-class="text-color-primary-2 bg-color-primary-2/[0.1]"
                        class="py-2 px-10px text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1 block w-full hover:bg-color-primary-2/[0.1] hover:text-color-primary-2"
                      >
                        Khảo sát của tôi
                      </router-link> 
                      <div
                        @click="handleLogout"
                        class="py-2 px-10px text-[#FB324A] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1 hover:bg-red-100 cursor-pointer"
                      >
                        Đăng xuất
                      </div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
            </div>
            <div v-else>
              <router-link
                :to="{ name: 'DangNhap' }"
                class="px-4 py-2 bg-[#005ED3] rounded-lg text-white"
                >Đăng nhập</router-link
              >
            </div>
          </div>
          <MobileMenu />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import MobileMenu from "@/components/MobileMenu.vue";
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";

export default {
  data(){return{image:{}}},
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MobileMenu,
  },
  computed: {
    // Sử dụng mapState để lấy state từ Pinia
    ...mapState(useAuthStore, ["user"]),
    userAvatar() {
      // Nếu user.image có giá trị, thêm tiền tố; nếu không, sử dụng ảnh mặc định.
      return this.image
        ? `http://localhost:3000/${this.user.avatar}`
        : "@/assets/images/Default.svg";
    },
    userAvatarUrl() {
    if (!this.user || !this.user.avatar) {
      return require('@/assets/images/default-avatar.png');
    }
    // Ghép URL localhost với tên file
    return `http://localhost:3000/public/avatars/${this.user.avatar}`;
  }
  },
  methods: {
    // Sử dụng mapActions để lấy các hành động từ store
    ...mapActions(useAuthStore, ["logout", "refreshTokenn"]),
    handleLogout() {
      this.logout(); // Call the logout action
    },
  },
};
</script>
