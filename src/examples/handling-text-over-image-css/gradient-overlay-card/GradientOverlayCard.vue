<script lang="ts" setup>
interface Props {
  image: string
  title: string
  summary: string
  easing: boolean
  debug?: boolean
}

withDefaults(defineProps<Props>(), {
  debug: false
})
</script>

<template>
  <div class="GradientOverlayCard" :class="{ '--easing': easing }">
    <img v-if="!debug" class="image" :src="image" alt="" />
    <div v-else class="debug"></div>
    <div class="content">
      <h3 class="content-title">{{ title }}</h3>
      <p class="content-summary">{{ summary }}</p>
    </div>
  </div>
</template>

<style scoped>
/** reset */
h3,
p {
  margin: 0;
}

/** debug */
.debug {
  width: 300px;
  height: 200px;
  background-color: #fff;
}

/** overlay */
.GradientOverlayCard {
  position: relative;

  /** contentがimageの下端より下にはみ出してしまう問題に対処 */
  display: grid;
  /** contentがimageの横幅より広がってしまう問題に対処 */
  width: fit-content;
}
.content {
  position: absolute;

  color: white;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);

  /** テキストはカードの下端に表示する */
  display: grid;
  place-content: end;
}

/** switch easing */
.GradientOverlayCard {
  container-name: overlay;
}
.GradientOverlayCard.--easing {
  --easing: true;
}

/** overlay not easing */
.content {
  inset-block-end: 0;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
}

/** overlay with easing */
@container overlay style(--easing: true) {
  .content {
    inset: 0;

    /** made by https://larsenwork.com/easing-gradients/#editor */
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.005) 8.6%,
      hsla(0, 0%, 0%, 0.02) 17%,
      hsla(0, 0%, 0%, 0.045) 25%,
      hsla(0, 0%, 0%, 0.078) 32.7%,
      hsla(0, 0%, 0%, 0.119) 40.1%,
      hsla(0, 0%, 0%, 0.166) 47.3%,
      hsla(0, 0%, 0%, 0.221) 54.2%,
      hsla(0, 0%, 0%, 0.281) 60.8%,
      hsla(0, 0%, 0%, 0.346) 67.1%,
      hsla(0, 0%, 0%, 0.415) 73.2%,
      hsla(0, 0%, 0%, 0.488) 79%,
      hsla(0, 0%, 0%, 0.563) 84.6%,
      hsla(0, 0%, 0%, 0.641) 90%,
      hsla(0, 0%, 0%, 0.72) 95.1%,
      hsla(0, 0%, 0%, 0.8) 100%
    );
  }
}

/** content layout */
.content {
  padding: 1rem;
}
.content-summary {
  font-size: 0.8rem;
}

/** other style */
.GradientOverlayCard > * {
  border-radius: 0.5rem;
}
</style>
