<script lang="ts" setup>
import { ref, computed, useTemplateRef, ComponentPublicInstance } from 'vue'
import { Icon } from '@iconify/vue'

interface TreeNode {
  id: number
  label: string
  children?: TreeNode[]
}

interface Props {
  node: TreeNode
  depth?: number
  selectedId: number | null
  focusableId: number
  parent?: HTMLLIElement | null
}

interface Emits {
  (e: 'select', id: number): void
  (e: 'moveFocusable', id: number): void
}

const ROOT_DEPTH = 0

const props = withDefaults(defineProps<Props>(), {
  depth: ROOT_DEPTH,
  parent: null
})
const emits = defineEmits<Emits>()

const isOpen = ref(false)
const isFolder = computed(() => {
  return props.node.children && props.node.children.length
})

const firstChildRef = ref()
const setFirstChildRef = (el: Element | ComponentPublicInstance, index: number) => {
  if (index !== 0) return
  firstChildRef.value = el
}
const localRootRef = useTemplateRef<HTMLLIElement>('local-root')
defineExpose({ localRootRef })

const toggle = () => {
  isOpen.value = !isOpen.value
}

const handleClick = () => {
  if (isFolder) toggle()
  emits('select', props.node.id)
}

const handleArrowRight = () => {
  // 子を持たないノードにフォーカスがある場合：何もしない
  if (!isFolder.value) return

  // 子を持つノードにフォーカスがある
  if (isOpen.value) {
    // 子が展開されている場合：子の最初のノードにフォーカスを移動する
    firstChildRef.value?.localRootRef.focus()
    emits('moveFocusable', props.node.children[0].id)
  } else {
    // 子が展開されていない場合：子のツリーを展開する（フォーカスは移動しない）
    isOpen.value = true
  }
}

const handleArrowLeft = () => {
  if (isFolder.value) {
    // 子を持つノードにフォーカスがある
    if (isOpen.value) {
      // 子が展開されている場合：子のツリーを折りたたむ（フォーカスは移動しない）
      isOpen.value = false
    } else {
      // 子が展開されていない場合：親のノードにフォーカスを移動する
      props.parent?.focus()
    }
  } else {
    // 子を持たないノードにフォーカスがある
    if (props.parent) {
      // 親を持つ場合：親のノードにフォーカスを移動する
      props.parent.focus()
    } else {
      // 親を持たない場合：何もしない
    }
  }
}
</script>

<template>
  <li
    ref="local-root"
    role="treeitem"
    :aria-selected="props.selectedId === props.node.id"
    :aria-expanded="isFolder ? isOpen : null"
    :tabindex="focusableId === props.node.id ? 0 : -1"
    class="TreeView-node"
    @click.stop="handleClick"
    @keydown.stop.right="handleArrowRight"
    @keydown.stop.left="handleArrowLeft"
  >
    <div class="TreeView-item" :style="{ '--depth': props.depth }">
      <div class="spacer"></div>
      <div class="toggle"></div>
      <div class="content">
        <div class="TreeView-nodeVisual">
          <Icon v-if="isOpen && isFolder" icon="clarity:folder-open-line" />
          <Icon v-else-if="isFolder" icon="clarity:folder-line" />
          <Icon v-else icon="clarity:file-line" />
        </div>
        <div class="TreeView-nodeName">{{ props.node.label }}</div>
      </div>
    </div>
    <ul v-show="isOpen" v-if="isFolder" role="group" class="TreeView-subtree">
      <TreeItem
        v-for="(node, index) in node.children"
        :ref="(el) => setFirstChildRef(el, index)"
        :parent="localRootRef"
        :node="node"
        :depth="props.depth + 1"
        :is-first-child="index === 0"
        :focusable-id="props.focusableId"
        :selected-id="props.selectedId"
        @select="($id) => emits('select', $id)"
        @move-focusable="($id) => emits('moveFocusable', $id)"
      />
    </ul>
  </li>
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
  --toggle-width: 1em;
  --spacer-col: calc(var(--depth) * (var(--toggle-width) / 2));
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

/**
 * icon layout
 */

.content {
  display: flex;
  align-items: center;
}

.TreeView-nodeVisual {
  display: inline-flex; /** for align-items: center; */
}

/**
 * other styles
 */

.TreeView-node[aria-selected='true'] > .TreeView-item {
  background-color: lightblue;
}
</style>
