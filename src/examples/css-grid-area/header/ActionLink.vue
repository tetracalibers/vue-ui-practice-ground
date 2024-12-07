<script lang="ts" setup>
interface Props {
  label: string
  href: string
}

const props = defineProps<Props>()
</script>

<template>
  <a :href="props.href" class="ActionLink">{{ props.label }}</a>
</template>

<style scoped>
.ActionLink {
  display: inline-flex;
  color: #fff;
  background-color: #9c3ce7;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
}
</style>
