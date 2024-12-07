<script lang="ts" setup>
interface Props {
  layout?:
    | '1-rows'
    | '2-rows'
    | '2-rows-h-centered-logo'
    | '2-rows-h-centered-nav'
    | '2-rows-v-centered-actions'
}

const props = withDefaults(defineProps<Props>(), {
  layout: '1-rows'
})
</script>

<template>
  <header class="Header" :class="`--${props.layout}`">
    <div class="logo">
      <slot name="logo"></slot>
    </div>
    <nav class="nav">
      <slot name="nav"></slot>
    </nav>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </header>
</template>

<style scoped>
/** layout base */
.Header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
}
.logo {
  grid-area: logo;
}
.nav {
  grid-area: nav;
}
.actions {
  grid-area: actions;
}

/** layout pattern 1 */
:where(.Header.--1-rows) {
  /** large */
  & {
    grid-template-areas: 'logo nav actions';
    grid-template-rows: 1fr;
  }
  .logo {
    justify-self: start;
  }
  .nav {
    justify-self: center;
  }
  .actions {
    justify-self: end;
  }

  /** medium */
  @media (max-width: 900px) {
    & {
      grid-template-areas:
        'logo nav nav'
        '. actions actions';
      grid-template-rows: 1fr 1fr;
    }
    .logo {
      justify-self: start;
    }
    .nav {
      justify-self: end;
    }
    .actions {
      justify-self: end;
    }
  }

  /** small */
  @media (max-width: 380px) {
    & {
      grid-template-areas:
        'logo logo actions'
        'nav nav nav';
      grid-template-rows: 1fr 1fr;
    }
    .logo {
      justify-self: start;
    }
    .nav {
      justify-self: center;
    }
    .actions {
      justify-self: end;
    }
  }
}

/** layout pattern 2 */
:where(.Header.--2-rows) {
  /** large */
  & {
    grid-template-areas:
      'logo nav nav'
      '. actions actions';
    grid-template-rows: 1fr 1fr;
  }
  .logo {
    justify-self: start;
  }
  .nav {
    justify-self: end;
  }
  .actions {
    justify-self: end;
  }

  /** small */
  @media (max-width: 520px) {
    & {
      grid-template-areas:
        'logo logo actions'
        'nav nav nav';
      grid-template-rows: 1fr 1fr;
    }
    .logo {
      justify-self: start;
    }
    .nav {
      justify-self: center;
    }
    .actions {
      justify-self: end;
    }
  }
}

/** layout pattern 3 */
:where(.Header.--2-rows-h-centered-logo) {
  /** large */
  & {
    grid-template-areas:
      'logo logo logo'
      'nav nav actions';
    grid-template-rows: 1fr 1fr;
  }
  .logo {
    justify-self: center;
  }
  .nav {
    justify-self: start;
  }
  .actions {
    justify-self: end;
  }

  /** small */
  @media (max-width: 520px) {
    & {
      grid-template-areas:
        'logo logo actions'
        'nav nav nav';
      grid-template-rows: 1fr 1fr;
    }
    .logo {
      justify-self: start;
    }
    .nav {
      justify-self: center;
    }
    .actions {
      justify-self: end;
    }
  }
}

/** layout pattern 4 */
:where(.Header.--2-rows-h-centered-nav) {
  & {
    grid-template-areas:
      'logo logo actions'
      'nav nav nav';
    grid-template-rows: 1fr 1fr;
  }
  .logo {
    justify-self: start;
  }
  .nav {
    justify-self: center;
  }
  .actions {
    justify-self: end;
  }
}

/** layout pattern 5 */
:where(.Header.--2-rows-v-centered-actions) {
  /** large */
  & {
    grid-template-areas:
      'logo logo actions'
      'nav nav actions';
    grid-template-rows: 1fr 1fr;
  }
  .logo {
    justify-self: start;
  }
  .nav {
    justify-self: start;
  }
  .actions {
    justify-self: end;
  }

  /** small */
  @media (max-width: 520px) {
    & {
      grid-template-areas:
        'logo logo actions'
        'nav nav nav';
      grid-template-rows: 1fr 1fr;
    }
    .logo {
      justify-self: start;
    }
    .nav {
      justify-self: center;
    }
    .actions {
      justify-self: end;
    }
  }
}

/** other style */
.Header {
  font-family: 'Nunito Sans';
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}
</style>
