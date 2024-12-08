import type { Meta, StoryObj } from '@storybook/vue3'
import CardsGridAutoFit from './CardsGridAutoFit.vue'
import Card from './Card.vue'
import DummyThumb from '@/components/dummy/DummyThumb.vue'
import DummyText from '@/components/dummy/DummyText.vue'

const meta: Meta<typeof CardsGridAutoFit> = {
  component: CardsGridAutoFit,
  title: 'learn-css/say-hello-to-css-container-queries/CardsGridAutoFit',
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['default']
    }
  }
}

export default meta

type Story = StoryObj<typeof CardsGridAutoFit>

export const Items6: Story = {
  render: (args) => ({
    components: { CardsGridAutoFit, Card, DummyThumb, DummyText },
    setup() {
      return {
        args,
        colors: ['purple', 'water', 'orange', 'pink', 'green', 'red', 'yellow', 'blue']
      }
    },
    template: /*jsx*/ `
      <CardsGridAutoFit v-bind="args">
        <Card v-for="i in 6" v-bind:key="colors[i - 1]">
          <template v-slot:thumb>
            <DummyThumb v-bind:bg-color="colors[i - 1]" />
          </template>
          <template v-slot:content>
            <DummyText is="h3">
              Lorem ipsum dolor sit amet
            </DummyText>
            <DummyText color="gray">
              Lorem ipsum odor amet, consectetuer adipiscing elit.
            </DummyText>
          </template>
        </Card>
      </CardsGridAutoFit>
    `
  })
}

export const Items3: Story = {
  render: (args) => ({
    components: { CardsGridAutoFit, Card, DummyThumb, DummyText },
    setup() {
      return {
        args,
        colors: ['purple', 'water', 'orange', 'pink', 'green', 'red', 'yellow', 'blue']
      }
    },
    template: /*jsx*/ `
      <CardsGridAutoFit v-bind="args">
        <Card v-for="i in 3" v-bind:key="colors[i - 1]">
          <template v-slot:thumb>
            <DummyThumb v-bind:bg-color="colors[i - 1]" />
          </template>
          <template v-slot:content>
            <DummyText is="h3">
              Lorem ipsum dolor sit amet
            </DummyText>
            <DummyText color="gray">
              Lorem ipsum odor amet, consectetuer adipiscing elit.
            </DummyText>
          </template>
        </Card>
      </CardsGridAutoFit>
    `
  })
}

export const Items2: Story = {
  render: (args) => ({
    components: { CardsGridAutoFit, Card, DummyThumb, DummyText },
    setup() {
      return {
        args,
        colors: ['purple', 'water', 'orange', 'pink', 'green', 'red', 'yellow', 'blue']
      }
    },
    template: /*jsx*/ `
      <CardsGridAutoFit v-bind="args">
        <Card v-for="i in 2" v-bind:key="colors[i - 1]">
          <template v-slot:thumb>
            <DummyThumb v-bind:bg-color="colors[i - 1]" />
          </template>
          <template v-slot:content>
            <DummyText is="h3">
              Lorem ipsum dolor sit amet
            </DummyText>
            <DummyText color="gray">
              Lorem ipsum odor amet, consectetuer adipiscing elit.
            </DummyText>
          </template>
        </Card>
      </CardsGridAutoFit>
    `
  })
}

export const Items1: Story = {
  render: (args) => ({
    components: { CardsGridAutoFit, Card, DummyThumb, DummyText },
    setup() {
      return {
        args,
        colors: ['purple', 'water', 'orange', 'pink', 'green', 'red', 'yellow', 'blue']
      }
    },
    template: /*jsx*/ `
      <CardsGridAutoFit v-bind="args">
        <Card v-for="i in 1" v-bind:key="colors[i - 1]">
          <template v-slot:thumb>
            <DummyThumb v-bind:bg-color="colors[i - 1]" />
          </template>
          <template v-slot:content>
            <DummyText is="h3">
              Lorem ipsum dolor sit amet
            </DummyText>
            <DummyText color="gray">
              Lorem ipsum odor amet, consectetuer adipiscing elit.
            </DummyText>
          </template>
        </Card>
      </CardsGridAutoFit>
    `
  })
}
