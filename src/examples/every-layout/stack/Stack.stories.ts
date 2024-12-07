import Stack from './Stack.vue'
import DummyBox from '@/components/dummy/DummyBox.vue'
import DummyContainer from '@/components/dummy/DummyContainer.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof Stack> = {
  component: Stack,
  title: 'every-layout/Stack',
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: 'default' } // slotsを非表示に
  }
}
export default meta

type Story = StoryObj<typeof Stack>

export const Default: Story = {
  render: (args) => ({
    components: { Stack, DummyBox },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <Stack v-bind="args">
        <DummyBox label="item 1" />
        <DummyBox label="item 2" />
        <DummyBox label="item 3" />
      </Stack>
    `
  }),
  args: {
    gap: '1rem',
    recursive: false
  }
}

export const Recursive: Story = {
  render: (args) => ({
    components: { Stack, DummyBox, DummyContainer },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <Stack v-bind="args">
        <DummyBox label="depth 1 / item 1" />
        <DummyBox label="depth 1 / item 2" />
        <DummyBox label="depth 1 / item 3" />
        <DummyContainer>
          <DummyBox label="depth 2 / item 1" />
          <DummyBox label="depth 2 / item 2" />
        </DummyContainer>
      </Stack>
    `
  }),
  args: {
    gap: '1rem',
    recursive: true
  }
}
