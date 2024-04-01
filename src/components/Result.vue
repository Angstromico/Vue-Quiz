<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  rightAnswers: number
  results: {
    min: number
    max: number
    title: string
    desc: string
  }[]
}

const props = defineProps<Props>()

const resultIndex = computed(() => {
  let index = 0
  props.results.forEach((result, i) => {
    if (result.min <= props.rightAnswers && result.max >= props.rightAnswers) {
      index = i
    }
  })
  return index
})
/* const resultMessage = () => {
  if (props.rightAnswers <= 1) {
    return 'Sorry, reset and try again'
  }
  if (props.rightAnswers <= 2) {
    return 'Wow, you have most of the right answers'
  }
  if (props.rightAnswers <= 3) {
    return 'Wow, you are a genius'
  }
} */
</script>

<template>
  <div class="result">
    <div class="title">{{ results[resultIndex].title }}</div>
    <div class="desc">{{ results[resultIndex].desc }}</div>
  </div>
</template>
