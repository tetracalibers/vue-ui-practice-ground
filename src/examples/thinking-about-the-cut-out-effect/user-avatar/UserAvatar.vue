<script lang="ts" setup>
interface Props {
  image: string
  size: string
}

defineProps<Props>()

const maskId = `cut-out-badge--${Math.random().toString(36).slice(2)}`
</script>

<template>
  <div class="UserAvatar">
    <svg role="none" class="avatar-image">
      <mask :id="maskId">
        <!--
        
        maskでは、
        
        - 白く塗りつぶされたオブジェクトは表示したい領域を表す
        - 黒で塗りつぶされたオブジェクトは非表示にしたい領域を表す
        
        一方が白でもう一方が黒の場合、一方の図形が他方の図形から減算される
        
        -->
        <!-- avatar area -->
        <circle fill="white" cx="50%" cy="50%" r="50%"></circle>
        <!-- badge area (cut out) -->
        <circle fill="black" cx="86%" cy="86%" r="12%"></circle>
      </mask>
      <g :mask="`url(#${maskId})`">
        <!-- avatar image -->
        <image x="0" y="0" height="100%" width="100%" :href="image"></image>
        <!-- avatar border -->
        <circle
          fill="none"
          cx="50%"
          cy="50%"
          r="50%"
          stroke="rgba(0,0,0,0.1)"
          stroke-width="2"
        ></circle>
      </g>
    </svg>
    <div class="badge"></div>
  </div>
</template>

<style scoped>
/** size */
.UserAvatar {
  --avatar-size: v-bind(size);

  width: var(--avatar-size);
  height: var(--avatar-size);
}
.avatar-image {
  width: 100%;
  height: 100%;
}

/** layout */
.UserAvatar {
  --badge-center: 86%;
  --badge-radius: 12%;

  --badge-size: calc(var(--badge-radius) * 2);
  --to-badge: calc(var(--badge-center) - var(--badge-radius));

  display: grid;
  grid-template-rows: var(--to-badge) var(--badge-size) auto;
  grid-template-columns: var(--to-badge) var(--badge-size) auto;
  place-items: center;
}
.avatar-image {
  /** アバター画像は親コンテナ全面に表示 */
  grid-row: 1 / -1;
  grid-column: 1 / -1;
}
.badge {
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  --spacing: min(3px, 15%);
  --without-badge: calc(100% - var(--spacing) * 2);

  width: var(--without-badge);
  height: var(--without-badge);

  border-radius: 50%;
}

/** other style */
.badge {
  background: #5ad539;
}
</style>
