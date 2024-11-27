<script setup>
import { computed } from 'vue'
import Task from './Task.vue'

// Propsの定義
const props = defineProps({
  tasks: {
    type: Array,
    required: true,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
})

// Emitsの定義
const emit = defineEmits(['archive-task', 'pin-task'])

// タスクが空かどうかを判定する計算プロパティ
const isEmpty = computed(() => props.tasks.length === 0)

// タスクを並べ替える計算プロパティ
const tasksInOrder = computed(() => {
  return [
    ...props.tasks.filter((task) => task.state === 'TASK_PINNED'),
    ...props.tasks.filter((task) => task.state !== 'TASK_PINNED')
  ]
})

// タスクをアーカイブする関数
const onArchiveTask = (taskId) => {
  emit('archive-task', taskId)
}

// タスクをピン留めする関数
const onPinTask = (taskId) => {
  emit('pin-task', taskId)
}
</script>

<template>
  <div class="list-items">
    <!-- ローディング状態 -->
    <template v-if="loading">
      <div v-for="n in 6" :key="n" class="loading-item">
        <span class="glow-checkbox" />
        <span class="glow-text"> <span>Loading</span> <span>cool</span> <span>state</span> </span>
      </div>
    </template>

    <!-- タスクが空の場合 -->
    <div v-else-if="isEmpty" class="list-items">
      <div class="wrapper-message">
        <span class="icon-check" />
        <p class="title-message">You have no tasks</p>
        <p class="subtitle-message">Sit back and relax</p>
      </div>
    </div>

    <!-- タスク一覧 -->
    <template v-else>
      <Task
        v-for="task in tasksInOrder"
        :key="task.id"
        :task="task"
        @archive-task="onArchiveTask"
        @pin-task="onPinTask"
      />
    </template>
  </div>
</template>
