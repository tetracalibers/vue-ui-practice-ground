import { defineStore } from 'pinia'
import { ref } from 'vue'
import { TreeNodeState } from './tree-operations'

export const useTreeAllNode = defineStore('tree-all-nodes', () => {
  const allNodes = ref<Map<number, TreeNodeState>>(new Map())

  const addNode = (node: TreeNodeState): void => {
    allNodes.value.set(node.id, node)
  }

  return { allNodes, addNode }
})
