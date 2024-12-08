<script lang="ts" setup>
interface NavItem {
  id: string
  label: string
}

interface FooterItem {
  id: string
  title: string
  nav: NavItem[]
}

interface Props {
  items: FooterItem[]
}

defineProps<Props>()
</script>

<template>
  <footer class="Footer">
    <div v-for="item in items" :key="item.id" class="footer-item">
      <h3 class="item-title">{{ item.title }}</h3>
      <ul class="nav-list">
        <li v-for="nav in item.nav" :key="nav.id" class="nav-list-item">
          {{ nav.label }}
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
/** reset */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
h3 {
  margin: 0;
}

/** layout */
.Footer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  row-gap: 2rem;
  column-gap: 1rem;
}
.footer-item {
  display: grid;
  grid-row: span 2;
  grid-template-rows: subgrid; /** titleが複数行になってもnav-listの上端を揃える */
  gap: 1rem;
}

/** other layout */
.item-title {
  align-content: center;
  text-align: center;
}
.nav-list {
  display: grid;
  align-items: flex-end;
  padding: 1rem;
}

/** other style */
.nav-list {
  background-color: rgb(245, 245, 248);
  border-radius: 0.5rem;
}
</style>
