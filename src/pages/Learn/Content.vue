
<script setup>
    import Video from './Video.vue'
    import Breakcrumbs from './Breadcrumbs.vue'
    import Infomation from './Infomation.vue'
    import Exam from './Exam.vue'
</script>

<template>
    <div class="container mx-auto">
        <Breakcrumbs />
        <!-- <Video /> -->
         <slot />
         <!-- <Exam /> -->
        <!-- <Infomation /> -->
    </div>

</template>