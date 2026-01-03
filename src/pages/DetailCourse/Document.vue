<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  documents: {
    type: Array,
    required: true,
  },
  course: {
    type: Array,
    required: true,
  },
});

// State for showing more documents
const open = ref(false);

// Computed property to limit displayed documents to 4 or show all based on `open`
const displayedDocuments = computed(() =>
  open.value ? props.documents : props.documents?.slice(0, 4)
);

// Toggle the `open` state
const toggleOpen = () => {
  open.value = !open.value;
};

// Hàm tải file
const downloadFile = async (context: string) => {
  try {
    const url = `http://localhost:3000/files/${context}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error downloading file: ${response.statusText}`);
    }

    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = context;
    link.click();
    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
</script>

<template>
  <div class="bg-white rounded-lg">
    <div class="p-5 max-lg:p-3">
      <div
        class="flex items-center gap-3 border-b border-color-button-change-slide pb-2"
      >
        <img src="@/assets/images/Books-Document.svg" alt="Icon" />
        <p
          class="text-color-primary text-font20lh font-semibold max-lg:text-lg"
        >
          Tài liệu
        </p>
      </div>

      <div class="w-full mt-5">
        <!-- Hiển thị thông báo nếu không có tài liệu -->
        <div
          v-if="props.documents?.length === 0"
          class="text-center text-color-gray text-sm italic"
        >
          Chưa có tài liệu nào !
        </div>

        <!-- Hiển thị danh sách tài liệu nếu có -->
        <div v-else class="mx-auto w-full">
          <div
            class="border border-color-border rounded-lg overflow-hidden mb-3"
          >
            <div class="py-2 px-4 bg-white">
              <div
                v-for="(document, index) in displayedDocuments"
                :key="document.id"
                :class="[
                  'grid grid-cols-2 max-lg:grid-cols-1 py-3 relative group',
                  index !== displayedDocuments.length - 1
                    ? 'border-b border-color-border-2'
                    : '',
                ]"
              >
                <div class="flex items-center gap-2 max-lg:w-full">
                  <img
                    src="@/assets/images/word.svg"
                    alt="Icon"
                    class="max-md:h-6"
                  />
                  <p class="text-color-text-1 text-sm font-medium">
                    {{ document.name }}
                  </p>
                </div>

                <!-- "Tải xuống" button chỉ hiển thị khi có trường context -->
                <div
                  v-if="document.context"
                  class="absolute inset-0 flex items-center justify-end transition-opacity max-lg:mt-1"
                >
                  <div class="max-lg:order-2">
                    <button
                      @click="downloadFile(document.context)"
                      class="px-4 py-[5px] bg-color-primary-2 rounded-lg text-white text-sm flex gap-2 items-center"
                    >
                      <img
                        src="@/assets/images/import.svg"
                        alt="Icon"
                        class="max-md:h-3 max-md:hidden"
                      />
                      <p class="text-base text-color-white max-lg:text-sm">
                        Tải xuống
                      </p>
                    </button>
                  </div>
                </div>
                <div
                  v-else
                  class="text-color-gray text-sm italic max-lg:mt-2 text-center text-nowrap"
                >
                  Bạn chưa đăng ký khóa học
                </div>
              </div>
            </div>
          </div>

          <!-- Show More / Show Less button -->
          <p
            v-if="props.documents?.length > 4"
            @click="toggleOpen"
            class="text-base text-color-primary-2 font-semibold pt-4 text-center max-lg:text-sm cursor-pointer"
          >
            {{ open ? "Thu gọn" : "Xem thêm" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-white {
  background-color: #ffffff;
}
.text-color-primary {
  color: #1976d2;
}
.text-color-gray {
  color: #757575;
}
.text-color-white {
  color: #ffffff;
}
.bg-color-primary-2 {
  background-color: #1976d2;
}
.border-color-button-change-slide {
  border-color: #cfd8dc;
}
.border-color-border {
  border-color: #e0e0e0;
}
</style>
