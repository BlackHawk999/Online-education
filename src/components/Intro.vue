<template>
  <div class="intro">
    <div class="container">
      <div class="intro-wrapper">
        <div class="intro-title-body">
          <p class="intro-link">Language to go</p>
          <h1 class="intro-title">Онлайн-школа иностранных языков</h1>
          <p class="intro-subtitle">
            Достигайте своих целей с помощью авторских игровых методик от
            носителей языка
          </p>
          <div class="intro-buttons-wrapper">
            <button class="intro-btn">Попробовать бесплатно</button>
            <div class="play-btn-wrapper">
              <button class="intro-btn-play">
                <svg
                  width="19"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2864 9.304C18.5397 10.0873 18.5397 11.9127 17.2864 12.696L3.06 21.5875C1.7279 22.4201 -1.00372e-06 21.4624 -9.35052e-07 19.8915L-1.57732e-07 2.10849C-8.90674e-08 0.537623 1.7279 -0.420062 3.06 0.412498L17.2864 9.304Z"
                    fill="#F6B5B6"
                  />
                </svg>
              </button>
              <span class="intro-btn-text">Посмотреть промо-ролик</span>
            </div>
          </div>
        </div>
        <div class="intro-img">
          <img src="@/assets/images/image.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro {
  &-wrapper {
    display: flex;
    align-items: center;
    min-height: 100vh;
  }
  &-link {
    font-family: Overpass;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #2e90d1;
  }
  &-title {
    font-family: Overpass;
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 70px;
    color: #232323;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  &-subtitle {
    font-family: Overpass;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 35px;
    color: #828282;
    margin-bottom: 56px;
  }
  &-buttons-wrapper {
    display: flex;
    align-items: center;
  }
  &-btn {
    font-family: Overpass;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    padding: 18px 27px;
    margin-right: 32px;
    background: #78258d;
    border: 1px solid #78258d;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: #78258d;
      background-color: #ffffff;
    }
  }
  &-btn-play {
    width: 60px;
    height: 60px;
    padding: 18px 17px 18px 23px;
    margin-right: 12px;
    background: #ffefef;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      svg {
        transform: scale(1.2);
      }
    }

    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .play-btn-wrapper {
    display: flex;
    align-items: center;
  }
  &-btn-text {
    font-family: Overpass;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #585858;
  }
}
</style>
