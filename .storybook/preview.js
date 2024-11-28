import { setup } from '@storybook/vue3'
import { createPinia } from 'pinia'

setup((app) => {
  app.use(createPinia())
})

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
