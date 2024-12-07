import type { Meta, StoryObj } from '@storybook/vue3'
import DynamicHeading from './DynamicHeading.vue'

const meta: Meta<typeof DynamicHeading> = {
  component: DynamicHeading,
  title: 'learn-css/css-min-max-clamp/DynamicHeading',
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['default']
    }
  }
}

export default meta

type Story = StoryObj<typeof DynamicHeading>

export const Default: Story = {
  render: (args) => ({
    components: { DynamicHeading },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <DynamicHeading v-bind="args">
        CSS Comparison Functions
      </DynamicHeading>
    `
  })
}
