<template>
  <div class="feedback">
    <div class="feedback-head">
      <div class="feedback-info">
        <h5 class="feedback-name">{{ name }}</h5>
        <p class="feedback-type">{{ kind }}</p>
      </div>
      <div class="feedback-rating">
        <star-rating
          active-color="#8F49A0"
          :increment="0.5"
          :rating="rating"
          :star-size="25"
          :read-only="true"
        />
      </div>
    </div>
    <p class="feedback-body">
      {{ feedback }}
    </p>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    kind: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.feedback {
  min-width: 600px;
  padding: 65px 40px;
  background: #fdede4;
  border-radius: 10px;
  margin-right: 30px;
  
  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-info {
    display: flex;
    flex-direction: column;
  }
  &-name {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #232323;
    margin: 0;
  }
  &-type {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #828282;
    margin: 4px 20px;
  }
  &-body {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #4f4f4f;
    text-align: justify;
  }
}
</style>
