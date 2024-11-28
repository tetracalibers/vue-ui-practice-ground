<script lang="ts" setup>
import { ref, computed } from 'vue'

interface TreeNode {
  id: number
  label: string
  children?: TreeNode[]
}

const props = defineProps<{ model: TreeNode }>()

const isOpen = ref(false)
const isFolder = computed(() => {
  return props.model.children && props.model.children.length
})
</script>

<template>
  <li role="treeitem" aria-selected="false" tabindex="-1">
    {{ props.model.label }}
    <ul v-show="isOpen" v-if="isFolder" role="group">
      <TreeItem v-for="model in model.children" :model="model" />
    </ul>
  </li>
</template>
