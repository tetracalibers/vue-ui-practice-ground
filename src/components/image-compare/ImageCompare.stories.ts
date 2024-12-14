import type { Meta, StoryObj } from '@storybook/vue3'
import ImageCompare from './ImageCompare.vue'

const meta: Meta<typeof ImageCompare> = {
  component: ImageCompare,
  title: 'UI/ImageCompare',
  parameters: {
    controls: {
      exclude: ['left', 'right']
    }
  }
}

export default meta

type Story = StoryObj<typeof ImageCompare>

export const Image1: Story = {
  render: (args) => ({
    components: { ImageCompare },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <ImageCompare v-bind="args">
        <template v-slot:left>
          <img src="https://picsum.photos/id/365/300/200" alt="before" />
        </template>
        <template v-slot:right>
          <img src="https://picsum.photos/id/365/300/200?grayscale&blur=2" alt="after" />
        </template>
      </ImageCompare>
    `
  })
}

export const Image2: Story = {
  render: (args) => ({
    components: { ImageCompare },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <ImageCompare v-bind="args">
        <template v-slot:left>
          <img src="https://picsum.photos/id/457/300/200" alt="before" />
        </template>
        <template v-slot:right>
          <img src="https://picsum.photos/id/457/300/200?blur=10" alt="after" />
        </template>
      </ImageCompare>
    `
  })
}

export const Image3: Story = {
  render: (args) => ({
    components: { ImageCompare },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <ImageCompare v-bind="args">
        <template v-slot:left>
          <img src="https://picsum.photos/id/453/300/200" alt="before" />
        </template>
        <template v-slot:right>
          <img src="https://picsum.photos/id/453/300/200?blur=5" alt="after" />
        </template>
      </ImageCompare>
    `
  })
}
