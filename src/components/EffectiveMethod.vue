<template>
  <div class="effectly-method">
    <div class="container">
      <div class="effectly-method-wrapper">
        <div class="effectly-method-img">
          <img src="@/assets/images/method.png" alt="" />
        </div>
        <div class="effectly-method-infos">
          <h2 class="effectly-method-title">
            Эффективная методика изучения языка <span> L2GO</span>
          </h2>
          <div class="effectly-method-types">
            <p class="dot">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  fill="url(#paint0_linear_2002_1315)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2002_1315"
                    x1="0"
                    y1="0"
                    x2="16"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E90D1" />
                    <stop offset="1" stop-color="#78258D" />
                  </linearGradient>
                </defs>
              </svg>
            </p>
            <p class="effectly-method-subtitle">
              Самостоятельно выбираете удобный режим и время прохождения заданий
            </p>
          </div>
          <div class="effectly-method-types">
            <p class="dot middle">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  fill="url(#paint0_linear_2002_1315)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2002_1315"
                    x1="0"
                    y1="0"
                    x2="16"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E90D1" />
                    <stop offset="1" stop-color="#78258D" />
                  </linearGradient>
                </defs>
              </svg>
            </p>
            <p class="effectly-method-subtitle middle">
              Cовременная эффективная методика обучения гарантирует освоение
              языка на максимально высоком уровне за короткий срок
            </p>
          </div>
          <div class="effectly-method-types">
            <p class="dot">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  fill="url(#paint0_linear_2002_1315)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2002_1315"
                    x1="0"
                    y1="0"
                    x2="16"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E90D1" />
                    <stop offset="1" stop-color="#78258D" />
                  </linearGradient>
                </defs>
              </svg>
            </p>
            <p class="effectly-method-subtitle">
              Полная автоматизация позволяет нам предоставлять самую низку цену
              - в 2, 3, а то и в 5 раз дешевле других языковых школ.
            </p>
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
.effectly-method {
  padding: 50px 0;
  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 90px 104px 0 85px;
    background: linear-gradient(
      135deg,
      rgba(46, 144, 209, 0.1) 0%,
      rgba(120, 37, 141, 0.1) 100%
    );
    border-radius: 40px;
  }

  &-title {
    font-family: Overpass;
    font-weight: 900;
    font-size: 46px;
    line-height: 54px;
    color: #232323;

    span {
      background: linear-gradient(135deg, #2e90d1 0%, #78258d 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  &-infos {
    margin-left: 150px;
  }

  &-types {
    display: flex;
    align-items: flex-start;
    .dot {
      min-width: 16px;
      min-height: 16px;
      margin: 0;

      &.middle {
        margin-top: 16px;
        margin-bottom: 16px;
      }

      svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  &-subtitle {
    width: 75%;
    font-family: Overpass;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #585858;
    margin: 0;
    margin-left: 18px;

    &.middle {
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
}
</style>
