import type { Meta, StoryObj } from '@storybook/vue3'
import DummyThumb from './DummyThumb.vue'

const meta: Meta<typeof DummyThumb> = {
  component: DummyThumb,
  title: 'dummy/DummyThumb',
  tags: ['autodocs'],
  argTypes: {
    bgColor: {
      options: ['gray', 'purple', 'water', 'orange', 'pink', 'green', 'red', 'yellow', 'blue'],
      control: {
        type: 'select'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof DummyThumb>

export const Default: Story = {
  render: (args) => ({
    components: { DummyThumb },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <DummyThumb v-bind="args" />
    `
  }),
  args: {
    bgColor: 'gray'
  }
}
