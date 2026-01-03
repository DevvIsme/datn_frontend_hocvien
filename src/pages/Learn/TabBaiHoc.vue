<template>
    <div>
      <p ref="content" @mouseup="handleMouseUp">
        Đây là một đoạn văn bản. Khi bạn bôi đen một phần văn bản này, nút "Lưu Ghi Chú" sẽ xuất hiện, và bạn có thể lưu ghi chú bằng cách nhấp vào nút đó. Phần văn bản đã được lưu ghi chú sẽ chuyển thành màu vàng.
      </p>
  
      <!-- Nút lưu ghi chú -->
      <button v-if="showSaveButton"
              :style="{ top: `${buttonPosition.top}px`, left: `${buttonPosition.left}px` }"
              class="absolute py-1 px-2 bg-color-primary-2 text-color-white cursor-pointer rounded text-sm"
              @click="saveNote">
        Lưu Ghi Chú
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showSaveButton: false, // Hiển thị hoặc ẩn nút lưu
        buttonPosition: { top: 0, left: 0 } // Vị trí của nút lưu
      };
    },
    methods: {
      handleMouseUp() {
        const selection = window.getSelection();
        if (selection.toString().length > 0) {
          const range = selection.getRangeAt(0).getBoundingClientRect();
          this.buttonPosition = {
            top: range.bottom + window.scrollY,
            left: range.left + window.scrollX
          };
          this.showSaveButton = true;
        } else {
          this.showSaveButton = false;
        }
      },
      saveNote() {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const span = document.createElement('span');
          span.className = 'text-[#fff]'; // Đổi màu nền thành vàng
          range.surroundContents(span);
          selection.removeAllRanges();
          this.showSaveButton = false;
        }
      }
    },
    mounted() {
      document.addEventListener('mousedown', (event) => {
        if (!this.$refs.content.contains(event.target)) {
          this.showSaveButton = false;
        }
      });
    },
    beforeDestroy() {
      document.removeEventListener('mousedown', this.handleMouseUp);
    }
  };
  </script>

  