<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue'
import RootNode from './RootNode.vue'
import RenderNodes from './RenderNodes.vue'
import { TreeData } from './tree-structure'
import { MutableTreeState, TreeNodeState } from './tree-operations'

interface Props {
  root: TreeData[]
}
const props = withDefaults(defineProps<Props>(), {})

const rootNode = new TreeNodeState([])
const state = ref<MutableTreeState>({ selected: [], expanded: [], focusable: [0] })

const rootRef = useTemplateRef('root')

defineExpose({
  focus: () => {
    rootRef.value?.focus()
  }
})
</script>

<template>
  <RootNode v-bind="$attrs" ref="root">
    <RenderNodes :nodes="props.root" :parent-node="rootNode" :state="<MutableTreeState>state" />
  </RootNode>
</template>
