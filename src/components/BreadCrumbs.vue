<template>
  <div class="crumbs">
    <router-link class="crumb-link" to="/" exact-active-class="active"
      >Главная</router-link
    >
    <div class="crumbs__icon"></div>
    <router-link
      class="crumb-link"
      :to="`/${path}`"
      exact-active-class="active"
      >{{ link }}</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.crumbs {
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  gap: 20px;

  .crumb-link {
    &.active {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #828282;
      text-decoration: none;
    }
  }

  &__icon {
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 2px;
      background-color: #000000;
      transform-origin: right;
    }
    &::before {
      transform: translateY(-50%) rotate(35deg);
    }

    &::after {
      transform: translateY(-50%) rotate(-35deg);
    }
  }
}
</style>
