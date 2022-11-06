<template>
  <div class="home">
    <intro />
    <foreign-courses />
    <SuitCourse />
    <learn-fast />
    <effective-method />
    <how-it-work />
    <feedbacks />
    <registr />
    <news-and-articles />
    <answer-questions />
  </div>
</template>

<script>
import Registr from "../components/Registr.vue";
import HowItWork from "../components/HowItWork.vue";
import EffectiveMethod from "../components/EffectiveMethod.vue";
import ForeignCourses from "../components/ForeignCourses.vue";
import Intro from "../components/Intro.vue";
import LearnFast from "../components/LearnFast.vue";
import SuitCourse from "../components/SuitCourse.vue";
import Feedbacks from "../components/Feedbacks.vue";
import NewsAndArticles from "../components/NewsAndArticles.vue";
import AnswerQuestions from "../components/AnswerQuestions.vue";

export default {
  components: {
    Intro,
    ForeignCourses,
    SuitCourse,
    LearnFast,
    EffectiveMethod,
    HowItWork,
    Feedbacks,
    Registr,
    NewsAndArticles,
    AnswerQuestions,
  },
  name: "Home",
};
</script>
