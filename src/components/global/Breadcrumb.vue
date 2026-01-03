<template>
  <div class="w-full bg-[#f5f5f5] max-md:border-b-[1px] border-line py-[7px]" v-if="!enterFullscreen">
    <div class="container mx-auto flex items-center flex-wrap text-font16 max-md:text-sm font-medium ">
      <span
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center"
      >
        <router-link
          :to="{ name: item.link }"
          class="line-clamp-1"
          :class="(havingSlot || index < items.length - 1) ? 'text-color-primary-2' : 'text-color-text-2'"
        >
          {{ item.label }}
        </router-link>
        <span v-if="(havingSlot || index < items.length - 1)" class="mx-1 flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15.06L15.52 11.53L12 8"
              stroke="rgb(var(--color-primary-text))"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.00002 15.06L11.52 11.53L8.00002 8"
              stroke="rgb(var(--color-primary-text))"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </span>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    havingSlot() {
      return Object.keys(this.$slots).length;
    }
  }
};
</script>
