<template>
  <div class="feedbacks">
    <div class="container">
      <div class="feedbacks-wrapper">
        <div class="feedbacks-head">
          <h2 class="feedbacks-title">
            Что говорят о нас <br />
            ученики?
          </h2>
          <button class="feedbacks-btn">Все отзывы</button>
        </div>
        <div class="feedbacks-body-wrapper">
          <div class="feedbacks-img">
            <img src="@/assets/images/our-students.png" alt="" />
          </div>
          <div class="feedbacks-body">
            <div class="swiper-container" ref="feedbacks-slider">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in 10" :key="item">
                  <feedback
                    v-for="(f, idx) in feedbacks"
                    :key="idx"
                    :name="f.name"
                    :kind="f.kind"
                    :rating="f.rating"
                    :feedback="f.feedback"
                  />
                </div>
              </div>
            </div>
            <div class="feedbacks-slider-btn">
              <button
                ref="prev-button"
                :class="[{ add: active === true }, 'border']"
                @click="active = true"
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
                :class="[{ add: active === false }, 'border']"
                @click="active = false"
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
  </div>
</template>

<script>
import Feedback from "@/components/Feedback.vue";
import { Swiper, Navigation } from "swiper";
Swiper.use([Navigation]);
export default {
  components: {
    Feedback,
  },
  data() {
    return {
      feedbacksSlider: null,
      active: false,
      feedbacks: [
        {
          name: "Артем М",
          kind: "Студент",
          rating: 4.7,
          feedback:
            "Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю. ",
        },
        {
          name: "Катья Е",
          kind: "Студент",
          rating: 4.1,
          feedback:
            "Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю. ",
        },
        {
          name: "Гусейн М",
          kind: "Эмигрант",
          rating: 2.7,
          feedback:
            "Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю. ",
        },
        {
          name: "Настя М",
          kind: "Студент",
          rating: 4.5,
          feedback:
            "Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю. ",
        },
        {
          name: "Валодия М",
          kind: "Студент",
          rating: 3.7,
          feedback:
            "Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю. ",
        },
        {
          name: "Кузмин М",
          kind: "Эмигрант",
          rating: 5,
          feedback:
            "Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю. ",
        },
        {
          name: "Ярославь М",
          kind: "Студент",
          rating: 4,
          feedback:
            "Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю. ",
        },
        {
          name: "Владимир А",
          kind: "Бизнесмен",
          rating: 4.7,
          feedback:
            "Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю. ",
        },
        {
          name: "Артем М",
          kind: "Студент",
          rating: 4.7,
          feedback:
            "Занятия курса очень понравились, в основном благодаря необычной системе — я человек настроения и не могу подстраиваться под график индивидуального репетитора или тем более целой группы. Иногда занимался несколько часов подряд — настолько легко и интересно организована подача материала, а один раз по болезни пропустил целую неделю. ",
        },
      ],
    };
  },
  mounted() {
    this.feedbacksSlider = new Swiper(this.$refs["feedbacks-slider"], {
      slidesPerView: "auto",
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
    if (this.feedbacksSlider) {
      this.feedbacksSlider.destroy();
    }
  },
};
</script>

<style lang="scss" scoped>
.feedbacks {
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
  &-body-wrapper {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  &-title {
    font-weight: 900;
    font-size: 46px;
    line-height: 113%;
    color: #232323;
  }
  &-btn {
    padding: 12px 16px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #78258d;
    background: transparent;
    border: 1px solid #78258d;
    border-radius: 8px;
    transition: 0.3s all;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #78258d;
    }
  }
  &-body {
    display: flex;
    flex-direction: column;
    width: 60%;
  }
  .swiper-container {
    width: 100%;
    overflow: hidden;
  }
  .swiper-wrapper {
    width: 50%;
    display: flex;
    align-items: flex-start;
  }
  .swiper-slide {
    width: auto;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  &-slider-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin-top: 60px;
      background-color: transparent;
      border: none;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      &.border.add {
        padding: 5px;
        border: 3px solid #78258d;
        border-radius: 50%;

        svg path {
          fill: #78258d !important;
        }
      }
    }
  }
}
</style>
