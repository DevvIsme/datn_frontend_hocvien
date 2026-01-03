<template>
  <div class=" mx-auto bg-white rounded-lg">
    <div class="p-5 max-md:p-4">
      <div class="border-b border-color-border py-3">
        <div class="flex justify-between items-center max-md:items-start">
          <p class="text-color-primary text-base font-semibold max-md:text-sm">
            Câu 1: Phương án xác thực nào kém an toàn nhất cho điện thoại thông
            minh
          </p>
          <div class="flex items-center gap-1 flex-wrap">
            <img src="@/assets/images/archive.svg" alt="Icon" class="max-md:h-4 max-md:w-4"/>
            <p class="text-color-purple text-sm max-md:hidden">Đánh dấu</p>
          </div>
        </div>
        <div class="flex items-center gap-3 py-2">
          <div
            class="flex items-center gap-2 py-1 px-2 rounded-[44px] border border-color-red"
          >
            <img src="@/assets/images/IconQues.svg" alt="Icon" />
            <p class="text-color-red text-xs font-medium max-md:text-xs">
              Câu điểm liệt
            </p>
          </div>
          <p class="text-color-gray text-sm max-md:text-sm">(Chọn 1 đán án)</p>
        </div>
        <div class="flex items-center gap-3 py-1">
          <input
            type="radio"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
            >A. Mã PIN 6 chữ số</label
          >
        </div>
        <div class="flex items-center gap-3 py-1">
          <input
            type="radio"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
            >B. Mật khẩu hình vẽ</label
          >
        </div>
        <div class="flex items-center gap-3 py-1">
          <input
            type="radio"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
            >C. Mã PIN 4 chữ số</label
          >
        </div>
        <div class="flex items-center gap-3 py-1">
          <input
            type="radio"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
            >D. Vân tay</label
          >
        </div>
      </div>

      <div class="border-b border-color-border py-3">
        <div class="flex justify-between items-center max-md:items-start">
          <p class="text-color-primary text-base font-semibold max-lg:text-sm">
            Câu 2: Các biện pháp để đảm bảo an toàn trong giao dịch ngân hàng
          </p>
          <div class="flex items-center gap-1 flex-wrap">
            <img src="@/assets/images/archive.svg" alt="Icon" class="max-md:h-4 max-md:w-4">
            <p class="text-color-purple text-sm max-md:hidden">Đánh dấu</p>
          </div>
        </div>
        <div class="flex items-center gap-3 py-2">
          <p class="text-color-gray text-sm max-md:text-sm">
            (Chọn nhiều đáp án)
          </p>
        </div>
        <div class="flex items-center gap-3 py-1 max-md:items-start">
          <input
            type="checkbox"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
          >
            A. Chuyển tiền cho bạn bè, người thân qua SMS/Mail/Chat ngay lập tức
            khi được yêu cầu</label
          >
        </div>
        <div class="flex items-center gap-3 py-1 max-md:items-start">
          <input
            type="checkbox"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
          >
            B. Kiêm tra kỹ cây ATM trước kho rút tiền</label
          >
        </div>
        <div class="flex items-center gap-3 py-1 max-md:items-start">
          <input
            type="checkbox"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
          >
            C. Khoá thẻ sau khi giao dịch</label
          >
        </div>
        <div class="flex items-center gap-3 py-1 max-md:items-start">
          <input
            type="checkbox"
            name="answer"
            id="answer"
            class="w-5 h-5 max-md:h-4"
          />
          <label
            for="answer"
            class="text-color-text-1 text-base max-md:text-sm flex-1"
          >
            D. Kiểm tra đường link giao dịch trên trình duyệt web sau khi chuyển
            tiền</label
          >
        </div>
      </div>

      <div class="flex justify-center gap-2 pt-3 max-md:hidden">
        <img src="@/assets/images/arrow-square-left.svg" alt="Prev" />
        <button
          class="bg-color-primary-2 px-3 py-1 rounded-lg text-white text-sm font-normal border border-color-button-change-slide"
        >
          1
        </button>
        <button
          class="bg-color-white px-3 py-1 rounded-lg text-color-text-1 text-sm font-normal border border-color-button-change-slide"
        >
          2
        </button>
        <button
          class="bg-color-white px-3 py-1 rounded-lg text-color-text-1 text-sm font-normal border border-color-button-change-slide"
        >
          3
        </button>
        <button
          class="bg-color-white px-3 py-1 rounded-lg text-color-text-1 text-sm font-normal border border-color-button-change-slide"
        >
          ...
        </button>
        <img src="@/assets/images/arrow-square-right.svg" alt="Next" />
      </div>
    </div>
  </div>
</template>
