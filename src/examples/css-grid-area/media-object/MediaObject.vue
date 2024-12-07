<script lang="ts" setup>
interface Props {
  flip?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  flip: false
})
</script>

<template>
  <div class="MediaObject" :class="{ '--flip': props.flip }">
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
.MediaObject {
  display: grid;
  grid-template-columns: fit-content(100%) 1fr;
  grid-template-areas: 'thumb content';
  gap: 1rem;
}
.thumb {
  grid-area: thumb;
}
.content {
  grid-area: content;
}

/** fit */
.MediaObject {
  width: fit-content;
}
.content {
  width: fit-content;
}

/** flip */
.MediaObject.--flip {
  grid-template-columns: 1fr fit-content(100%);
  grid-template-areas: 'content thumb';
}

/** other style */
.MediaObject {
  font-family: 'Nunito Sans';
  padding: 0.75rem;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 2px;
}
</style>
