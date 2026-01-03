<script setup>
import { defineProps } from "vue";
import { ref } from "vue";

const props = defineProps({
  results: {
    type: Object, // Hoặc Array
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  examResult: {
    type: Number, // Biến này có vẻ không dùng trong template, check lại nếu cần
    default: 0,
    required: false, // Sửa thành false nếu không bắt buộc
  },
});

const open = ref(false);
</script>

<template>
  <div class="pt-4 max-md:pt-3 mx-4">
    <div class="flex justify-between pb-4 max-md:pb-[5px]">
      <p class="text-color-gray text-sm font-semibold">
        Bạn đã làm bài thi này {{ count }} lần
      </p>
      <div class="flex items-center cursor-pointer gap-1" @click="open = !open">
        <p class="text-color-primary-2 text-sm font-medium select-none">
          Chi tiết
        </p>
        <img src="@/assets/images/Double-down.svg" alt="Icon" />
      </div>
    </div>

    <table class="w-full text-start mt-2" v-if="open">
      <thead>
        <tr class="bg-color-primary-4">
          <th class="text-start text-color-primary text-sm font-medium p-2">
            Lần thi
          </th>
          <th
            class="text-start text-color-primary text-sm font-medium p-2 max-md:hidden"
          >
            Làm bài lúc
          </th>
          <th
            class="text-start text-color-primary text-sm font-medium p-2 max-md:hidden"
          >
            Nộp bài lúc
          </th>
          <th class="text-center text-color-primary text-sm font-medium p-2">
            Trạng thái
          </th>
          <th class="text-center text-color-primary text-sm font-medium p-2">
            Hành động
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(result, index) in results"
          :key="index"
          class="text-color-primary text-sm border-b border-color-border"
        >
          <td class="p-2">
            <p>Lần {{ results.length - index }}</p>
            <p class="md:hidden text-xs text-gray-500">{{ result.createdAt }}</p>
            <p class="md:hidden text-xs" :class="!result.submitAt ? 'text-orange-500' : ''">
              {{ result.submitAt ? result.submitAt : 'Đang thực hiện...' }}
            </p>
          </td>

          <td class="p-2 max-md:hidden">{{ result.createdAt }}</td>

          <td class="p-2 max-md:hidden">
            <span v-if="result.submitAt">{{ result.submitAt }}</span>
            <span v-else class="text-gray-400 italic">-- : --</span>
          </td>

          <td class="p-2 font-semibold text-center">
            <p v-if="!result.submitAt" class="text-orange-500">Đang làm</p>
            
            <template v-else>
              <p v-if="result.isPass" class="text-color-greend-2">Đạt</p>
              <p v-else class="text-color-red">Chưa đạt</p>
            </template>
          </td>

          <td class="p-2">
            <div v-if="!result.submitAt" class="flex justify-center">
               <router-link
                :to="{ name: 'LamBaiThi', params: { id: result.id } }"
                class="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded transition"
              >
                Làm tiếp
              </router-link>
            </div>

            <router-link
              v-else
              :to="{ name: 'XemDapAn', params: { id: result.id } }"
              class="flex items-center justify-center gap-2"
            >
              <img src="@/assets/images/eye.svg" alt="Xem kết quả" />
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>