<script lang="ts" setup>
import TNode from './TNode.vue'
import NodeGroup from './NodeGroup.vue'
import { TreeData } from './tree-structure'
import { MutableTreeState, TreeNodeState } from './tree-operations'
import { ref } from 'vue'
import { useTreeAllNode } from './tree-store'

interface Props {
  nodes: TreeData[]
  parentNode: TreeNodeState
  state: MutableTreeState
}
const props = withDefaults(defineProps<Props>(), {})

const globalTree = useTreeAllNode()

const currentNodes = ref<TreeNodeState[]>([])

const currentNode = (index: number): TreeNodeState => {
  const path = [...props.parentNode.path, index]
  const nodeData = props.nodes[index]
  const currentNode = new TreeNodeState(path)

  currentNode.id = nodeData.id
  currentNode.type = nodeData.children ? 'node' : 'leaf'
  currentNode.name = nodeData.label
  currentNode.parent = props.parentNode

  const previousNode = currentNodes.value[index - 1]
  if (previousNode) {
    previousNode.next = currentNode
    currentNode.previous = previousNode as TreeNodeState
  }

  currentNodes.value[index] = currentNode
  globalTree.addNode(currentNode)

  return currentNode
}
</script>

<template>
  <TNode
    v-for="(node, index) in nodes"
    :key="node.id"
    :node="currentNode(index)"
    :depth="parentNode.path.length + 1"
    :state="props.state"
  >
    <div>
      {{ node.label }}
    </div>
    <template v-if="node.children" #children>
      <NodeGroup>
        <RenderNodes
          :nodes="node.children"
          :parent-node="<TreeNodeState>currentNodes[index]"
          :state="props.state"
        />
      </NodeGroup>
    </template>
  </TNode>
</template>
