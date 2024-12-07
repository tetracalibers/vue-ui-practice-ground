import DummyContainer from '@/components/dummy/DummyContainer.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import Frame from './Frame.vue'

const meta: Meta<typeof Frame> = {
  component: Frame,
  title: 'every-layout/Frame',
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: 'default' } // slotsを非表示に
  }
}

export default meta

type Story = StoryObj<typeof Frame>

export const Default: Story = {
  render: (args) => ({
    components: { Frame },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <Frame v-bind="args">
        <img src="https://picsum.photos/seed/picsum/400/200" alt="" />
      </Frame>
    `
  }),
  args: {
    ratio: '16/9'
  }
}

export const NotReplacedElement: Story = {
  render: (args) => ({
    components: { Frame, DummyContainer },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <Frame v-bind="args">
        <DummyContainer>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Tortor curabitur per commodo vivamus tortor pretium quam et semper. Volutpat habitant laoreet augue etiam dui libero dolor nostra. Consectetur montes turpis penatibus orci malesuada auctor nascetur fusce. Pretium habitasse vivamus urna vestibulum ullamcorper platea vivamus ultricies. Orci lacinia mattis facilisi quis; molestie aptent. Pharetra fusce penatibus ut integer eros? Sit tempus ac erat platea etiam donec consequat.</p>
          <p>Montes conubia feugiat dictum a aptent lacinia commodo sem. Feugiat tellus at integer nam himenaeos. Dis mattis adipiscing justo senectus vel sodales accumsan litora. Torquent hac egestas ipsum sem, sociosqu suscipit facilisi natoque. Penatibus parturient sit quam nulla netus tristique viverra magna? Mi turpis amet duis pharetra rhoncus lacinia massa scelerisque. Malesuada aliquam ante mus luctus ultricies sagittis. Sollicitudin metus fermentum fusce parturient dignissim ridiculus tellus vitae.</p>
          <p>Tempus malesuada per consectetur fermentum ornare est. Varius erat tortor varius dictum sed nec tortor. Ad metus dictum erat eu nullam egestas orci. Maecenas euismod purus quis; facilisis faucibus rutrum suscipit. Efficitur sit porta purus nullam sem morbi faucibus posuere diam. Non sapien scelerisque justo nisi vel velit duis. Mi volutpat purus enim tellus mus commodo a donec.</p>
        </DummyContainer>
      </Frame>
    `
  }),
  args: {
    ratio: '1'
  }
}
