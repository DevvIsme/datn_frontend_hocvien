<template>
  <div class="bg-white rounded-lg mt-5">
    <div class="p-5">
      <div
        class="flex items-center gap-3 border-b border-color-button-change-slide pb-2"
      >
        <img src="@/assets/images/StarHalf.svg" alt="Icon" />
        <p
          class="text-color-primary text-font20lh font-semibold max-lg:text-lg"
        >
          Xếp hạng
        </p>
      </div>

      <div class="">
        <div class="text-center">
          <p
            class="text-font80px text-color-primary-2 font-semibold max-lg:text-[64px]"
          >
            {{ courses.avgRate ?? 0 }}
          </p>

          <StarRating
            v-model="courses.avgRate"
            class="mx-auto"
            :star-size="32"
            :disableClick="true"
            active-color="#ffd700"
            inactive-color="#d3d3d3"
          />
          <p class="text-sm font-normal text-color-gray mt-2">
            ( {{ courses.count }} lượt đánh giá)
          </p>
        </div>
      </div>

      <form @submit.prevent="" class="py-8" v-if="!myReview.comment">
        <!-- Chưa đánh giá -->
        <div class="text-center">
          <p class="text-color-primary text-sm font-medium mb-2">
            Bạn có hài lòng với khóa học?
          </p>
          <StarRating
            v-model="star"
            class="mx-auto"
            :star-size="32"
            :read-only="false"
            active-color="#ffd700"
            inactive-color="#d3d3d3"
          />
        </div>

        <div
          class="flex justify-between max-lg:flex-wrap max-lg:justify-center mt-5"
        >
          <input
            v-model="comment"
            type="text"
            placeholder="Nhập đánh giá của bạn"
            class="rounded-lg w-10/12 max-lg:w-full border border-color-border-2 focus:outline-none py-2 px-3 max-lg:text-sm"
          />
          <button
            @click="submit"
            :class="{
              'bg-opacity-60 cursor-not-allowed': !valid,
            }"
            class="px-4 py-2 bg-color-primary-2 rounded-lg text-white text-sm max-lg:mt-2"
          >
            <div>Gửi đánh giá</div>
          </button>
        </div>
      </form>
      <div
        v-else
        class="text-center mt-5 text-green-500 flex items-center justify-center flex-col"
      >
        Cảm ơn bạn đã đánh giá!
      </div>
      <div class="pt-5 mt-5 border-t">
        <div
          v-for="(review, index) in courses.reviews"
          :key="index"
          class="flex items-start gap-4 pb-3 max-lg:gap-2"
        >
          <img
            src="@/assets/images/Group 21.svg"
            alt="User"
            class="max-md:h-8"
          />
          <div
            class="py-3 px-4 bg-color-white-2 rounded-lg max-lg:py-2 max-lg:px-3"
          >
            <div
              class="flex justify-between items-center max-lg:flex-wrap max-lg:items-end"
            >
              <div
                class="flex gap-2 items-center max-lg:flex-col max-lg:items-start"
              >
                <p
                  class="text-base font-semibold text-color-primary max-lg:w-full"
                >
                  {{ review.student.fullName }}
                </p>
                <div class="flex">
                  <!-- Render sao dựa trên rating -->
                  <template v-for="n in review.rate">
                    <img
                      src="@/assets/images/star-filled.svg"
                      alt="Star"
                      class="h-4 w-auto"
                    />
                  </template>
                  <template v-for="n in 5 - review.rate">
                    <img
                      src="@/assets/images/star-filled-2.svg"
                      alt="Star"
                      class="h-4 w-auto"
                    />
                  </template>
                </div>
              </div>
              <div class="text-color-purple text-sm">
                <p>{{ review.createdAt }}</p>
              </div>
            </div>
            <div class="max-lg:mt-2">
              <p class="text-color-text-1 text-sm">
                {{ review.comment }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- <p
        class="text-base text-color-primary-2 font-semibold pt-4 text-center max-lg:text-sm"
      >
        Xem thêm
      </p> -->
    </div>
  </div>
</template>
<script>
import StarRating from "vue3-star-ratings";
export default {
  components: {
    StarRating,
  },
  props: {
    courses: {
      type: Object,
    },
  },
  computed: {
    myReview() {
      return this.courses.my_review || {}; // Trả về courses.my_review hoặc object rỗng nếu không tồn tại
    },
  },
  data() {
    return {
      star: 0,
      comment: "",
      valid: false,
    };
  },
  watch: {
    star(value) {
      this.star = Math.ceil(value);
      this.checkValid();
    },
    comment(value) {
      this.checkValid();
    },
  },
  methods: {
    checkValid() {
      if (this.star !== "" && this.comment !== "") {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
    submit() {
      this.$emit("submitReview", {
        rate: this.star,
        comment: this.comment,
      });
    },
  },
};
</script>
<style scoped>
:deep(.vue3-star-ratings__icon) {
  margin-right: 5px !important;
}
</style>
