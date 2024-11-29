<script lang="ts" setup>
import { ref, computed } from 'vue'

interface TreeNode {
  id: number
  label: string
  children?: TreeNode[]
}

interface Props {
  model: TreeNode
  isRoot?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isRoot: true
})

const isOpen = ref(true)
const isFolder = computed(() => {
  return props.model.children && props.model.children.length
})
</script>

<template>
  <li role="treeitem" aria-selected="false" :tabindex="props.isRoot ? 0 : -1" class="TreeView-node">
    <div class="TreeView-item">
      <div class="spacer"></div>
      <div class="toggle"></div>
      <div class="content">
        <div class="TreeView-nodeVisual"></div>
        <div class="TreeView-nodeName">{{ props.model.label }}</div>
      </div>
    </div>
    <ul v-show="isOpen" v-if="isFolder" role="group" class="TreeView-subtree">
      <TreeItem v-for="model in model.children" :model="model" :is-root="false" />
    </ul>
  </li>
</template>

<style scoped>
/**
 * focus ring
 *
 * @ref: https://yuheiy.com/2023-12-31-apply-default-focus-ring-styles
 */

.TreeView-node:focus-visible {
  outline: 0;
}
.TreeView-node:focus-visible > .TreeView-item {
  outline: auto;
  outline: auto -webkit-focus-ring-color; /* for Chrome */
}

/**
 * layout
 * 
 * @ref: https://ishadeed.com/article/tree-view-css-indent/
 */

.TreeView-item {
  --toggle-width: 1rem;
  --spacer-col: calc(calc(var(--level) - 1) * (var(--toggle-width) / 2));
  display: grid;
  grid-template-columns: var(--spacer-col) var(--toggle-width) 1fr;
  grid-template-areas: 'spacer toggle content';
}

.spacer {
  grid-area: spacer;
}

.toggle {
  grid-area: toggle;
}

.content {
  grid-area: content;
}
</style>
