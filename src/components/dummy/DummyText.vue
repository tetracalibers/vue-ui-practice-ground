<script lang="ts" setup>
interface Props {
  is?: keyof HTMLElementTagNameMap
  theme?: 'flow' | 'reducted'
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  is: 'p',
  theme: 'flow',
  color: 'inherit'
})
</script>

<template>
  <component :is="props.is" class="DummyText" :class="`--${props.theme}`">
    <slot></slot>
  </component>
</template>

<style scoped>
.DummyText {
  color: v-bind(props.color);
}

.--flow {
  font-family: 'Flow Circular', serif;
}
.--reducted {
  font-family: 'Redacted Script', cursive;
}
</style>
