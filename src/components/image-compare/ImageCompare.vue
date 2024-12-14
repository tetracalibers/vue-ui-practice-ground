<script lang="ts" setup>
import { ref } from 'vue'

const rate = ref(50)
</script>

<template>
  <div class="ImageCompare__root" :style="{ '--rate': rate + '%' }">
    <slot name="left"></slot>
    <slot name="right"></slot>
    <input
      type="range"
      min="0"
      max="100"
      v-model="rate"
      class="slider"
      aria-label="Percentage of before photo shown"
    />
  </div>
</template>

<style scoped>
/** すべて重ねる */
.ImageCompare__root {
  display: grid;
  width: fit-content;
}
.ImageCompare__root > * {
  grid-area: 1 / -1;
}

/** rateに応じた画像のclip */
.ImageCompare__root :slotted(img:first-child) {
  clip-path: polygon(0 0, var(--rate) 0, var(--rate) 100%, 0 100%);
}

/** スライダー */
.slider {
  --handle-size: 1rem;
  --bg-color: rgba(255, 255, 255, 0.6);
  --bg-blend: hard-light;

  width: calc(100% + var(--handle-size));
  height: 100%;

  margin: 0;
  margin-inline-start: calc(var(--handle-size) * -0.5);

  appearance: none;
  background: transparent;
}
.slider::-webkit-slider-thumb {
  appearance: none;
  height: var(--handle-size);
  width: var(--handle-size);
  background-color: var(--bg-color);
  mix-blend-mode: var(--bg-blend);
  border-radius: 50%;
  cursor: ew-resize;
}
.slider::-moz-range-thumb {
  height: var(--handle-size);
  width: var(--handle-size);
  background-color: var(--bg-color);
  mix-blend-mode: var(--bg-blend);
  border-radius: 50%;
  cursor: ew-resize;
}

/** 境界線 */
.slider {
  position: relative;
}
.slider::before {
  --line-width: 1px;

  content: '';
  position: absolute;
  inset-inline-start: calc(var(--handle-size) * 0.5);
  width: calc(100% - var(--handle-size));
  height: 100%;
  clip-path: inset(0 var(--rate) 0 0); /** hover範囲を画像上だけに制限する */
  box-sizing: border-box;
  translate: calc(var(--rate) - var(--line-width) * 0.5);
  border-inline-start: var(--line-width) solid rgba(255, 255, 255, 0.9);
  mix-blend-mode: soft-light;
}

/** スライダーのハンドルが見切れないように */
.ImageCompare__root {
  position: relative;
}
.slider {
  position: absolute;
}

/** スライダーハンドルのフォーカスリング */
.slider {
  outline: none;
}
.slider:focus-visible::-webkit-slider-thumb {
  outline: auto -webkit-focus-ring-color;
}
.slider:focus-visible::-moz-range-thumb {
  outline: auto;
}

/** hover時にハンドルを拡大 */
.slider::-webkit-slider-thumb {
  transition: scale 0.2s;
}
.slider::-moz-range-thumb {
  transition: scale 0.2s;
}
.slider:hover::-webkit-slider-thumb {
  scale: 1.5;
  transition: scale 0.2s;
}
.slider:hover::-moz-range-thumb {
  scale: 1.2;
  transition: scale 0.2s;
}
</style>
