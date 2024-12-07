<script lang="ts" setup></script>

<template>
  <section class="EditorialSection">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="thumb">
      <slot name="thumb"></slot>
    </div>
  </section>
</template>

<style scoped>
/** layout base */
.EditorialSection {
  display: grid;
  gap: 0.75rem;
}
.title {
  grid-area: title;
  align-content: center;
}
.content {
  grid-area: content;
}
.thumb {
  grid-area: thumb;
  max-width: 150px;
}

/** layout large */
.EditorialSection {
  grid-template-columns: max-content 1fr 1fr;
  grid-template-areas:
    '. title title'
    'thumb content content';
}

/** layout medium */
@media (max-width: 550px) {
  .EditorialSection {
    grid-template-columns: max-content 1fr;
    grid-template-areas:
      'thumb title'
      'content content';
  }
}

/** layout small */
@media (max-width: 450px) {
  .EditorialSection {
    grid-template-columns: 1fr;
    grid-template-areas:
      'thumb'
      'title'
      'content';
  }
}

/** other style */
.EditorialSection {
  max-width: 60ch;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 4px;
  font-family: 'Nunito Sans';
}
.title {
  font-weight: 700;
  font-size: clamp(1rem, 0.857rem + 0.71vw, 1.5rem);
}
.title :where(h1, h2, h3, h4, h5, h6) {
  margin: 0;
}
.thumb :deep(img) {
  border-radius: 12px;
}
</style>
