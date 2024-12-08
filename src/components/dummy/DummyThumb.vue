<script lang="ts" setup>
import { Icon } from '@iconify/vue'

interface Props {
  bgColor?: 'gray' | 'purple' | 'water' | 'orange' | 'pink' | 'green' | 'red' | 'yellow' | 'blue'
  showIcon?: boolean
}

withDefaults(defineProps<Props>(), {
  bgColor: 'gray',
  showIcon: true
})
</script>

<template>
  <div class="DummyThumb" :class="`--bg-${bgColor}`">
    <Icon v-if="showIcon" icon="ei:image" width="56px" color="gray" />
  </div>
</template>

<style scoped>
/** layout */
.DummyThumb {
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;

  padding: 1rem;
  box-sizing: border-box;
}

/** icon size */
.DummyThumb {
  container-type: inline-size;
}
.DummyThumb :deep(svg) {
  width: 40cqw;
}

/** color variation */
.--bg-gray {
  background-color: rgb(245, 245, 248);
}
.--bg-purple {
  background-color: rgb(198, 191, 243);
}
.--bg-water {
  background-color: rgb(198, 226, 245);
}
.--bg-orange {
  background-color: rgb(241, 213, 194);
}
.--bg-pink {
  background-color: rgb(238, 193, 235);
}
.--bg-green {
  background-color: rgb(223, 246, 196);
}
.--bg-red {
  background-color: rgb(238, 193, 192);
}
.--bg-yellow {
  background-color: rgb(246, 240, 196);
}
.--bg-blue {
  background-color: rgb(190, 206, 251);
}
</style>
