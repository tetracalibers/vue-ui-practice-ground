<script lang="ts" setup>
import Tree from './Tree.vue'
import { TreeData } from './tree-structure'

/**

├─ asset
│   ├─ css
│   │   ├─ base.css
│   │   ├─ main.css
│   │   └─ vendor.css
│   ├─ js
│   │   ├─ module
│   │   │   ├─ analytics.js
│   │   │   ├─ carousel.js
│   │   │   ├─ count.js
│   │   │   └─ tab.js
│   │   └─ main.js
│   └─ image
│       ├─ bg.svg
│       ├─ logo.svg
│       ├─ main.jpg
│       └─ og-default.png
├─ profile
│   └─ index.html
├─ favicon.ico
├─ index.html
└─ robots.txt

*/
const data: TreeData[] = [
  {
    id: 1,
    label: 'asset',
    children: [
      {
        id: 2,
        label: 'css',
        children: [
          {
            id: 3,
            label: 'base.css'
          },
          {
            id: 4,
            label: 'main.css'
          },
          {
            id: 5,
            label: 'vendor.css'
          }
        ]
      },
      {
        id: 6,
        label: 'js',
        children: [
          {
            id: 7,
            label: 'module',
            children: [
              {
                id: 8,
                label: 'analytics.js'
              },
              {
                id: 9,
                label: 'carousel.js'
              },
              {
                id: 10,
                label: 'count.js'
              },
              {
                id: 11,
                label: 'tab.js'
              }
            ]
          },
          {
            id: 12,
            label: 'main.js'
          }
        ]
      },
      {
        id: 13,
        label: 'image',
        children: [
          {
            id: 14,
            label: 'bg.svg'
          },
          {
            id: 15,
            label: 'logo.svg'
          },
          {
            id: 16,
            label: 'main.jpg'
          },
          {
            id: 17,
            label: 'og-default.png'
          }
        ]
      }
    ]
  },
  {
    id: 18,
    label: 'profile',
    children: [
      {
        id: 19,
        label: 'index.html'
      }
    ]
  },
  {
    id: 20,
    label: 'favicon.ico'
  },
  {
    id: 21,
    label: 'index.html'
  },
  {
    id: 22,
    label: 'robots.txt'
  }
]
</script>

<template>
  <Tree :root="data" />
</template>
