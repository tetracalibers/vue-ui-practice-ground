<script setup>
import TaskList from './TaskList.vue'

// Propsの定義
const props = defineProps({
  error: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div>
    <!-- エラーが発生した場合の表示 -->
    <div v-if="error" class="page lists-show">
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <p class="title-message">Oh no!</p>
        <p class="subtitle-message">Something went wrong</p>
      </div>
    </div>

    <!-- エラーがない場合の表示 -->
    <div v-else class="page lists-show">
      <nav>
        <h1 class="title-page">Taskbox</h1>
      </nav>
      <TaskList />
    </div>
  </div>
</template>
