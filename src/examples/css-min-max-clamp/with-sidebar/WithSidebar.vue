<script lang="ts" setup>
interface Props {
  sideMin?: string
}

const props = withDefaults(defineProps<Props>(), {
  sideMin: '150px'
})
</script>

<template>
  <div class="WithSidebar">
    <aside>
      <slot name="sidebar"></slot>
    </aside>
    <main>
      <slot name="main"></slot>
    </main>
  </div>
</template>

<style scoped>
/** layout */
.WithSidebar {
  display: flex;
  min-height: 100dvh;
}
aside {
  --side-min-width: v-bind(props.sideMin);
  flex-basis: max(30vw, var(--side-min-width));
}
main {
  /** 横幅の残った領域全面に広げる */
  flex-grow: 1;
}

/** modify slot */
aside,
main {
  /** 子を縦全面に広げる */
  display: grid;
}
</style>
