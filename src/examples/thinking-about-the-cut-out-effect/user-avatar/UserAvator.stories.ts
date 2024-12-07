import type { Meta, StoryObj } from '@storybook/vue3'
import UserAvatar from './UserAvatar.vue'

const meta: Meta<typeof UserAvatar> = {
  component: UserAvatar,
  tags: ['autodocs'],
  title: 'learn-css/thinking-about-the-cut-out-effect/UserAvatar'
}

export default meta

type Story = StoryObj<typeof UserAvatar>

const StoryBase: Story = {
  render: (args) => ({
    components: { UserAvatar },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <UserAvatar v-bind="args" />
    `
  })
}

export const Size150: Story = {
  ...StoryBase,
  args: {
    image: 'https://picsum.photos/150',
    size: '150px'
  }
}

export const Size100: Story = {
  ...StoryBase,
  args: {
    image: 'https://picsum.photos/100',
    size: '100px'
  }
}

export const Size56 = {
  ...Size100,
  args: {
    image: 'https://picsum.photos/56',
    size: '56px'
  }
}

export const Size32 = {
  ...Size100,
  args: {
    image: 'https://picsum.photos/32',
    size: '32px'
  }
}
