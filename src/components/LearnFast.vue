<template>
  <div class="learn-fast">
    <div class="container">
      <div class="learn-fast-wrapper">
        <h2 class="learn-fast-title">Почему вы быстро освоите язык</h2>
        <div class="learn-fast-lessons">
          <div class="lesson-infos-wrapper">
            <p class="lesson-num">01</p>
            <h4 class="lesson-title">Интересные уроки</h4>
            <p class="lesson-subtitle">
              Короткие, но насыщенные уроки до 45 минут. Более глубокий объем
              знаний, чем в других школах и даже чем предусмотрено
              международными стандартами.
            </p>
          </div>
          <div class="lesson-img">
            <img src="@/assets/images/lesson-first-img.png" alt="" />
          </div>
        </div>
        <div class="learn-fast-lessons reverse">
          <div class="lesson-infos-wrapper">
            <p class="lesson-num second">02</p>
            <h4 class="lesson-title">Общение с другими учащимися</h4>
            <p class="lesson-subtitle">
              Внутренний видеочат для общения с единомышленниками и отработки
              материала. Завести новых друзей по интересам просто.
            </p>
          </div>
          <div class="lesson-img">
            <img src="@/assets/images/lesson-second-img.png" alt="" />
          </div>
        </div>
        <div class="learn-fast-lessons">
          <div class="lesson-infos-wrapper">
            <p class="lesson-num third">03</p>
            <h4 class="lesson-title">Удобный формат обучения</h4>
            <p class="lesson-subtitle">
              Полностью автоматический процесс обучения на одной платформе с
              доступом на любом устройстве.
            </p>
          </div>
          <div class="lesson-img">
            <img src="@/assets/images/lesson-third-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.learn-fast {
  &-wrapper {
    display: flex;
    flex-direction: column;
  }

  &-title {
    font-family: Overpass;
    font-weight: 900;
    font-size: 46px;
    line-height: 54px;
    color: #232323;
    text-align: center;
  }

  &-lessons {
    display: flex;
    align-items: center;

    &.reverse {
      display: flex;
      flex-direction: row-reverse;

      .lesson-infos-wrapper {
        margin-left: 150px;
      }
    }
  }

  .lesson {
    &-infos-wrapper {
      margin-right: 150px;
    }
    &-num {
      width: fit-content;
      font-family: Overpass;
      font-weight: 700;
      font-size: 18px;
      line-height: 113%;
      color: #ffffff;
      padding: 4px 22px;
      background: #2e90d1;
      border-radius: 100px;

      &.second {
        background: #78258d;
      }

      &.third {
        background: #e42125;
      }
    }
    &-title {
      font-family: Overpass;
      font-weight: 700;
      font-size: 36px;
      line-height: 113%;
      color: #232323;
      margin-top: 22px;
      margin-bottom: 19px;
    }
    &-subtitle {
      font-family: Overpass;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      color: #4f4f4f;
    }
  }
}
</style>
