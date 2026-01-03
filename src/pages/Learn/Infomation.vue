<script setup>
  import { ref } from 'vue';
  import TabGhiChu from './TabGhiChu.vue';
  import TabPhongChat from './TabPhongChat.vue';
  import TabTaiLieu from './TabTaiLieu.vue'
  import TabMota from './TabMota.vue';
  import TabBaiHoc from "./TabBaiHoc.vue"

  const tabs = ref("tab1");

  const props = defineProps({
    thugon : Boolean,
      trangthai : {
            type: Function,
            required: true
        },
    });


</script>

<template>
    <div class="bg-color-white rounded-lg mt-5 infomation pb-3 md:container max-md:hidden">
        <div class="flex items-center justify-between border-b border-color-border">
          <div class="flex gap-2 menu-tab">
            <p
              class="text-lg text-color-text-1 font-normal px-3 py-4 cursor-pointer max-md:text-base max-md:py-2 max-md:px-3"
              :class="{active: tabs === 'tab1'}"
              @click="tabs='tab1'"
            >
              Mô tả
            </p>
            <p 
              class="text-lg text-color-text-1 font-normal px-3 py-4 cursor-pointer max-md:text-base max-md:py-2 max-md:px-3"
              :class="{active: tabs === 'tab2'}"
               @click="tabs='tab2'"
            >
              Bài học
            </p>
            <p class="text-lg text-color-text-1 font-normal px-3 py-4 cursor-pointer max-md:text-base max-md:py-2 max-md:px-3" :class="{active: tabs === 'tab3'}"  @click="tabs= 'tab3'">
              Ghi chú
            </p>
            <p class="text-lg text-color-text-1 font-normal px-3 py-4 cursor-pointer max-md:text-base max-md:py-2 max-md:px-3" :class="{active: tabs === 'tab4'}"  @click="tabs= 'tab4'">
              Phòng chat
            </p>
            <!-- <p class="text-lg text-color-text-1 font-normal px-3 py-4 cursor-pointer max-md:text-base max-md:py-2 max-md:px-3" :class="{active: tabs === 'tab5'}"  @click="tabs= 'tab5'">
              Tài liệu
            </p> -->
          </div>
          <div v-if="thugon" @click="trangthai" class="cursor-pointer flex gap-2 text-color-primary-2 text-sm font-medium px-3 max-md:hidden">
            <p>Mở rộng</p>
            <img src="@/assets/images/Double-up.svg" alt="Icon">
          </div>
          <div v-else="thugon" @click="trangthai" class="cursor-pointer flex gap-2 text-color-primary-2 text-sm font-medium px-3 max-md:hidden">
            <p>Thu gọn</p>
            <img src="@/assets/images/Double-down.svg" alt="Icon">
          </div>
          
        </div>

        <div class="px-5 py-3 border-b border-color-border-2 content-tab hidden" :class="{active: tabs === 'tab1'}">
            <TabMota />
        </div>
        <div class="px-5 py-3 border-b border-color-border-2 content-tab hidden" :class="{active: tabs === 'tab2'}">
            <TabBaiHoc />
        </div>
        <div class="px-5 py-3 content-tab hidden" :class="{active: tabs === 'tab3'}">
            <TabGhiChu />
        </div>
        <div class="px-5 py-3 border-b border-color-border-2 content-tab hidden" :class="{active: tabs === 'tab4'}">
            <TabPhongChat />
        </div>
        <div class="px-5 py-3 border-b border-color-border-2 content-tab hidden" :class="{active: tabs === 'tab5'}">
            <TabTaiLieu />
        </div>
        <!-- <p class="text-base text-color-primary-2 font-semibold pt-4 text-center">Xem thêm</p> -->
      </div>
</template>