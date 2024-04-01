<script setup lang="ts">
import { ref } from 'vue'
import Questions from '@/components/Questions.vue'
import Result from '@/components/Result.vue'
import questionAnswers from '@/api/data'

const questions = questionAnswers.questions
const results = questionAnswers.results

const count = ref(0)
const rightAnswers = ref(0)
const questionAnswered = (correct: boolean) => {
  if (correct) {
    rightAnswers.value = rightAnswers.value + 1
  }
}
const increaseCount = (counter: number) => {
  count.value = counter
}
const resetQuiz = () => {
  count.value = 0
  rightAnswers.value = 0
}
</script>

<template>
  <div class="ctr">
    <Questions
      v-if="count < questions.length"
      :questions="questions"
      :count="count"
      @question-answered="questionAnswered"
      @countered="increaseCount"
    />
    <Result v-else :rightAnswers="rightAnswers" :results="results" />
    <button
      @click.prevent="resetQuiz"
      type="button"
      class="reset-btn"
      v-if="count === questions.length"
    >
      Reset
    </button>
  </div>
</template>
