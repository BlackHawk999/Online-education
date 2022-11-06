<template>
  <div class="answer-question">
    <div class="container">
      <div class="answer-question-wrapper">
        <div class="answer-question-body">
          <h2 class="answer-question-title">Отвечаем на частые вопросы</h2>
          <button class="answer-question-btn">Задать вопрос</button>
          <div class="answer-question-img">
            <img src="@/assets/images/question-img.png" alt="" />
          </div>
        </div>
        <div class="answer-question-main">
          <question
            v-for="(ans, idx) in questions"
            :key="idx"
            :question="ans.question"
            :answer="ans.answer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Question from "@/components/Question.vue";
export default {
  components: {
    Question,
  },
  data() {
    return {
      questions: [
        {
          question: "Как проходит обучение на онлайн-курсах?",
          answer:
            "Обучение проходит в формате видео-лекций на нашей интерактивной платформе. После приобретения курса, вы сразу же получаете письмо на почту с доступом в личный кабинет, в котором уже открыты все уроки приобретенного курса. Каждый урок состоит из видео-лекции по теме и нескольких десятков интерактивных заданий на отработку материала.",
        },
        {
          question:
            "Я покупаю пакет уроков или онлайн-курс, сколько он действует?",
          answer:
            "Обучение проходит в формате видео-лекций на нашей интерактивной платформе. После приобретения курса, вы сразу же получаете письмо на почту с доступом в личный кабинет, в котором уже открыты все уроки приобретенного курса. Каждый урок состоит из видео-лекции по теме и нескольких десятков интерактивных заданий на отработку материала.",
        },
        {
          question: "Как быстро я достигну результатов?",
          answer:
            "Обучение проходит в формате видео-лекций на нашей интерактивной платформе. После приобретения курса, вы сразу же получаете письмо на почту с доступом в личный кабинет, в котором уже открыты все уроки приобретенного курса. Каждый урок состоит из видео-лекции по теме и нескольких десятков интерактивных заданий на отработку материала.",
        },
        {
          question: "Когда я могу начать обучение?",
          answer:
            "Обучение проходит в формате видео-лекций на нашей интерактивной платформе. После приобретения курса, вы сразу же получаете письмо на почту с доступом в личный кабинет, в котором уже открыты все уроки приобретенного курса. Каждый урок состоит из видео-лекции по теме и нескольких десятков интерактивных заданий на отработку материала.",
        },
        {
          question: "Как проходит обучение на индивидуальных занятиях?",
          answer:
            "Обучение проходит в формате видео-лекций на нашей интерактивной платформе. После приобретения курса, вы сразу же получаете письмо на почту с доступом в личный кабинет, в котором уже открыты все уроки приобретенного курса. Каждый урок состоит из видео-лекции по теме и нескольких десятков интерактивных заданий на отработку материала.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.answer-question {
  padding: 50px 0;
  &-wrapper {
    display: flex;
    align-items: stretch;
  }

  &-body {
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-right: 37px;
  }

  &-title {
    font-weight: 900;
    font-size: 46px;
    line-height: 113%;
    color: #232323;
    margin-bottom: 30px;
  }

  &-btn {
    width: fit-content;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    padding: 18px 28px;
    background: #78258d;
    border-radius: 8px;
    border: 1px solid #78258d;
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
      color: #78258d;
      background-color: #ffffff;
    }
  }

  &-img {
    margin-top: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &-main {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 70%;
  }
}
</style>
