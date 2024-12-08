import type { Meta, StoryObj } from '@storybook/vue3'
import CardsGrid from './CardsGrid.vue'
import Card from './Card.vue'
import DummyThumb from '@/components/dummy/DummyThumb.vue'
import DummyText from '@/components/dummy/DummyText.vue'

const meta: Meta<typeof CardsGrid> = {
  component: CardsGrid,
  title: 'learn-css/css-grid-minmax/CardsGrid',
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['default']
    }
  }
}

export default meta

type Story = StoryObj<typeof CardsGrid>

export const Default: Story = {
  render: (args) => ({
    components: { CardsGrid, Card, DummyThumb, DummyText },
    setup() {
      return {
        args,
        colors: ['purple', 'water', 'orange', 'pink', 'green', 'red', 'yellow', 'blue']
      }
    },
    template: /*jsx*/ `
      <CardsGrid v-bind="args">
        <Card v-for="i in 6" v-bind:key="colors[i - 1]">
          <template v-slot:thumb>
            <DummyThumb v-bind:bg-color="colors[i - 1]" />
          </template>
          <template v-slot:content>
            <DummyText is="h3">
              Lorem ipsum dolor sit amet
            </DummyText>
            <DummyText color="gray">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus imperdiet vehicula platea augue elementum tincidunt rhoncus cras.
            </DummyText>
          </template>
        </Card>
      </CardsGrid>
    `
  })
}
