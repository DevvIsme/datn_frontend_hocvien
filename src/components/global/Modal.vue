<template>
  <TransitionRoot :show="isOpen" appear as="template">
    <Dialog as="div" class="relative z-[100]">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-[rgba(26,46,81,0.7)]" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto" @click="bgCloseModal">
        <div
          :class="{ 'p-4': !isFullScreen }"
          class="flex min-h-full items-center justify-center text-center bg-text1/70"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              :class="{ 'rounded-[10px]': !isFullScreen }"
              class="w-full md:max-w-fit transform text-left align-middle shadow-xl transition-all flex flex-col items-center"
            >
              <slot :is-open="isOpen"></slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

export default {
  props: {
    isFullScreen: {
      type: Boolean,
      default: false,
    },
    disableBackground: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  data: function () {
    return {
      isOpen: false,
    };
  },
  mounted() {
    this.$emit("initModal");
  },
  methods: {
    bgCloseModal: function () {
      if (this.disableBackground) return;
      this.closeModal();
    },
    closeModal: function () {
      this.isOpen = false;
      this.$emit("closeModal");
    },
    openModal: function () {
      this.isOpen = true;
      this.$emit("openModal");
    },
  },
};
</script>
