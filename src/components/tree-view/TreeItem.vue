<script lang="ts" setup>
import { ref, computed } from 'vue'

interface TreeNode {
  id: number
  label: string
  children?: TreeNode[]
}

const props = withDefaults(defineProps<{ model: TreeNode; isRoot?: boolean }>(), {
  isRoot: true
})

const isOpen = ref(true)
const isFolder = computed(() => {
  return props.model.children && props.model.children.length
})
</script>

<template>
  <li role="treeitem" aria-selected="false" :tabindex="props.isRoot ? 0 : -1">
    <div class="TreeView-nodeName">{{ props.model.label }}</div>
    <ul v-show="isOpen" v-if="isFolder" role="group" class="TreeView-subtree">
      <TreeItem v-for="model in model.children" :model="model" :is-root="false" />
    </ul>
  </li>
</template>
