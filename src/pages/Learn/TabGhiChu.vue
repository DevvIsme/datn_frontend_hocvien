

<template>
    <div class="max-md:px-4 text-start">
        <div class="flex gap-5 px-6 border-b border-color-border max-md:flex-wrap max-md:p-0 max-md:gap-0 max-md:py-2">
            <div class="py-3 max-md:py-1 max-md:w-full">
                <select
                    name=""
                    id="category"
                    class="py-[9px] px-4 border border-color-border w-full rounded-md focus:outline-none cursor-pointer"
                >
                    <option value="" class="max-md:text-sm">Bài giảng hiện tại</option>
                    <option value="" class="max-md:text-sm">Tất cả</option>
                    <option value="" class="max-md:text-sm">Tất cả</option>
                </select>
            </div>
            <div class="py-3 max-md:py-1 max-md:w-full">
                <select
                    name=""
                    id="category"
                    class="py-[9px] px-4  border border-color-border w-full rounded-md focus:outline-none cursor-pointer"
                >
                    <option value="" class="max-md:text-sm">Sắp xếp theo thứ tự gần đây nhất</option>
                    <option value="" class="max-md:text-sm">Tất cả</option>
                    <option value="" class="max-md:text-sm">Tất cả</option>
                </select>
            </div>
        </div>
        <div class="flex gap-3 py-3 border-b border-color-border max-md:flex-wrap">
            <div class="w-20% max-md:w-1/2">
                <img src="@/assets/images/image-learn.png" alt="Image" class="w-full object-contain rounded-lg">
            </div>
            
            <div class="sm:flex-1">
                <div class="flex justify-between items-center">
                    <p class="text-color-primary text-lg font-semibold">1. Getting Started - Why” React” but not “JavaScript”?</p>
                    <img src="@/assets/images/trash.svg" alt="Icon">
                </div>
                <div class="flex gap-2 py-2">
                    <img src="@/assets/images/video-circle.svg" alt="Icon">
                    <p class="text-color-primary-2 text-base font-medium">Phát video 0:30 - 0:45</p>
                </div>
                <p class="text-color-primary text-base pb-2">Through these courses, you'll gain the foundational skills, hands-on 
                    experience, and confidence you'll need to become a UX designer. This program is for anyone who wants to 
                    find a job in UX design.</p>
                <button class="flex px-3 py-2 gap-2 border border-color-primary-2 rounded-lg">
                    <img src="@/assets/images/message-edit.svg" alt="Icon">
                    <p class="text-color-primary-2 text-base font-semibold">Thêm ghi chú</p>
                </button>
                <div class="">
                    <p class="text-base text-color-text-1">Ghi chú</p>
                    <form action="#" class="flex gap-4 max-md:flex-wrap max-md:gap-2 max-md:justify-between">
                        <input type="text" placeholder="Nhập ghi chú" class="border w-2/5 border-color-border py-2 px-3 focus:outline-none rounded-lg max-md:w-full max-md:h-16">
                        <button class="bg-color-primary-2 rounded-lg px-4 py-2 text-color-white text-base font-semibold max-md:w-2/5">Lưu</button>
                        <button class="border border-color-primary-2 rounded-lg px-4 py-2 text-color-primary-2 text-base font-semibold max-md:w-2/5">
                            Hủy bỏ
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div class="flex gap-3 py-3 border-b border-color-border max-md:flex-wrap">
            <div class="w-20% max-md:w-1/2">
                <img src="@/assets/images/image-learn.png" alt="Image" class="w-full object-contain rounded-lg">
            </div>
            
            <div class="sm:flex-1">
                <div class="flex justify-between items-center">
                    <p class="text-color-primary text-lg font-semibold">1. Getting Started - Why” React” but not “JavaScript”?</p>
                    <img src="@/assets/images/trash.svg" alt="Icon">
                </div>
                <div class="flex gap-2 py-2">
                    <img src="@/assets/images/video-circle.svg" alt="Icon">
                    <p class="text-color-primary-2 text-base font-medium">Phát video 0:30 - 0:45</p>
                </div>
                <p class="text-color-primary text-base pb-2">Through these courses, you'll gain the foundational skills, hands-on 
                    experience, and confidence you'll need to become a UX designer. This program is for anyone who wants to 
                    find a job in UX design.</p>
                <button class="flex px-3 py-2 gap-2 border border-color-primary-2 rounded-lg">
                    <img src="@/assets/images/message-edit.svg" alt="Icon">
                    <p class="text-color-primary-2 text-base font-semibold">Thêm ghi chú</p>
                </button>
                <div class="">
                    <p class="text-base text-color-text-1">Ghi chú</p>
                    <form action="#" class="flex gap-4">
                        <input type="text" placeholder="Nhập ghi chú" class="border w-2/5 border-color-border py-2 px-3 focus:outline-none rounded-lg">
                        <button class="bg-color-primary-2 rounded-lg px-4 py-2 text-color-white text-base font-semibold">Lưu</button>
                        <button class="border border-color-primary-2 rounded-lg px-4 py-2 text-color-primary-2 text-base font-semibold">
                            Hủy bỏ
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div class="flex gap-3 py-3 border-b border-color-border">
            <div class="w-20% ">
                <img src="@/assets/images/image-learn.png" alt="Image" class="w-full object-contain rounded-lg">
            </div>
            
            <div class="flex-1">
                <div class="flex justify-between items-center">
                    <p class="text-color-primary text-lg font-semibold">1. Getting Started - Why” React” but not “JavaScript”?</p>
                    <img src="@/assets/images/trash.svg" alt="Icon">
                </div>
                <div class="flex gap-2 py-2">
                    <img src="@/assets/images/video-circle.svg" alt="Icon">
                    <p class="text-color-primary-2 text-base font-medium">Phát video 0:30 - 0:45</p>
                </div>
                <p class="text-color-primary text-base pb-2">Through these courses, you'll gain the foundational skills, hands-on 
                    experience, and confidence you'll need to become a UX designer. This program is for anyone who wants to 
                    find a job in UX design.</p>
                <div class="bg-color-white-2 py-3 px-4 rounded-lg">
                    <p class="text-color-text-3 text-base font-semibold">Ghi chú của bạn</p>
                    <p class="text-color-text-1 text-sm">Lorem ipsum dolor sit amet, coetur adipiscing elit ut aliquam, purus sit amet
                        luctus Lorem ipsum dolor sit amet aliquam, purus sit amet luctus </p>
                </div>
                <button class="flex px-3 py-2 gap-2 border border-color-primary-2 rounded-lg mt-3">
                    <img src="@/assets/images/message-edit.svg" alt="Icon">
                    <p class="text-color-primary-2 text-base font-semibold">Sửa ghi chú</p>
                </button>
            </div>
        </div>
    </div>
</template>