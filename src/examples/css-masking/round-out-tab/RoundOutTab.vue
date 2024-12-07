<script lang="ts" setup>
interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <div class="RoundOutTab">
    {{ title }}
  </div>
</template>

<style scoped>
/** variables */
.RoundOutTab {
  --bg-color: #d2e0fb;
}

/** round out */
.RoundOutTab {
  position: relative;
}
.RoundOutTab::before,
.RoundOutTab::after {
  content: '';
  position: absolute;

  width: 24px;
  height: 24px;

  background-color: var(--bg-color);

  mask-image: linear-gradient(to top, red, red),
    radial-gradient(circle 15px at center, green 80%, transparent 81%);
  mask-size:
    12px 12px,
    100%;
  mask-repeat: no-repeat, repeat;
  mask-composite: subtract;
}
.RoundOutTab::before {
  inset-inline-start: 100%;
  inset-block-end: 0;

  mask-position:
    bottom left,
    center;
}
.RoundOutTab::after {
  inset-inline-end: 100%;
  inset-block-end: 0;

  mask-position:
    bottom right,
    center;
}

/** other style */
.RoundOutTab {
  background-color: var(--bg-color);
  padding: 0.75rem;
  text-align: center;
  border-radius: 1rem 1rem 0 0;
  width: fit-content;
  min-width: 10ch;
}
</style>
