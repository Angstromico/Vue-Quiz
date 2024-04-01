<script setup lang="ts">
import { ref } from 'vue'
interface Props {
  questions: {
    q: string
    answers: {
      text: string
      is_correct: boolean
    }[]
  }[]
  count: number
}

const props = defineProps<Props>()
const { questions, count } = props
const emit = defineEmits(['question-answered', 'countered'])
const counter = ref(count)
const selectAnswer = (correct: boolean) => {
  emit('question-answered', correct)
  counter.value = counter.value + 1
  emit('countered', counter.value)
}
</script>

<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{ width: `${(counter / questions.length) * 100}%` }"
      ></div>
      <div class="status">
        {{ counter }} out of {{ questions.length }} questions answered
      </div>
    </div>
    <transition-group name="fade">
      <div
        class="single-question"
        v-for="(question, i) in questions"
        :key="question.q"
        v-show="counter === i"
      >
        <div class="question">{{ question.q }}</div>
        <div class="answers">
          <div
            class="answer"
            v-for="answer in question.answers"
            :key="answer.text"
            @click.prevent="selectAnswer(answer.is_correct)"
          >
            {{ answer.text }}
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>
