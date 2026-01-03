<template>
  <div class="py-10">
    <div class="container mx-auto my-10 max-md:my-5">
      <div class="text-center">
        <p
          class="text-font36lh max-md:text-font20lh font-bold text-color-primary mb-2"
        >
          Về chúng tôi
        </p>
        <p
          class="text-xl font-normal text-color-text-1 max-md:text-font14 max-w-[750px] mx-auto"
        >
         Hệ thống cung cấp mô hình học tập cập nhật theo môi trường
          làm việc thực tế. Với niềm tâm huyết của những nhà thiết kế giáo dục,
          chúng tôi cam kết xây dựng một môi trường giáo dục tốt nhất, cập nhật
          nhất dành cho học viên.
        </p>
      </div>
      <div
        class="bg-color-primary-3 rounded-xl py-9 max-md:py-[17.5px] mt-10 max-md:mt-5 relative"
      >
        <img
          src="@/assets/images/Logo_About.png"
          alt="Image"
          class="absolute bottom-0 right-0 max-md:h-[117px]"
        />
        <div class="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-5">
          <div class="flex items-center relative text-center justify-center">
            <img
              src="@/assets/images/ChalkboardTeacher.svg"
              alt="ChalkboardTeacher"
              class="max-md:w-12"
            />
            <div class="ml-2">
              <p class="text-font28 max-md:text-font20lh text-white font-bold">
                100+
              </p>
              <p class="text-font18 max-md:text-font14 text-white font-normal">
                Giảng viên
              </p>
            </div>
            <div
              class="w-[1px] h-[48px] max-md:h-[30px] bg-border-heart opacity-[40%] absolute right-0 top-3 max-md:top-4"
            ></div>
          </div>

          <div class="flex items-center relative justify-center">
            <img
              src="@/assets/images/Books.svg"
              alt="ChalkboardTeacher"
              class="max-md:w-12"
            />

            <div class="ml-2">
              <p class="text-font28 max-md:text-font20lh text-white font-bold">
                100+
              </p>
              <p class="text-font18 max-md:text-font14 text-white font-normal">
                Học liệu
              </p>
            </div>
            <div
              class="w-[1px] h-[48px] bg-border-heart opacity-[40%] absolute right-0 top-3 max-md:hidden"
            ></div>
          </div>
          <div class="flex items-center relative justify-center">
            <img
              src="@/assets/images/MonitorPlay.svg"
              alt="MonitorPlay"
              class="max-md:w-12"
            />
            <div class="ml-2">
              <p class="text-font28 max-md:text-font20lh text-white font-bold">
                150+
              </p>
              <p class="text-font18 max-md:text-font14 text-white font-normal">
                Khóa học
              </p>
            </div>
            <div
              class="w-[1px] h-[48px] max-md:h-[30px] bg-border-heart opacity-[40%] absolute right-0 top-3 max-md:top-4"
            ></div>
          </div>
          <div class="flex items-center justify-center">
            <img
              src="@/assets/images/Exam.svg"
              alt="Exam"
              class="max-md:w-12"
            />
            <div class="ml-2">
              <p class="text-font28 max-md:text-font20lh text-white font-bold">
                100+
              </p>
              <p class="text-font18 max-md:text-font14 text-white font-normal">
                Cuộc thi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="md:grid grid-cols-5 flex flex-col">
      <div class="col-span-2">
        <img
          src="@/assets/images/anh4.png"
          alt="Image"
          class="w-full h-[468px] max-md:h-[300px] object-cover"
        />
      </div>
      <div
        class="flex flex-col max-md:grid grid-cols-2 max-md:py-1 justify-between mx-2 max-md:mx-0 gap-[3px]"
      >
        <div>
          <img
            src="@/assets/images/a2.png"
            alt="Image"
            class="w-full h-[230px] max-md:h-[129px] object-cover"
          />
        </div>
        <div>
          <img
            src="@/assets/images/anh5.png"
            alt="Image"
            class="w-full h-[230px] max-md:h-[129px] object-cover"
          />
        </div>
      </div>

      <div class="col-span-2">
        <img
          src="@/assets/images/anh.png"
          alt="Image"
          class="w-full h-[468px] max-md:h-[300px] object-cover"
        />
      </div>
    </div>
  </div>
</template>
