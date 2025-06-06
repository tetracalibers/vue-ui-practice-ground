<script lang="ts" setup>
import { computed, ref, toRef, useTemplateRef, watch } from 'vue'
import { MutableTreeState, Path, TreeNodeState } from './tree-operations'
import { Icon } from '@iconify/vue'
import { isNode } from './tree-utils'
import {
  handleArrowDown,
  handleArrowLeft,
  handleArrowRight,
  handleArrowUp,
  handleAsterisk,
  handleCharKey,
  handleEnd,
  handleEnter,
  handleHome,
  handleSpace,
  isCharKey
} from './tree-handlers'
import { useTreeAllNode } from './tree-store'

interface Props {
  node: TreeNodeState
  depth: number
  state: MutableTreeState
}
const props = withDefaults(defineProps<Props>(), {})
const tree = toRef(props, 'state')

const globalTree = useTreeAllNode()

const selectedPath = computed(() => {
  const selected = props.state.selected
  return Array.isArray(selected) ? selected : selected.path
})

const isFolder = computed(() => props.node.type === 'node')
const isFocusable = computed(() => Path.equal(tree.value.focusable, props.node.path))
const isExpanded = ref(props.state.expanded.some((path) => Path.equal(path, props.node.path)))
const isSelected = ref(Path.equal(selectedPath.value, props.node.path))
const isSelectedIn = ref(props.node.selectedin())

const listItemRef = useTemplateRef('list-item')

const removePath = <T extends Path>(collection: T[], item: T) => {
  return collection.filter((path) => !Path.equal(item, path))
}

watch(
  () => props.node,
  (node) => {
    node
      .on('selectin', () => {
        isSelectedIn.value = true
      })
      .on('selectout', () => {
        isSelectedIn.value = false
      })
      .on('select', () => {
        if (!Array.isArray(props.state.selected)) {
          props.state.selected.deselect()
        }
        if ((isNode(node.type) && !node.expanded()) || !isNode(node.type)) {
          node.parent?.selectin()
        }
        tree.value.selected = node
        tree.value.focusable = node.path
        listItemRef.value?.focus()
        isSelected.value = true
      })
      .on('deselect', () => {
        node.parent?.selectout()
        isSelected.value = false
      })
      .on('focus', () => {
        tree.value.focusable = node.path
        listItemRef.value?.focus()
      })
      .on('expand', () => {
        tree.value.expanded = removePath(tree.value.expanded, node.path).concat([node.path])
        if (isNode(node.type) && node.parent?.selectedin()) {
          node.parent.selectout()
        }
        isExpanded.value = true
      })
      .on('collapse', () => {
        tree.value.expanded = removePath(tree.value.expanded, node.path)
        node.children.clear()
        if (!node.parent?.selectedin()) {
          node.parent?.selectin()
        }
        isExpanded.value = false
      })

    const indexOfNodeInParentStack = Path.end(node.path)

    if (indexOfNodeInParentStack) {
      node.parent!.children.remove(indexOfNodeInParentStack)
    }

    node.parent!.children.add(node)
  },
  { immediate: true }
)

const toggle = () => {
  if (props.node.expanded()) {
    props.node.collapse()
  } else {
    props.node.expand()
  }
}

const onClick = () => {
  props.node.select()

  if (isFolder.value) {
    toggle()
  } else {
    props.node.expand()
  }
}

const onArrowRight = () => handleArrowRight(props.node)
const onArrowLeft = () => handleArrowLeft(props.node)
const onArrowUp = () => handleArrowUp(props.node)
const onArrowDown = () => handleArrowDown(props.node)
const onHome = () => handleHome(props.node)
const onEnd = () => handleEnd(props.node)
const onEnter = () => handleEnter(props.node)
const onSpace = () => handleSpace(props.node)
const onOtherKey = (e: KeyboardEvent) => {
  if (e.key === '*') {
    handleAsterisk(props.node)
    return
  }
  if (isCharKey(e)) {
    handleCharKey(props.node, globalTree.allNodes as Map<number, TreeNodeState>, e.key)
    return
  }
}
</script>

<template>
  <li
    ref="list-item"
    role="treeitem"
    :aria-selected="isSelected"
    :aria-expanded="isExpanded"
    :tabindex="isFocusable ? 0 : -1"
    class="TreeView-node"
    @click.stop="onClick"
    @keydown.stop.right="onArrowRight"
    @keydown.stop.left="onArrowLeft"
    @keydown.stop.up="onArrowUp"
    @keydown.stop.down="onArrowDown"
    @keydown.stop.home="onHome"
    @keydown.stop.end="onEnd"
    @keydown.stop.enter="onEnter"
    @keydown.stop.space="onSpace"
    @keydown.stop="onOtherKey"
  >
    <div class="TreeView-item" :style="{ '--depth': props.depth }">
      <div class="spacer"></div>
      <div class="toggle"></div>
      <div class="content">
        <div class="TreeView-nodeVisual">
          <Icon v-if="isFolder && isExpanded" icon="clarity:folder-open-line" />
          <Icon v-else-if="isFolder" icon="clarity:folder-line" />
          <Icon v-else icon="clarity:file-line" />
        </div>
        <div class="TreeView-nodeName"><slot></slot></div>
      </div>
    </div>
    <slot v-if="isExpanded" name="children"></slot>
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
