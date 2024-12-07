<template>
  <div class="VisuallyHidden">
    <slot></slot>
  </div>
</template>

<style scoped>
.VisuallyHidden {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}
</style>
