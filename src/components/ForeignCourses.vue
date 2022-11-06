<template>
  <div class="courses">
    <div class="container">
      <div class="courses-wrapper">
        <div class="courses-head">
          <h2 class="courses-title">
            Курсы иностранных языков <br />
            для любого уровня
          </h2>
          <router-link to="#" class="courses-all">Все курсы</router-link>
        </div>
        <div class="courses-body">
          <div class="swiper-container" ref="courses-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in 10" :key="item">
                <course />
              </div>
            </div>
          </div>
          <div class="courses-slider-btn">
            <button
              ref="prev-button"
              class="border"
              :disabled="currentIndex === 0"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#BC92C6" />
              </svg>
            </button>
            <button
              ref="next-button"
              class="border"
              :disabled="currentIndex === 9"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#BC92C6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation } from "swiper";
import Course from "./Course.vue";
Swiper.use([Navigation]);
export default {
  components: {
    Course,
  },
  data() {
    return {
      coursesSlider: null,
      active: false,
    };
  },
  computed: {
    currentIndex() {
      return this.coursesSlider?.realIndex || 0
    }
  },
  mounted() {
    this.coursesSlider = new Swiper(this.$refs["courses-slider"], {
      slidesPerView: 3,
      spaceBetween: 40,
      navigation: {
        prevEl: this.$refs["prev-button"],
        nextEl: this.$refs["next-button"],
      },
      // breakpoints: {
      //   320: {
      //     slidesPerView: 2,
      //     spaceBetween: 5,
      //   },
      //   575: {
      //     slidesPerView: 2,
      //     spaceBetween: 10,
      //   },
      //   767: {
      //     slidesPerView: 3,
      //     spaceBetween: 15,
      //   },
      //   991: {
      //     slidesPerView: 3,
      //     spaceBetween: 20,
      //   },
      //   1199: {
      //     slidesPerView: 3,
      //     spaceBetween: 15,
      //   },
      //   1537: {
      //     slidesPerView: 3,
      //     spaceBetween: 25,
      //   },
      //   1750: {
      //     slidesPerView: 3,
      //     spaceBetween: 20,
      //   },
      // },
    });
  },
  beforeDestroy() {
    if (this.coursesSlider) {
      this.coursesSlider.destroy();
    }
  }
};
</script>

<style lang="scss" scoped>
.courses {
  padding: 50px 0;
  &-wrapper {
    display: flex;
    flex-direction: column;
  }

  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-title {
    font-family: Overpass;
    font-style: normal;
    font-weight: 900;
    font-size: 46px;
    line-height: 54px;
    color: #232323;
  }

  &-all {
    font-family: Overpass;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #78258d;
    padding: 12px 16px;
    text-decoration: none;
    border: 1px solid #78258d;
    border-radius: 8px;
    transition: 0.3s all;

    &:hover {
      color: #fff;
      background-color: #78258d;
    }
  }
  .swiper-container {
    overflow: hidden;
  }
  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
  .swiper-slide {
    min-width: 450px;
  }

  &-slider-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;

    .border {
      width: 20px;
      height: 20px;
      min-width: 20px;
      min-height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px;
      background-color: transparent;
      border: 3px solid transparent;
      border-radius: 50%;
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        border: 3px solid transparent !important;

        svg circle {
          fill: #BC92C6 !important;
        }
      }

      &:hover {
        border: 3px solid #78258d;
      }

      svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      svg circle {
        fill: #78258d;
      }
    }
  }
}
</style>
