<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  props: {
    competitions: {
      type: Object, // Đặt kiểu dữ liệu cho competitions
      required: true, // Đảm bảo competitions là bắt buộc
    },
  },
  computed: {
    // Sử dụng mapState để lấy state từ Pinia
    ...mapState(useAuthStore, ["user"]),
    userAvatar() {
      // Nếu user.image có giá trị, thêm tiền tố; nếu không, sử dụng ảnh mặc định.
      return this.image
        ? `https://datn-backend-mjeb.onrender.com/${this.user.avatar}`
        : "@/assets/images/Default.svg";
    },
  },
};
</script>

<template>
  <div class="bg-white">
    <div class="container mx-auto">
      <div class="flex justify-between items-center gap-3 py-3">
        <div class="flex items-center gap-3">
          <div
            class="flex gap-3 cursor-pointer max-lg:hidden"
            @click="this.$emit('back')"
          >
            <img src="../../assets/images/arrow-left.svg" alt="Icon" />
            <!--     <p class="text-[#005ED3] text-base font-semibold">Trở về</p>-->
          </div>
          <div>
            <p
              class="text-[#273266] text-font20lh font-semibold max-md:text-lg"
            >
              {{ competitions?.name }}
            </p>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>
