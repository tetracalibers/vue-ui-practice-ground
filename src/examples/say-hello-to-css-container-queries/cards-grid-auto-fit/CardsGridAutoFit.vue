<template>
  <div class="CardsGridAutoFit">
    <slot></slot>
  </div>
</template>

<style scoped>
.CardsGridAutoFit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: 1rem;
}
</style>
