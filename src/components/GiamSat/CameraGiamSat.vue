<template>
  <div class="monitor-container">
    <div class="camera-box">
      <video ref="video" autoplay playsinline muted></video>
      <div class="status-dot" :class="{ 'recording': isMonitoring }"></div>
    </div>
    
    <div v-if="warningMessage" class="warning-alert animate-bounce">
      {{ warningMessage }}
    </div>

    <canvas ref="canvas" style="display: none;"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';

export default {
  props: ['examId'],
  emits: ['forceSubmit', 'updateViolation'],
  
  setup(props, { emit }) {
    const video = ref(null);
    const canvas = ref(null);
    const isMonitoring = ref(false);
    const warningMessage = ref("");
    
    
    const isProcessing = ref(false);
    const violationCount = ref(0);
    const MAX_VIOLATIONS = 3; 
    let intervalId = null;
    let mediaStream = null;

    // Hàm tiện ích: In log kèm thời gian thực
    const logTime = (msg) => {
        const now = new Date();
        console.log(`[${now.toLocaleTimeString()}] 📸 ${msg}`);
    };

    const startCamera = async () => {
      // 1. CLEAR INTERVAL CŨ NGAY LẬP TỨC
      if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
      }

      try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } });
        if (video.value) {
          video.value.srcObject = mediaStream;
          isMonitoring.value = true;
          
          logTime("Camera đã bật. Hẹn giờ chụp mỗi 60 giây...");
emit('updateViolation', violationCount.value);
          // 2. SET INTERVAL 60 GIÂY (60000ms)
          intervalId = setInterval(() => {
              captureAndAnalyze("Định kỳ");
          }, 30000); 
        }
      } catch (err) {
        console.error("Lỗi Camera:", err);
      }
    };

    const stopCamera = () => {
        if (intervalId) clearInterval(intervalId);
        intervalId = null;
        if (mediaStream) mediaStream.getTracks().forEach(t => t.stop());
        if (video.value) video.value.srcObject = null;
    };

    // Thêm tham số 'source' để biết ai gọi hàm này (Timer hay Tab Switch)
    const captureAndAnalyze = async (source = "Unknown") => {
      if (isProcessing.value) {
          logTime(`Bỏ qua lệnh gọi từ [${source}] vì đang bận xử lý request trước.`);
          return;
      }
      
      if (!video.value || !canvas.value) return;

      isProcessing.value = true;
      logTime(`Bắt đầu chụp ảnh... (Nguồn: ${source})`);

      try {
        const context = canvas.value.getContext('2d');
        canvas.value.width = video.value.videoWidth;
        canvas.value.height = video.value.videoHeight;
        context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
        const imageBase64 = canvas.value.toDataURL('image/jpeg', 0.4);

        const res = await axios.post('/exam/monitor', {
          examId: props.examId,
          image: imageBase64
        });

        const result = res.data.data.data;
        logTime(`Kết quả AI: ${result.message}`); // Log kết quả trả về

       if (!result.is_suspicious && result.message && result.message !== "Hợp lệ" && !result.message.includes("Safe")) {
             warningMessage.value = `${result.message}`;
             
             // Tự ẩn sau 10 giây
             setTimeout(() => warningMessage.value = "", 10000);
             return; // Dừng, không tính là vi phạm
        }
        // ==================

        if (result.is_suspicious) {
            if (result.message.includes("bỏ qua") || result.message.includes("Server bận")) return;

            violationCount.value++;
            localStorage.setItem(`violations_${props.examId}`, violationCount.value);
            
            // Emit ra ngoài
            emit('updateViolation', violationCount.value);

            // Logic kill
            if (violationCount.value > MAX_VIOLATIONS) {
                stopCamera();
                emit('forceSubmit', result.message);
                return;
            }
            
            // Hiển thị cảnh báo
            warningMessage.value = `⚠️ CẢNH BÁO (${violationCount.value}/${MAX_VIOLATIONS}): ${result.message}`;
            setTimeout(() => warningMessage.value = "", 5000);
        }
      } catch (error) {
        console.error("Lỗi gửi ảnh:", error.message);
      } finally {
        isProcessing.value = false; 
      }
    };

    onMounted(() => {
      startCamera();
      
      document.addEventListener("visibilitychange", () => {
        // Chỉ chụp khi người dùng ẨN tab đi (Rời khỏi bài thi)
        if (document.hidden) {
            // logTime("Phát hiện rời tab -> Chụp ngay lập tức!");
            // captureAndAnalyze("Rời Tab"); 
            
            // MẸO: Nếu bạn đang debug và không muốn nó spam request khi Alt+Tab
            // Hãy comment dòng captureAndAnalyze ở trên lại.
        }
      });
    });

    onUnmounted(() => {
      stopCamera();
    });

    return { video, canvas, isMonitoring, warningMessage };
  }
}
</script>

<style scoped>
.monitor-container {
  position: fixed; /* Ghim góc màn hình */
  bottom: 20px;
  right: 20px;
  z-index: 9999; /* Đè lên mọi thứ */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.camera-box {
  width: 140px; /* Tăng kích thước chút cho dễ nhìn */
  height: 105px;
  border: 2px solid #333;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: black;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1); /* Lật ngược video cho giống gương */
}

.status-dot {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  opacity: 0.5;
}

.status-dot.recording {
  animation: pulse 1s infinite;
  opacity: 1;
  box-shadow: 0 0 5px red;
}

.warning-alert {
  background-color: #ef4444; /* Màu đỏ cảnh báo */
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 13px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  text-align: right;
  max-width: 250px;
  border: 1px solid #b91c1c;
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.7; }
}
</style>