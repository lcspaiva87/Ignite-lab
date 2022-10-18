import { Meta, StoryObj } from '@storybook/react'

import { ButtonProps, Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Lorem ipsum',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}


