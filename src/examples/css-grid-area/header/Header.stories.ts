import type { Meta, StoryObj } from '@storybook/vue3'
import Header from './Header.vue'
import Logo from './Logo.vue'
import Nav from './Nav.vue'
import ActionLink from './ActionLink.vue'

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'learn-css/css-grid-area/Header',
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['logo', 'nav', 'actions'] // slotsを非表示に
    }
  },
  argTypes: {
    layout: {
      options: [
        '1-rows',
        '2-rows',
        '2-rows-h-centered-logo',
        '2-rows-h-centered-nav',
        '2-rows-v-centered-actions'
      ],
      control: {
        type: 'select'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  render: (args) => ({
    components: { Header, Logo, Nav, ActionLink },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <Header v-bind="args">
        <template v-slot:logo>
          <Logo title="Logo" v-bind:with-icon="args.layout !== '2-rows-h-centered-logo'" />
        </template>
        <template v-slot:nav>
          <Nav v-bind:items="['Home', 'Articles', 'Work']" />
        </template>
        <template v-slot:actions>
          <ActionLink label="Profile" href="#" />
        </template>
      </Header>
    `
  }),
  args: {
    layout: '1-rows'
  }
}
