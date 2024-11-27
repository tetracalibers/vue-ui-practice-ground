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

// isEmptyの計算プロパティ
const isEmpty = computed(() => props.tasks.length === 0)

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
    <template v-if="loading"> loading </template>
    <template v-else-if="isEmpty"> empty </template>
    <template v-else>
      <Task
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @archive-task="onArchiveTask"
        @pin-task="onPinTask"
      />
    </template>
  </div>
</template>
