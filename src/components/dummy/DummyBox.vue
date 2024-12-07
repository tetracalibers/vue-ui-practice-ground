<script lang="ts" setup>
interface Props {
  label?: string
  bgColor?: 'gray' | 'pink' | 'purple' | 'white'
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  bgColor: 'gray'
})
</script>

<template>
  <div class="DummyBox" :class="`--bg-${props.bgColor}`">
    {{ props.label }}
  </div>
</template>

<style scoped>
.DummyBox {
  padding: 1rem;
  border-radius: 2px;
  font-family: 'Nunito Sans';

  /** centering */
  display: grid;
  place-items: center;
}

.--bg-white {
  background-color: #ffffff;
}
.--bg-gray {
  background-color: #00000012;
}
.--bg-pink {
  background-color: #ff149126;
}
.--bg-purple {
  background-color: #3b14ff26;
}
</style>
