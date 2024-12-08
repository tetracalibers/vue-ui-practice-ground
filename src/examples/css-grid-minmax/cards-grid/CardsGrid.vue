<template>
  <div class="CardsGrid">
    <slot></slot>
  </div>
</template>

<style scoped>
.CardsGrid {
  display: grid;
  /** minmax(250px, 1fr)としないのは、250pxより小さいビューポート幅ではみ出さないようにするため */
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
  gap: 1rem;
}
</style>
