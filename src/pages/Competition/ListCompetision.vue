<script>
import CardCompetition from "@/pages/Dung_Chung/CardCompetition.vue";
export default {
  components: {
    CardCompetition,
    Date,
  },
  props: {
    items: Array,
  },
};
</script>

<template>
  <div class="md:pb-5">
    <div class="max-md:mx-4 mx-auto">
      <div>
        <div
          class="grid grid-cols-3 gap-4 my-5 max-md:grid-cols-2 max-sm:grid-cols-1"
        >
          <CardCompetition
            v-for="item in items"
            :key="item.id"
            :slug="item.slug"
            :title="item.name"
            :numberQuestion="item.numberQuestion"
            :reDoTime="item.reDoTime"
            :submitTime="item.submitTime"
          />
        </div>
      </div>
    </div>
  </div>
</template>
