<template>
  <div class="who-suits">
    <div class="container">
      <div class="who-suits-wrapper">
        <div class="who-suits-texts">
          <h2 class="who-suits-title">
            Кому подойдет <br />
            <span> L2GO</span>
          </h2>
          <p class="who-suits-subtitle">
            <b>Language to go </b>подойдет всем, кто хочет за короткий срок
            качественно изменить свою жизнь, освоив иностранный язык.
          </p>
          <button class="who-suits-btn">Попробовать бесплатно</button>
        </div>
        <div class="who-suits-info">
          <who-suit-card
            v-for="(c, idx) in suits"
            :key="idx"
            :img-url="c.imgUrl"
            :title="c.title"
            :text="c.text"
            :color="c.color"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WhoSuitCard from "./WhoSuitCard.vue";
export default {
  components: {
    WhoSuitCard,
  },
  data() {
    return {
      suits: [
        {
          imgUrl: "presentation.svg",
          title: "Школьникам",
          text: "Сдать выпускные экзамены или поступить в ВУЗ.",
          color: "rgba(120, 37, 141, .5)",
        },
        {
          imgUrl: "location.svg",
          title: "Эмигрантам",
          text: "Адаптироваться в новой стране, создать конкурентное преимущество и трудоустроиться",
          color: "rgba(255, 184, 0, 0.5)",
        },
        {
          imgUrl: "bag.svg",
          title: "Бизнесменам",
          text: "Завести полезные знакомства среди иностранцев и масштабировать бизнес",
          color: "rgba(46, 144, 209, 0.5)",
        },
        {
          imgUrl: "students.svg",
          title: "Студентам",
          text: "Переехать на обучение в другую страну или найти высокооплачеваемую работу",
          color: "rgba(46, 144, 209, 0.5)",
        },
        {
          imgUrl: "message.svg",
          title: "Общительным",
          text: "Создать счастливую семью с иностранцем и интегрироваться в новое общество",
          color: "rgba(228, 33, 37, 0.5)",
        },
        {
          imgUrl: "ship.svg",
          title: "Путешественникам",
          text: "Свободно общаться и находить новых друзей, решать бытовые вопросы и спорные ситуации",
          color: "rgba(120, 37, 141, .5)",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.who-suits {
  padding: 50px 0;
  background-image: url("../assets/images/l2go-bg.png");
  background-repeat: no-repeat;
  background-position-x: -15%;
  background-position-y: 30%;
  &-wrapper {
    display: flex;
    align-items: stretch;
  }
  &-texts {
    display: flex;
    flex-direction: column;
    margin-right: 80px;
  }
  &-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  &-title {
    font-family: Overpass;
    font-style: normal;
    font-weight: 900;
    font-size: 46px;
    line-height: 113%;
    color: #232323;
    margin: 0;

    span {
      color: rgb(47, 145, 210);
    }
  }
  &-subtitle {
    font-family: Overpass;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    background: linear-gradient(135deg, #2e90d1 0%, #78258d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-top: 27px;
    margin-bottom: 40px;
  }
  &-btn {
    width: 70%;
    font-family: Overpass;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    padding: 18px 28px;
    background: #78258d;
    border: 1px solid #78258d;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
      background-color: #ffffff;
      color: #78258d;
    }
  }
}
</style>
