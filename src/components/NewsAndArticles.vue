<template>
  <div class="news-articles">
    <div class="container">
      <div class="news-articles-wrapper">
        <div class="news-articles-head">
          <h2 class="news-articles-title">Полезные новости и статьи</h2>
          <button class="news-articles-btn">Все новости</button>
        </div>
        <div class="news-articles-body">
          <news-card
            v-for="(card, idx) in cardItems"
            :key="idx"
            :title="card.title"
            :date="card.date"
            :text="card.text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "../components/NewsCard.vue";
export default {
  components: {
    NewsCard,
  },
  data() {
    return {
      cardItems: [
        {
          title:
            "Новая система скидок в Language2GO: успейте забрать максимум!",
          date: this.getDate(),
          text: "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения. ",
        },
        {
          title:
            "“Интерактивная платформа: как это работает?” Отвечает основатель проекта...",
          date: this.getDate(),
          text: "Моя команда — профессиональные филологи и педагоги-носители языка, преподаватели зарубежных университетов, которые ...",
        },
        {
          title:
            "Новое слово в изучении иностранных языков: интерактивная платформа ...",
          date: this.getDate(),
          text: "Для многих стоимость изучения иностранного языка является важным критерием при выборе системы обучения. ",
        },
      ],
    };
  },
  methods: {
    getDate() {
      let dateObj = new Date();
      let month = dateObj.getUTCMonth() + 1;
      let day = dateObj.getUTCDate();
      let year = dateObj.getUTCFullYear();
      let newdate = year + "/" + month + "/" + day;
      return  newdate;
    },
  },
};
</script>

<style lang="scss" scoped>
.news-articles {
  padding: 50px 0;
  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-title {
    font-weight: 900;
    font-size: 46px;
    line-height: 54px;
    color: #232323;
  }
  &-btn {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #78258d;
    padding: 12px 16px;
    background-color: #fff;
    border: 1px solid #78258d;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
      color: #fff;
      background-color: #78258d;
    }
  }
  &-body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 40px;
  }
}
</style>
