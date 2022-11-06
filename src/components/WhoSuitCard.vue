<template>
  <div class="suit-card">
    <div class="suit-card-icon" :style="{ 'background-color': color }">
      <img :src="require(`@/assets/images/${imgUrl}`)" alt="" />
    </div>
    <h4 class="suit-card-title">{{ title }}</h4>
    <p class="suit-card-subtitle">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.suit-card {
  &-icon {
    width: 60px;
    height: 60px;
    padding: 15px;
    border-radius: 50%;

    img {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &-title {
    font-family: Overpass;
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    color: #232323;
    margin-top: 16px;
    margin-bottom: 10px;
  }
  &-subtitle {
    font-family: Overpass;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #585858;
  }
}
</style>
