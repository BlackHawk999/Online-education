<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-wrapper">
        <div class="navbar-child">
          <router-link to="/" class="navbar-logo">
            <img src="@/assets/images/logo.svg" alt="" />
          </router-link>
          <div class="navbar-links">
            <router-link
              to="/about-course"
              exact-active-class="active"
              class="link"
              >Курсы</router-link
            >
            <router-link to="#" exact-active-class="active" class="link"
              >О нас</router-link
            >
            <router-link to="#" exact-active-class="active" class="link"
              >Блог</router-link
            >
            <router-link to="#" exact-active-class="active" class="link"
              >Еще</router-link
            >
          </div>
        </div>
        <div class="navbar-btn">
          <button-comp :title="title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComp from "./ButtonComp.vue";
export default {
  components: { ButtonComp },
  data() {
    return {
      title: "Войти",
    };
  },
};
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
      position: relative;
      font-family: Overpass;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #333333;
      margin-right: 0;
      text-decoration: none;
      z-index: 1;
      transition: 0.3s all;

      &::after {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10px;
        background-color: transparent;
      }

      &.active {
        color: #78258d;
        &::after {
          background-color: #78258d;
        }
      }

      &:not(:last-child) {
        margin-right: 45px;
      }

      &:hover {
        color: #78258d;
      }
    }
  }
}
</style>
