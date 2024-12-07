<script lang="ts" setup>
interface Props {
  title: string
  withIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  withIcon: true
})
</script>

<template>
  <div class="Logo">
    <div v-if="props.withIcon" class="icon"></div>
    <div class="title">{{ props.title }}</div>
  </div>
</template>

<style scoped>
.Logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  background-color: rgb(209, 178, 241);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

.title {
  color: #9c3ce7;
  font-weight: 700;
  font-size: 1.5rem;
}
</style>
