<script lang="ts" setup>
import { useTemplateRef } from 'vue'

const rootRef = useTemplateRef('root')

defineExpose({
  focus: () => {
    rootRef.value?.focus()
  }
})
</script>

<template>
  <ul role="tree" ref="root">
    <slot></slot>
  </ul>
</template>

<style scoped>
/**
 * reset
 */

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
