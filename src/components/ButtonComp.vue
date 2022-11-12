<template>
  <div>
    <button class="button" :style="{'padding' : paddings}">{{ title }}</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    paddings: {
      type: [Number, String],
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
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
  border: 1px solid #78258d;
  outline: none;
  cursor: pointer;
  animation: pulse 0.7s;
  animation-delay: 2.1s, 480ms;

  &:hover {
    animation: none;
  }

  @keyframes pulse {
    0% {
      transform: (scale(0.9));
    }
    70% {
      transform: (scale(1));
    }
    100% {
      transform: (scale(0.9));
    }
  }
}
</style>
