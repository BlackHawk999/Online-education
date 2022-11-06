<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-wrapper">
        <div class="navbar-child">
          <div class="navbar-logo">
            <img src="@/assets/images/logo.svg" alt="" />
          </div>
          <div class="navbar-links">
            <router-link to="#" class="link">Курсы</router-link>
            <router-link to="#" class="link">О нас</router-link>
            <router-link to="#" class="link">Блог</router-link>
            <router-link to="#" class="link">Еще</router-link>
          </div>
        </div>
        <button class="navbar-button">Войти</button>
      </div> 
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0px 0px 4px rgba(120, 37, 141, 0.15);
  background: #ffffff;
  z-index: 111;

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
  }
  &-child {
    display: flex;
    align-items: center;
  }
  &-logo {
    width: 120px;
    height: 40px;
    margin-right: 55px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &-links {
    display: flex;
    flex-direction: row;

    .link {
      font-family: Overpass;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #333333;
      margin-right: 0;
      text-decoration: none;

      &:not(:last-child) {
        margin-right: 45px;
      }
    }
  }
  &-button {
    font-family: Overpass;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.01em;
    padding: 12px 18px;
    color: #ffffff;
    background: #78258d;
    border-radius: 8px;
    border: none;
    outline: none;
    cursor: pointer;
  }
}
</style>
