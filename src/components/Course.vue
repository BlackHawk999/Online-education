<template>
  <div class="course">
    <div class="course-flag">
      <img src="@/assets/images/german.svg" alt="" />
    </div>
    <div class="course-info">
      <h5 class="course-title">Немецкий для начального уровня</h5>
      <div class="course-time-wrapper">
        <p class="course-time">Длительность:<strong> 45 часов</strong></p>
        <p class="course-time">Модулей:<strong> 3</strong></p>
      </div>
      <div class="course-detail">
        <p class="course-more">
          <span>Узнать подробнее</span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 12H19.5"
              stroke="#8E49A0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 5L19.5 12L12.5 19"
              stroke="#8E49A0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </p>
        <p class="course-price">От 6520 Р</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.course {
  display: flex;
  flex-direction: column;
  padding: 40px 40px 45px 40px;
  background: #def1ff;
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

    span {
      font-family: Overpass;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #8e49a0;
      margin-right: 15px;
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
