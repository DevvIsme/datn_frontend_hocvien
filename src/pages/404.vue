<template>
  <div class="py-[50px] text-center bg-white flex-1 mx-auto">
    <div class="container mx-auto">
      <div class="md:w-[500px] mx-auto mb-[60px]">
        <img src="@/assets/images/404-min.png" alt="" />
      </div>
      <div
        class="mb-4 max-md:mb-2 font-bold text-font24px text-color-text-1 tracking-custom"
        data-i18n="khong_tim_thay_trang"
      >
        Không tìm thấy trang
      </div>
      <div
        class="md:max-w-[657px] text-color-text-2 text-font16lh font-normal mb-6 mx-auto"
      >
        <span
          data-i18n="xin_loi_trang_ban_tim_kiem_khong_ton_tai_hoac_ket_noi_gian_doan"
        >
          Xin lỗi, trang bạn tìm kiếm hiện không còn tồn tại hoặc kết nối đang
          tạm thời gián đoạn.</span
        >
        <br />
        <span data-i18n="xin_voi_long_kiem_tra_va_thu_lai_sau">
          Xin vui lòng kiểm tra và thử lại sau !
        </span>
      </div>
      <div>
        <router-link
          to="/"
          class="text-white bg-primary-brand py-3 px-[30px] rounded-lg font-semibold block w-[200px] mx-auto"
        >
          Quay lại trang chủ
        </router-link>
      </div>
    </div>
  </div>
</template>
<script></script>
