<script setup>
import { computed } from 'vue'
import PureTaskList from './PureTaskList.vue'
import { useTaskStore } from './TaskList-store'

// ストアのインスタンスを作成
const store = useTaskStore()

// ストアからフィルタリングされたタスクを取得
const tasks = computed(() => store.getFilteredTasks)

// タスクをアーカイブする関数
const archiveTask = (task) => {
  store.archiveTask(task)
}

// タスクをピン留めする関数
const pinTask = (task) => {
  store.pinTask(task)
}
</script>

<template>
  <PureTaskList :tasks="tasks" @archive-task="archiveTask" @pin-task="pinTask" />
</template>
