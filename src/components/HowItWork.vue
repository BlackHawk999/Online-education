<template>
  <div class="how-it-work">
    <div class="container">
      <div class="how-it-work-wrapper">
        <h2 class="how-it-work-title">Как это работает?</h2>
        <div class="how-it-work-body">
          <how-it-work-card
            v-for="(card, idx) in cardItems"
            :key="idx"
            :number="card.number"
            :color="card.color"
            :title="card.title"
            :text="card.text"
            :img-url="card.imgUrl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HowItWorkCard from "@/components/HowItWorkCard.vue";
export default {
  components: {
    HowItWorkCard,
  },
  data() {
    return {
      cardItems: [
        {
          number: 1,
          color: "#2E90D1",
          title: "Регистрация",
          text: "Выбирайте интересующий язык и регистрируйтесь.",
          imgUrl: "how-it-work-img.png",
        },
        {
          number: 2,
          color: "#78258D",
          title: "Регистрация",
          text: "Выбирайте интересующий язык и регистрируйтесь.",
          imgUrl: "how-it-work-img.png",
        },
        {
          number: 3,
          color: "#E42125",
          title: "Обучение",
          text: "Всё! Приступайте к первому бесплатному  уроку.",
          imgUrl: "how-it-work-img.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.how-it-work {
  padding: 50px 0;
  &-wrapper {
    display: flex;
    flex-direction: column;
  }
  &-title {
    font-family: Overpass;
    font-weight: 900;
    font-size: 46px;
    line-height: 54px;
    text-align: center;
    color: #232323;
    margin-bottom: 60px;
  }
  &-body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 40px;
  }
}
</style>
