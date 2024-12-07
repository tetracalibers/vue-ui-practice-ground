<script lang="ts" setup>
import { Icon } from '@iconify/vue'

interface Item {
  id: string | number
  icon: string
  text: string
}

interface Props {
  items: Item[]
}

const props = defineProps<Props>()
</script>

<template>
  <ul class="DynamicGridList">
    <li v-for="item in props.items" :key="item.id" class="item">
      <Icon :icon="item.icon" width="36" height="36" />
      <span class="item-text">{{ item.text }}</span>
    </li>
  </ul>
</template>

<style scoped>
/** reset */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/** layout */
.DynamicGridList {
  --item-size: 200px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--item-size), 1fr));
  gap: 1rem;
}
.item {
  display: grid;
  place-items: center;
  gap: 0.5rem;
}

/** layout: itemが5個以上の場合 */
.DynamicGridList:has(li:nth-last-child(n + 5)) {
  --item-size: 150px;
}

/** other style */
.DynamicGridList {
  max-width: 60ch;
}
.item {
  background-color: rgb(245, 245, 248);
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
