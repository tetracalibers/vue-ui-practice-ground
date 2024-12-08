import type { Meta, StoryObj } from '@storybook/vue3'
import Footer from './Footer.vue'

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'learn-css/learn-css-subgrid/Footer',
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Footer>

const footerItems = [
  {
    id: 'footer1',
    title: 'Company',
    nav: [
      { id: 'company-about', label: 'About Us' },
      { id: 'company-careers', label: 'Careers' },
      { id: 'company-press', label: 'Press' },
      { id: 'company-investors', label: 'Investors' }
    ]
  },
  {
    id: 'footer2',
    title: 'Services',
    nav: [
      { id: 'services-products', label: 'Products' },
      { id: 'services-pricing', label: 'Pricing' },
      { id: 'services-case-studies', label: 'Case Studies' },
      { id: 'services-api-docs', label: 'API Documentation' }
    ]
  },
  {
    id: 'footer3',
    title: 'Customer Support and Assistance',
    nav: [
      { id: 'support-help', label: 'Help Center' },
      { id: 'support-contact', label: 'Contact Us' },
      { id: 'support-terms', label: 'Terms of Service' },
      { id: 'support-privacy', label: 'Privacy Policy' }
    ]
  },
  {
    id: 'footer4',
    title: 'Community',
    nav: [
      { id: 'community-forum', label: 'Forum' },
      { id: 'community-blog', label: 'Blog' },
      { id: 'community-events', label: 'Events' },
      { id: 'community-newsletter', label: 'Newsletter' }
    ]
  }
]

export const Default: Story = {
  render: (args) => ({
    components: { Footer },
    setup() {
      return { args }
    },
    template: /*jsx*/ `
      <Footer v-bind="args" />
    `
  }),
  args: {
    items: footerItems
  }
}
