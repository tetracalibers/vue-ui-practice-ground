<template>
  <div class="NormalCard">
    <div class="thumb">
      <slot name="thumb"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
/** layout */
.NormalCard {
  display: grid;
  grid-template-rows: 1fr auto;
}
.thumb {
  aspect-ratio: 3 / 2;
}
.content {
  padding-inline: 1ch;
}
</style>
