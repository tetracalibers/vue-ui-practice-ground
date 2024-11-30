<script lang="ts" setup>
import { ref, watch } from 'vue'
import TreeItem from './TreeItem.vue'

const data = [
  {
    id: 1,
    label: 'ノード 1',
    children: [
      {
        id: 2,
        label: 'ノード 1.1'
      },
      {
        id: 3,
        label: 'ノード 1.2'
      },
      {
        id: 4,
        label: 'ノード 1.3',
        children: [
          {
            id: 5,
            label: 'ノード 1.3.1'
          },
          {
            id: 6,
            label: 'ノード 1.3.2',
            children: [
              {
                id: 7,
                label: 'ノード 1.3.2.1'
              },
              {
                id: 8,
                label: 'ノード 1.3.2.2'
              }
            ]
          }
        ]
      },
      {
        id: 9,
        label: 'ノード 1.4'
      },
      {
        id: 10,
        label: 'ノード 1.5'
      }
    ]
  },
  {
    id: 11,
    label: 'ノード 2',
    children: [
      {
        id: 12,
        label: 'ノード 2.1',
        children: [
          {
            id: 13,
            label: 'ノード 2.1.1'
          },
          {
            id: 14,
            label: 'ノード 2.1.2'
          }
        ]
      },
      {
        id: 15,
        label: 'ノード 2.2'
      }
    ]
  },
  {
    id: 16,
    label: 'ノード 3',
    children: [
      {
        id: 17,
        label: 'ノード 3.1'
      }
    ]
  }
]

const focusableId = ref<number>(data[0].id)
const selectedId = ref<number | null>(null)
const select = (id: number) => {
  selectedId.value = id
  focusableId.value = id
}

watch(selectedId, () => {
  console.log('selectedId:', selectedId.value)
})
</script>

<template>
  <ul role="tree" class="TreeView">
    <TreeItem
      v-for="node in data"
      :node="node"
      :focusable-id="focusableId"
      :selected-id="selectedId"
      @select="select"
    />
  </ul>
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
</style>
