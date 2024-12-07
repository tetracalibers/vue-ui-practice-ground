<script lang="ts" setup>
interface Props {
  gap?: string
  recursive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  gap: '1rem',
  recursive: false
})
</script>

<template>
  <div class="Stack" :class="{ '-recursive': props.recursive }">
    <slot></slot>
  </div>
</template>

<style scoped>
.Stack > * {
  margin-block: 0;
}

.Stack > * + * {
  margin-block-start: v-bind(props.gap);
}

.Stack.-recursive * + * {
  margin-block-start: v-bind(props.gap);
}
</style>
