<template>
  <div class="full-course">
    <div class="container">
      <div class="full-course-wrapper">
        <div class="full-course-crumbs">
          <router-link class="crumb-link" to="/" exact-active-class="active"
            >Главная</router-link
          >
          <div class="full-course-crumbs__icon"></div>
          <router-link
            class="crumb-link"
            to="/about-course"
            exact-active-class="active"
            >Курсы</router-link
          >
        </div>
        <h2 class="full-course-title">Курсы</h2>
        <div class="full-course-languages">
          <button
            v-for="(text, idx) in buttons"
            :key="idx"
            :class="['language-btn', { show: selectedBtn === text }]"
            @click="selectLang(text)"
          >
            {{ text }}
          </button>
        </div>
        <div class="full-course-body">
          <div class="courses-wrapper">
            <course
              v-for="(l, idx) in courses"
              :key="idx"
              :img-url="l.imgUrl"
              :title="l.title"
              :duration="l.duration"
              :modules="l.modules"
              :price="l.price"
              :color="l.color"
            />
          </div>
          <div class="full-course-filter-wrapper">
            <div class="full-course-filters">
              <div class="filter-wrapper">
                <h6 class="filter-title">Уровень</h6>
                <label for="beginner">
                  <input type="checkbox" name="beginner" id="beginner" />
                  <span class="check-title">Начальный</span>
                </label>
                <label for="middle">
                  <input type="checkbox" name="middle" id="middle" />
                  <span class="check-title">Средний</span>
                </label>
                <label for="advanced">
                  <input type="checkbox" name="advanced" id="advanced" />
                  <span class="check-title">Высокий</span>
                </label>
              </div>
              <div class="filter-wrapper bottom">
                <h6 class="filter-title">Для каких целей</h6>
                <label for="school">
                  <input type="checkbox" name="school" id="school" />
                  <span class="check-title">Школа</span>
                </label>
                <label for="student">
                  <input type="checkbox" name="student" id="student" />
                  <span class="check-title">Студенты</span>
                </label>
                <label for="migrations">
                  <input type="checkbox" name="migrations" id="migrations" />
                  <span class="check-title">Эмигрантам</span>
                </label>
                <label for="talking">
                  <input type="checkbox" name="talking" id="talking" />
                  <span class="check-title">Общение</span>
                </label>
                <label for="businnes">
                  <input type="checkbox" name="businnes" id="businnes" />
                  <span class="check-title">Бизнес и работа</span>
                </label>
                <label for="travel">
                  <input type="checkbox" name="travel" id="travel" />
                  <span class="check-title">Путешествие</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Course from "../Course.vue";
export default {
  components: {
    Course,
  },
  data() {
    return {
      showAll: true,
      selectedBtn: "",
      buttons: ["Все", "Китайский", "Английский", "Немецкий", "Испанский"],
      courses: [
        {
          imgUrl: "german.svg",
          title: "Немецкий для начального уровня",
          duration: "Длительность: 45 часов",
          modules: "Модулей: 3",
          price: 6520,
          color: "#D5E9F6",
        },
        {
          imgUrl: "spain.svg",
          title: "Испанский для среднего уровня",
          duration: "Длительность: 45 часов",
          modules: "Модулей: 3",
          price: 6520,
          color: "#EFEFFF",
        },
        {
          imgUrl: "china.svg",
          title: "Китайский для среднего уровня",
          duration: "Длительность: 45 часов",
          modules: "Модулей: 3",
          price: 6520,
          color: "#FDEDE4",
        },
        {
          imgUrl: "german.svg",
          title: "Немецкий для начального уровня",
          duration: "Длительность: 45 часов",
          modules: "Модулей: 3",
          price: 6520,
          color: "#D5E9F6",
        },
        {
          imgUrl: "german.svg",
          title: "Немецкий для начального уровня",
          duration: "Длительность: 45 часов",
          modules: "Модулей: 3",
          price: 6520,
          color: "#D5E9F6",
        },
      ],
    };
  },
  methods: {
    selectLang(item) {
      this.selectedBtn = item;
    },
  },
};
</script>

<style lang="scss" scoped>
.full-course {
  padding-top: 130px;
  padding-bottom: 80px;
  &-wrapper {
    display: flex;
    flex-direction: column;
  }
  &-crumbs {
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
  &-body {
    display: flex;
  }

  &-title {
    font-weight: 900;
    font-size: 46px;
    line-height: 54px;
    color: #232323;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  &-languages {
    display: flex;
    align-items: center;

    button:not(:last-child) {
      margin-right: 15px;
    }
  }
  .language-btn {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #4f4f4f;
    padding: 5px 20px;
    background: #efefff;
    border-radius: 4px;
    border: 1px solid transparent;
    cursor: pointer;

    &.show {
      background: #78258d;
      color: #ffffff;
    }
  }
  .courses-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin-top: 30px;
    margin-right: 40px;
  }

  &-filter-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    flex: 1;
  }

  .filter-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    gap: 7px;
    box-shadow: 0px 4px 20px #f7f6fb;
    border-radius: 10px;

    &.bottom {
      margin-top: 30px;
    }

    .filter-title {
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      color: #000000;
      margin: 0;
      margin-bottom: 20px;
    }

    .check-title {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #333333;
      margin-left: 15px;
    }
  }
}
</style>
