<template>
  <div class="Card">
    <div class="inner">
      <div class="thumb">
        <slot name="thumb"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
/** for layout */
.Card {
  container-type: inline-size;
}

/** rounded corners */
.Card {
  --corner-radius: 0.5rem;
  border-radius: var(--corner-radius);
}

/** layout: small container width */
/** カード風レイアウト */
.inner {
  display: grid;
  grid-template-rows: auto auto;
}
.thumb {
  aspect-ratio: 3 / 2;
}
.thumb :deep(*) {
  border-radius: var(--corner-radius) var(--corner-radius) 0 0;
}

/** layout: medium container width */
/** メディアオブジェクト風レイアウト */
@container (min-width: 400px) {
  .inner {
    display: flex;
  }
  .thumb {
    flex: 1 0 40cqw;
  }
  .thumb :deep(*) {
    border-radius: var(--corner-radius) 0 0 var(--corner-radius);
  }
}

/** layout: large container width */
/** ヒーローセクション風レイアウト */
@container (min-width: 700px) {
  .inner {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    place-items: center;
  }
  .thumb,
  .content {
    grid-row: 1 / -1;
    grid-column: 1 / -1;
  }
  .thumb {
    aspect-ratio: 16 / 9;
    width: 100%;
  }
  .thumb :deep(*) {
    border-radius: var(--corner-radius);
  }
  .content {
    text-align: center;
  }
}

/** other layout */
.content {
  padding-inline: 1.5rem;
}

/** other style */
.Card {
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>
