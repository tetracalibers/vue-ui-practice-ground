<script setup>
import { computed } from 'vue'

// 定義するprops
const props = defineProps({
  task: {
    type: Object,
    required: true,
    default: () => ({ id: '', state: '', title: '' }),
    validator: (task) => ['id', 'state', 'title'].every((key) => key in task)
  }
})

// 定義するemits
const emit = defineEmits(['archive-task', 'pin-task'])

// クラスの動的割り当て
const classes = computed(() => ({
  'list-item TASK_INBOX': props.task.state === 'TASK_INBOX',
  'list-item TASK_PINNED': props.task.state === 'TASK_PINNED',
  'list-item TASK_ARCHIVED': props.task.state === 'TASK_ARCHIVED'
}))

// チェック状態の計算プロパティ
const isChecked = computed(() => props.task.state === 'TASK_ARCHIVED')

// タスクをアーカイブする関数
const archiveTask = () => {
  emit('archive-task', props.task.id)
}

// タスクをピン留めする関数
const pinTask = () => {
  emit('pin-task', props.task.id)
}
</script>

<template>
  <div :class="classes">
    <label :for="'checked' + task.id" :aria-label="'archiveTask-' + task.id" class="checkbox">
      <input
        type="checkbox"
        :checked="isChecked"
        disabled
        :name="'checked' + task.id"
        :id="'archiveTask-' + task.id"
      />
      <span class="checkbox-custom" @click="archiveTask" />
    </label>
    <label :for="'title-' + task.id" :aria-label="task.title" class="title">
      <input
        type="text"
        readonly
        :value="task.title"
        :id="'title-' + task.id"
        name="title"
        placeholder="Input title"
      />
    </label>
    <button
      v-if="!isChecked"
      class="pin-button"
      @click="pinTask"
      :id="'pinTask-' + task.id"
      :aria-label="'pinTask-' + task.id"
    >
      <span class="icon-star" />
    </button>
  </div>
</template>
