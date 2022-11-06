<template>
  <div :class="[{ change: active === true }, 'question']">
    <div class="question-head">
      <h5 class="question-title">{{ question }}</h5>
      <button
        :class="[{ open: active === true }, 'question-btn-open']"
        @click="active = true"
        v-if="active === false"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 6.6665V25.3332"
            stroke="#641F76"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.6665 16H25.3332"
            stroke="#641F76"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        :class="[{ open: active === false }, 'question-btn-close']"
        @click="active = false"
        v-else
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-name="Layer 2">
            <g data-name="close">
              <rect
                width="24"
                height="24"
                transform="rotate(180 12 12)"
                opacity="0"
              />
              <path
                d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
              />
            </g>
          </g>
        </svg>
      </button>
    </div>
    <div class="question-body" v-if="active">
      <p class="question-text">{{ answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.question {
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(46, 144, 209, 0.08);
  border-radius: 10px;

  &.change {
    background: #efefff;
  }

  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #232323;
    margin: 0;
  }
  &-btn-open {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  &-btn-close {
    width: 32px;
    height: 32px;
    border: none;
    background: #78258d;
    border-radius: 4px;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;

      & path {
        fill: #ffffff;
      }
    }
  }
}
</style>
