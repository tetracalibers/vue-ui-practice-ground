import type { Meta, StoryObj } from '@storybook/vue3'
import EditorialSection from './EditorialSection.vue'
import Frame from '@/examples/every-layout/frame/Frame.vue'
import Stack from '@/examples/every-layout/stack/Stack.vue'
import DummyText from '@/components/dummy/DummyText.vue'

const meta: Meta<typeof EditorialSection> = {
  component: EditorialSection,
  title: 'learn-css/css-grid-area/EditorialSection',
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['title', 'content', 'thumb'] // slotsを非表示に
    }
  }
}

export default meta

type Story = StoryObj<typeof EditorialSection>

export const Default: Story = {
  render: (args) => ({
    components: { EditorialSection, Frame, Stack, DummyText },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <EditorialSection v-bind="args">
        <template v-slot:title>
          <DummyText is="h2" theme="flow" color="gray">Shawarma Wrap with Homemade Bread</DummyText>
        </template>
        <template v-slot:content>
          <Stack gap="0.5rem">
            <DummyText theme="reducted">Enjoy the delightful flavors of Middle Eastern cuisine with our step-by-step recipe for Shawarma Wrap with Homemade Bread. Whether you're craving a hearty meal or planning a gathering with friends, this dish is sure to impress.</DummyText>
            <DummyText theme="reducted">The combination of tender, marinated meat wrapped in soft homemade bread, complemented by fresh vegetables and a tangy sauce</DummyText>
          </Stack>
        </template>
        <template v-slot:thumb>
          <Frame ratio="4/3">
            <img src="https://picsum.photos/seed/picsum/150/120" alt="" />
          </Frame>
        </template>
      </EditorialSection>
    `
  }),
  args: {}
}
