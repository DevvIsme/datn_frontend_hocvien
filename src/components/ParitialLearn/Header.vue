<script setup>
    import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
    import MobileMenu from "@/components/MobileMenu.vue";
</script>

<template>
    <div class="bg-white border-b border-[#D1D4E0]">
        <div class="container mx-auto">
            <div class="grid grid-cols-10 gap-3 py-3 max-lg:flex max-lg:justify-between">
                <div class="col-span-3 flex items-center max-lg:col-span-1">
                    <RouterLink to="/">
                        <img src="../../assets/images/Logo.svg" alt="Logo" class="h-8 w-auto max-lg:hidden">
                    </RouterLink>
                    <RouterLink to="/">
                        <img
                            src="@/assets/images/LogoMobile.svg"
                            alt="Logo"
                            class="w-auto lg:hidden"
                        />
                    </RouterLink>
                    
                </div>
                <div class="col-span-4 max-lg:hidden flex justify-center items-center">
                    <form action="#" class="flex bg-[#F0F1F5] py-2 px-3 w-full rounded-lg gap-2">
                        <img src="../../assets/images/SearchIcon.svg" alt="Icon" class="h-5 w-5">
                        <input type="text" class="bg-[#F0F1F5] w-full focus:outline-none text-sm text-[#969DB8]" placeholder="Tìm kiếm">
                    </form>
                </div>
                <div class="col-span-3 flex items-center gap-6 max-lg:hidden">
                    <div>
                        <img src="../../assets/images/Notification.svg" alt="Location" class='h-6 w-6 max-lg:hidden'>
                    </div>
                    <div class="flex justify-center items-center max-lg:hidden">
                        <img src="../../assets/images/Group 21404.svg" alt="Group" class="w-10 h-6 rounded-md">
                        <img src="../../assets/images/arrow-down.svg" alt="Arrow">
                    </div>
                    <div class="flex items-center gap-1 relative max-lg:hidden">
                        <div class="max-xl:flex-1">
                            <img
                            src="@/assets/images/Default.svg"
                            alt="Avatar"
                            class="w-full h-auto object-cover max-sm:h-6 "
                            />
                        </div>
                        <Popover class="relative">
                            <PopoverButton class="flex gap-1 items-center outline-none">
                            <p
                                class="text-base font-medium text-[#273266] max-sm:hidden"
                            >
                                Lê Nguyễn Hà Anh
                            </p>
                            <img
                                src="@/assets/images/arrow-down.svg"
                                alt="Arrow"
                                class="w-4 h-4 cursor-pointer"
                            />
                            </PopoverButton>
                            <transition
                            enter-active-class="transition duration-200 ease-out"
                            enter-from-class="translate-y-1 opacity-0"
                            enter-to-class="translate-y-0 opacity-100"
                            leave-active-class="transition duration-150 ease-in"
                            leave-from-class="translate-y-0 opacity-100"
                            leave-to-class="translate-y-1 opacity-0"
                            >
                            <PopoverPanel
                                class="absolute top-9 w-[163px] z-10 right-0 bg-[#FFFFFF] p-2 rounded-[10px]"
                            >
                                <ul>
                                <li
                                    class="py-2 px-10px bg-[#EDF5FF] text-[#005ED3] text-base font-medium rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                                >
                                    Hồ sơ cá nhân
                                </li>
                                <li
                                    class="py-2 px-10px text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                                >
                                    Khoá học của tôi
                                </li>
                                <li
                                    class="py-2 px-10px text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                                >
                                    Cuộc thi của tôi
                                </li>
                                <li
                                    class="py-2 px-10px text-[#636B90] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                                >
                                    Khảo sát của tôi
                                </li>
                                <li
                                    class="py-2 px-10px text-[#FB324A] text-base font-normal rounded-md max-sm:text-xs max-sm:px-2 max-sm:py-1"
                                >
                                    Đăng xuất
                                </li>
                                </ul>
                            </PopoverPanel>
                            </transition>
                        </Popover>
                    </div>
                </div>
                <MobileMenu/>
            </div>
        </div>
   </div>
</template>