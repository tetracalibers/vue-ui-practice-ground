import type { Meta, StoryObj } from '@storybook/vue3'
import WithSidebar from './WithSidebar.vue'
import DummyBox from '@/components/dummy/DummyBox.vue'

const meta: Meta<typeof WithSidebar> = {
  component: WithSidebar,
  title: 'learn-css/css-min-max-clamp/WithSidebar',
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['sidebar', 'main'] // slotsを非表示に
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof WithSidebar>

export const Default: Story = {
  render: (args) => ({
    components: { WithSidebar, DummyBox },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <WithSidebar v-bind="args">
        <template v-slot:sidebar>
          <DummyBox bg-color="purple" label="Sidebar" />
        </template>
        <template v-slot:main>
          <DummyBox label="Main" />
        </template>
      </WithSidebar>
    `
  }),
  args: {
    sideMin: '150px'
  }
}
