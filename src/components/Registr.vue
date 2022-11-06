<template>
  <div class="register">
    <div class="container">
      <div class="register-wrapper">
        <div class="register-body">
          <h2 class="register-title">
            Регистрируйтесь и приступайте к первому бесплатному уроку
          </h2>
          <div class="number-area">
            <label for="number" class="number-wrapper">
              <span class="number-text">Телефон *</span>
              <input
                class="number-input"
                type="tel"
                name="number"
                id="number"
                placeholder="+998 (99) 012 34 56"
              />
            </label>
            <button class="number-btn">Начать обучение</button>
          </div>
          <div class="verify-area">
            <label for="verify" class="number-verify">
              <input type="checkbox" name="verify" id="verify" />
            </label>
            <p class="number-verify-text">
              Отправляя заявку, я соглашаюсь с политикой конфиденциальности и
              <br />
              пользовательским соглашением
            </p>
          </div>
        </div>
        <div class="register-img">
          <img src="@/assets/images/register-img.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.register {
  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 67px 155px 67px 100px;
    background: #efefff;
    border-radius: 40px;
  }

  &-title {
    font-weight: 900;
    font-size: 46px;
    line-height: 54px;
    color: #232323;
  }

  .number {
    &-area {
      display: flex;
      align-items: flex-end;
      margin-bottom: 25px;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
    }

    &-text {
      font-weight: 500;
      font-size: 14px;
      line-height: 113%;
      color: #232323;
    }

    &-input {
      width: 407px;
      height: 48px;
      padding: 0 18px;
      margin-top: 8px;
      background: #ffffff;
      border-radius: 8px;
      border: none;
      outline: none;
    }

    &-btn {
      padding: 12px 20px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #ffffff;
      background: #78258d;
      border-radius: 8px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: 0.3s all;

      &:hover {
        color: #78258d;
        background-color: #ffffff;
      }
    }

    &-verify {
      input {
        width: 24px;
        height: 24px;
      }
    }

    &-verify-text {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #828282;
      margin: 0;
      margin-left: 15px;
    }
  }

  .verify-area {
    display: flex;
  }
}
</style>
