import type { Meta, StoryObj } from '@storybook/vue3'
import RoundOutTab from './RoundOutTab.vue'

const meta: Meta<typeof RoundOutTab> = {
  component: RoundOutTab,
  tags: ['autodocs'],
  title: 'learn-css/css-masking/RoundOutTab'
}

export default meta

type Story = StoryObj<typeof RoundOutTab>

export const Default: Story = {
  render: (args) => ({
    components: { RoundOutTab },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <RoundOutTab v-bind="args" />
    `
  }),
  args: {
    title: 'About'
  }
}
