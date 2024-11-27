<script setup>
import { computed } from 'vue'
import PureInboxScreen from './PureInboxScreen.vue'
import { useTaskStore } from './TaskList-store'

// ストアのインスタンスを作成
const store = useTaskStore()

// ストアの状態からエラー状態を取得
const isError = computed(() => store.status === 'error')
</script>

<template>
  <PureInboxScreen :error="isError" />
</template>
