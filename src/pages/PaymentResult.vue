<template>
  <div class="h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        
        <div v-if="loading">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600">Đang xác thực giao dịch...</p>
        </div>

        <div v-else-if="success">
            <div class="text-6xl mb-4">🎉</div>
            <h2 class="text-2xl font-bold text-green-600 mb-2">Thanh toán thành công!</h2>
            <p class="text-gray-600 mb-6">Bạn đã sở hữu khóa học này.</p>
            
            <p class="text-sm text-gray-400 mb-4">Tự động chuyển trang sau {{ countdown }}s...</p>

            <button 
                @click="goToCourse" 
                class="w-full px-6 py-3 bg-[#005ED3] hover:bg-blue-700 text-white rounded-lg font-bold transition shadow-md"
            >
                Vào học ngay ➜
            </button>
        </div>

        <div v-else>
            <div class="text-6xl mb-4">⚠️</div>
            <h2 class="text-xl font-bold text-red-600 mb-2">Giao dịch thất bại</h2>
            <p class="text-gray-500 mb-6">Có lỗi xảy ra hoặc bạn đã hủy thao tác.</p>
            
            <button 
                @click="goBack" 
                class="w-full px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition"
            >
                Quay lại
            </button>
        </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
// 👇 Nhớ sửa đường dẫn import đúng với máy bạn
import axiosInstance from "../configs/axiosConfigs"; 

const router = useRouter();
const route = useRoute();
const loading = ref(true);
const success = ref(false);
const countdown = ref(3); // Đếm ngược 3s

// Lấy lại slug đã lưu
const savedSlug = localStorage.getItem("pending_course_slug");

const goToCourse = () => {
    // Ưu tiên về trang học (LearningView), nếu mất slug thì về trang danh sách khóa học
    if (savedSlug) {
        router.push(`/hoc/${savedSlug}`); 
    } else {
        router.push('/khoa-hoc-cua-toi'); // Fallback an toàn
    }
};

const goBack = () => {
    if (savedSlug) {
        router.push(`/khoa-hoc/${savedSlug}`); // Về trang chi tiết
    } else {
        router.push('/');
    }
};

onMounted(async () => {
    // 1. Check nhanh status trên URL (do ZaloPay trả về)
    // status = 1 là thành công
    const urlStatus = route.query.status;
    
    if (urlStatus && String(urlStatus) !== '1') {
        loading.value = false;
        success.value = false;
        return;
    }

    // 2. Check kỹ với Backend
    const transId = localStorage.getItem("current_payment_id");
    
    if (transId) {
        try {
            const res = await axiosInstance.post("/payment/check-status", {
                app_trans_id: transId
            });

            if (res.data.status) {
                success.value = true;
                
                // Dọn dẹp storage
                localStorage.removeItem("current_payment_id");
                // localStorage.removeItem("pending_course_slug"); // Để lại dùng cho redirect

                // 👇 TỰ ĐỘNG CHUYỂN TRANG
                const interval = setInterval(() => {
                    countdown.value--;
                    if (countdown.value === 0) {
                        clearInterval(interval);
                        goToCourse();
                    }
                }, 1000);

            } else {
                success.value = false;
            }
        } catch (error) {
            console.error(error);
            success.value = false;
        } finally {
            loading.value = false;
        }
    } else {
        // Trường hợp F5 lại trang mà mất transId
        loading.value = false;
        success.value = false;
    }
});
</script>