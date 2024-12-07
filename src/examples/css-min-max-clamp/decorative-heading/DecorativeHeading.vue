<script lang="ts" setup>
interface Props {
  text: string
}

const props = defineProps<Props>()
</script>

<template>
  <h2 class="DecorativeHeading" :data-watermark-text="props.text">
    <span class="heading-text">{{ props.text }}</span>
  </h2>
</template>

<style scoped>
/** heading */
.DecorativeHeading {
  font-size: clamp(16px, 1rem + 5vw, 30px);
  margin: 0;
}

/** watermark */
.DecorativeHeading::before {
  content: attr(data-watermark-text);
  font-size: max(13vw, 50px);
  opacity: 0.05;
}

/** headingとwatermarkを重ねる */
.DecorativeHeading {
  display: grid;
  place-items: center;
}
.heading-text,
.DecorativeHeading::before {
  grid-area: 1 / 1;
}
</style>
