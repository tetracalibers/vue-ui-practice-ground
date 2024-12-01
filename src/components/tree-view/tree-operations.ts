export type MutableTreeState = { selected: TreeNodeState | Path; expanded: Path[]; focusable: Path }

function dropRight<T>(array: T[], n: number = 1): T[] {
  return array.slice(0, array.length - n)
}

function nth<T>(array: T[], index: number): T | undefined {
  return array.at(index)
}

function isEqual<T>(array1: T[], array2: T[]): boolean {
  return array1.length === array2.length && array1.every((item, index) => item === array2[index])
}

class Stack<T> {
  private stack: T[] = []

  public get size(): number {
    return this.stack.length
  }

  public toArray(): T[] {
    return new Array<T>().concat(this.stack)
  }

  public clear(): this {
    this.stack.splice(0, this.size)
    return this
  }

  public add(item: T): this {
    this.stack = this.toArray().concat(item)
    return this
  }

  public remove(index: number): this {
    this.stack.splice(index, 1)
    return this
  }

  public item(index: number): T | null {
    return nth(this.stack, index) ?? null
  }

  public first(): T | null {
    return this.item(0)
  }

  public last(): T | null {
    return this.item(-1)
  }
}

export type Path = number[]

export const Path = {
  parent(path: Path): Path {
    return dropRight(path, 1)
  },

  next(path: Path): Path | null {
    const end = nth(path, -1)
    return end === undefined ? null : dropRight(path, 1).concat([end + 1])
  },

  previous(path: Path): Path | null {
    const end = nth(path, -1)
    return end === 0 || end === undefined ? null : dropRight(path, 1).concat([end - 1])
  },

  start(path: Path) {
    return nth(path, 0)
  },

  end(path: Path) {
    return nth(path, -1)
  },

  edges(path: Path) {
    return [this.start(path), this.end(path)]
  },

  equal(path1: Path, path2: Path) {
    return isEqual(path1, path2)
  },

  has(path1: Path, path2: Path): boolean {
    return Path.equal(dropRight(path1), path2)
  }
}

type NodeType =
  | 'node' // 子を持つ
  | 'leaf' // 子を持たない

abstract class NodeBase<T extends NodeBase<T>> {
  public name = ''
  public id: number
  public type: NodeType = 'node'
  public next: T | null = null
  public previous: T | null = null
  public parent: T | null = null
  public children = new Stack<T>()

  public hasNext(): boolean {
    return this.next !== null
  }

  public hasPrevious(): boolean {
    return this.previous !== null
  }

  public hasParent(): boolean {
    return this.parent !== null
  }

  public hasChildren(): boolean {
    return this.children.size !== 0
  }
}

type TreeNodeEvent =
  | 'select' // 選択：ノードがフォーカスされて選択された
  | 'deselect' // 選択解除：ノードのフォーカスが外れ、選択が解除された
  | 'expand' // 展開
  | 'collapse' // 折りたたみ
  | 'selectin'
  | 'selectout'
  | 'focus'

type TreeNodeEventHandler = <T>(...args: T[]) => void

export class TreeNodeState extends NodeBase<TreeNodeState> {
  private isSelected = false
  private isSelectedIn = false
  private isExpanded = false
  private handlers = new Map<TreeNodeEvent, TreeNodeEventHandler>()

  constructor(public path: Path) {
    super()
  }

  public has(child: TreeNodeState | null): boolean {
    if (!child) return false
    return this.children.toArray().some((item) => {
      return Path.equal(item.path, child.path)
    })
  }

  public selectedin() {
    return this.isSelectedIn
  }

  public selected() {
    return this.isSelected
  }

  public expanded() {
    return this.isExpanded
  }

  public on(event: TreeNodeEvent, handler: TreeNodeEventHandler): this {
    this.handlers.set(event, handler)
    return this
  }

  public selectin<T>(...args: T[]): this {
    const handler = this.handlers.get('selectin')
    handler?.call(null, ...args)
    this.isSelectedIn = true
    return this
  }

  public selectout<T>(...args: T[]): this {
    const handler = this.handlers.get('selectout')
    handler?.call(null, ...args)
    this.isSelectedIn = false
    return this
  }

  public select<T>(...args: T[]): this {
    const handler = this.handlers.get('select')
    handler?.call(null, ...args)
    this.isSelected = true
    return this
  }

  public deselect<T>(...args: T[]): this {
    const handler = this.handlers.get('deselect')
    handler?.call(null, ...args)
    this.isSelected = false
    return this
  }

  public focus<T>(...args: T[]): this {
    const handler = this.handlers.get('focus')
    handler?.call(null, ...args)
    return this
  }

  public expand<T>(...args: T[]): this {
    const handler = this.handlers.get('expand')
    handler?.call(null, ...args)
    this.isExpanded = true
    return this
  }

  public collapse<T>(...args: T[]): this {
    const handler = this.handlers.get('collapse')
    handler?.call(null, ...args)
    this.isExpanded = false
    return this
  }
}
