import type { Meta, StoryObj } from '@storybook/vue3'
import DummyText from './DummyText.vue'

const meta: Meta<typeof DummyText> = {
  component: DummyText,
  title: 'dummy/DummyText',
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: ['default'] }
  },
  argTypes: {
    theme: {
      options: ['flow', 'reducted'],
      control: {
        type: 'select'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof DummyText>

export const Default: Story = {
  render: (args) => ({
    components: { DummyText },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <DummyText v-bind="args">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis aptent sem vitae porta aptent diam. Natoque lorem et pulvinar eget magnis lorem velit.
      </DummyText>
    `
  }),
  args: {
    is: 'p',
    theme: 'flow'
  }
}
