<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";
// 👇 Import axios để gọi API thanh toán (nhớ sửa đường dẫn nếu cần)
import axiosInstance from "axios";

// 1. Nhận dữ liệu từ cha (Detail.vue)
const props = defineProps({
  course: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

// 2. Định nghĩa sự kiện để gọi ngược lại cha (dùng cho đăng ký miễn phí)
const emit = defineEmits(["register"]);
const router = useRouter();

// --- CÁC HÀM TIỆN ÍCH ---

// Format ngày tháng (dd/mm/yyyy)
const formatDate = (dateString: string) => {
  if (!dateString) return "N/A";
  try {
    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit", month: "2-digit", year: "numeric",
    }).format(new Date(dateString));
  } catch (e) {
    return dateString;
  }
};

// Format tiền tệ (100.000 đ)
const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};

// --- XỬ LÝ ĐĂNG KÝ / THANH TOÁN ---
const handleRegister = async () => {
    // 1. Kiểm tra giá tiền
    const price = Number(props.course.price);
    if (!price || price === 0) {
        emit('register'); 
        return;
    }

    // 2. Xác nhận
    if(!confirm(`Xác nhận thanh toán ${formatPrice(props.course.price)} để tham gia khóa học?`)) return;

    // 3. Gọi API
    try {
        const res = await axiosInstance.post("/payment/create-url", {
            course_id: props.course.id
        });

        console.log("💰 API trả về:", res); // Soi log này nếu vẫn lỗi

        // 👇 FIX: Lấy data an toàn (xử lý cả trường hợp có hoặc không có interceptor)
        // Nếu res có thuộc tính .data thì lấy .data, nếu không thì lấy chính nó
        const data = res.data.data || res; 

        if (data.status) {
       // 1. Lưu AppTransID để check trạng thái
            localStorage.setItem("current_payment_id", data.app_trans_id);
            
            // 2. 👇 QUAN TRỌNG: Lưu Slug khóa học để nếu hủy thì biết đường quay về
            localStorage.setItem("current_course_slug", props.course.slug);

            // 👇 BẮT BUỘC PHẢI CÓ DÒNG NÀY ĐỂ BIẾT ĐƯỜNG QUAY VỀ
            localStorage.setItem("pending_course_slug", props.course.slug);
            
            // 👇 CHUYỂN HƯỚNG
            if (data.order_url) {
                console.log("Đang chuyển hướng tới:", data.order_url);
                window.location.href = data.order_url; 
            } else {
                alert("Backend không trả về link thanh toán!");
            }
        } else {
            alert("Lỗi: " + (data.message || "Tạo đơn thất bại"));
        }
    } catch (error) {
        console.error(error);
        alert("Lỗi kết nối thanh toán!");
    }
};
</script>

<template>
  <div class="p-4 bg-white rounded-lg sticky top-[100px] shadow-sm border border-gray-100">
    
    <div class="mb-4 text-center border-b border-gray-100 pb-4">
        <p v-if="course.price > 0" class="text-3xl font-bold text-red-600">
            {{ formatPrice(course.price) }}
        </p>
        <p v-else class="text-3xl font-bold text-green-600">
            Miễn phí
        </p>
    </div>

    <div class="flex gap-3 items-start border-b border-gray-100 pb-3 mb-3">
        <div class="text-2xl">📅</div>
        <div class="flex-1">
            <p class="text-sm font-bold text-blue-800 uppercase">Thời gian học</p>
            
            <div v-if="course.start_date || course.end_date" class="mt-1">
                <p v-if="course.start_date" class="text-xs text-gray-600">
                    Bắt đầu: <span class="font-medium text-black">{{ formatDate(course.start_date) }}</span>
                </p>
                <p v-if="course.end_date" class="text-xs text-gray-600">
                    Kết thúc: <span class="font-medium text-black">{{ formatDate(course.end_date) }}</span>
                </p>
                <p 
                    class="text-xs font-bold mt-1 uppercase"
                    :class="course.is_blocked ? 'text-red-500' : 'text-green-600'"
                >
                    {{ course.status_text }}
                </p>
            </div>
            
            <p v-else class="text-sm text-green-600 font-bold mt-1">
                Vĩnh viễn
            </p>
        </div>
    </div>

    <div class="flex items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-3">
      <div class="flex gap-2 items-center">
        <img src="@/assets/images/BookBookmark.svg" alt="Icon" class="w-6 h-6" />
        <p class="text-sm text-gray-700 font-medium">Số bài học:</p>
      </div>
      <p class="text-sm text-gray-900 font-bold">
        {{ course.totalLesson || 0 }} bài
      </p>
    </div>

    <div class="pt-2">
        
        <button
            v-if="course.is_blocked"
            disabled
            class="w-full px-4 py-3 bg-gray-400 text-white rounded-lg font-bold cursor-not-allowed opacity-80"
        >
            🚫 {{ course.status_text || 'Đã khóa' }}
        </button>

        <button
            v-else-if="!course.is_registered"
            @click="handleRegister"
            class="w-full px-4 py-3 bg-[#28a745] hover:bg-green-600 rounded-lg text-white font-bold transition-all shadow-md transform active:scale-95"
        >
            {{ course.price > 0 ? 'Mua khóa học ngay' : 'Đăng ký học ngay' }}
        </button>

        <div v-else>
            <button
              v-if="course.percent === 100"
              @click="router.push(`/hoc/${course.slug}`)"
              class="w-full px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-bold transition-all shadow-md mb-2"
            >
              🏆 Đã hoàn thành
            </button>

        <button
  v-else
  @click="router.push(`/hoc/${course.slug}`)"
  class="w-full px-4 py-3 bg-[#005ED3] hover:bg-blue-700 rounded-lg text-white font-bold transition-all shadow-md mb-2 flex justify-center items-center"
>
  <span>{{ course.percent > 0 ? 'Học tiếp' : 'Vào học ngay' }}</span>
</button>

            <div v-if="course.percent > 0" class="w-full bg-gray-200 rounded-full h-1.5 mt-1 overflow-hidden">
              <div class="bg-blue-600 h-1.5 rounded-full" :style="{ width: course.percent + '%' }"></div>
            </div>
        </div>

    </div>
  </div>
</template>