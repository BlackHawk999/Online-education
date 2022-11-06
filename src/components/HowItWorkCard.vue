<template>
  <div class="how-it-work-card">
    <p class="card-num" :style="{ 'background-color': color }">{{ number }}</p>
    <h4 class="card-title">{{ title }}</h4>
    <p class="card-subtitle">{{ text }}</p>
    <div class="card-img">
      <img :src="require(`@/assets/images/${imgUrl}`)" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true,
    },
    color: {
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
    imgUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.how-it-work-card {
  padding: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 20px #f7f6fb;
  border-radius: 20px;

  .card {
    &-num {
      width: fit-content;
      padding: 4px 20px;
      margin-bottom: 39px;
      color: #ffffff;
      border-radius: 100px;
    }

    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: #232323;
      margin: 0;
    }

    &-subtitle {
      width: 99%;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #585858;
      margin-top: 12px;
      margin-bottom: 35px;
    }
  }
}
</style>
