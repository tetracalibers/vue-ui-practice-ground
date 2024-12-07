<script lang="ts" setup>
interface Props {
  items: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <ul class="Nav">
    <li v-for="item in props.items" :key="item">{{ item }}</li>
  </ul>
</template>

<style scoped>
.Nav {
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
