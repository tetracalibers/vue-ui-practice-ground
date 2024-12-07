<template>
  <h2 class="DynamicHeading">
    <slot></slot>
  </h2>
</template>

<style scoped>
.DynamicHeading {
  /** 1remという固定値を含めることで、ユーザーによるズームに対応 */
  font-size: clamp(16px, 1rem + 5vw, 50px);

  /** reset */
  margin: 0;
}
</style>
