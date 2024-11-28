<template>
  <ul role="tree">
    <li role="treeitem" aria-expanded="false" aria-selected="false" tabindex="0">
      ノード 1
      <ul role="group">
        <li role="treeitem" aria-selected="false" tabindex="-1">ノード 1.1</li>
        <li role="treeitem" aria-selected="false" tabindex="-1">ノード 1.2</li>
        <li role="treeitem" aria-expanded="false" aria-selected="false" tabindex="-1">
          ノード 1.3
          <ul role="group">
            <li role="treeitem" aria-selected="false" tabindex="-1">ノード 1.3.1</li>
            <li role="treeitem" aria-expanded="false" aria-selected="false" tabindex="-1">
              ノード 1.3.2
              <ul role="group">
                <li role="treeitem" aria-selected="false" tabindex="-1">ノード 1.3.2.1</li>
                <li role="treeitem" aria-selected="false" tabindex="-1">ノード 1.3.2.2</li>
              </ul>
            </li>
          </ul>
        </li>
        <li role="treeitem" aria-selected="false" tabindex="-1">ノード 1.4</li>
        <li role="treeitem" aria-selected="false" tabindex="-1">ノード 1.5</li>
      </ul>
    </li>
    <li role="treeitem" aria-expanded="false" aria-selected="false" tabindex="-1">
      ノード 2
      <ul role="group">
        <li role="treeitem" aria-selected="false" tabindex="-1">
          ノード 2.1
          <ul role="group">
            <li role="treeitem" aria-selected="false" tabindex="-1">ノード 2.1.1</li>
            <li role="treeitem" aria-selected="false" tabindex="-1">ノード 2.1.2</li>
          </ul>
        </li>
        <li role="treeitem" aria-selected="false" tabindex="-1">ノード 2.2</li>
      </ul>
    </li>
    <li role="treeitem" aria-expanded="false" aria-selected="false" tabindex="-1">
      ノード 3
      <ul role="group">
        <li role="treeitem" aria-selected="false" tabindex="-1">ノード 3.1</li>
      </ul>
    </li>
  </ul>
</template>
