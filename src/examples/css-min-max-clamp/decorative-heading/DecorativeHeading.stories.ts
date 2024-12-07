import type { Meta, StoryObj } from '@storybook/vue3'
import DecorativeHeading from './DecorativeHeading.vue'

const meta: Meta<typeof DecorativeHeading> = {
  component: DecorativeHeading,
  tags: ['autodocs'],
  title: 'learn-css/css-min-max-clamp/DecorativeHeading'
}

export default meta

type Story = StoryObj<typeof DecorativeHeading>

export const Default: Story = {
  render: (args) => ({
    components: { DecorativeHeading },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <DecorativeHeading v-bind="args" />
    `
  }),
  args: {
    text: 'Latest Articles'
  }
}
