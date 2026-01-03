<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  props: {
    name: {
      required: true, // Đảm bảo competitions là bắt buộc
    },
    slug: {
      required: false, // Đảm bảo slug là bắt buộc
    },
  },
  data() {
    return { image: {} };
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
  },
};
</script>

<template>
  <div class="bg-white">
    <div class="container mx-auto">
      <div class="flex justify-between items-center gap-3 py-3">
        <div class="flex items-center gap-3">
          <router-link
            v-if="slug"
            :to="{ name: 'competision-detail', params: { id: slug } }"
            class="flex gap-3 cursor-pointer max-lg:hidden"
          >
            <img src="../../assets/images/arrow-left.svg" alt="Icon" />
          <!--   <p class="text-[#005ED3] text-base font-semibold">Trở về</p>-->
          </router-link>
          <div>
            <p
              class="text-[#273266] text-font20lh font-semibold max-md:text-lg"
            >
              {{ name }}
            </p>
          </div>
        </div>

       
      </div>
    </div>
  </div>
</template>
