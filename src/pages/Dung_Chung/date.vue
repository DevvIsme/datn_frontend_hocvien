<template>
  <div class="rounded-md h-[40px]">
    <el-date-picker
      class="text-black font-normal"
      v-model="value"
      type="daterange"
      start-placeholder="DD/MM/YYYY"
      end-placeholder="DD/MM/YYYY"
      format="DD/MM/YYYY"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const value = ref("");
</script>
