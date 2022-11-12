<template>
  <div class="course" :style="{'background-color': color}">
    <div class="course-flag">
      <img :src="require(`@/assets/images/${imgUrl}`)" alt="" />
    </div>
    <div class="course-info">
      <h5 class="course-title">{{ title }}</h5>
      <div class="course-time-wrapper">
        <p class="course-time">{{ duration }}</p>
        <p class="course-time">{{ modules }}</p>
      </div>
      <div class="course-detail">
        <div class="course-more">
          <span class="course-more__content">Узнать подробнее</span>
          <div class="course-more__icon"></div>
        </div>
        <p class="course-price">От {{ price }} Р</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title:{
      type: String,
      required: true,
    },
    imgUrl:{
      type: String,
      required: true,
    },
    duration:{
      type: String,
      required: true,
    },
    modules:{
      type: String,
      required: true,
    },
    price:{
      type: Number,
      required: true,
    },
    color:{
      type: String,
      required: true,
    }
  }
};
</script>

<style lang="scss" scoped>
.course {
  display: flex;
  flex-direction: column;
  padding: 40px 40px 45px 40px;
  border-radius: 10px;

  &-flag {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &-info {
    display: flex;
    flex-direction: column;
  }
  &-title {
    font-family: Overpass;
    font-weight: 700;
    font-size: 26px;
    line-height: 113%;
    color: #232323;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &-time-wrapper {
    display: flex;
    flex-direction: column;
  }

  &-time {
    font-family: Overpass;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #585858;
    margin: 5px 0;
  }

  &-detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-more {
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      .course-more__icon {
        width: 30px;
      }
    }

    &__content {
      font-family: Overpass;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #8e49a0;
      margin-right: 15px;
    }

    &__icon {
      position: relative;
      height: 1.5px;
      width: 15px;
      background-color: #8e49a0;
      transition: .3s;

      &::before,
      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        width: 8px;
        height: 1.5px;
        background-color: #8e49a0;
        transform-origin: right;
      }

      &:before {
        transform: translateY(-50%) rotate(35deg);
      }

      &:after {
        transform: translateY(-50%) rotate(-35deg);
      }
    }
  }

  &-price {
    font-family: Overpass;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 113%;
    text-align: right;
    color: #333333;
  }
}
</style>
