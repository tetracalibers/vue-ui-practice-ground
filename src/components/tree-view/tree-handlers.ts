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
    node.children.first()!.select()
  }

  // 子を持つ場合
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

export const handleArrowLeft = (node: TreeNodeState) => {
  const selectParent = () => {
    node.parent!.select()
  }

  // 子を持つ場合
  if (isNode(node.type)) {
    // 子が展開されている場合：子のツリーを折りたたむ
    if (node.expanded()) {
      node.collapse()
      return
    }
  }

  // 子が展開されていない場合 or 子を持たない場合：親のノードを選択
  if (node.hasParent()) selectParent()
}

export const handleArrowUp = (node: TreeNodeState) => {
  // 前のノードを選択
  const previous = getLeftBaseNode(node)
  previous.select()
}

export const handleArrowDown = (node: TreeNodeState) => {
  // 次のノードを選択
  const next = getRightPowerNode(node)
  next.select()
}

export const handleHome = (node: TreeNodeState) => {
  // 最初のノードを選択
  const start = getStartNode(node)
  start.select()
}

export const handleEnd = (node: TreeNodeState) => {
  // 最後のノードを選択
  const end = getEndNode(node)
  end.select()
}
