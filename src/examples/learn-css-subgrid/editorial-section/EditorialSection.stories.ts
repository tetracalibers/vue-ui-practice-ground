import type { Meta, StoryObj } from '@storybook/vue3'
import EditorialSection from './EditorialSection.vue'
import NormalCard from './NormalCard.vue'
import DummyThumb from '@/components/dummy/DummyThumb.vue'
import DummyText from '@/components/dummy/DummyText.vue'
import Stack from '@/examples/every-layout/stack/Stack.vue'

const meta: Meta<typeof EditorialSection> = {
  component: EditorialSection,
  title: 'learn-css/learn-css-subgrid/EditorialSection',
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['headlines', 'featured-content', 'featured-thumb', 'normal-card']
    }
  }
}

export default meta

type Story = StoryObj<typeof EditorialSection>

export const Default: Story = {
  render: (args) => ({
    components: { EditorialSection, NormalCard, DummyThumb, DummyText, Stack },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <EditorialSection>
        <template v-slot:headlines>
          <DummyText is="h2">
          Lorem ipsum odor amet
          </DummyText>
        </template>
        <template v-slot:featured-thumb>
          <DummyThumb />
        </template>
        <template v-slot:featured-content>
          <Stack>
            <DummyText is="h3">
              Lorem ipsum odor amet, consectetuer adipiscing elit.
            </DummyText>
            <DummyText color="gray">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Eros laoreet rhoncus nibh consequat nullam lacinia aliquam nullam.
            </DummyText>
          </Stack>
        </template>
        <template v-slot:normal-card>
          <NormalCard>
            <template v-slot:thumb>
              <DummyThumb />
            </template>
            <template v-slot:content>
              <DummyText>
                Lorem ipsum odor amet, consectetuer adipiscing elit.
              </DummyText>
            </template>
          </NormalCard>
        </template>
      </EditorialSection>
    `
  })
}
