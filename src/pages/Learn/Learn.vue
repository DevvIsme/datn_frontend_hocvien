
<script setup>
    import { ref } from 'vue';
    import SideBar from './SideBar.vue';
    import Breakcrumbs from './Breadcrumbs.vue'
    import Infomation from './Infomation.vue'
    import Header from '@/components/ParitialLearn/Header.vue'
    import Footer from '@/components/Footer.vue'
    import DanhGia from './DanhGiaKhoaHoc.vue'

    const open = ref(false)
    const thugon = ref(true)

    function isopen() {
        open.value = !open.value;
    }

    function trangthai(){
        thugon.value = !thugon.value;
    }

</script>

<template>
    <Header />
    <div class="grid grid-cols-10 max-md:block">
        <div :class="open ? 'col-span-2' : 'hidden'" class="bg-color-white">
            <SideBar :open="open" :isopen="isopen"/>
        </div>
        <div :class="open ? 'col-span-8' : 'col-span-10'">
            <div class="py-5 max-md:py-0">
                <Breakcrumbs :open="open" :isopen="isopen"/>
                    <div v-if="thugon">
                        <slot />
                    </div>
                    
                <Infomation :trangthai="trangthai" :thugon="thugon"/>
             </div>
        </div>
    </div>
    <DanhGia />
    
    <Footer />
    
</template>