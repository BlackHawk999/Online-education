<template>
  <div class="news-card">
    <h4 class="news-card-title">
      {{ title }}
    </h4>
    <p class="news-card-date">{{ date }}</p>
    <p class="news-card-text">{{ text }}</p>
    <div class="news-card-footer">
      <span class="news">Новость</span>
      <router-link class="news-card-link" to="#">
        <span>Подробнее</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19"
            stroke="#8E49A0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 5L19 12L12 19"
            stroke="#8E49A0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: [Number, String],
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.news-card {
  padding: 40px;
  background: #ffffff;
  border: 1px solid #efefff;
  box-shadow: 0px 4px 20px #f7f6fb;
  border-radius: 20px;

  &-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #232323;
    margin: 0;
  }

  &-date {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #2e90d1;
    margin-top: 6px;
    margin-bottom: 10px;
  }

  &-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #585858;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 24px;
  }
  &-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .news {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    padding: 5px 20px;
    background: #efefff;
    border-radius: 4px;
  }
  &-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    span {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #8e49a0;
      text-decoration: none;
      margin-right: 15px;
    }
  }
}
</style>
