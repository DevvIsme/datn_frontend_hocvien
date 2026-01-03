
<script setup>
    import Header from '../components/ParitialLearn/Header.vue'
    import Footer from '../components/Footer.vue'

</script>

<template>
    <Header />

    <slot />

    <div class="max-lg:hidden">
        <Footer />
    </div>
    
</template>