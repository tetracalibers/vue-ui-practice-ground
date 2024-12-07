import type { Meta, StoryObj } from '@storybook/vue3'
import DummyBox from './DummyBox.vue'

const meta: Meta<typeof DummyBox> = {
  component: DummyBox,
  title: 'dummy/DummyBox',
  tags: ['autodocs'],
  argTypes: {
    bgColor: {
      options: ['gray', 'pink', 'purple'],
      control: {
        type: 'select'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof DummyBox>

export const Default: Story = {
  render: (args) => ({
    components: { DummyBox },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <DummyBox v-bind="args" />
    `
  }),
  args: {
    bgColor: 'gray'
  }
}

export const WithLabel = {
  ...Default,
  args: {
    ...Default.args,
    label: 'Main Area'
  }
}
