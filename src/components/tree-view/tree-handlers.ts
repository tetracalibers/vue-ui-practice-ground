import { TreeNodeState } from './tree-operations'
import { isNode } from './tree-utils'

const getRootNode = (node: TreeNodeState): TreeNodeState => {
  return node.hasParent() ? getRootNode(node.parent!) : node
}

const getStartNode = (node: TreeNodeState): TreeNodeState => {
  return getRootNode(node).children.first()!
}

const getEndNode = (node: TreeNodeState): TreeNodeState => {
  const root = getRootNode(node)
  const getLastNode = (node: TreeNodeState): TreeNodeState => {
    return node.hasNext()
      ? getLastNode(node.next!)
      : node.hasChildren()
        ? getLastNode(node.children.last()!)
        : node
  }
  return getLastNode(root.children.last()!)
}

const getLeftBaseNode = (node: TreeNodeState): TreeNodeState => {
  const getBaseNode = (node: TreeNodeState): TreeNodeState => {
    if (isNode(node.type) && node.expanded()) {
      return node.hasChildren() ? getBaseNode(node.children.last()!) : node
    }
    return node
  }

  if (node.hasPrevious()) {
    return getBaseNode(node.previous!)
  }
  return node.hasParent() ? node.parent! : node
}

const getRightPowerNode = (node: TreeNodeState): TreeNodeState => {
  const getPowerNode = (node: TreeNodeState): TreeNodeState => {
    if (!node.hasNext()) {
      return node.hasParent() ? getPowerNode(node.parent!) : node
    }
    return node.next!
  }

  if (isNode(node.type) && node.expanded()) {
    return node.hasChildren() ? node.children.first()! : node
  }
  return getPowerNode(node)
}

const expandAdjacentNodes = (node: TreeNodeState, prev = node.previous, next = node.next): void => {
  ;[node, prev, next].forEach((n) => {
    if (isNode(n?.type) && !n?.expanded()) n?.expand()
  })
  return !prev?.hasPrevious() && !next?.hasNext()
    ? undefined
    : expandAdjacentNodes(node, prev?.previous, next?.next)
}

export const handleArrowRight = (node: TreeNodeState) => {
  const selectChild = () => {
    node.deselect()
    node.children.first()!.select()
  }

  if (isNode(node.type)) {
    // 展開されていない場合：ツリーを展開する
    if (!node.expanded()) {
      node.expand()
      return
    }

    // 展開されている場合：子の最初のノードを選択
    if (node.hasChildren()) selectChild()
  }
}