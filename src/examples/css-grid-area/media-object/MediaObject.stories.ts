import type { Meta, StoryObj } from '@storybook/vue3'
import MediaObject from './MediaObject.vue'
import Frame from '@/examples/every-layout/frame/Frame.vue'
import Stack from '@/examples/every-layout/stack/Stack.vue'

const meta: Meta<typeof MediaObject> = {
  component: MediaObject,
  title: 'learn-css/css-grid-area/MediaObject',
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: ['thumb', 'content'] } // slotsを非表示に
  }
}

export default meta

type Story = StoryObj<typeof MediaObject>

export const Default: Story = {
  render: (args) => ({
    components: { MediaObject, Frame, Stack },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <MediaObject v-bind="args">
        <template v-slot:thumb>
          <Frame ratio="3/2">
            <img src="https://picsum.photos/seed/picsum/150/150" alt="" />
          </Frame>
        </template>
        <template v-slot:content>
          <Stack>
            <h3>Wandering in nature. Life is cool</h3>
            <p>A bit of desc</p>
          </Stack>
        </template>
      </MediaObject>
    `
  }),
  args: {
    flip: false
  }
}
