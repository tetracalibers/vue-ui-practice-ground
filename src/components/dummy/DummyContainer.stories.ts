import type { Meta, StoryObj } from '@storybook/vue3'
import DummyContainer from './DummyContainer.vue'

const meta: Meta<typeof DummyContainer> = {
  component: DummyContainer,
  title: 'dummy/DummyContainer',
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: ['default'] } // slotsを非表示に
  }
}

export default meta

type Story = StoryObj<typeof DummyContainer>

export const Default: Story = {
  render: (args) => ({
    components: { DummyContainer },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <DummyContainer v-bind="args">
        <template v-slot:default>
          default slot
        </template>
      </DummyContainer>
    `
  })
}
