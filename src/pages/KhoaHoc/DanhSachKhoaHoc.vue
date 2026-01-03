<template>
  <div class="mt-5">
    <div
      class="grid grid-cols-3 gap-4 my-5 max-lg:grid-cols-2 max-md:grid-cols-1"
    >
      <!-- Iterate over the courses data -->
      <CardCourse
        v-for="item in courses"
        key="item.id"
        :slug="item.slug"
        :topic="item.topic.name"
        :name="item.name"
        :studentCount="item.studentCount"
        :createdAt="item.createdAt"
        :state="0"
      />
    </div>
  </div>
</template>

<script>
import CardCourse from "@/pages/Dung_Chung/CardCourse.vue";

export default {
  components: {
    CardCourse,
  },
  props: {
    courses: Array,
  },
};
</script>
