import type { Meta, StoryObj } from '@storybook/vue3'
import WithFadingHero from './WithFadingHero.vue'
import DummyText from '@/components/dummy/DummyText.vue'

const meta: Meta<typeof WithFadingHero> = {
  component: WithFadingHero,
  tags: ['autodocs'],
  title: 'learn-css/css-masking/WithFadingHero',
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['default']
    }
  },
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: {
        type: 'select'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof WithFadingHero>

export const Default: Story = {
  render: (args) => ({
    components: { WithFadingHero, DummyText },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <WithFadingHero v-bind="args">
        <DummyText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </DummyText>
        <DummyText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </DummyText>
      </WithFadingHero>
    `
  }),
  args: {
    title: 'The first and best victory is to conquer self.',
    image: 'https://picsum.photos/id/104/900/300',
    theme: 'light'
  }
}
