<template>
  <div class="Card">
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
.Card {
  display: grid;
  grid-template-rows: 1fr auto;
}
.thumb {
  aspect-ratio: 3 / 2;
}
.content {
  padding-inline: 1.5rem;
}

/** rounded corners */
.Card {
  border-radius: 0.5rem;
}
.thumb :deep(*) {
  border-radius: 0.5rem 0.5rem 0 0;
}

/** other style */
.Card {
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>
