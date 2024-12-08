<template>
  <section class="EditorialSection">
    <div class="headlines">
      <slot name="headlines"></slot>
    </div>
    <div class="featured-card">
      <slot name="featured-content"></slot>
      <div class="featured-card__thumb">
        <slot name="featured-thumb"></slot>
      </div>
    </div>
    <div class="normal-card">
      <slot name="normal-card"></slot>
    </div>
  </section>
</template>

<style scoped>
/** reset */
.headlines > * {
  margin: 0;
}

/** layout */
.EditorialSection {
  --gap: 20px;

  /** 5列に分割 */
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  gap: var(--gap);
}
.featured-card {
  /** 中央3列を占める */
  grid-column: 2 / 5;

  /** 親のグリッドを継承 */
  display: grid;
  grid-template-columns: subgrid;

  gap: var(--gap);
}
.featured-card__thumb {
  /** サブグリッドの列に基づいて配置を指示する */
  /** サブグリッドの先頭の列はfeatured-contentの領域とする */
  /** featured-thumbはサブグリッドの2列目から2列分を占める */
  grid-column: 2 / 4;
}
</style>
