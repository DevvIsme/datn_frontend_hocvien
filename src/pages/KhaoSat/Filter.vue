<template>
  <div class="py-5 max-md:py-2">
    <div class="">
      <div class="bg-color-white rounded-lg">
        <div
          class="flex justify-start md:gap-3 px-6 max-md:px-0 text-font20lh max-md:text-font16lh"
        >
          <button
            @click="selectTab('Continue')"
           
            class="md:px-3 py-4 max-md:py-2 max-md:w-full"
          >
            Khảo sát của tôi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: "Continue",
    };
  },
  methods: {
    selectTab(tab) {
      this.activeTab = tab;
      this.$emit("tab-selected", tab);
    },
  },
};
</script>
