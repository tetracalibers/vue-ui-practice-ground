<script lang="ts" setup>
interface Props {
  ratio?: `${number}/${number}` | `${number}`
}

const props = withDefaults(defineProps<Props>(), {
  ratio: '16/9'
})
</script>

<template>
  <div class="Frame">
    <slot></slot>
  </div>
</template>

<style scoped>
.Frame {
  aspect-ratio: v-bind(props.ratio);
}

/** 置換要素に対するCrop */
.Frame > :is(img, video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/** 非置換要素に対するCrop（object-fitは効かないので…） */
.Frame {
  position: relative;
}
.Frame > :not(:is(img, video)) {
  overflow: hidden;
  position: absolute;
  inset: 0;
}

.Frame > * {
  /** gridではobject-fit:cover;のような中央中心のCrop効果は得られない */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
