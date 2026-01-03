<template>
  <Breadcrumb :items="breadcrumbItems" />
  <div class="bg-[#f5f5f5] pt-10 max-lg:pt-0 lg:pb-10">
    <div class="container mx-auto w-full">
      <div class="bg-white px-5">
        <!--============== Dòng đầu ================-->
        <div
          class="flex items-center justify-between py-4 max-lg:py-3 uppercase text-color-text-1 text-xl max-lg:text-base font-semibold max-lg:border-b border-line first-letter:uppercase"
        >
          <p>Thông tin sinh viên</p>
          <Menu as="div" class="relative inline-block lg:hidden h-6">
            <MenuButton>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3Z"
                  fill="rgb(var(--color-primary-text))"
                />
                <path
                  d="M12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17Z"
                  fill="rgb(var(--color-primary-text))"
                />
                <path
                  d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                  fill="rgb(var(--color-primary-text))"
                />
              </svg>
            </MenuButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 mt-2 w-[281px] origin-top-right rounded-md bg-white z-50 shadow-shadow-more"
              >
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      @click="$refs.changePassword.openModal()"
                      class="flex items-center gap-2 py-2 px-2 rounded-lg text-base w-full first-letter:uppercase"
                      :class="[
                        active
                          ? 'bg-color-primary-2 text-color-primary-2 font-semibold'
                          : 'text-color-primary-2 font-medium',
                      ]"
                    >
                      <svg
                        :class="{ hidden: !active }"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                          stroke="rgb(var(--color-primary-text))"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
                          stroke="rgb(var(--color-primary-text))"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                          stroke="rgb(var(--color-primary-text))"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <img
                        src="@/assets/icon/lock-neutral4.svg"
                        alt=""
                        class="w-5 h-5"
                        :class="{ hidden: active }"
                      />
                      Đổi mật khẩu
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>

          <div class="ml-auto flex items-center gap-x-3 max-lg:hidden">
          <button
    @click="openEditProfile()"
    class="flex items-center justify-center gap-2 py-2 px-3 font-semibold text-base rounded-lg bg-color-primary-2 text-white hover:opacity-90 transition-all"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.09 15.84L20.97 7.95001C22.34 6.58001 22.98 5.00001 20.97 2.99001C18.96 0.99001 17.38 1.68001 16.04 3.02001Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <p class="text-start first-letter:uppercase">Chỉnh sửa</p>
  </button>
            <button
              @click="$refs.changePassword.openModal()"
              class="flex items-center justify-center gap-2 py-2 px-3 font-semibold text-base rounded-lg border border-color-primary-2 hover:bg-color-primary-2/[0.1]"
            >
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                    stroke="rgb(var(--color-primary-text))"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
                    stroke="rgb(var(--color-primary-text))"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                    stroke="rgb(var(--color-primary-text))"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <p class="text-start first-letter:uppercase text-color-primary-2">
                Đổi mật khẩu
              </p>
            </button>
          </div>
        </div>
        <!--============== Dòng đầu ================-->

        <!--============== Dòng 2 bên trái ================-->
        <div class="lg:border-t border-line py-4 flex gap-x-12 max-lg:flex-col">
          <div
            class="flex flex-col space-y-3 text-center max-lg:items-center max-lg:mb-2"
          >
            <div class="mx-[10px]">
              <img
                :src="userAvatarUrl"
                alt="Avatar"
                class="max-h-[180px] max-w-[180px] min-w-[180px] rounded-full ob object-cover shadow-[0_7px_8px_1px_rgba(142,142,142,0.08)]"
              />
            </div>
            <p class="text-lg max-lg:text-base text-color-text-1 font-medium">
              {{ user.fullName }}
            </p>
          </div>
          <!--============== Dòng 2 bên trái ================-->
          <div class="w-full flex flex-col">
            <!--============== Dòng 2 bên phải ================-->
            <div
              class="grid grid-cols-3 gap-6 max-lg:gap-0 w-full max-lg:flex max-lg:flex-col"
            >
              <!-- Họ tên -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px] first-letter:uppercase"
                >
                  Họ tên
                </p>

                <p
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  {{ user.fullName }}
                </p>
              </div>

              <!-- Tên đăng nhập -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px] first-letter:uppercase text-nowrap"
                >
                  Tên đăng nhập
                </p>
                <p
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  {{ user.fullName }}
                </p>
              </div>

              <!-- Giới tính -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px] first-letter:uppercase"
                >
                  Giới tính
                </p>
                <p
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  {{ user.gender === 'male' ? 'Nam' : user.gender === 'female' ? 'Nữ' : 'Khác' }}
                </p>
              </div>

              <!-- Ngày sinh -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px] first-letter:uppercase"
                >
                  Ngày sinh
                </p>

                <div
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  {{ formatDate(user.birthday) }}
                </div>
              </div>

              <!-- Số điện thoại -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px] first-letter:uppercase"
                >
                  Số điện thoại
                </p>

                <p
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                   {{ user.phone }}
                </p>
              </div>

              <!-- Email  -->
              <div
                class="lg:space-y-1 max-lg:flex max-lg:gap-x-2 items-center max-lg:py-3 max-lg:border-b border-line"
              >
                <p
                  class="text-color-text-2 text-base font-normal max-lg:after:content-[':'] w-[105px]"
                >
                  Email
                </p>

                <p
                  class="text-color-text-1 text-base max-lg:text-base font-semibold max-lg:col-span-3"
                >
                  {{ user.email }}
                </p>
              </div>

           

          

    
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal ref="changePassword" @close-modal="doClearChangePassword">
    <div
      class="md:min-w-[550px] md:max-w-[550px] max-md:max-w-[343px] p-[20px] bg-white rounded-[10px]"
    >
      <div class="flex flex-col items-center justify-center">
        <div
          class="relative flex items-center justify-center w-[80px] h-[80px]"
        >
          <span
            class="animate-ping absolute inline-flex h-[50px] w-[50px] rounded-full bg-color-primary-2/[0.3] z-0"
          ></span>
          <span
            class="absolute inline-flex h-[58px] w-[58px] rounded-full bg-color-primary-2/[0.7] z-1"
          ></span>
          <img
            alt="notice"
            class="w-[27.5px] h-[27.5px] relative z-10 animate-wiggle"
            src="@/assets/lock-code.svg"
          />
        </div>
        <div
          class="font-semibold text-xl max-md:text-lg first-letter:uppercase mt-4 text-color-text-1"
        >
          Đổi mật khẩu
        </div>
      </div>
      <div class="flex flex-col gap-y-3 mt-4">
        <div class="items-center">
          <label class="text-base text-color-text-1 col-span-2 font-medium">
            Mật khẩu cũ
          </label>
          <div class="col-span-3">
            <div class="relative">
              <FormInput
                v-model="current_password"
                placeholder="Mật khẩu cũ"
                :toggle-password="true"
                field-name="oldPassword"
                input-class="!py-3 mt-1 h-[40px]"
                :type="showOldPassword ? 'text' : 'password'"
              />
              <div
                class="absolute right-3 top-3 text-gray-400"
                @click="showOldPassword = !showOldPassword"
              >
                <img
                  v-if="!showOldPassword"
                  src="@/assets/icon/eye-slash.svg"
                  alt="show password"
                  title="Ẩn"
                  id="show-password"
                  class=""
                />
                <img
                  v-if="showOldPassword"
                  src="@/assets/icon/eye-pass.svg"
                  alt="show password"
                  title="Hiện"
                  id="show-password"
                  class=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="items-center">
          <label class="text-base text-color-text-1 col-span-2 font-medium"
            >Mật khẩu mới
          </label>
          <div class="relative col-span-3">
            <FormInput
              v-model="new_password"
              placeholder="Mật khẩu mới"
              :toggle-password="true"
              field-name="password"
              input-class="!py-3 mt-1 h-[40px]"
              :type="showNewPassword ? 'text' : 'password'"
            />
            <div
              class="absolute right-3 top-3 text-gray-400"
              @click="showNewPassword = !showNewPassword"
            >
              <img
                v-if="!showNewPassword"
                src="@/assets/icon/eye-slash.svg"
                alt="show password"
                title="Ẩn"
                id="show-password"
                class=""
              />
              <img
                v-if="showNewPassword"
                src="@/assets/icon/eye-pass.svg"
                alt="show password"
                title="Hiện"
                id="show-password"
                class=""
              />
            </div>
          </div>
        </div>
        <div class="items-center">
          <label class="text-base text-color-text-1 col-span-2 font-medium"
            >Mật lại mật khẩu
          </label>
          <div class="relative col-span-3">
            <FormInput
              v-model="confirm_password"
              placeholder="Mật khẩu mới"
              :toggle-password="true"
              field-name="password"
              input-class="!py-3 mt-1 h-[40px]"
              :type="showRePassword ? 'text' : 'password'"
            />
            <div
              class="absolute right-3 top-3 text-gray-400"
              @click="showRePassword = !showRePassword"
            >
              <img
                v-if="!showRePassword"
                src="@/assets/icon/eye-slash.svg"
                alt="show password"
                title="Ẩn"
                id="show-password"
                class=""
              />
              <img
                v-if="showRePassword"
                src="@/assets/icon/eye-pass.svg"
                alt="show password"
                title="Hiện"
                id="show-password"
                class=""
              />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mx-auto gap-x-4 mt-2">
          <button
            :disabled="isSaving"
            class="flex items-center justify-center max-w-[160px] md:min-w-[160px] max-md:min-w-[140px] gap-x-3 hover:opacity-80 rounded-lg border border-color-primary-2 bg-opacity-10 py-2 text-base text-color-primary-2 font-semibold col-span-1"
            @click="$refs.changePassword.closeModal()"
          >
            <span>Hủy</span>
          </button>
          <button
            :disabled="isSaving"
            @click="doChangePassword()"
            class="flex items-center justify-center max-w-[160px] md:min-w-[160px] max-md:min-w-[140px] gap-x-3 hover:opacity-80 rounded-lg bg-color-primary-2 py-2 text-[15px] text-white font-semibold"
          >
            <span v-if="isSaving" class="loader loader-white" />
            <span>Lưu</span>
          </button>
        </div>
      </div>
    </div>
  </Modal>

  <Modal ref="editProfileModal" @close-modal="closeEditProfile">
    <div class="md:min-w-[600px] md:max-w-[600px] max-md:max-w-[343px] p-[20px] bg-white rounded-[10px] max-h-[90vh] overflow-y-auto">
      <div class="flex flex-col items-center justify-center mb-6">
         <h3 class="font-semibold text-xl text-color-text-1 uppercase">Cập nhật thông tin</h3>
      </div>

      <div class="flex flex-col gap-y-4">
        <div class="flex flex-col items-center gap-3">
            <div class="relative w-24 h-24">
                <img 
                  :src="previewAvatar || userAvatarUrl" 
                  class="w-24 h-24 rounded-full object-cover border border-gray-200 shadow-sm"
                />
                <label class="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer hover:bg-gray-100 border">
                    <input type="file" class="hidden" accept="image/*" @change="handleFileUpload">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17V19C9 19.55 9.45 20 10 20H14C14.55 20 15 19.55 15 19V17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 14V3" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 3L15 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 3L9 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </label>
            </div>
            <span class="text-xs text-gray-500">Nhấn icon để đổi ảnh đại diện</span>
        </div>

        <div class="grid grid-cols-1 gap-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                <input v-model="editForm.fullName" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-color-primary-2" placeholder="Nhập họ tên">
            </div>
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input v-model="editForm.email" type="email" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-color-primary-2" placeholder="Nhập email">
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                    <input v-model="editForm.phone" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-color-primary-2" placeholder="SĐT">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Ngày sinh</label>
                    <input v-model="editForm.birthday" type="date" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-color-primary-2">
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Giới tính</label>
                <div class="flex gap-4 mt-2">
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input type="radio" v-model="editForm.gender" value="male" class="accent-color-primary-2"> Nam
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input type="radio" v-model="editForm.gender" value="female" class="accent-color-primary-2"> Nữ
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input type="radio" v-model="editForm.gender" value="other" class="accent-color-primary-2"> Khác
                    </label>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-end gap-x-3 mt-4 pt-4 border-t">
          <button
            :disabled="isSaving"
            class="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50"
            @click="closeEditProfile"
          >
            Hủy 
          </button>
          <button
            :disabled="isSaving"
            @click="doUpdateProfile()"
            class="px-6 py-2 rounded-lg bg-color-primary-2 text-white hover:opacity-90 flex items-center gap-2"
          >
            <span v-if="isSaving" class="loader loader-white w-4 h-4 border-2"></span>
            <span>Lưu thay đổi</span>
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Breadcrumb from "@/components/global/Breadcrumb.vue";
import { mapActions, mapState } from "pinia";
import FormInput from "@/components/global/FormInput.vue";
import { useAuthStore } from "@/stores/auth";
import Modal from "@/components/global/Modal.vue";

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import axios from "axios";

export default {
  components: {
    Breadcrumb,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Modal,
    FormInput,
  },
  data: function () {
    return {
      showOldPassword: false,
      showNewPassword: false,
      showRePassword: false,
      confirm_password: "",
      new_password: "",
      current_password: "",
      isSaving: false,
      image: {},
      // toast: useToast(),
      editForm: {
        fullName: "",
        email: "",
        phone: "",
        birthday: "",
        gender: "other",
        avatarFile: null, // Để lưu file upload
      },
      previewAvatar: null, // Để hiển thị ảnh xem trước khi chọn file
      breadcrumbItems: [
        { label: "Trang chủ", link: "Home" },
        { label: "Hồ sơ cá nhân", link: "HoSoCaNhan" },
      ],
    };
  },
  computed: {
    ...mapState(useAuthStore, ["user"]),
    userAvatar() {
      // Nếu user.image có giá trị, thêm tiền tố; nếu không, sử dụng ảnh mặc định.
      return this.image
        ? `https://datn-backend-mjeb.onrender.com/${this.user.avatar}`
        : "@/assets/images/Default.svg";
    },
      userAvatarUrl() {
    if (!this.user || !this.user.avatar) {
      return require('@/assets/images/default-avatar.png');
    }
    // Ghép URL localhost với tên file
    return `https://datn-backend-mjeb.onrender.com/public/avatars/${this.user.avatar}`;
  },
  
  },
  methods: {

openEditProfile() {
      // Copy dữ liệu từ Store (user) vào form
      this.editForm.fullName = this.user.fullName;
      this.editForm.email = this.user.email;
      this.editForm.phone = this.user.phone;
      this.editForm.gender = this.user.gender || 'other';
      
      // Xử lý ngày sinh để hiển thị đúng trong input type="date" (YYYY-MM-DD)
      if (this.user.birthday) {
         const d = new Date(this.user.birthday);
         if(!isNaN(d.getTime())) {
             this.editForm.birthday = d.toISOString().split('T')[0];
         }
      }
      
      this.editForm.avatarFile = null;
      this.previewAvatar = null;
      
      this.$refs.editProfileModal.openModal();
    },

    // 2. Đóng modal
    closeEditProfile() {
      this.$refs.editProfileModal.closeModal();
    },

    // 3. Xử lý khi chọn file ảnh
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.editForm.avatarFile = file;
        // Tạo URL preview
        this.previewAvatar = URL.createObjectURL(file);
      }
    },

    // 4. Gọi API cập nhật
async doUpdateProfile() {
      this.isSaving = true;
      try {
        const formData = new FormData();
        formData.append("fullName", this.editForm.fullName);
        formData.append("email", this.editForm.email);
        formData.append("phone", this.editForm.phone || "");
        formData.append("gender", this.editForm.gender);
        formData.append("birthday", this.editForm.birthday || "");
        
        if (this.editForm.avatarFile) {
          formData.append("avatar", this.editForm.avatarFile);
        }

        // 1. Gọi API Update thông tin
        const response = await axios.put("/student/my_info/update/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        // 2. Nếu Update thành công
        if (response.status === 200) {
          this.$toast.success("Cập nhật thông tin thành công!");
          
          // --- ĐÂY LÀ PHẦN BẠN CẦN ---
          // Gọi lại getInfo() để tải lại toàn bộ dữ liệu (avatar, ngày sinh, tên...) từ server
          // Đặt trong try-catch riêng để nếu mạng lag không load được user mới 
          // thì cũng KHÔNG báo là "Cập nhật thất bại".
          try {
            await this.getInfo(); 
          } catch (err) {
            console.error("Lỗi khi tải lại thông tin user:", err);
          }
          // ---------------------------

          this.closeEditProfile();
        }
      } catch (error) {
        // Chỉ hiện lỗi nếu API Update (bước 1) thất bại
      //  const msg = error.response?.data?.message || "Có lỗi xảy ra khi lưu!";
      //  this.$toast.error(msg);
      } finally {
        this.isSaving = false;
      }
    },


     formatDate(dateStr) {
  if (!dateStr) return "";

  // Nếu backend trả object (ví dụ: { date: '2024-09-10T00:00:00.000Z' })
  if (typeof dateStr === "object") {
    // Nếu có trường date
    if (dateStr.date) {
      dateStr = dateStr.date;
    } else {
      return "";
    }
  }

  const date = new Date(dateStr);
  if (isNaN(date)) return "";

  return date.toLocaleDateString("vi-VN"); // => dd/MM/yyyy
},
    showSuccessToast() {
      this.toast.success("Đây là thông báo thành công!");
    },
    // Hiển thị thông báo lỗi
    showErrorToast() {
      this.$toast.success("This is a success message!");
    },
    openFormEditPass() {
      this.$refs.changePassword.openModal();
    },
    ...mapActions(useAuthStore, ["logout", "getInfo"]),
    handleLogout() {
      this.logout(); // Call the logout action
    },
    doChangePassword() {
      this.isSaving = true;
      axios
        .put("/student/my_info/change_password", {
          current_password: this.current_password,
          new_password: this.new_password,
          confirm_password: this.confirm_password,
        })
        .then((response) => {
          if (response.status === 200) {
           // this.logout();
            this.$toast.success("Đổi mật khẩu thành công!");
               this.$refs.changePassword.closeModal();
          } else {
            this.$toast.error(response.data.error || "Đã có lỗi xảy ra.");
          }
        })
        .catch((error) => {
          // Kiểm tra nếu có lỗi trong quá trình gọi API
          if (error.response && error.response.data) {
            this.$toast.error(error.response.data.error || "Đã có lỗi xảy ra.");
          } else {
            this.$toast.error("Có lỗi xảy ra khi kết nối tới máy chủ.");
          }
        })
        .finally(() => {
          this.isSaving = false;
        });
    },
    doClearChangePassword() {
      this.current_password = "";
      this.new_password = "";
      this.confirm_password = "";
    },
  },
};
</script>
