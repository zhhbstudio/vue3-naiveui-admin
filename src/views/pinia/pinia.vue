<template>
  This value is from pinia: {{ counter.count }}

  <n-button
    attr-type="button"
    @click="adjective"
  >
    直接加
  </n-button>
  <n-button
    attr-type="button"
    @click="autocompletion"
  >
    patch
  </n-button>
  <n-button
    attr-type="button"
    @click="byAction"
  >
    action
  </n-button>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

function adjective(){
counter.count++
}

// with autocompletion
function autocompletion(){
counter.$patch({ count: counter.count + 1 })
}

// or using an action instead
function byAction(){
counter.increment()
}

</script>

<style scoped>

</style>