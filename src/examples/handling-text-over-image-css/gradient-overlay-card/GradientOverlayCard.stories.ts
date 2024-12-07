import type { Meta, StoryObj } from '@storybook/vue3'
import GradientOverlayCard from './GradientOverlayCard.vue'

const meta: Meta<typeof GradientOverlayCard> = {
  component: GradientOverlayCard,
  tags: ['autodocs'],
  title: 'learn-css/handling-text-over-image-css/GradientOverlayCard'
}

export default meta

type Story = StoryObj<typeof GradientOverlayCard>

export const Image1: Story = {
  render: (args) => ({
    components: { GradientOverlayCard },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <GradientOverlayCard v-bind="args" />
    `
  }),
  args: {
    title: 'Card Title',
    summary: 'Lorem ipsum odor amet, consectetuer adipiscing elit.',
    image: 'https://picsum.photos/id/49/300/200',
    easing: false,
    debug: false
  }
}

export const Image2: Story = {
  ...Image1,
  args: {
    ...Image1.args,
    image: 'https://picsum.photos/id/90/300/200'
  }
}

export const Image3: Story = {
  ...Image1,
  args: {
    ...Image1.args,
    image: 'https://picsum.photos/id/84/300/200'
  }
}
