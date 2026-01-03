<template>
  <div class="h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white p-8 rounded-xl shadow text-center">
        
        <div v-if="loading">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-lg font-medium text-gray-600">Đang xác thực giao dịch...</p>
        </div>
        
        <div v-else-if="success">
            <div class="text-6xl mb-4">🎉</div>
            <h2 class="text-2xl font-bold text-green-600 mb-2">Thanh toán thành công!</h2>
            <p class="mb-6 text-gray-600">Bạn đã sở hữu khóa học này.</p>
            
            <button 
                @click="goToCourse"
                class="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition shadow-lg"
            >
                Vào học ngay ➜
            </button>
        </div>

        <div v-else>
            <div class="text-6xl mb-4">⚠️</div>
            <h2 class="text-xl font-bold text-red-600 mb-2">Thanh toán thất bại</h2>
            <p class="text-gray-500 mb-4">Có lỗi xảy ra hoặc bạn đã hủy thao tác.</p>
            <router-link to="/" class="text-blue-600 underline">Quay về trang chủ</router-link>
        </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// 👇 QUAN TRỌNG: Sửa lại đường dẫn import axios cho đúng file config của bạn
import axiosInstance from "axios"; 

const route = useRoute();
const router = useRouter();
const loading = ref(true);
const success = ref(false);

// Lấy slug từ URL (do Backend gửi kèm trong redirecturl)
// URL: ...?slug=khoa-hoc-a&status=1...
const courseSlug = route.query.slug;

const goToCourse = () => {
    if (courseSlug) {
        // Chuyển thẳng vào trang học
      router.push(`/course-detail/${courseSlug}`);
    } else {
        // Nếu mất slug thì về danh sách khóa học của tôi
        router.push('/khoa-hoc-cua-toi'); 
    }
};

onMounted(async () => {
    // 1. Kiểm tra nhanh status trên URL
    // ZaloPay trả về status=1 là thành công
    const urlStatus = route.query.status;
    
    // Nếu status khác 1 (ví dụ -49 là hủy) -> Báo lỗi luôn
    if (urlStatus && String(urlStatus) !== '1') {
        loading.value = false;
        success.value = false;
        return;
    }

    // 2. Gọi Backend check lại giao dịch (Double check)
    const transId = localStorage.getItem("current_payment_id");
    
    if (transId) {
        try {
            const res = await axiosInstance.post("/payment/check-status", {
                app_trans_id: transId
            });
            
            if (res.data.status) {
                success.value = true;
                localStorage.removeItem("current_payment_id"); // Dọn dẹp
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
        // Trường hợp F5 lại trang mà mất transId, nhưng URL vẫn báo thành công (status=1)
        // Thì vẫn cho là thành công (dựa vào URL)
        if (String(urlStatus) === '1') {
             success.value = true;
        } else {
             success.value = false;
        }
        loading.value = false;
    }
});
</script>