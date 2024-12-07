import type { Meta, StoryObj } from '@storybook/vue3'
import DynamicGridList from './DynamicGridList.vue'

const meta: Meta<typeof DynamicGridList> = {
  component: DynamicGridList,
  tags: ['autodocs'],
  title: 'learn-css/conditional-css-has-nth-last-child/DynamicGridList'
}

export default meta

type Story = StoryObj<typeof DynamicGridList>

const items = [
  { id: 'vue', text: 'Vue', icon: 'catppuccin:vue' },
  { id: 'react', text: 'React', icon: 'catppuccin:javascript-react' },
  { id: 'astro', text: 'Astro', icon: 'catppuccin:astro' },
  { id: 'figma', text: 'Figma', icon: 'catppuccin:figma' },
  { id: 'storybook', text: 'Storybook', icon: 'catppuccin:storybook' }
]

export const Default: Story = {
  render: (args) => ({
    components: { DynamicGridList },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <DynamicGridList v-bind="args" />
    `
  }),
  args: {
    items: items.slice(0, 4) // 4 items
  }
}

export const MoreThan5Items: Story = {
  ...Default,
  args: {
    items // 5 items or more
  }
}
