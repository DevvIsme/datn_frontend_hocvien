<script setup>
import { ref } from 'vue';


    const subnav = ref(false);

    function openNav(){
        subnav.value = !subnav.value;
    }

</script>

<template>
    <div class="px-4">
        <div class="flex items-end gap-4 py-5">
            <img src="@/assets/images/Group 21.svg" alt="User" class="max-md:h-8">
            <div>
                <div class="flex justify-between items-center mb-2 max-md:hidden">
                    <p class="text-base font-semibold text-color-primary">Trần Thị Mai <span class="text-color-gray text-sm font-normal">(Quan trị viên) đến</span> <span class="text-color-primary-2 text-sm font-medium">Mọi người</span></p>
                    <p class="text-color-purple text-font14">
                        10 phút trước
                    </p>    
                </div>
                <div class="flex justify-between items-center mb-2 md:hidden flex-wrap">
                    <p class="text-base font-semibold text-color-primary">Trần Thị Mai <span class="text-color-purple text-font14 ml-2 max-md:text-xs font-no">10 phút trước</span></p> 
                    <p class="text-color-gray text-sm font-normal">(Quan trị viên) đến <span class="text-color-primary-2 text-sm font-normal">Mọi người</span></p>
                       
                </div>
                <div class="py-3 px-4 bg-bg-chat rounded-radius-chat-left">
                    <p class="text-color-text-1 text-sm max-sm:text-start">Lorem ipsum dolor sit amet, coetur adipiscing elit
                         ut aliquam, purus sit amet luctus Lorem ipsum dolor sit amet aliquam, purus sit amet luctus </p>
                </div>
            </div>
        </div>
        <div class="flex items-end gap-4 py-5">
            <img src="@/assets/images/Group 21.svg" alt="User" class="max-md:h-8">
            <div>
                <div class="flex justify-between items-center mb-2 max-md:hidden">
                    <p class="text-base font-semibold text-color-primary">Trần Thị Mai <span class="text-color-gray text-sm font-normal">(Quan trị viên) đến</span> <span class="text-color-primary-2 text-sm font-medium">Mọi người</span></p>
                    <p class="text-color-purple text-font14">
                        10 phút trước
                    </p>    
                </div>
                <div class="flex justify-between items-center mb-2 md:hidden flex-wrap">
                    <p class="text-base font-semibold text-color-primary">Trần Thị Mai <span class="text-color-purple text-font14 ml-2 max-md:text-xs font-normal">10 phút trước</span></p> 
                    <p class="text-color-gray text-sm font-normal">(Quan trị viên) đến <span class="text-color-primary-2 text-sm font-normal">Tôi</span> (Riêng tư)</p>
                       
                </div>
                <div class="py-3 px-4 bg-bg-chat rounded-radius-chat-left">
                    <p class="text-color-text-1 text-sm max-sm:text-start">Lorem ipsum dolor sit amet, coetur adipiscing elit
                         ut aliquam, purus sit amet luctus Lorem ipsum dolor sit amet aliquam, purus sit amet luctus </p>
                </div>
            </div>
        </div>
        

        <div class="flex items-end justify-end gap-3 pb-5">
            
            <div>
                <div class="flex justify-between items-center mb-2 gap-3 max-md:hidden">
                    <p class="text-base font-semibold text-color-primary">Tôi 
                        <span class="text-color-gray text-sm font-normal">đến </span> 
                        <span class="text-color-primary-2 text-sm font-normal">Trần Thị Lan Anh</span> <span class="text-color-gray text-sm font-normal">(riêng tư)</span></p>
                    <p class="text-color-purple text-font14 flex justify-between items-center gap-2">
                        <img src="@/assets/images/sent.svg" alt="Icon">
                        10 phút trước
                    </p>    
                </div>
                <div class="flex justify-between items-center mb-2 gap-3 max-md:flex-wrap max-md:justify-start md:hidden">
                    <p class="text-color-purple text-font14 flex justify-between items-center gap-2">
                        <p class="text-base font-semibold text-color-primary">Tôi </p>
                        <img src="@/assets/images/sent.svg" alt="Icon">
                        <p class="text-color-gray">10 phút trước</p>
                        
                    </p>
                    <p class="text-base font-semibold text-color-primary"> 
                        <span class="text-color-gray text-sm font-normal">đến </span> 
                        <span class="text-color-primary-2 text-sm font-normal">Trần Thị Lan Anh</span> <span class="text-color-gray text-sm font-normal">(riêng tư)</span></p>
                        
                </div>
                <div class="py-3 px-4 bg-color-primary-2 rounded-radius-chat-right max-md:text-start">
                    <p class="text-color-white text-sm">Bài học hay quá!</p>
                </div>
            </div>
            <img src="@/assets/images/Group 21.svg" alt="User" class="max-md:h-8">
        </div>

        <form action="">
            <div class="flex gap-2 items-center relative">
               <p class=" text-color-text-1 text-sm font-medium">Gửi đến</p>
                <div class="flex gap-1 items-center border border-color-primary-2 rounded-lg py-[2px] px-2 cursor-pointer" @click="openNav">
                    <p class=" focus:outline-none cursor-pointer  text-color-primary-2 text-sm font-medium">Mọi người</p>
                    <img src="@/assets/images/arrow-down.svg" alt="Icon">
                </div>
                <div class="absolute top-7 bg-color-white p-2 rounded-lg cursor-pointer" v-if="subnav">
                    <div class="flex py-2 px-3 border border-color-border-2 rounded-lg gap-2">
                        <img src="@/assets/images/SearchIcon.svg" alt="Icon">
                        <input type="text" class="focus:outline-none" placeholder="Tìm kiếm">
                    </div>
                    <div class="py-1">
                        <div class="flex justify-between items-center text-color-primary-2 text-base font-medium py-2 px-[10px] bg-color-primary-4 rounded my-1">
                            <p>Mọi người</p>
                            <img src="@/assets/images/tick.png" alt="Icon">
                        </div>
                        <p class="text-color-gray text-base py-2 px-[10px] my-1">Trần Thị Lan Anh</p>
                        <p class="text-color-gray text-base py-2 px-[10px] my-1">Trần Thị Lan Anh</p> 
                    </div>
                    
                </div>
            </div>

            <div class="flex items-center justify-between gap-3 py-3">
                <div class="w-full">
                    <input type="text" placeholder="Nhập bình luận" class="py-2 px-3 w-full focus:outline-none border border-color-border-2 rounded-lg">
                </div>
                <button class="flex items-center px-4 py-2 gap-2 border border-color-primary-2 rounded-lg bg-color-primary-2 ">
                    <img src="@/assets/images/send-2.svg" alt="Icon">
                    <p class="text-base font-semibold text-color-white max-md:hidden">Gửi</p>
                </button>
            </div>
            
        </form>
    </div>
</template>