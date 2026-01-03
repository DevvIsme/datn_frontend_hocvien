<template>
    <div class="flex flex-col min-h-screen">
        
        <Header/>

        <main class="flex-1 bg-[#f5f5f5]"> 
            <slot />
        </main>

        <Footer />
        
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'

    export default{
        components: {
            Header,
            Footer
        }
    }
</script>