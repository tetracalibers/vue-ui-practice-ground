<script lang="ts" setup>
interface Props {
  image: string
  title: string
  theme?: 'light' | 'dark'
}

withDefaults(defineProps<Props>(), {
  theme: 'light'
})
</script>

<template>
  <div class="WithFadingHero" :class="`--${theme}`">
    <img class="hero-image" :src="image" alt="" />
    <article class="article">
      <h2 class="title">{{ title }}</h2>
      <div class="contents">
        <slot></slot>
      </div>
    </article>
  </div>
</template>

<style scoped>
/** reset */
h2 {
  margin: 0;
}

/** layout */
.WithFadingHero {
  display: grid;
  grid-template-columns: minmax(1rem, 1fr) minmax(auto, 60ch) minmax(1rem, 1fr);
  grid-template-areas:
    'hero hero hero'
    '. title .'
    '. contents .';
  min-height: 100dvh;
}
.article {
  display: contents;
}
.hero-image {
  grid-area: hero;
}
.title {
  grid-area: title;
}
.contents {
  grid-area: contents;
}

/** overlap: ヒーロー画像下部にタイトルを半分重ねる */
.WithFadingHero {
  /** min-height:100dvh;によって生まれる余剰部分はすべてcontentsの下部（auto）に分配する */
  /** min-contentを指定することで、hero-imageやtitleは広がらないようにする */
  /** fit-content(50%)を2回繰り返しているのは、titleの半分の高さのrowを2つ生成するため */
  grid-template-rows: min-content fit-content(50%) fit-content(50%) auto;
}
.hero-image {
  /** titleの上半分を被せるため、grid-row-endは3 */
  grid-row: 1 / 3;
}
.title {
  grid-row: 2 / 4;
  align-content: end; /** hero-imageの下部に配置 */
}
.contents {
  grid-row: 4 / 5;
}

/** fading: ヒーロー画像をフェードアウトさせて、その下の背景と融合させる */
.hero-image {
  mask-image: linear-gradient(#000, transparent);
}

/** switch theme */
.WithFadingHero {
  container-name: with-fading-hero;
}
.WithFadingHero.--dark {
  --dark: true;
  background-color: #333;
}
@container with-fading-hero style(--dark: true) {
  .title,
  .contents {
    color: #fff;
  }
}

/** other layout */
.hero-image {
  width: 100vw;
  min-height: 250px;
  object-fit: cover;
}
.title {
  text-align: center;
  font-size: 1.75rem;
  padding-inline: 2rem;
}
</style>
